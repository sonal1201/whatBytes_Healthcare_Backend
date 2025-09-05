import express from "express";
import { userroute } from "./authentication-route";
import { paitentroute } from "./patient-route";
import { doctorroute } from "./doctor-route";
import { mappingroute } from "./mapping-route";

export const apiroute = express.Router();

apiroute.use("/auth", userroute);
apiroute.use("/patients", paitentroute);
apiroute.use("/doctors", doctorroute);
apiroute.use("/mappings",mappingroute);
