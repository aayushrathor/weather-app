import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import weatherRoute from "./routes/weather.route";

dotenv.config();

const PORT = process.env.NODE_PORT || 8001;
const app = express();
app.use(cors());

app.use("/weather", weatherRoute);

app.get("/", (req, res) => {
  res.send({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
