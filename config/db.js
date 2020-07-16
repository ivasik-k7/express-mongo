const mongoose = require("mongoose");

const connectMongo = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true});
        console.log(`Connected to MongoDB on ${connect.connection.host}`);
    } catch (err) {
        console.error(err.message);
    }
};

module.exports = connectMongo;
