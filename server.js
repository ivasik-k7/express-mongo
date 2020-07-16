const express = require("express");
const dotenv = require("dotenv");
const connectMongo = require("./config/db");

dotenv.config({path: "./config/config.env"});

const app = express();

app.use(express.json());
app.use("/", require("./routes/cards"));

connectMongo();

const PORT = process.env.PORT || 7700;
app.listen(PORT, () => console.log(`Succesfuly start listening on ${PORT}`));
