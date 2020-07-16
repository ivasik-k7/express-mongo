const Card = require("../models/Cards");
const asyncHandler = require("../../transfer/middleware/async");

exports.getCards = asyncHandler(async (req, res, next) => {
    const card = await Card.find();
    res.status(200).json({completed: true, _data: card});
});

exports.createCard = asyncHandler(async (req, res, next) => {
    const card = await Card.create(req.body);
    res.status(200).json({completed: true, _data: card});
});

exports.getCard = async (req, res, next) => {
    try {
        const card = await Card.findById(req.params.id);

        if (!card) {
            res.status(404).send("404");
        }

        res.status(200).json({completed: true, _data: card});
    } catch (err) {
        res.status(400).json({completed: false});
    }
};

exports.updateCard = asyncHandler(async (req, res, next) => {
    const card = await Card.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!card) {
        return res.status(400).json({completed: false});
    }
    res.status(200).json({completed: true, _data: card});

    next(err);
});

exports.deleteCard = asyncHandler(async (req, res, next) => {
    const card = await Card.findByIdAndDelete(req.params.id);

    if (!card) {
        return res.status(400).json({completed: false});
    }

    res.status(200).json({success: true, data: card});
});
