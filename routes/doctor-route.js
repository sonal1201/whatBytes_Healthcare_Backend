const express = require("express");
const {
  addNewDoctor,
  deleteDoctor,
  getAllDoctor,
  getDoctorDetails,
  updateDoctor,
} = require("../controllers/doctor-controller");

const doctorroute = express.Router();

//-------------//

doctorroute.post("/", addNewDoctor);
doctorroute.get("/", getAllDoctor);
doctorroute.get("/:id", getDoctorDetails);
doctorroute.put("/:id", updateDoctor);
doctorroute.delete("/:id", deleteDoctor);


module.exports = { doctorroute };