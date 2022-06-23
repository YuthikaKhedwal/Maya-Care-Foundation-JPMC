const mongoose = require("mongoose");
const elderlySchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    problem:{
        type:String,
        required: true
    },
    gender:{
        type:String,
        required: true
    },
    help:{
        type:String,
        required: true
    }

})

const Elder = new mongoose.model("elderly", elderlySchema);
module.exports = Elder;