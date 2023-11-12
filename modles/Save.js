import { Schema, model, models } from "mongoose";
const SaveJobSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    contactEmail: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    heard: {
        type: String,
        required: true
    },
    jobtitle: {
        type: String,
        required: true
    },
    hired: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    jobtype: {
        type: String,
        required: true
    },
    jobduration: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    jobdesc: {
        type: String,
    }
})

const SaveJob = models.SaveJob || model("SaveJob", SaveJobSchema)
export default SaveJob
