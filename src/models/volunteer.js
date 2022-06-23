const mongoose = require("mongoose");
const volunteerSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    aadhar:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    }

})

const Voln = new mongoose.model("volunteer", volunteerSchema);
module.exports = Voln;