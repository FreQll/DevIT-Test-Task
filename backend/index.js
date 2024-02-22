const express = require("express");
const cors = require("cors");

const app = express();
const host = "localhost";
const port = 3001;

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

const RequestsRouter = require("./routes/RequestsRouter");
app.use("/api", RequestsRouter);

app.use(cors(corsOptions));
app.use(express.json());

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
