const AuthModel = require("../models/authModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = await AuthModel.findOne({ email });

    //_ Check user information
    if (user) return res.status(400).json({ message: "User already exists" });
    if (!isEmail(email))
      return res.status(400).json({ message: "Invalid email address" });
    if (password.length < 7)
      return res
        .status(400)
        .json({ message: "Password must be at least 7 characters long" });

    //_ Hash password
    const hashedPassword = await bcrypt.hash(password, 13);

    //_ Save user to database
    const newUser = await AuthModel.create({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    const token = await jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "15d",
    });
    res.status(201).json({
      status: "OK",
      message: `User '${username}' registered successfully ✅`,
      data: {
        newUser,
        token,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await AuthModel.findOne({ email });
    if (!user) return res.status(400).json({ message: "User does not exist" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });
    const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "15d",
    });
    res.status(200).json({
      status: "OK",
      message: `User '${user.username}' logged in successfully ✅`,
      data: {
        user,
        token,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const logout = async (req, res) => {
  try {
    // Assuming the token is sent in the Authorization header
    const token = req.headers.authorization.split(" ")[1];

    // Optionally, you could add this token to a blacklist in your database
    // Example: await TokenBlacklist.create({ token });

    // For simplicity, we'll just respond with a success message
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//_ Helper functions to validate email address
function isEmail(emailAddress) {
  let regex = /^\w+([\_.-]?\w+)@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailAddress.match(regex)) {
    return true;
  } else {
    return false;
  }
}

module.exports = { register, login, logout };
// Path: be/controllers/auth.js
