import 'package:clinico/pages/doctorDashboard/doctorNotificationTile.dart';
import 'package:flutter/material.dart';

class ShowBooking extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title:Text("Your Appointment"),backgroundColor: Colors.indigo,),
      body:DocNotTile()
    );
  }
}