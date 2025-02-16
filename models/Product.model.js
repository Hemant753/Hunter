import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    Price: {
        type: Number,
        // required: true
    },
    Discount: { 
        type: Number,
        // required: true
    },  
    FinalPrice: {
        type: Number,
        // required: true
    },
    category: {
        type: [String],
        // required: true
    },
    images_1: {
        type: String,
        // required: true
    },
    images_2: {
        type: String,
        // required: true
    },
    description: {
        type: String,
        // required: true
    },
    panelColor:{
        type: String,
        // required: true
    },
    bottomColor: {
        type: String,
        // required: true
    },
    textColor: {
        type: String,
        // required: true
    },
    DisColor: {
        type: String,
        // required: true
    }


});

export default mongoose.models.Product || mongoose.model('Product', productSchema) ;