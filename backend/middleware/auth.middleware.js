const jwt = require("jsonwebtoken");
const secret = "mysecret";
const userSchema = require("../models/userModel");

const middleware = {
  authToken: async (req, res, next) => {
    try {

      // ตรวจสอบว่า token ถูกส่งมาหรือไม่
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) return res.status(401).send({masssage : "unauthorized"});

      // ตรวจสอบและถอดรหัส token
      const payload = await jwt.verify(token, secret);
      req.auth = payload;

      // ดำเนินการต่อไปยัง middleware หรือ route ถัดไป
      return next();
    } catch (error) {
      // ส่งข้อผิดพลาดกลับไปที่ client
      res.status(500).send(error.toString());
    }
  },
  checkAdmin: async (req, res, next) => {
    const user = await userSchema.findById(req.auth.id);

    try {
      if (user.role != "admin") {
        return res
          .status(401)
          .send({ status: 401, message: "Your account is not role Admin" });
      }
      next();
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = middleware;
