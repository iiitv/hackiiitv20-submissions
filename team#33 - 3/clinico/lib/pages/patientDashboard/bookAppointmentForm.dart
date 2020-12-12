import 'dart:io';

import 'package:clinico/model/user.dart';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

class BookAppointment extends StatefulWidget {
  Doctor doctor;
  BookAppointment({this.doctor});

  @override
  _BookAppointmentState createState() => _BookAppointmentState();
}

class _BookAppointmentState extends State<BookAppointment> {

  File image;
  final picker = ImagePicker();
  Future getImageFromGallery() async {
    final pickedFile = await picker.getImage(source: ImageSource.gallery);
    setState(() {
      if (pickedFile != null) {
        setState(()=>image = File(pickedFile.path));
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar:AppBar(title:Text("Book Appointment")),
      body: Padding(
        padding: const EdgeInsets.all(13.0),
        child: ListView(
          children:[
            Center(
              child:Text(widget.doctor.clinicName,style: TextStyle(fontSize:30),)
            ),
            SizedBox(height: 40),
            TextFormField(
              // controller: educationalQualificationController,
              keyboardType: TextInputType.multiline,
              maxLines: null,
              decoration: InputDecoration(
                filled: true,
                fillColor: Colors.grey[50],
                hintText: "Enter Patient Name",
                border: OutlineInputBorder(),
                labelText: "Name",
              ),
            ),
            SizedBox(height: 40),
            TextFormField(
              // controller: educationalQualificationController,
              keyboardType: TextInputType.number,
              decoration: InputDecoration(
                filled: true,
                fillColor: Colors.grey[50],
                hintText: "Enter Patient Age",
                border: OutlineInputBorder(),
                labelText: "Age",
              ),
            ),
            SizedBox(height: 40),
            TextFormField(
              // controller: educationalQualificationController,
              decoration: InputDecoration(
                filled: true,
                fillColor: Colors.grey[50],
                hintText: "Enter Patient Gender",
                border: OutlineInputBorder(),
                labelText: "Gender",
              ),
            ),
            SizedBox(height: 40),
            TextFormField(
              // controller: educationalQualificationController,
              keyboardType: TextInputType.multiline,
              maxLines: null,
              decoration: InputDecoration(
                filled: true,
                fillColor: Colors.grey[50],
                hintText: "Add Edition Comment",
                border: OutlineInputBorder(),
                labelText: "Comment(optional)",
              ),
            ),
            SizedBox(height:40),
            RaisedButton(
              child:Text("Upload ScreenShot of payment "),
              onPressed: (){getImageFromGallery();},

            ),
            (image==null)
            ?Text("no file selected")
            :Hero(
                  tag: "heroImage",
                  child: AspectRatio(
                      aspectRatio: 0.85,
                      child: Container(
                        decoration: BoxDecoration(
                          image:DecorationImage(
                            image:FileImage(image),
                            fit:BoxFit.cover
                          )
                        ),
                      ),
                  )
              ),
          ]
        ),
      ),
    );
  }
}