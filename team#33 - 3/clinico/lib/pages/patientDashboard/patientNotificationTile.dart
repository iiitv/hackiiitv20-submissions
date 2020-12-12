import 'package:clinico/model/appointment.dart';
import 'package:flutter/material.dart';

class PatNotTile extends StatelessWidget {
  Appointment appointment;
  String msg="";
  PatNotTile({this.appointment}){
    msg = appointment.confirmed?"Your Appointment in ${appointment.clinicName} is confirmed":"Your Appointment in ${appointment.clinicName} is pending";
  }
  @override
  Widget build(BuildContext context) {
    return Card(
      child: ListTile(
        title: Text(msg),
      ),
    );
  }
}