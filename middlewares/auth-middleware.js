const express = require("express");
const jwt = require("jsonwebtoken");


const authmiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(403).json({
      messgae: "Authorization header is missing..",
    });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "token is missing..",
    });
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid server error or token",
    });
  }
};

module.exports = {authmiddleware}