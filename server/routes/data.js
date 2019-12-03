import express from "express";
import { UsersModel } from "../models"

var router = express();

router.post("/getUsersForApproval", (req, res) => {
    UsersModel.find({ profileApproved: false }).then(response => {
        if(response && response!==null){
            res.send({success:true,response})
        }
        else{
            res.send({success:false,error:"No User Found!!"})
        }
    }).catch(err => {
        res.send({ success: false, error: err.message })
    })
});

export default router;