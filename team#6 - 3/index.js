const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const ejs = require("ejs")

const app = express()

app.set("view engine", "ejs")

mongoose.connect("mongodb://localhost: 27017/medDB", {useNewUrlParser: true})

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

const doctorSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  medtype: String,
  licenseNo:String,
  hospital:String,
  TimingFrom:String,
  TimingTo:String,
  Experiance:Number
})

const Doctor = mongoose.model("doctor", doctorSchema)

app.route("/")
  .get(function(req, res){
    res.render("home")
  })

app.route('/doctor')
  .get(function(req, res){
    res.render("doctor")
  })

  .post(function(req, res){
    let doc = Doctor({
      name: req.body.doctorName,
      phone: req.body.doctorPhone,
      medtype: req.body.medtype,
      licenseNo:req.body.licenseNo,
      hospital:req.body.hospital,
      TimingFrom:req.body.TimingFrom,
      TimingTo:req.body.TimingTo,
      Experiance:req.body.Experiance
    })

    doc.save(res.render("success"));
  })

app.route('/logindoc')
  .get(function(req, res){
    res.render("login-doc")
  })

  .post(function(req, res){
    let loginname = req.body.docName;
    let loginphone = req.body.docNumber;
    Doctor.findOne({name: loginname},function(err, doctor){
      if(!err){
        if(doctor == null){
          res.redirect('/logindoc')
        } else {
          let obj = doctor
          if(obj.phone == loginphone){
            res.render("success")
          } else {
            res.redirect('/logindoc')
          }
        }
      } else {
        console.log(err)
      }
    })
  })

const memberSchema = new mongoose.Schema({
  name: String,
  password: String,
  phone: Number,
  age: Number
})

const Member = mongoose.model("member", memberSchema)

app.route('/member')
  .get(function(req, res){
      res.render("member")
  })

  .post(function(req, res){
      let memb = Member({
        name: req.body.patientName,
        password: req.body.patientPassword,
        phone: req.body.patientPhone,
        age: req.body.age
      })

      memb.save(res.render("success"))
  })

app.route('/loginmem')
   .get(function(req, res){
     res.render("login-mem")
   })

   .post(function(req, res){
     let loginname = req.body.membName;
     let loginphone = req.body.membPassword;
     Member.findOne({name: loginname},function(err, member){
       if(!err){
         if(member == null){
           res.redirect('success')
         } else {
           let obj = member
           if(obj.password == loginphone){
             res.redirect("/appointment")
           } else {
             res.redirect('/loginmem')
           }
         }
       } else {
         console.log(err)
       }
     })
   })

const appointmentSchema = mongoose.Schema({
  age: Number,
  doc: String,
  symptoms: String,
  timings: String
})

const Appointment = mongoose.model('appointment', appointmentSchema)

app.route('/appointment')
  .get(function(req, res){
    res.render("patdoc")
  })

  .post(function(req, res){
    const appoint = Appointment({
      age:req.body.age,
      doc:req.body.wishdoctor,
      symptoms:req.body.symptoms,
      timings:req.body.timeSlot
    })

    appoint.save()

    Doctor.find({medtype: req.body.wishdoctor}, function(err, patdoc){
      if(!err){
        res.send(patdoc)
      } else {
        console.log(err)
      }
    })
  })

app.listen(3000, function(err){
  console.log("The server is listening")
})
