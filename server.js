const express = require("express");
const dotenv = require("dotenv");
const connectMongo = require("./config/db");

dotenv.config({path: "./config/config.env"});

const app = express();

app.use(express.json());
app.use("/cards", require("./routes/cards"));
app.use(require("./middleware/error"));

connectMongo();

app.listen(process.env.PORT, () => console.log(`Succesfuly start listening on ${process.env.PORT}`));
