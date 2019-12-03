import mongoose from "mongoose";
var DB=mongoose.connect("mongodb://saif:saif366@ds261155.mlab.com:61155/reactapis")
if(DB){
    console.log("Database is Connected")
}
else{
    console.log("Error in Connecting Database")
}
export {
    DB
}