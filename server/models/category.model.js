import mongoose from "mongoose";

const {Schema} = mongoose;

const CategorySchema = new Schema({
    type: {type: String, unique: true, required: true},
})

export const Category = mongoose.model('Category', CategorySchema)