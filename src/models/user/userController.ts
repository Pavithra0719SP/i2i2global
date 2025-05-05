import { Request, Response } from "express";
import { UserService } from "./userService";
import { IUser } from "../../constent/interface/userinterface";

export class UserController {
  static async register(req: Request, res: Response) {
    try {
      const { user_name, user_email, password } = req.body;
      const newUser = await UserService.createUser({
        user_name,
        user_email,
        password,
      } as IUser); 

      res.status(201).json({
        message: "User registered successfully",
        newUser,
      });
    } catch (error: any) {
      if (
        error.code === 11000 &&
        error.keyPattern &&
        error.keyPattern.user_email
      ) {
        return res.status(409).json({ message: "Email already exists" });
      }
      console.error("Error registering user:", error);
      res.status(500).json({ message: "Failed to register user" });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { user_email, password } = req.body;
      const user = await UserService.login(user_email, password);
      if (user) {
        res.status(200).json({
          message: "Login successful",
          user,
        });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    } catch (error) {
      console.error("Error logging in:", error);
      res.status(500).json({ message: "Failed to login" });
    }
  }
}
