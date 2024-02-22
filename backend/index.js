const express = require("express");
const cors = require("cors");
const RequestsRouter = require("./routes/RequestsRouter");
const rateLimit = require("express-rate-limit");

const app = express();
const host = "localhost";
const port = 3000;

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

const limiter = rateLimit({
  windowMs: 1000,
  limit: 50,
  message: "Too many requests.",
});

app.use(cors(corsOptions));
app.use(express.json());
app.use(limiter);
app.use("/api", RequestsRouter);

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
