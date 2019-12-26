const mongoose = require("mongoose");
const userschema = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    cnic: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    profilePicture: {
        type: String
    },
    vehicleCompany: {
        type: String
    },
    vehicleColor: {
        type: String
    },
    vehicleName: {
        type: String
    },
    vehicleModal: {
        type: String
    },
    vehicleNumber: {
        type: String
    },
    CNIC_front_picture: {
        type: String
    },
    CNIC_back_picture: {
        type: String
    },
    license_type: {
        type: String
    },
    License_front_picture: {
        type: String
    },
    License_back_picture: {
        type: String
    },
    profileCompleted: {
        type: Boolean,
        default: false,
    },
    profileApproved: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        enum: ["pending", "approved", "rejected", "banned"]
    },
    totalRides: {
        type: Number,
        default: 0
    },
    overallRating: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("users", userschema);