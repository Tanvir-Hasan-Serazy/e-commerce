import express from "express";
import { PORT } from "./secrets.js";
import cors from "cors";
import rootRouter from "./routes/index.js";
const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "hello,world" });
});

app.use(cors());
app.use(express.json());
app.use("/api", rootRouter);

app.listen(PORT, () => {
  console.log(`App listeing on port ${PORT}`);
});
