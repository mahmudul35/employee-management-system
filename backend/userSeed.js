const { connectToDB } = require("./db/db");
const User = require("./model/User");
const bcrypt = require("bcrypt");
const userRegirster = async () => {
  connectToDB();
  try {
    const hashPassword = await bcrypt.hash("admin", 10);
    const newUser = new User({
      name: "admin",
      email: "admin@gmail.com",
      password: hashPassword,
    });
    await newUser.save();
  } catch (err) {
    console.log(err);
  }
};
userRegirster();
