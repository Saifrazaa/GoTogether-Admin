const mongoose = require("mongoose");
const userschema = new mongoose.Schema({
    journeyID: String,
    driverID: String,
    from: Object,
    to: Object,
    date: String,
    fare: String,
    overallRating: Number,
    bookedUsers: Array,
    usersRating: Array,
    complains: Array
})

module.exports = mongoose.model("completedRides", userschema);