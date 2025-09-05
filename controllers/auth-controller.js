const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { userValidator } = require("../validators/validator.js");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

//Register user--------------

const registerUser = async (req, res) => {
  try {
    const userData = userValidator.safeParse(req.body);

    if (!userData.success) {
      return res.status(400).json({
        message: "user validation error",
      });
    }

    const { name, email, password } = userData.data;

    const existUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword,
      },
    });

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET
    );

    return res.status(200).json({
      message: "user registered successfully",
    });
  } catch (error) {
    console.error("register error:", error);
    return res.status(500).json({ message: "server error" });
  }
};

//Login User------------------

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(400).json({ message: "invalid credentials" });
    }

    const passwordCheck = await bcrypt.compare(password, user.password);

    if (!passwordCheck) {
      return res.status(400).json({
        message: "Wrong password",
      });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET
    );

    return res.status(200).json({
      message: "login sucessfully",
      token,
    });
  } catch (error) {
    console.error("login error:", error);
    return res.status(500).json({ message: "server error" });
  }
};


module.exports = {
    registerUser,
    loginUser
}