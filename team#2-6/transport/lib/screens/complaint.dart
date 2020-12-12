import 'package:flutter/material.dart';
// import 'package:google_fonts/google_fonts.dart';
import './homepage.dart';
import './auth_screen.dart';

class Comp extends StatefulWidget {
  static const routeName = '/compPage';
  @override
  CompState createState() => CompState();
}

class CompState extends State<Comp> {
  final myController = TextEditingController();
  static bool isUser = false;
  static bool isAuthority = false;
  @override
  void dispose() {
    myController.dispose();
    super.dispose();
  }

  static bool getUser() {
    return isUser;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color(0XFF191D38),
      body: Container(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 30),
          child: Column(
            children: <Widget>[
              SizedBox(
                height: 20,
              ),

              // color :Colors.black38,
              Center(
                child: Card(
                  elevation: 20,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(50),
                  ),
                  color: Color(0XFFBD5EC3),
                  child: Padding(
                    padding: const EdgeInsets.symmetric(
                        horizontal: 20.0, vertical: 30),
                    child: TextField(
                      controller: myController,
                      decoration: InputDecoration(
                        border: OutlineInputBorder(),
                        labelText: 'Enter your Name',
                      ),
                    ),
                    //////////////////////
                  ),
                ),
              ),
              SizedBox(
                height: 20,
              ),

              Center(
                child: Card(
                  elevation: 20,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(50),
                  ),
                  color: Color(0XFF292E49),
                  child: Padding(
                    padding: const EdgeInsets.all(40.0),
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: <Widget>[
                        Card(
                          color: Color(0XFFA59F9F),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(50),
                          ),
                          child: Padding(
                              padding: const EdgeInsets.symmetric(
                                  horizontal: 20.0, vertical: 30),
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text("Provided Image , " + myController.text),
                                  Image.network(
                                      'https://picsum.photos/250?image=9'),

                                  // FlatButton(
                                  //     child: Text("Continue"),
                                  //     onPressed: () {
                                  //       Navigator.of(context)
                                  //           .pushNamed(InfoPage.routeName);
                                  //       //make correction for route .
                                  //     })
                                  // RaisedButton(
                                  //   child: Text("Sign in As User"),
                                  //   onPressed: () => {
                                  //     setState(
                                  //       () {
                                  //         isUser = true;
                                  //       },
                                  //     ),
                                  //     Navigator.pushNamed(
                                  //       context,
                                  //       AuthScreen.routeName,
                                  //       arguments: isUser,
                                  //     ),
                                  //   },
                                  // ),
                                  SizedBox(
                                    height: 20,
                                  ),
                                  RaisedButton(
                                      child: Text("Open the location on map"),
                                      onPressed: () => {
                                            Navigator.pushNamed(
                                              context,
                                              AuthScreen.routeName,
                                              arguments: isAuthority,
                                            ),
                                            //here link with map..
                                          }),
                                ], //edit here
                              )),
                        ),
                        SizedBox(
                          height: 20,
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ],

            // SafeArea(

            //   ),
          ),
        ),
      ),
    );
  }
}
