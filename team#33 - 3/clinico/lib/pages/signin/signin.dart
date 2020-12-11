import 'package:clinico/pages/signin/signinbutton.dart';
import 'package:clinico/shared/loading.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class SignInPage extends StatefulWidget {
  @override
  _SignInPageState createState() => _SignInPageState();
}

class _SignInPageState extends State<SignInPage> {

  bool isLoading = false;
  void toggleLoading(){
    setState(()=>isLoading = !isLoading);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: isLoading?Loading():Container(
        child: Column(
          children: [
            SizedBox(height: 40,),
            SignButton(name: "Sign in as Patient ",status: "Patient",toggleLoading: toggleLoading,),
            SizedBox(height: 40,),
            SignButton(name: "Sign in as Doctor ",status:"Doctor",toggleLoading: toggleLoading,),
          ],
        ),
      ),
    );
  }
}
