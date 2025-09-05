import express from "express";
import {
  addNewDoctor,
  deleteDoctor,
  getAllDoctor,
  getDoctorDetails,
  updateDoctor,
} from "../controllers/doctor-controller";

export const doctorroute = express.Router();

//-------------//

doctorroute.post("/", addNewDoctor);
doctorroute.get("/", getAllDoctor);
doctorroute.get("/:id", getDoctorDetails);
doctorroute.put("/:id", updateDoctor);
doctorroute.delete("/:id", deleteDoctor);
