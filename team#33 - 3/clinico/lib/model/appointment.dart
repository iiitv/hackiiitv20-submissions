import 'dart:io';

class Appointment{
  String name,gender,comment,stringimage,clinicName,doctorId,patientId,patientAppointmentId,doctorAppointmentId;
  int age,appointmentNumber;
  bool confirmed;
  File image;
  Appointment({this.name,this.gender,this.patientAppointmentId,this.doctorAppointmentId,this.comment,this.age,this.patientId,this.image,this.doctorId,this.stringimage,this.clinicName,this.confirmed,this.appointmentNumber});
}