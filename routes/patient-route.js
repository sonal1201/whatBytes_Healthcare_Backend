const express = require("express");
const {
  addNewPatient,
  deletePatient,
  getAllPatient,
  getPatientDetails,
  updatePatient,
} = require("../controllers/patiant-controller");

const paitentroute = express.Router();

//------------//

paitentroute.post("/", addNewPatient);
paitentroute.get("/", getAllPatient);
paitentroute.get("/:id", getPatientDetails);
paitentroute.put("/:id", updatePatient);
paitentroute.delete("/:id", deletePatient);

module.exports = { paitentroute };