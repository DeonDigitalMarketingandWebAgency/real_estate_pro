// Realtor.js
const mongoose = require("mongoose");

const RealtorSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profilePicture: { type: String },
    approved: { type: Boolean, default: false },
    banned: { type: Boolean, default: false },
    banReason: { type: String },
});

module.exports = mongoose.model("Realtor", RealtorSchema);
