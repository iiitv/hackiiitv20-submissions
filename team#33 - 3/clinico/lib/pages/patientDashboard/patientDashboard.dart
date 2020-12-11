import 'package:clinico/pages/patientDashboard/hospitalCard.dart';
import 'package:clinico/services/auth.dart';
import 'package:flutter/material.dart';

class PatientDashboard extends StatelessWidget {
  final AuthServices _auth = AuthServices();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Patient"),
        backgroundColor: Colors.indigo,
      ),
      body: RaisedButton(
        child: Text("Logout"),
        onPressed: () {
          _auth.signOutGoogle();
        },
      ),
    );
  }
}
