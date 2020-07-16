exports.getCards = async (req, res, next) => {
    try {
        res.send("Cards route");
    } catch (err) {
        res.status(400).json({completed: false});
    }
};
exports.createCard = async (req, res, next) => {
    try {
        res.send("Create card route");
    } catch (err) {
        res.status(400).json({completed: false});
    }
};
