const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//Add a new Doctor. ------------------------

const addNewDoctor = async (req, res) => {
  try {
    const { name } = req.body;
    const userId = req.user.id;

    const newDoctor = await prisma.doctor.create({
      data: { name, userId },
    });

    res.status(200).json({
      message: "Doctor added successfully",
      doctor: newDoctor,
    });
  } catch (error) {
    (console.error("add doctor error:", error),
      res.status(500).json({
        message: "Server error",
      }));
  }
};

// Retrieve all Doctors created. -------------------

const getAllDoctor = async (req, res) => {
  try {
    const allDoctors = await prisma.doctor.findMany({});

    res.status(200).json({
      message: "doctors detail fetched succesfully",
      doctor: allDoctors,
    });
  } catch (error) {
    (console.error("Get doctors error:", error),
      res.status(500).json({
        message: "Server error",
      }));
  }
};

// Get details of a specific Doctor.------------------

const getDoctorDetails = async (req, res) => {
  try {
    const doctorId = req.params.id;

    //finding doctor in db
    const doctor = await prisma.doctor.findUnique({
      where: {
        id: doctorId,
      },
    });

    if (!doctor) {
      res.status(404).json({
        message: "Patient not found",
      });
    }

    res.status(200).json({
      message: "doctor detail fetched succesfully",
      doctor,
    });
  } catch (error) {
    (console.error("Get doctor error:", error),
      res.status(500).json({
        message: "Server error",
      }));
  }
};

// Update Doctor details.------------------

const updateDoctor = async (req, res) => {
  try {
    const doctorId = req.params.id;
    const { name } = req.body;

    if (!doctorId) {
      return res.status(400).json({ message: "doctor ID is required" });
    }

    const existingDoctor = await prisma.doctor.findUnique({
      where: { id: doctorId },
    });

    if (!existingDoctor) {
      return res.status(404).json({ message: "doctor not found" });
    }

    //updating the Doctor
    const updatedDoctor = await prisma.doctor.update({
      where: { id: doctorId },
      data: {
        name: name || existingDoctor.name,
      },
    });

    res.status(200).json({
      message: "Doctor updated successfully",
      patient: updatedDoctor,
    });
  } catch (error) {
    (console.error("update doctor error:", error),
      res.status(500).json({
        message: "Server error",
      }));
  }
};

// Delete a Doctor record.-----------------

const deleteDoctor = async (req, res) => {
  try {
    const doctorId = req.params.id;

    if (!doctorId) {
      res.status(404).json({
        message: "doctor not found",
      });
    }

    //finding doctor in db
    const doctor = await prisma.doctor.findUnique({
      where: {
        id: doctorId,
      },
    });

    if (!doctor) {
      return res.status(404).json({
        message: "doctor not found ",
      });
    }

    //deleting doctor
    await prisma.doctor.delete({
      where: { id: doctorId },
    });

    res.status(200).json({
      message: "doctor deleted successfully",
    });
  } catch (error) {
    (console.error("delete doctor error:", error),
      res.status(500).json({
        message: "Server error",
      }));
  }
};

module.exports = {
  addNewDoctor,
  getAllDoctor,
  getDoctorDetails,
  updateDoctor,
  deleteDoctor,
};
