import { Schema, model, models } from "mongoose";
const ResumeSchema = new Schema({
    userId: {
        type: String,
        unique: true,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    degreeName: {
        type: String,
        required: true
    },
    yearOfDegree: {
        type: String,
        required: true
    },
    session: {
        type: String,
        required: true
    },
    university: {
        type: String,
        required: true
    },
    skillName: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Resume = models.Resume || model("Resume", ResumeSchema);
export default Resume;
