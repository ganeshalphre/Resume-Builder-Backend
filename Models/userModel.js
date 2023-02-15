import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    type: {type: String, default: "user"},
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, require: true},
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
