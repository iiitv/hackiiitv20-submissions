import 'package:clinico/services/auth.dart';
import 'package:flutter/material.dart';

class PatientDashboard extends StatelessWidget {
  final AuthServices _auth = AuthServices();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title:Text("patient")),
      body: RaisedButton(
        child: Text("Logout"),
        onPressed: (){_auth.signOutGoogle();},
      ),
    );
  }
}