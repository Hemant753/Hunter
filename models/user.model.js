import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const userSchema = mongoose.Schema({
    username: String,
    email: {
        type: String,
        unique: true,
    },
    password: {
        type:String,
        select: false,
    },
    mobile: Number,
    wishlist: [{
        type: mongoose.Schema.Types.ObjectId ,
        ref: 'Product',
    }],
    cart: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        },
        quantity: Number,
    }],

})


userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

userSchema.statics.checkUser = async function (email) {
    return await this.findOne({ email });
}

userSchema.statics.loginUser = async function (email) {
    return await this.findOne({ email }).select('+password');
}

userSchema.methods.isValidPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateJWT = async function () {
    return await jwt.sign(
        { email: this.email }, 
        process.env.JWT_SECRET, 
        { expiresIn: "24h" }
    );
};

userSchema.methods.isValidToken = async function(token) {
    return await jwt.verify(token, process.env.JWT_SECRET);
}

userSchema.statics.updateUser = async function(email, update) {
    try {
        const user = await this.findOneAndUpdate({ email }, { $set: update }, {
            new: true, // Return the updated document
            runValidators: true
        });
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default mongoose.models.User || mongoose.model("User", userSchema);


















