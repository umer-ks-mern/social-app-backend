import nodemailer from "nodemailer";
let transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8eb317c934be55",
    pass: "4e89935b3f131f"
  }
});

export default transport; 