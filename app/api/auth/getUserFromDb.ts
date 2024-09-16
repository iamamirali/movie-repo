import dbConnect from "@/lib/db";
import User from "../models/User";
// import bcrypt from "bcryptjs";
import mongoose from "mongoose";

export const getUserFromDb = async (
  credentials: Partial<Record<"username" | "password", unknown>>
) => {
  await dbConnect();
  const user = await User.findOne({
    username: credentials.username,
  }).select("+password");

  if (!user) throw new Error("Wrong username");
  //   const hashed = bcrypt.hash(credentials?.password as string, 10);

  //   const passwordMatch = bcrypt.compare(hashed, user.password);

  //   if (!passwordMatch) throw new Error("Wrong Password");

  if (credentials?.password !== user.password)
    throw new Error("Wrong Password");

  return user;
};
