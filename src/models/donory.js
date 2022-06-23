const mongoose = require("mongoose");
const donorySchema = new mongoose.Schema({
    txt:{
        type:String,
        required: true
    },
    gender:{
        type:String,
        required: true
    },
    scales:{
        //for checkbox
        type:String,
        required: true
    },
    horns:{
        type:String,
        required: false
    },
    avatar:{
        type:String,
        required: false
    }

})

const Donor = new mongoose.model("donory", donorySchema);
module.exports = Donor;