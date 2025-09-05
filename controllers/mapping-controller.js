const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// assign a doctor to a patient. ------------------
const createMapping = async (req, res) => {
  try {
    const { doctorId, patientId } = req.body;

    if (!patientId || !doctorId) {
      return res
        .status(400)
        .json({ message: "please provide patient ID and doctor ID" });
    }

    const mapping = await prisma.doctorMapping.create({
      data: {
        patientId,
        doctorId,
      },
    });

    res.status(201).json({
      message: `${doctorId} assigned to ${patientId} successfully`,
      mapping,
    });
  } catch (error) {
    console.error("Create mapping error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

//  all patient-doctor mappings.---------------------

const getAllMappings = async (req, res) => {
  try {
    const mappings = await prisma.doctorMapping.findMany({
      include: { patient: true, doctor: true },
    });

    res.status(200).json({
      message: "fetched all mappings successfully",
      mappings,
    });
  } catch (error) {
    console.error("Get all mappings error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// get all doctors assigned to a specific patient.----------------

const getMappingsByPatientId = async (req, res) => {
  try {
    const patientId = req.params.patientId;

    const checkPatient = await prisma.patient.findUnique({
      where: {
        id: patientId,
      },
    });

    if (!checkPatient) {
      return res.status(404).json({
        message: "patient not found",
      });
    }

    const mappings = await prisma.doctorMapping.findMany({
      where: { patientId },
      include: { doctor: true },
    });

    res.status(200).json({
      message: "fetched all doctor assigned to a specific patient.",
      mappings,
    });
  } catch (error) {
    console.error("Get patient mappings error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// remove a doctor from a patient. -----------------

const deleteMapping = async (req, res) => {
  try {
    const mappingId = req.params.id;

    const checkMapping = await prisma.doctorMapping.findUnique({
      where: {
        id: mappingId,
      },
    });

    if (!checkMapping) {
      return res.status(404).json({
        message: "mapping not found",
      });
    }

    await prisma.doctorMapping.delete({
      where: { id: mappingId },
    });

    res.status(200).json({
      message: "mapping deleted successfully",
    });
  } catch (error) {
    console.error("Delete mapping error:", error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  createMapping,
  getAllMappings,
  getMappingsByPatientId,
  deleteMapping,
};
