import mongoose, { Schema, model } from "mongoose";

export interface TUser {
  _id: string;
  username: string;
  password: string;
}

const UserSchema = new Schema<TUser>({
  username: {
    type: String,
    unique: true,
    required: [true, "Username is required"],
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.models?.User || model<TUser>("User", UserSchema);
export default User;
