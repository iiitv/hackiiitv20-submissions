import 'package:clinico/model/appointment.dart';
import 'package:clinico/pages/patientDashboard/AppointmentFormStatus.dart';
import 'package:flutter/material.dart';

class PatNotTile extends StatelessWidget {
  Appointment appointment;
  String msg = "";
  PatNotTile({this.appointment}) {
    msg = appointment.confirmed
        ? "Your Appointment in ${appointment.clinicName} is confirmed"
        : "Your Appointment in ${appointment.clinicName} is pending";
  }
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        Navigator.push(
            context,
            MaterialPageRoute(
                builder: (context) => AppointmentFormStatus(
                      appointment: appointment,
                    )));
      },
      child: Card(
        child: ListTile(
          title: Text(msg),
        ),
      ),
    );
  }
}
