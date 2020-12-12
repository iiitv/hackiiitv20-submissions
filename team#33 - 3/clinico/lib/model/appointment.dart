import 'dart:io';

class Appointment{
  String name,gender,comment,stringimage,clinicName,doctorId;
  int age,appointmentNumber;
  bool confirmed;
  File image;
  Appointment({this.name,this.gender,this.comment,this.age,this.image,this.doctorId,this.stringimage,this.clinicName,this.confirmed,this.appointmentNumber});
}