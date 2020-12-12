import 'package:flutter/material.dart';
// import 'package:google_fonts/google_fonts.dart';
import './homepage.dart';
import './auth_screen.dart';

class MyCustomForm extends StatefulWidget {
  static const routeName = '/landPage';
  @override
  fstpg createState() => fstpg();
}

class fstpg extends State<MyCustomForm> {
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

  static bool getAuthority() {
    return isAuthority;
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
                    child: Text(
                      "Transport",
                      // style: GoogleFonts.montserrat(
                      //   textStyle: Theme.of(context).textTheme.headline4,
                      //   color: Color(0xFFFffffff),
                      //   fontSize: 48,
                      //   fontWeight: FontWeight.w600,
                      //   //letterSpacing: -5,
                      // ),
                    ),
                    //////////////////
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
                                  Text("welcome to our app , " +
                                      myController.text),
                                  // FlatButton(
                                  //     child: Text("Continue"),
                                  //     onPressed: () {
                                  //       Navigator.of(context)
                                  //           .pushNamed(InfoPage.routeName);
                                  //       //make correction for route .
                                  //     })
                                  RaisedButton(
                                    child: Text("Sign in As User"),
                                    onPressed: () => {
                                      setState(
                                        () {
                                          isUser = true;
                                          isAuthority = false;
                                        },
                                      ),
                                      Navigator.pushNamed(
                                        context,
                                        AuthScreen.routeName,
                                        arguments: isUser,
                                      ),
                                    },
                                  ),
                                  SizedBox(
                                    height: 20,
                                  ),
                                  RaisedButton(
                                      child: Text("Sign in As Authorities"),
                                      onPressed: () => {
                                            setState(
                                              () {
                                                isUser = false;
                                                isAuthority = true;
                                              },
                                            ),
                                            Navigator.pushNamed(
                                              context,
                                              AuthScreen.routeName,
                                              arguments: isAuthority,
                                            ),
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
