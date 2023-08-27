import mongoose from "mongoose";
const connectDB = async () => {
  const uri = process.env.MONGOOSE_DB_CONNECTION_STRING;
  mongoose
    .connect(uri, {
      autoCreate: true,
      autoIndex: true,
    })
    .then((res) => {
      console.log("Database Connect Ho gya ha..");
    })
    .catch((err) => {
      console.log("Database Connect nahi Hua!!", err);
    });
};

export default connectDB;
