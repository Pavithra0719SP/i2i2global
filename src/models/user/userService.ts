import { IUser } from "../../constent/interface/userinterface";
import { UserModel } from "../../constent/model/userModel";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10; 

export class UserService {
  static async createUser(
    userData: Omit<IUser, "user_id" | "create_on" | "last_update">
  ): Promise<IUser> {
    const hashedPassword = await bcrypt.hash(userData.password!, SALT_ROUNDS);
    const newUser = new UserModel({ ...userData, password: hashedPassword });
    return newUser.save();
  }

  static async findUserByEmail(email: string): Promise<IUser | null> {
    return UserModel.findOne({ user_email: email }).select("+password").exec(); 
  }

  static async login(
    email: string,
    passwordAttempt: string
  ): Promise<IUser | null> {
    const user = await this.findUserByEmail(email);
    if (user && user.password) {
      const isPasswordMatch = await bcrypt.compare(
        passwordAttempt,
        user.password
      );
      if (isPasswordMatch) {
        const { password, ...userWithoutPassword } = user.toObject();
        return userWithoutPassword as IUser;
      }
    }
    return null;
  }
}
