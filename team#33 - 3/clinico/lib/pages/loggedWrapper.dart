import 'package:clinico/model/user.dart';
import 'package:clinico/pages/doctorDashboard/doctorBottomBar.dart';
import 'package:clinico/pages/patientDashboard/patientBottomBar.dart';
import 'package:clinico/pages/role.dart';
import 'package:clinico/services/backend.dart';
import 'package:clinico/shared/loading.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';

class LoggedWrapper extends StatefulWidget {

  MyUser user;
  LoggedWrapper({this.user});
  @override
  _LoggedWrapperState createState() => _LoggedWrapperState();
}

class _LoggedWrapperState extends State<LoggedWrapper> {
  bool isLoading = true;
  bool isDoctor,isPatient;

  @override
  void initState() {
    super.initState();
    getInfo();
  }

  void getInfo()async{
    DocumentSnapshot docColl = await doctorCollection.doc(widget.user.uid).get();
    bool temdoc = false,temPat = false;
    temdoc  = docColl.exists;
    if(!temdoc){
      DocumentSnapshot patColl = await patientCollection.doc(widget.user.uid).get();
      temPat = patColl.exists;
      if(temPat){
        currentUser = widget.user;
        currentUser.isDoctor = false;
      }
    }else{
      currentUser = widget.user;
      currentUser.isDoctor = true;
    }
    setState((){
      isDoctor = temdoc;
      isPatient = temPat;
      isLoading = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    return isLoading?Loading():(isDoctor?DoctorBottom():(isPatient?Patientbottonbar():Role(user:widget.user)));
  }
}