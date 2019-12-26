const mongoose = require("mongoose");
const userschema = new mongoose.Schema({
    userID: String,
    journeyID: String,
    driverID: String,
    driverEmail: String,
    currentLatitude: Number,
    currentLongitude: Number,
    from: Object,
    to: Object,
    completed: Boolean,
    lastUpdated: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model("RideTracking", userschema);