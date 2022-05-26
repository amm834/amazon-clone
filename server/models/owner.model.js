import mongoose from "mongoose";

const {Schema} = mongoose;

const OwnerSchema = new Schema({
    name: String,
    about: String,
    photo: String
})

export const Owner = mongoose.model('Owner', OwnerSchema)