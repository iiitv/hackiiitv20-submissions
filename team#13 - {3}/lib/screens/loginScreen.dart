import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:health/model/patient.dart';
import 'package:health/screens/Register.dart';
import 'package:health/screens/dashboard.dart';
import 'package:health/services/services.dart';


class LoginPage extends StatefulWidget {


  State<StatefulWidget> createState() => new _State();
}

class _State extends State<LoginPage> {
  TextEditingController nameController = TextEditingController();
  TextEditingController passwordController = TextEditingController();
  String email,pass;

  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.purple,
          title: Padding(
            padding: EdgeInsets.all(90),
            child: Text('Health+',
              style: TextStyle(
                  fontSize: 35),),
          ),
        ),
        body: Padding(
            padding: EdgeInsets.all(20),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              children: <Widget>[

                Container(
                    alignment: Alignment.center,
                    padding: EdgeInsets.all(10),
                    child: Text(
                      '',
                      style: TextStyle(
                          color: Colors.purple,
                          fontWeight: FontWeight.w500,
                          fontSize: 30),
                    )),
                Container(
                  padding: EdgeInsets.all(10),
                    child: TextField(
                      controller: nameController,
                      decoration: InputDecoration(
                        fillColor: Colors.purple,
                        border: OutlineInputBorder(
                       ),
                        labelText: 'E-mail',
                      ),
                      onChanged: (value) {
                        email = value;
                      },
                    ),
                  ),

                Container(
                  padding: EdgeInsets.fromLTRB(10, 10, 10, 20),
                  child: TextField(
                    obscureText: true,
                    controller: passwordController,
                    decoration: InputDecoration(
                      enabledBorder: OutlineInputBorder(

                      ),
                      labelText: 'Password',
                    ),
                    onChanged: (value) {
                      pass = value;
                    },
                  ),
                ),


                Container(

                  child: FlatButton (minWidth: 200,
                    textColor: Colors.white,
                    color: Colors.purple,
                    child: Text('Login',
                      style: TextStyle(
                        fontSize: 25,
                      ),),
                    onPressed: () async {
                      Auth auth = Auth(email: email,password: pass);
                      dynamic User = await auth.SignIN();

                      if (User != null) {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => DashBoard()),);
                      }
                    },),
                ),

                Container(
                    child: Row(
                      children: <Widget>[
                        FlatButton(
                          textColor: Colors.purple,
                          child: Text(
                            'Register',
                            style: TextStyle(fontSize: 20,
                            color: Colors.purple)
                            ,
                          ),
                          onPressed: () {
                            Navigator.push(
                                context,
                                MaterialPageRoute(
                                  builder: (context) => Register(),
                                ));
                          },
                        )
                      ],
                      mainAxisAlignment: MainAxisAlignment.center,
                    ))
              ],
            )));
  }
}