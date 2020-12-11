import 'package:clinico/model/user.dart';
import 'package:clinico/pages/doctorProfileForm.dart';
import 'package:clinico/pages/patientDashboard/patientDashboard.dart';
import 'package:flutter/material.dart';

class Role extends StatelessWidget {
  MyUser user;
  Role({this.user});
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Scaffold(
        appBar: AppBar(
          title: Text('Your Role'),
        ),
        body: Container(
          child: Column(
            children: [
              GestureDetector(
                child: Container(
                  alignment: Alignment.center,
                  width: MediaQuery.of(context).size.width,
                  padding: EdgeInsets.symmetric(vertical: 12),
                  decoration: BoxDecoration(
                      boxShadow: [
                        BoxShadow(
                          offset: const Offset(3.0, 3.0),
                          color: Colors.grey,
                          blurRadius: 4.0,
                          spreadRadius: 2.0,
                        )
                      ],
                      gradient: LinearGradient(colors: [
                        const Color(0xff007EF4),
                        const Color(0xFF2A75BC),
                      ])),
                  child: Text(
                    "I am a Doctor",
                    style: TextStyle(color: Colors.white, fontSize: 18),
                  ),
                ),
                onTap: () {
                  Navigator.push(context,MaterialPageRoute(builder:(BuildContext context)=>DoctorProfileForm(user:user)));
                },
              ),
              GestureDetector(
                child: Container(
                  alignment: Alignment.center,
                  width: MediaQuery.of(context).size.width,
                  padding: EdgeInsets.symmetric(vertical: 12),
                  decoration: BoxDecoration(
                      boxShadow: [
                        BoxShadow(
                          offset: const Offset(3.0, 3.0),
                          color: Colors.grey,
                          blurRadius: 4.0,
                          spreadRadius: 2.0,
                        )
                      ],
                      gradient: LinearGradient(colors: [
                        const Color(0xff007EF4),
                        const Color(0xFF2A75BC),
                      ])),
                  child: Text(
                    "I am looking for a doctor",
                    style: TextStyle(color: Colors.white, fontSize: 18),
                  ),
                ),
                onTap: () {
                  Navigator.push(context,MaterialPageRoute(builder:(BuildContext context)=>PatientDashboard()));
                },
              )
            ],
          ),
        ),
      ),
    );
  }
}
