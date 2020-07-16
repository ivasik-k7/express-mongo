const mongoose = require("mongoose");

const connectMongo = async () => {
    const connect = await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true, useUnifiedTopology: true});
    console.log(`Connected to MongoDB on ${connect.connection.host}`);
};

module.exports = connectMongo;
