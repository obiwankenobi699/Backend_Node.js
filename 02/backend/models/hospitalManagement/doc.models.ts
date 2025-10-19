import mongoose from "mongoose";

// Define hours sub-schema
const hoursSchema = new mongoose.Schema({
  start: {
    type: String, // Format: "09:00"
    required: true,
  },
  end: {
    type: String, // Format: "17:00"
    required: true,
  },
});

// Define hospital-hours sub-schema
const hospitalHoursSchema = new mongoose.Schema({
  hospitalName: {
    type: String,
    required: true,
  },
  hours: {
    type: hoursSchema,
    required: true,
  },
});

// Define main doctor schema
const docSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experiencedYear: {
      type: Number,
      default: 0,
    },
    worksInHospitals: [hospitalHoursSchema],
  },
  { timestamps: true }
);

// Create model
export const Doc = mongoose.model("Doc", docSchema);
