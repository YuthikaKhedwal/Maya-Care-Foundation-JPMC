const express = require("express");
const { request } = require("http");
const cors = require("cors")
require("./db/conn.js");
const { required } = require("nodemon/lib/config");
const path = require ("path");
const app = express();
const mongoose = require("mongoose");
const Elder = require("./models/elderly")
const Voln = require("./models/volunteer")
const Emp = require("./models/employee")
const Donor = require("./models/donory")
const {json} = require("express")



const port = process.env.PORT||3000;

const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views", template_path)

app.get("/",(req,res)=>{
    res.render("index");
 });
app.get("/registration",(req,res)=>{
    res.render("registration");
 });
app.get("/elder",(req,res)=>{
    res.render("elder");
 });
app.get("/volunteer",(req,res)=>{
    res.render("volunteer");
 });
app.get("/employee",(req,res)=>{
    res.render("employee");
 });
app.get("/donor",(req,res)=>{
    res.render("donor");
 });
app.get("/output",(req,res)=>{
    res.render("output");
});
app.post("/output",cors(), async(req,res)=>{
    try{
        const newElder = new  Elder({
            name : req.body.name,
            age :req.body.age,
            phone :req.body.phone,
            problem: req.body.problem,
            gender: req.body.gender,
            help:req.body.help
        })

        // newElder.markModified("name");
        const registered = await newElder.save();
        res.redirect("/output");
        console.log(registered);
        // res.status(201).render("elder");

    }catch(error){
        res.status(400).send(error);
    }
});


app.get("/output_v",(req,res)=>{
    res.render("output_v");
});
app.post("/output_v",cors(), async(req,res)=>{
    try{
        const newVoln = new  Voln({
            name : req.body.name,
            phone :req.body.phone,
            address :req.body.address,
            aadhar: req.body.aadhar,
            email: req.body.email
            
        })

        // newElder.markModified("name");
        const registerV = await newVoln.save();
        res.redirect("/output");
        console.log(registerV);
        // res.status(201).render("elder");

    }catch(error){
        res.status(400).send(error);
    }
});
app.get("/output_e",(req,res)=>{
    res.render("output_e");
});
app.post("/output_e",cors(), async(req,res)=>{
    try{
        const newEmployee = new Emp({
            first_name : req.body.first_name,
            last_name :req.body.last_name,
            position:req.body.position,
            your_email :req.body.your_email,
            dob: req.body.dob,
            phone: req.body.phone,
            actions:req.body.actions,
            team : req.body.team,
            address_line_1:req.body.address_line_1,
            address_line_2:req.body.address_line_2
            
        })

        // newElder.markModified("name");
        const registerE = await newEmployee.save();
        res.redirect("/output");
        console.log(registerE);
        // res.status(201).render("elder");

    }catch(error){
        res.status(400).send(error);
    }
});

app.get("/output_d",(req,res)=>{
    res.render("output_d");
});
app.post("/output_d",cors(), async(req,res)=>{
    try{
        const newDonor = new Donor({
            txt : req.body.txt,
            gender: req.body.gender,
            scales :req.body.scales,
            horns :req.body.horns,
            avatar: req.body.avatar,
            // help:req.body.help
        })

        // newDonor.markModified("name");
        const registered = await newDonor.save();
        res.redirect("/output");
        console.log(registered);
        // res.status(201).render("Donor");

    }catch(error){
        res.status(400).send(error);
    }
});

app.listen(port, () =>{
    console.log(`server is running at port no ${port}`)
})