import express from "express";
import { addNewPatient, deletePatient, getAllPatient, getPatientDetails, updatePatient } from "../controllers/patiant-controller";

export const paitentroute = express.Router();

//------------//

paitentroute.post("/", addNewPatient);

paitentroute.get("/", getAllPatient);

paitentroute.get("/:id", getPatientDetails);

paitentroute.put("/:id", updatePatient)

paitentroute.delete("/:id", deletePatient)