import mongoose, {Schema} from "mongoose";

const ProductSchema = new Schema({
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
    owner: {type: Schema.Types.ObjectId, ref: 'Owner'},
    title: String,
    description: String,
    price: Number,
    photo: String,
    stockQuantity: Number,
    rating: [Number],
});

export const Product = mongoose.model('Product', ProductSchema);