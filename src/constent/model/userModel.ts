import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { IUser } from "../interface/userinterface";

const UserSchema: Schema = new Schema({
  user_id: {
    type: String,
    default: uuidv4,
    unique: true,
    immutable: true,
  },
  user_name: {
    type: String,
    required: true,
  },
  user_email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  last_update: {
    type: Date,
    default: Date.now,
  },
  create_on: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
});

export const UserModel = mongoose.model<IUser>("DemoUser", UserSchema);
