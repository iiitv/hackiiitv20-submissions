import 'package:clinico/services/auth.dart';
import 'package:flutter/material.dart';

class DoctorDashboard extends StatelessWidget {

  final AuthServices _auth = AuthServices();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title:Text("doctor")),
      body: RaisedButton(
        child: Text("Logout"),
        onPressed: (){_auth.signOutGoogle();},
      ),
    );
  }
}