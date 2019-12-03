import mongoose from "mongoose";
var authSchema = new mongoose.Schema({
    email: String,
    password: String
})
var Auth = mongoose.model("Admin", authSchema);
export default Auth;