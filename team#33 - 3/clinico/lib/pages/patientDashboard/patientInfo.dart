import 'package:clinico/pages/role.dart';
import 'package:clinico/services/auth.dart';
import 'package:flutter/material.dart';

class PatientInfo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Colors.grey[100],
        appBar: AppBar(backgroundColor:Colors.indigo,title:Text("Profile")),
        body:ListView(
            children: [
              Center(
                  child: Container(
                    margin: EdgeInsets.only(top: 20),
                    child:  CircleAvatar(
                        backgroundImage: NetworkImage(currentUser.photoURL),
                        radius: 50,
                      ),
                    ),
                  ),
               SizedBox(height: 25),
              Center(
                  child: Text(
                    currentUser.displayName,
                    style: TextStyle(
                      fontSize: 18,
                      letterSpacing: 2,
                    ),
              )),
              SizedBox(height: 10),
              Center(
                child: Text(currentUser.email,
                    style: TextStyle(
                      fontFamily: 'Futura',
                      color: Colors.black45,
                      fontSize: 15,
                      letterSpacing: 1,
                    )),
              ),
              SizedBox(height:20),
              Center(
                child:RaisedButton(
                  child: Text("Log Out",style: TextStyle(fontSize:16,color:Colors.white),),
                  onPressed: (){
                    // Navigator.pop(context);
                    AuthServices().signOutGoogle();
                  },
                  color: Colors.indigo,
                )
              )
            ]
        )
    );     
  }
}