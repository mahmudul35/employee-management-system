const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "ems",
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
const disconnectFromDB = async () => {
  try {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.error("Error disconnecting from MongoDB:", error);
  }
};
module.exports = { connectToDB, disconnectFromDB };
