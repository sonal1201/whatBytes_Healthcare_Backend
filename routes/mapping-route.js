import express from "express";
import { createMapping, deleteMapping, getAllMappings, getMappingsByPatientId } from "../controllers/mapping-controller";

export const mappingroute = express.Router();

mappingroute.post("/", createMapping);
mappingroute.get("/", getAllMappings);
mappingroute.get("/:patientId", getMappingsByPatientId);
mappingroute.delete("/:id", deleteMapping);
