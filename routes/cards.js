const express = require("express");
const router = express.Router();

const {getCards, createCard, getCard, updateCard, deleteCard} = require("../controllers/cards");

router.route("/").get(getCards).post(createCard);
router.route("/:id").get(getCard).put(updateCard).delete(deleteCard);

module.exports = router;
