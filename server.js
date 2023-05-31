const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = "/calculator";

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get("/greeting", (req, res) => {
  return res.status(200).json("Hello world!");
});

baseRouter.post("/add", (req, res) => {
  const { first, second } = req.body;
  if (!first || !second) {
    return res.status(400).json({ message: "Invalid request !!!" });
  }
  return res.status(200).json({ result: Number(first) + Number(second) });
});

baseRouter.post("/subtract", (req, res) => {
  const { first, second } = req.body;
  if (!first || !second) {
    return res.status(400).json({ message: "Invalid request !!!" });
  }
  return res.status(200).json({ result: Number(first) - Number(second) });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
  console.log("Server running at PORT", PORT);
});
