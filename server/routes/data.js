import express from "express";
import { UsersModel, OnGoingRides } from "../models";
import { transporter } from "../config";

var router = express();

router.post("/getUsersForApproval", (req, res) => {
    UsersModel.find({ profileCompleted: true, profileApproved: false }).then(response => {
        if (response && response !== null) {
            res.send({ success: true, response })
        }
        else {
            res.send({ success: false, error: "No User Found!!" })
        }
    }).catch(err => {
        res.send({ success: false, error: err.message })
    })
});
router.post("/handleUserRequest", (req, res) => {
    UsersModel.findById({ _id: req.body.userID }).then(response => {
        if (response && response !== null) {
            var mailOptions = {
                from: 'Go-Together Community',
                to: response.email,
                // subject: 'Sending Email using Node.js',
                // text: 'That was easy!'
            };
            response.status = req.body.status === "approve" ? "approved" : "rejected";
            response.profileApproved = req.body.status === "approve" ? true : false;
            UsersModel.update({ _id: req.body.userID }, { $set: response }).then(response2 => {
                if (response2) {
                    if (req.body.status === "approve") {
                        mailOptions.subject = "Go-Together Profile Approved";
                        mailOptions.html = "<h1 style='color:green'>Congratulations!!</h1><b>Your Go-Together profile is being approved by the admin .You can now post journey and earn money. Good Luck For Your Future .If you need further assistant please email us on 'community.gotogether@gmail.com'</b>.<h5>We Hope you will enjoy using Go-Together</h5><br /><h3>First Logout from application and again Login to your account</h3>"
                        transporter.sendMail(mailOptions, (err, info) => {
                            if (err) {
                                console.log("Error in email Sending", err.message);
                            }
                            else {
                                console.log("Email Successfully Send")
                            }
                        })
                        res.send({ success: true })
                    }
                    else {
                        mailOptions.subject = "Go-Together Profile Update Rejected";
                        mailOptions.html = "<h1>We are Sorry!!</h1><b>Your Profile is Being Rejected by Go-Together Admin.Please Contact us on 'community.gotogether@gmail.com' for any query</b>"
                        transporter.sendMail(mailOptions, (err, info) => {
                            if (err) {
                                console.log("Error in email Sending", err.message);
                            }
                            else {
                                console.log("Email Successfully Send")
                            }
                        })
                        res.send({ success: true })
                    }
                }
            })
        }
        else {
            res.send({ success: false, error: "No User Found!!" })
        }
    }).catch(err => {
        res.send({ success: false, error: err.message })
    })
});
router.get("/getAllUsers", (req, res) => {
    UsersModel.find({}).then(response => {
        if (response) {
            res.send({ success: true, users: response })
        }
        else {
            res.send({ success: false, error: "No User Found" })
        }
    }).catch(err => {
        res.send({ success: false, error: err.message })
    })
})
router.post("/handleUserListAction", (req, res) => {
    var _id = req.body.userID;
    var action = req.body.action;
    UsersModel.findById({ _id }).then(response => {
        if (response) {
            if (action === "ban" || action === "permit") {
                response.status = (action === "ban") ? "banned" : "approved";
                UsersModel.update({ _id }, { $set: response }).then(response2 => {
                    if (response2) {
                        res.send({ success: true, response })
                    }
                    else {
                        res.send({ success: false, error: "Something Bad Happened" })
                    }
                }).catch(err => {
                    res.send({ success: false, error: err.message })
                })
            }
            else {
                UsersModel.deleteOne({ _id }).then(response3 => {
                    if (response3) {
                        res.send({ success: true })
                    }
                    else {
                        res.send({ success: false, error: "Something Bad Happened" })
                    }
                }).catch(err => {
                    res.send({ success: false, error: err.message })
                })
            }
        }
    }).catch(err => {
        res.send({ success: false, error: err.message })
    })
})
router.get("/allOnGoingRides", (req, res) => {
    OnGoingRides.find({}).then(response => {
        if (response) {
            res.send({ success: true, onGoingRides: response })
        }
        else {
            res.send({ success: false, error: "No Ride Found" })
        }
    }).catch((err) => {
        res.send({ success: false, error: err.message });
    })
})
export default router;