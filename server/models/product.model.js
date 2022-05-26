import mongoose from "mongoose";

const {Schema} = mongoose;

const ProductSchema = new Schema({
    category: {type: mongoose.Types.ObjectId, ref: 'Category'},
    owner: {type: mongoose.Types.ObjectId, ref: 'Owner'},
    title: String,
    description: String,
    price: Number,
    photo: String,
    stockQuantity: Number,
    rating: [Number],
});

export const Product = mongoose.model('Product', ProductSchema);