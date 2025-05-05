import { Document } from "mongoose";

export interface IUser extends Document {
  user_id: string;
  user_name: string;
  user_email: string;
  password?: string; 
  last_update: Date;
  create_on: Date;
}
