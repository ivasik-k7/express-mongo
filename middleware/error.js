const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
    let error = {...err};
    error.message = err.message;

    if (err.code === 11000) {
        const message = "Please do not duplicate fields value";
        error = new ErrorResponse(message, 400);
    }
    if (err.name === "ValidationError") {
        const message = Object.values(err.errors).map((item) => item.message);
        error = new ErrorResponse(message, 400);
    }
    if (err.name === "CastError") {
        const message = `There is no cards with if of ${err.value}`;
    }
    res.status(err.statusCode || 500).json({
        completed: false,
        error: error.message || "Server Error...",
    });
};

module.exports = errorHandler;
