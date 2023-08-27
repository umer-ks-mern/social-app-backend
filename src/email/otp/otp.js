import transport from "../../config/nodemailer.js";

const otpEmail = ({ email, otp }) => {
  transport.sendMail(
    {
      from: "umer@gmail.com",
      to: email,
      subject: "OTP",
      html: `
        <!DOCTYPE html>
        <html>
        <body>
          <div>
            <div>
              <div>Social App</div>
              <p>Author: Umer</p>
            </div>
            <div>
              <h1>Dear User,</h1>
              <p>Your One-Time Password (OTP) is: <strong>${otp}</strong></p>
              <p>This OTP is valid for 5 minutes. Please do not share this OTP with anyone.</p>
              <p>If you didn't request this OTP, you can ignore this email.</p>
            </div>
            <div>
              <p>This email was sent by Social App. If you have any questions or concerns, please contact us.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    },
    (error, res) => {
      if (error) console.log(error);
      else console.log(res, `OTP was successfully sent to ${email}`);
    }
  );
};

export default otpEmail;
