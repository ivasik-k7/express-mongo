const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");

dotenv.config({path: "./config/config.env"});

const Card = require("./models/Cards");
const cards = JSON.parse(fs.readFileSync(`${__dirname}/_data/cards.json`, "utf-8"));

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true, useUnifiedTopology: true});

const importCards = async (req, res, next) => {
    try {
        await Card.create(cards);
        console.log("Data has been succesfully imported to cloud cluster...");
        process.exit();
    } catch (err) {
        console.error(err.message);
    }
};

const terminateCards = async (req, res, next) => {
    try {
        await Card.deleteMany();
        console.log("Data has been totally terminated...");
        process.exit();
    } catch (err) {
        console.error(err.message);
    }
};

if (process.argv[2] === "-i") {
    importCards();
}
if (process.argv === "-t") {
    terminateCards();
}
