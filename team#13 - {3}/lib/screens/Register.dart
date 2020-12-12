import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:health/model/patient.dart';
import 'package:health/services/services.dart';

import 'dashboard.dart';

class Register extends StatefulWidget {


  State<StatefulWidget> createState() => new _State();
}

class _State extends State<Register> {
  TextEditingController nameController = TextEditingController();
  TextEditingController ageController = TextEditingController();
  TextEditingController genderController = TextEditingController();
  TextEditingController bgController = TextEditingController();
  TextEditingController eController = TextEditingController();
  TextEditingController passwordController = TextEditingController();
  final _auth=FirebaseAuth.instance;
  String email,password,age,bg,name,gender;
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
            child: SingleChildScrollView(
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
                        labelText: 'Name',
                      ),onChanged: (value1){
                      name='sad';

                    },
                    ),
                  ),
                  Container(
                    padding: EdgeInsets.all(10),
                    child: TextField(

                      controller: ageController,
                      decoration: InputDecoration(
                        border: OutlineInputBorder(

                        ),
                        labelText: 'Age',
                      ),onChanged: (value){
                      age=value;

                    },
                    ),
                  ),
                  Container(
                    padding: EdgeInsets.all(10),
                    child: TextField(

                      controller: genderController,
                      decoration: InputDecoration(
                        border: OutlineInputBorder(

                        ),
                        labelText: 'Gender',
                      ),onChanged: (value){
                      gender=value;

                    },
                    ),
                  ),
                  Container(
                    padding: EdgeInsets.all(10),
                    child: TextField(

                      controller: bgController,
                      decoration: InputDecoration(
                        border: OutlineInputBorder(

                        ),
                        labelText: 'Blood Group',
                      ),onChanged: (value){
                        bg=value;

                    },
                    ),
                  ),

                  Container(
                    padding: EdgeInsets.all(10),
                    child: TextField(

                      controller: eController,
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
                          Auth auth = Auth(email:email,password:password,age: age,bg: bg,name: name,gender: gender);
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
              ),
            )));
  }
}