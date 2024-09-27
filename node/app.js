import express from "express";
import cors from "cors";

import db from "./database/db.js";
import formRouter from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/forms", formRouter);

try {
  await db.authenticate();
  console.log("connection good db");
} catch (error) {
  console.log(`error is:${error}`);
}
app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(8000, () => {
  console.log("up running in http://localhost:8000/");
});
