import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {AuthRouter} from "./routes";
import {DB} from "./config";

var app = express();

//body parser module integration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//core configurations
app.use(cors())

//routing for upcoming requests
app.use("/auth",AuthRouter);
app.post("/auth/login",(req,res)=>{
    console.log(req.body)
})
//development server creation
app.listen(8000, () => {
    console.log("Server Listening on 8000 port")
})