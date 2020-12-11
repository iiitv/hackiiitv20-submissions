import 'package:clinico/pages/signin/signinbutton.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class SignInPage extends StatefulWidget {
  @override
  _SignInPageState createState() => _SignInPageState();
}

class _SignInPageState extends State<SignInPage> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        child: Column(
          children: [
            SizedBox(height: 40,),
            SignButton(name: "Sign in as Paitent "),
            SizedBox(height: 40,),
            SignButton(name: "Sign in as Doctor "),
          ],
        ),
      ),
    );
  }
}