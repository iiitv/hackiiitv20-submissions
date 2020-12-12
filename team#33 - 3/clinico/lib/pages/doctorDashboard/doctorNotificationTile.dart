import 'package:clinico/pages/doctorDashboard/confirmAppointment.dart';
import 'package:flutter/material.dart';

class DocNotTile extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        Navigator.push(context,
            MaterialPageRoute(builder: (context) => ConfirmAppointment()));
      },
      child: Padding(
        padding: const EdgeInsets.fromLTRB(15, 8, 15, 8),
        child: ListTile(
          title: Text("Abc Clinic Confirm Your Appointment"),
          subtitle: Text("send on 9-12-2020 at 11.00 pm"),
        ),
      ),
    );
  }
}
