import 'package:clinico/pages/patientDashboard/patientNotificationTile.dart';
import 'package:flutter/material.dart';

class ShowNotification extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title:Text("Your Appointment"),backgroundColor: Colors.indigo,),
      body:PatNotTile()
    );
  }
}