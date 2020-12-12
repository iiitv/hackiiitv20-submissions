import 'package:clinico/model/user.dart';
import 'package:clinico/pages/doctorProfileForm.dart';
import 'package:clinico/pages/role.dart';
import 'package:clinico/services/auth.dart';
import 'package:clinico/services/backend.dart';
import 'package:clinico/shared/loading.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';


class DoctorDashboard extends StatefulWidget {

  @override
  _DoctorDashboardState createState() => _DoctorDashboardState();
}

class _DoctorDashboardState extends State<DoctorDashboard> {
  Doctor doctor;
  bool isLoading = false;

  @override
  void initState() {
    super.initState();
    getDoctorDetails();
  }

  void getDoctorDetails() async {
    setState(() => isLoading = true);
    DocumentSnapshot doc = await doctorCollection.doc(currentUser.uid).get();
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
      uid: currentUser.uid,
      counter:doc.data()["counter"]
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
                          radius: 40,
                        ),
                      ),
                    ),
                    Container(
                      alignment: Alignment.topRight,
                      padding: EdgeInsets.only( right: 10),
                      child: ClipOval(
                        child: Material(
                          color: Colors.transparent, // button color
                          elevation: 0.0,
                          child: InkWell(
                            splashColor: Colors.blueGrey, // inkwell color
                            child: SizedBox(
                                width: 50,
                                height: 50,
                                child: Icon(
                                  Icons.edit,
                                  size: 25,
                                )),
                            onTap: () {
                              Navigator.push(
                                  context,
                                  MaterialPageRoute(
                                      builder: (context) => DoctorProfileForm(doctor:doctor,isEdit:true)));
                            },
                          ),
                        ),
                    )),
                    Center(
                      child: Text(
                        doctor.clinicName,
                        style: TextStyle(
                          fontSize: 30,
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
                     Center(
                      child:RaisedButton(
                        child: Text("Log Out",style: TextStyle(fontSize:16,color:Colors.white),),
                        onPressed: (){
                          // Navigator.pop(context);
                          AuthServices().signOutGoogle();
                        },
                        color: Colors.indigo,
                      ),
                    ),
                    SizedBox(height:30)
                  ],
                ),
              ),
            ),
          );
  }
}