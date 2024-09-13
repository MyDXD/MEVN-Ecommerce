var express = require("express");
var router = express.Router();
const userSchema = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const secret = "mysecret"


router.post("/register", async (req, res) => {
  try {
    const { username, email, password, age, address } = req.body;

    const hashPassword = await bcrypt.hash(password, 10);
    const user = new userSchema({
      username,
      email,
      password: hashPassword,
      age,
      address,
    });
    await user.save();
    res
      .status(201)
      .json({
        status: "201",
        message: "User registered successfully",
        data: user,
      });
  } catch (error) {
    res.status(500).json({ message: error.toString() });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // ค้นหาผู้ใช้ในฐานข้อมูล
    const user = await userSchema.findOne({ email });

    if (!user) {
      return res.status(404).json({ status : 404 ,message: "User not found" });
    }

    // ตรวจสอบรหัสผ่าน
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ status : 401 ,message: "Invalid password" });
    }

    // สร้าง JWT token
    const token = jwt.sign(
      {  id: user._id, role: user.role, name : user.username },
      secret,
      {
        expiresIn: "1d",
      }
    );

    // res.json({ id : user._id , email : user.email, userName : user.name, token ,   isActive : user.isActive });
    res.status(200).json({ message : "Login Successfuly" , token : token,  email : user.email , username : user.username ,role : user.role});
  } catch (error) {
    res.status(500).json({ message: error.toString() });
  }
});
module.exports = router;
