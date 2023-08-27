import express from "express";
import mainRouter from "./router/index.js";
import connectDB from "./config/db.js";

const app = express();
import dotenv from "dotenv";
dotenv.config();

connectDB();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
  return res.json({ message: "Made By Umer" });
});

app.use(mainRouter);
app.listen(process.env.PORT || 3301, () => {
  console.log(`Social App ka Server Port:${process.env.PORT} py active ha`);
});