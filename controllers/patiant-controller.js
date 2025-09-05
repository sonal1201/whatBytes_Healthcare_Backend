const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//Add a new patient. ------------------------

const addNewPatient = async (req, res) => {
  try {
    const { name, age, gender } = req.body;
    const userId = req.user.id;

    const newPatient = await prisma.patient.create({
      data: { name, age, gender, userId },
    });

    res.status(200).json({
      message: "Patient added successfully",
      patient: newPatient,
    });
  } catch (error) {
    (console.error("add patient error:", error),
      res.status(500).json({
        message: "Server error",
      }));
  }
};

// Retrieve all patients created. -------------------

const getAllPatient = async (req, res) => {
  try {
    const allPatient = await prisma.patient.findMany({});

    res.status(200).json({
      message: "Patients detail fetched succesfully",
      patient: allPatient,
    });
  } catch (error) {
    (console.error("Get patients error:", error),
      res.status(500).json({
        message: "Server error",
      }));
  }
};

// Get details of a specific patient.------------------

const getPatientDetails = async (req, res) => {
  try {
    const patientId = req.params.id;

    const patient = await prisma.patient.findUnique({
      where: {
        id: patientId,
      },
    });

    if (!patient) {
      return res.status(404).json({
        message: "Patient not found",
      });
    }

    res.status(200).json({
      message: "Patient detail fetched succesfully",
      patient,
    });
  } catch (error) {
    (console.error("Get patient error:", error),
      res.status(500).json({
        message: "Server error",
      }));
  }
};

// Update patient details.------------------

const updatePatient = async (req, res) => {
  try {
    const patientId = req.params.id;
    const { name, age, gender } = req.body;

    if (!patientId) {
      return res.status(400).json({ message: "Patient ID is required" });
    }

    const existingPatient = await prisma.patient.findUnique({
      where: { id: patientId },
    });

    if (!existingPatient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    //updating the patient
    const updatedPatient = await prisma.patient.update({
      where: { id: patientId },
      data: {
        name: name || existingPatient.name,
        age: age || existingPatient.age,
        gender: gender || existingPatient.gender,
      },
    });

    res.status(200).json({
      message: "Patient updated successfully",
      patient: updatedPatient,
    });
  } catch (error) {
    (console.error("update patient error:", error),
      res.status(500).json({
        message: "Server error",
      }));
  }
};

// Delete a patient record.-----------------

const deletePatient = async (req, res) => {
  try {
    const patientId = req.params.id;

    if (!patientId) {
      res.status(404).json({
        message: "Patient not found",
      });
    }

    //finding patient in db
    const patient = await prisma.patient.findUnique({
      where: {
        id: patientId,
      },
    });

    if (!patient) {
      return res.status(404).json({
        message: "Patient not found ",
      });
    }

    //deleting patient
    await prisma.patient.delete({
      where: { id: patientId },
    });

    res.status(200).json({
      message: "Patient deleted successfully",
    });
  } catch (error) {
    (console.error("delete patient error:", error),
      res.status(500).json({
        message: "Server error",
      }));
  }
};

module.exports = {
  addNewPatient,
  getAllPatient,
  getPatientDetails,
  updatePatient,
  deletePatient,
};
