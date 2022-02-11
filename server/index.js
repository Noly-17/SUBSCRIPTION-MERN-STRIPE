const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const HealthRouter = require("./routes/health");
const Health = require("./models/health.model");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//mongodb connection
const uri = process.env.MONGO_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb connection established");
});

app.use("/health", HealthRouter);

app.listen(port, () => {
  console.log(`Server running in port: ${port}`);
});
