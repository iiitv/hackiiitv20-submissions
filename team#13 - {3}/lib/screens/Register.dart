import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:health/services/services.dart';

import 'dashboard.dart';

class Register extends StatefulWidget {


  State<StatefulWidget> createState() => new _State();
}

class _State extends State<Register> {
  TextEditingController nameController = TextEditingController();
  TextEditingController passwordController = TextEditingController();
  final _auth=FirebaseAuth.instance;
  String email;
  String password;




  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.purple,
          title: Padding(
            padding: EdgeInsets.all(90),
            child: Text('Health+',
                style: TextStyle(
                    fontSize: 35)),
          ),
        ),
        body: Padding(
            padding: EdgeInsets.all(10),
            child: Column(
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
                      border: OutlineInputBorder(

                      ),
                      labelText: 'E-mail',
                    ),onChanged: (value){
                    email=value;

                  },
                  ),
                ),
                Container(
                  padding: EdgeInsets.fromLTRB(10, 10, 10, 20),
                  child: TextField(

                      obscureText: true,

                      controller: passwordController,
                      decoration: InputDecoration(
                        border: OutlineInputBorder(),
                        labelText: 'Password',
                      ),
                      onChanged: (value){
                        password=value;
                      }
                  ),
                ),


                Container(
                    height: 50,
                    padding: EdgeInsets.fromLTRB(10, 0, 10, 0),
                    child: FlatButton(
                      minWidth: 200,
                      textColor: Colors.white,
                      color: Colors.purple,
                      child: Text('Register',
                          style: TextStyle(
                              fontSize: 25)),
                      onPressed: () async {
                        Auth auth = Auth(email, password);
                        dynamic User = await auth.Register();
                        if (User != null) {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                                builder: (context) => DashBoard()),);
                        }
                      },
                    )),

              ],
            )));
  }
}