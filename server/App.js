import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { AuthRouter,DataRouter } from "./routes";
import { DB } from "./config";

var app = express();

//body parser module integration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//core configurations
app.use(cors())

//routing for upcoming requests
app.use("/auth", AuthRouter);
app.use("/data", DataRouter);

//development server creation
app.listen(8000, () => {
    console.log("Server Listening on 8000 port")
})