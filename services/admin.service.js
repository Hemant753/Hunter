import jwt from "jsonwebtoken";
import productModel from "../models/Product.model.js";
import upload from "../config/multer.config.js";



export const loginAdmin = async ({ email, password }) => {
    if (!email || !password) {
        return {
            error: "Please fill all the fields"
        }
    }

    if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
        return {
            error: "Invalid credentials"
        }
    }
    return email;
}

export const generateJWT = async function (email) {
    return await jwt.sign(
        { email: this.email },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
    );
}


export const createProduct = async function (
    { productName, productPrice, discountPrice, category, desc, panelColor, bottomColor, textColor, DisColor }, 
    files
) {
    try {
        // Validate that at least one image is provided
        if (!files || (!files.img1 && !files.img2)) {
            return { error: "At least one image is required!" };
        }

        const img1Filename = files.img1 ? files.img1[0].filename : null;
        const img2Filename = files.img2 ? files.img2[0].filename : null;

        // Create product
        const prod = await productModel.create({
            images_1: img1Filename,
            images_2: img2Filename,
            name: productName,
            Price: productPrice,
            Discount: discountPrice || 0, // Ensure discountPrice is not undefined
            FinalPrice: productPrice - (discountPrice || 0), // Handle missing discountPrice
            category: category.split(','), // Convert category string to an array
            description: desc,
            panelColor,
            bottomColor,
            textColor,
            DisColor
        });

        return prod; // Return created product

    } catch (error) {
        console.error("Error creating product:", error);
        return { error: "Failed to create product" };
    }
};

export const getAllProducts = async function () {
    return await productModel.find();
}


export const deleteProduct = async function (id) {
    return await productModel.findByIdAndDelete(id);
}

