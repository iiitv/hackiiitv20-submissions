import 'package:clinico/model/user.dart';
import 'package:clinico/services/backend.dart';
import 'package:clinico/shared/loading.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';

class HospitalProfile extends StatefulWidget {
  String uid;

  HospitalProfile({this.uid}) {
    print(uid);
  }

  @override
  _HospitalProfileState createState() => _HospitalProfileState();
}

class _HospitalProfileState extends State<HospitalProfile> {
  Doctor doctor;
  bool isLoading = false;

  @override
  void initState() {
    super.initState();
    print(widget.uid);
    getDoctorDetails();
  }

  void getDoctorDetails() async {
    setState(() => isLoading = true);
    DocumentSnapshot doc = await doctorCollection.doc(widget.uid).get();
    doctor = Doctor(
      address: doc.data()["address"],
      bio: doc.data()["bio"],
      clinicName: doc.data()["clinicName"],
      displayName: doc.data()["displayName"],
      educationalQualification: doc.data()["educationalQualification"],
      email: doc.data()["email"],
      fee: doc.data()["fee"],
      paymentMethod: doc.data()["paymentMethod"],
      photoURL: doc.data()["photoURL"],
      timing: doc.data()["timing"],
      uid: widget.uid,
    );
    setState(() => isLoading = false);
  }

  @override
  Widget build(BuildContext context) {
    return isLoading
        ? Loading()
        : Container(
            child: Scaffold(
              appBar: AppBar(
                title: Text(doctor.clinicName),
                backgroundColor: Colors.indigo,
              ),
              body: Container(
                child: ListView(
                  children: [
                    SizedBox(
                      height: 40,
                    ),
                    Center(
                      child: Container(
                        margin: EdgeInsets.only(top: 20),
                        child: CircleAvatar(
                          backgroundImage: NetworkImage(doctor.photoURL),
                          radius: 60,
                        ),
                      ),
                    ),
                    SizedBox(
                      height: 40,
                    ),
                    Center(
                      child: Text(
                        doctor.clinicName,
                        style: TextStyle(
                          fontSize: 35,
                          fontStyle: FontStyle.italic,
                        ),
                      ),
                    ),
                    SizedBox(
                      height: 30,
                    ),
                    Divider(),
                    SizedBox(
                      height: 30,
                    ),
                    Center(
                      child: Text(
                        'Dr. ' + doctor.displayName,
                        style: TextStyle(
                          fontSize: 24,
                        ),
                      ),
                    ),
                    SizedBox(
                      height: 30,
                    ),
                    Center(
                      child: Text(
                        doctor.educationalQualification,
                        style: TextStyle(
                          fontSize: 24,
                        ),
                      ),
                    ),
                    SizedBox(
                      height: 30,
                    ),
                    Center(
                      child: Text(
                        doctor.bio,
                        style: TextStyle(
                          fontSize: 24,
                        ),
                      ),
                    ),
                    SizedBox(
                      height: 30,
                    ),
                    Center(
                      child: Text(
                        'Address : ' + doctor.address,
                        style: TextStyle(
                          fontSize: 24,
                        ),
                      ),
                    ),
                    SizedBox(
                      height: 30,
                    ),
                    Center(
                      child: Text(
                        'Timing : ' + doctor.timing,
                        style: TextStyle(
                          fontSize: 24,
                        ),
                      ),
                    ),
                    SizedBox(
                      height: 30,
                    ),
                    Center(
                      child: Text(
                        'Fees : ' + doctor.fee + ' rs. at clinic',
                        style: TextStyle(
                          fontSize: 24,
                        ),
                      ),
                    ),
                    SizedBox(
                      height: 70,
                    ),
                    Padding(
                      padding: const EdgeInsets.fromLTRB(20, 8, 20, 8),
                      child: FlatButton(
                        color: Colors.indigoAccent,
                        child: Padding(
                          padding: const EdgeInsets.all(10),
                          child: Text(
                            'Book Appointment',
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: 24,
                            ),
                          ),
                        ),
                        onPressed: () {},
                      ),
                    ),
                  ],
                ),
              ),
            ),
          );
  }
}
