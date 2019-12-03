import express from "express";
import bcrypt from "bcryptjs";
import { AuthModel } from "../models"

// bcrypt.genSalt(10, function (err, salt) {
//     bcrypt.hash("123456Ab", salt, function (err, hash) {
//         AuthModel.create({email:"admin@gotogether.com",password:hash});
//     });
// });
//admin password 123456Ab
var router = express();

router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    AuthModel.findOne({ email }).then(response => {
        if(response){
            bcrypt.compare(password, response.password, function (err, resp) {
                if (resp) {
                    res.send({ success: true });
                }
                else if (err) {
                    res.send({ success: false, error: err.message })
                }
                else {
                    res.send({ success: false, error: "Email and Password Don't Match" })
                }
            });
        }
        else{
            res.send({ success: false, error: "User Not Found!!" })
        }
    }).catch(err=>{
        res.send({ success: false, error: err.message })
    })
});

export default router;