const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },

    position:{
        type: String,
        required: true
    },

    your_email:{
        type: String,
        required: true
    },

    dob:{
        type:String,
        required: true
    },

    phone:{
        type:Number,
        required: true
    },

    actions:{
        type: String,
        required: true
    },

    team:{
        type: String,
        required: true
    },

    address_line_1:{
        type:String,
        required: true
    },
    address_line_2:{
        type:String,
        required: true
    }

})

const Employee = new mongoose.model("employee", employeeSchema);
module.exports = Employee;