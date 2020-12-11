import 'package:clinico/model/user.dart';
import 'package:clinico/pages/doctorDashboard/doctorDashboard.dart';
import 'package:clinico/pages/patientDashboard/patientDashboard.dart';
import 'package:clinico/pages/signin/signin.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';


class Wrapper extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final user = Provider.of<MyUser>(context);
    if(user==null){
      return SignInPage();
    }else{
      return  DoctorDashboard();
    }
  }
}