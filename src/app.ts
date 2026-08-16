import express, { type Application } from "express";
import { notFound } from "./middleware/not-found";
import { globalErrorHandle } from "./middleware/global-error";

const app: Application = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json("Server is runninggg")
});

app.use(globalErrorHandle)
app.use(notFound)

export default app;