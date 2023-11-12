import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, "Email already exists"],
        required: [true, "Enter your Email"]
    },
    username: {
        type: String,
        required: [true, "Enter your username"]
    },
    image:{
        type: String,
        required:[true, "Select image"]
    },
    password:{
        type:String,
        required:[true, "Enter the password"]
    },
    resume:{
        type:Boolean,
    }
},{ timestamps: true });

const User = models.User || model("User", UserSchema);
export default User;