import 'package:clinico/pages/patientDashboard/AppointmentFormStatus.dart';
import 'package:flutter/material.dart';

class PatNotTile extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        Navigator.push(context,
            MaterialPageRoute(builder: (context) => AppointmentFormStatus()));
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
