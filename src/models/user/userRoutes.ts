import express from "express";
import { UserController } from "../user/userController";

const router = express.Router();

router.post("/register", async (req, res, next) => {
  try {
    await UserController.register(req, res);
  } catch (error) {
    next(error); 
  }
});

router.post("/login", async (req, res, next) => {
  try {
    await UserController.login(req, res);
  } catch (error) {
    next(error); 
  }
});

export default router;
