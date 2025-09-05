const express = require("express");
const { userroute } = require("./authentication-route");
const { paitentroute } = require("./patient-route");
const { doctorroute } = require("./doctor-route");
const { mappingroute } = require("./mapping-route");
const { authmiddleware } = require("../middlewares/auth-middleware");

const apiroute = express.Router();

apiroute.use("/auth", userroute);
apiroute.use("/patients", authmiddleware, paitentroute);
apiroute.use("/doctors", authmiddleware, doctorroute);
// apiroute.use("/mappings", authmiddleware, mappingroute);

module.exports = { apiroute };