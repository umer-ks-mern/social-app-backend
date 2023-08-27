import transport from "../../config/nodemailer.js";

const loginEmail = ({ name, email }) => {
  transport.sendMail(
    {
      from: "umer@gmail.com",
      to: email,
      subject: "Login",
      html: `
        <!DOCTYPE html>
        <html>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">Social App</div>
              <p>Author: Umer</p>
            </div>
            <div class="message">
              <h1>Hello, ${name}!</h1>
              <p>We want to let you know that a login has been detected on your Social App account.</p>
              <p>If this was you, you can disregard this email. If you didn't initiate the login, please take action to secure your account.</p>
            </div>
            <div class="footer">
              <p>This email was sent by Social App. If you have any questions or concerns, please contact us.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    },
    (error, res) => {
      if (error) console.log(error);
      else console.log(res, `The email: ${email} was notified about this login.`);
    }
  );
};

export default loginEmail;
