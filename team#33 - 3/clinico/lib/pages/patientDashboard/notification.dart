import 'package:clinico/pages/role.dart';
import 'package:clinico/services/backend.dart';
import 'package:flutter/material.dart';

class ShowNotification extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title:Text("Your Appointment"),backgroundColor: Colors.indigo,),
      body:Backend().showPatientNotification(currentUser.uid)
    );
  }
}