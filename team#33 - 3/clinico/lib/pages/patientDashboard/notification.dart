import 'package:clinico/pages/patientDashboard/patientNotificationTile.dart';
import 'package:flutter/material.dart';

class ShowNotification extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Your Appointments"),
          backgroundColor: Colors.indigo,
        ),
        body: ListView(children: [
          for (int i = 0; i <= 10; i++) PatNotTile(),
        ]));
  }
}
