import userModel from "../model/user.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import loginEmail from "../email/auth/login.js";

const loginController = {
  login: async (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    const user = await userModel.findOne({ email });

    if (!user) {
      console.log("user not found");
      return res.json("User Not Found");
    }

    const result = await bcryptjs.compare(password, user.password);

    if (result) {
      const token = jwt.sign({ user }, process.env.JWT_SECRET_KEY, {
        algorithm: process.env.ALGO,
        expiresIn: "24h",
      });

      // show the name of user being logged in and Welcome him.
      loginEmail(user);

      return res.json({ message: "Login Successful !!", token: token });
    } else {
      return res.status(404).json("Invalid Credentials !");
    }
  },
};

export default loginController;
