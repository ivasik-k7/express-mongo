const express = require("express");
const router = express.Router();

const {getCards, createCard} = require("../controllers/cards");

router.route("/").get(getCards).post(createCard);

module.exports = router;
