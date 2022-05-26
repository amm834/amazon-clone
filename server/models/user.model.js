import mongoose from "mongoose";

const {Schema} = mongoose;
const UserSchema = new Schema({
    name: String,
    email: {type: String, required: true},
    password: {type: String, required: true},
    address: {type: Schema.Types.ObjectId, ref: 'Address'}
});

export const User = mongoose.model('User', UserSchema);