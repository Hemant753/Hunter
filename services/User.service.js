import userModel from "../models/user.model.js";
import productModel from "../models/Product.model.js";
import ProductModel from "../models/Product.model.js";

export const createUser = async ({email,password,mobile,username})=> {
    if(!email || !password || !mobile || !username){
        return {
            error: "Please fill all the fields"
        }
    }
    let checkUser = await userModel.checkUser(email);
    if(checkUser){
        return {
            error: "User already exists"
        }
    }
    
    let hashedPassword = await userModel.hashPassword(password);
    const user = await userModel.create({
        email,
        password: hashedPassword,
        mobile,
        username
    })

    return user;

}

export const loginUser = async ({email,password})=> {
    if(!email || !password){
        return {
            error: "Please fill all the fields"
        }
    }
    let user = await userModel.loginUser(email);
    if(!user){
        return {
            error: "User does not exist"
        }
    }
    let isValid = await user.isValidPassword(password,user.password);
    if(!isValid){
        return {
            error: "Invalid credentials"
        }
    }
    return user;
}

export const getUser = async (email)=> {
    let user = await userModel.checkUser(email);
    if(!user){
        return {
            error: "User does not exist"
        }
    }
    return user;
}

export const editUser = async (email,update)=> {
    
    let updatedUser = await userModel.updateUser(email,update);
    return updatedUser;
}

export const getProduct = async (category) => {

    try {
        // Ensure category is a string and valid
        if (!category || typeof category !== "string") {
            throw new Error("Invalid category provided");
        }
        // Search for products where category array contains a match
        const products = await ProductModel.find({
            category: { 
                $elemMatch: { 
                    $regex: new RegExp(category, "i")  // Case-insensitive match
                } 
            }
        });
        return products;
    } catch (error) {
        return { error: error.message };
    }
};

export const getProductById = async (id) => {
    try {

        const product = await ProductModel.findById(id);
        return product;
    } catch (error) {
        return { error: error.message };
    }
}
    


