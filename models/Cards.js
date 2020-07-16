const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    descr: {
        type: String,
        required: true,
    },
    class: {
        type: String,
        required: true,
    },
    range: {
        type: String,
        required: true,
    },
    element: {
        type: String,
        required: true,
        default: "Earth",
    },
    serie: {
        type: String,
    },
    uploadData: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Cards", CardSchema);
