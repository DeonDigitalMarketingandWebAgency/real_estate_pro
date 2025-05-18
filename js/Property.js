// Property.js
const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    image: { type: String },
    approved: { type: Boolean, default: false },
    realtorId: { type: mongoose.Schema.Types.ObjectId, ref: "Realtor" },
});

module.exports = mongoose.model("Property", PropertySchema);
