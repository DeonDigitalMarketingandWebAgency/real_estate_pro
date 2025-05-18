// routes/admin.js
const express = require("express");
const router = express.Router();
const Property = require("../models/Property");

// Approve Property
router.post("/property/:id/approve", async (req, res) => {
    const property = await Property.findById(req.params.id);
    if (property) {
        property.approved = true;
        await property.save();
        return res.status(200).send("Property approved.");
    }
    res.status(404).send("Property not found.");
});

// Disapprove Property
router.post("/property/:id/disapprove", async (req, res) => {
    const property = await Property.findById(req.params.id);
    if (property) {
        property.approved = false;
        await property.save();
        return res.status(200).send("Property disapproved.");
    }
    res.status(404).send("Property not found.");
});

// Ban Realtor
// const Realtor = require("../models/Realtor");

// Ban Realtor
// router.post("/realtor/:id/ban", async (req, res) => {
//     const { banReason } = req.body;
//     const realtor = await Realtor.findById(req.params.id);

//     if (realtor) {
//         realtor.banned = true;
//         realtor.banReason = banReason;
//         await realtor.save();
//         return res.status(200).send(`Realtor banned: ${banReason}`);
//     }
//     res.status(404).send("Realtor not found.");
// });

const BAN_REASONS = [
    "Fraudulent activities",
    "Spamming or fake listings",
    "Violation of terms and conditions",
    "Illegal property transactions",
    "Privacy violations",
    "Failure to verify identity",
    "Unapproved property listing",
    "Misleading information",
    "Customer complaints",
    "Repeated violation of agreements",
];

// Ban Realtor Route
router.post("/realtor/:id/ban", async (req, res) => {
    const { banReason } = req.body;
    const realtor = await Realtor.findById(req.params.id);

    if (realtor) {
        realtor.banned = true;
        realtor.banReason = banReason;
        await realtor.save();
        return res.status(200).json({ message: `Realtor banned for: ${banReason}` });
    }
    res.status(404).send("Realtor not found.");
});

// Get Ban Reasons Route
router.get("/ban-reasons", (req, res) => {
    res.json(BAN_REASONS);
});

// Ban Form
document.getElementById("banForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const banReason = document.getElementById("banReason").value;
    const realtorId = "some-realtor-id"; // Fetch this dynamically

    await firebase.firestore().collection("realtors").doc(realtorId).update({
        banned: true,
        banReason: banReason,
    });

    alert(`Realtor has been banned for: ${banReason}`);
});

// Add Realtor
firebase.firestore().collection("realtors").add({
    username: "JohnDoe",
    email: "john.doe@example.com",
    approved: false,
    banned: false,
    banReason: "",
});

// Ban a Realtor
firebase.firestore().collection("realtors").doc(realtorId).update({
    banned: true,
    banReason: "Violation of Terms",
});
