import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: string,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: string,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: string,
      required: true,
      min: 2,
      max: 50,
      unique: true,
    },
    password: {
      type: string,
      required: true,
      min: 5,
      max: 50,
    },
    picturePath: {
      type: string,
      min: 2,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;