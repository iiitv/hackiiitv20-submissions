import 'package:clinico/model/user.dart';
import 'package:clinico/pages/doctorProfileForm.dart';
import 'package:clinico/pages/patientDashboard/patientDashboard.dart';
import 'package:clinico/services/backend.dart';
import 'package:flutter/material.dart';

class Role extends StatelessWidget {
  MyUser user;
  Role({this.user});
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Scaffold(
        appBar: AppBar(
          title: Text('Choose Your Role'),
          backgroundColor:  Colors.indigoAccent,
        ),
        body: Container(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              Container(
                child: Image.asset(
                  'assets/doctor.png',
                  height: 300,
                ),
              ),
              Container(
                child: GestureDetector(
                  child: Padding(
                      padding: const EdgeInsets.fromLTRB(15.0, 0, 15, 0),
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
                          color: Colors.indigoAccent,
                        ),
                        child: Text(
                          "I am a Doctor",
                          style: TextStyle(color: Colors.white, fontSize: 18),
                        ),
                        //   child: Image.asset(
                        // 'assets/doctor.png',
                        // height: 300,
                      )),
                  onTap: () {
                    Navigator.push(context,MaterialPageRoute(builder:(BuildContext context)=>DoctorProfileForm(user:user)));
                  },
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(15.0, 0, 15, 0),
                child: GestureDetector(
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
                      color: Colors.indigoAccent,
                    ),
                    child: Text(
                      "I am looking for a doctor",
                      style: TextStyle(color: Colors.white, fontSize: 18),
                    ),
                  ),
                  onTap: () {
                    Backend().AddPatient(user);
                    Navigator.pushReplacement(context,MaterialPageRoute(builder:(BuildContext context)=>PatientDashboard()));
                  },
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
