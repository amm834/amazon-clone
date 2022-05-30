import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const {Schema} = mongoose;
const UserSchema = new Schema({
    name: String,
    email: {type: String, required: true},
    password: {type: String, required: true},
    address: {type: Schema.Types.ObjectId, ref: 'Address'}
});

// pre hook
UserSchema.pre('save', async function () {
    if (this.isModified('password') || this.isNew) {
        this.password = await bcrypt.hash(this.password, 10);
    }
});

export const User = mongoose.model('User', UserSchema);