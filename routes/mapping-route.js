const express = require("express");
const {
  createMapping,
  deleteMapping,
  getAllMappings,
  getMappingsByPatientId,
} = require("../controllers/mapping-controller");

const mappingroute = express.Router();

//------------//

mappingroute.post("/", createMapping);
mappingroute.get("/", getAllMappings);
mappingroute.get("/:patientId", getMappingsByPatientId);
mappingroute.delete("/:id", deleteMapping);

module.exports = {mappingroute}