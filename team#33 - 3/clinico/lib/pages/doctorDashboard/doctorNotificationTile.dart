import 'package:clinico/model/appointment.dart';
import 'package:clinico/pages/doctorDashboard/confirmAppointment.dart';
import 'package:flutter/material.dart';

class DocNotTile extends StatelessWidget {
  Appointment appointment;
  String msg;
  DocNotTile({this.appointment}){
    msg = appointment.confirmed?"You Confirmed ${appointment.name} Appointment":"${appointment.name} wants to book appointment.";
  }
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        Navigator.push(context,
            MaterialPageRoute(builder: (context) => ConfirmAppointment()));
      },
      child: Card(
          child: ListTile(
            title: Text(msg),
          ),
        )
    );
  }
}
