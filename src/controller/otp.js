import otpEmail from "../email/otp/otp.js";
import otpModel from "../model/otp.js";

const otpController = {
  verify: async (req, res) => {
    const { email, otp } = req.body;
    const my_otp = await otpModel.findOne({ email: email });
    if (!my_otp) 
      return res.json({ message: "Invalid Request" });

    const time_now = new Date();
    const difference = time_now - my_otp.createdAt;
    const otpValidityDuration = 5 * 60 * 1000;

    if (difference < otpValidityDuration) {
      if (my_otp.otp == otp && my_otp.email == email) {
        await otpModel.deleteOne({ email: email });
        return res.json({ message: "Verification Done" });
      } else {
        return res.json({ message: "Invalid Request" });
      }
    } else {
      return res.json({ message: "OTP expired" });
    }
  },
  generate: async (req, res) => {
    const email = req.params.email;
    const otp = Math.floor(Math.random() * 9000) + 1000;
    const my_otp = await otpModel.create({
      email,
      otp,
    });

    otpEmail(my_otp);
    return res.status(200).json({ my_otp });
  },
};

export default otpController;
