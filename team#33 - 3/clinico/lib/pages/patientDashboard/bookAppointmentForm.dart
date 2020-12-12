import 'dart:io';
import 'package:clinico/model/appointment.dart';
import 'package:clinico/model/user.dart';
import 'package:clinico/pages/patientDashboard/notification.dart';
import 'package:clinico/pages/role.dart';
import 'package:clinico/services/backend.dart';
import 'package:clinico/shared/loading.dart';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

class BookAppointment extends StatefulWidget {
  Doctor doctor;
  BookAppointment({this.doctor});

  @override
  _BookAppointmentState createState() => _BookAppointmentState();
}

class _BookAppointmentState extends State<BookAppointment> {
  TextEditingController nameController = new TextEditingController();
  TextEditingController ageController = new TextEditingController();
  TextEditingController genderController = new TextEditingController();
  TextEditingController commentController = new TextEditingController();
  bool validName=true,validAge = true,validGender = true,isLoading = false;

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

  void bookAppointment()async{
    String name = nameController.text.trim();
    String age = ageController.text.trim();
    String gender = genderController.text.trim();
    String comment = commentController.text.trim();
    setState((){
      validName = name.isNotEmpty;
      validAge = age.isNotEmpty;
      validGender = gender.isNotEmpty;
    });
    if(validName && validAge && validGender && image!=null){
      setState(()=>isLoading = true);
      Appointment appoit = Appointment(
        name:name,
        age:int.parse(age),
        gender: gender,
        comment: comment,
        clinicName:widget.doctor.clinicName,
        image: image
      );
      await Backend().bookAppointment(appoit,widget.doctor.uid,currentUser.uid);
      Navigator.pop(context);
      Navigator.pop(context);
      Navigator.push(context,MaterialPageRoute(builder:(BuildContext context)=>ShowNotification()));
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar:AppBar(title:Text("Book Appointment")),
      body: isLoading?Loading():Padding(
        padding: const EdgeInsets.all(13.0),
        child: ListView(
          children:[
            Center(
              child:Text(widget.doctor.clinicName,style: TextStyle(fontSize:30),)
            ),
            SizedBox(height: 40),
            TextFormField(
              controller: nameController,
              keyboardType: TextInputType.multiline,
              maxLines: null,
              decoration: InputDecoration(
                filled: true,
                fillColor: Colors.grey[50],
                hintText: "Enter Patient Name",
                border: OutlineInputBorder(),
                labelText: "Name",
                errorText: validName?null:"Name Can't Be Empty"
              ),
            ),
            SizedBox(height: 40),
            TextFormField(
              controller: ageController,
              keyboardType: TextInputType.number,
              decoration: InputDecoration(
                filled: true,
                fillColor: Colors.grey[50],
                hintText: "Enter Patient Age",
                border: OutlineInputBorder(),
                labelText: "Age",
                errorText: validAge?null:"Age Can't Be Empty"
              ),
            ),
            SizedBox(height: 40),
            TextFormField(
              controller: genderController,
              decoration: InputDecoration(
                filled: true,
                fillColor: Colors.grey[50],
                hintText: "Enter Patient Gender",
                border: OutlineInputBorder(),
                labelText: "Gender",
                errorText: validGender?null:"Gender Can't Be Empty"
              ),
            ),
            SizedBox(height: 40),
            TextFormField(
              controller: commentController,
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
            ?Text("no file selected(required)")
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
              RaisedButton(
                child: Text("Submit"),
                onPressed: (){bookAppointment();},
              )
          ]
        ),
      ),
    );
  }
}