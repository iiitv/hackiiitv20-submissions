import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import './infopage.dart';
import './globalfile.dart';
class MyCustomForm extends StatefulWidget {
 // static const routeName = '/landPage';
  @override
  fstpg createState() => fstpg();
}

class fstpg extends State<MyCustomForm> {
  final myController = TextEditingController();
  @override
  void dispose() {
    myController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color(0XFF191D38),

      body: Container(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal:200, vertical: 30),
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
                    padding:
                        const EdgeInsets.symmetric(horizontal: 200.0, vertical: 30),
                    child: Text(
                      "Transport Game",
                      style: GoogleFonts.montserrat(
                        textStyle: Theme.of(context).textTheme.headline4,
                        color: Color(0xFFFffffff),
                        fontSize: 48,
                        fontWeight: FontWeight.w600,
                        //letterSpacing: -5,
                      ),
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
                                  horizontal: 150.0, vertical: 30),
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: <Widget> children: [
                                        Text("welcome to our app , " +
                                            myController.text),
                                        FlatButton(
                                            child: Text("Continue"),
                                            onPressed: () {
                                              Navigator.of(context)
                                                  .pushNamed(InfoPage.routeName);
                                         //make correction for route .
                                            })

                                      ], //edit here
                              )),
                        ),
                        SizedBox(
                          height: 20,
                        ),
                        Center(
                          child: RaisedButton(
                            elevation: 30,
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(50),
                            ),
                            padding: const EdgeInsets.symmetric(
                                horizontal: 125.0, vertical: 30),
                            color: Color(0XFF0AB286),
                            onPressed: () {

                              GlobalFile.updateName(myController.text);
                              return showDialog(
                                context: context,
                                builder: (context) {
                                  return AlertDialog(
                                    content: Column(
                                      children: [
                                        Text("Welcome to our app, " +
                                            myController.text),
                                        FlatButton(
                                            child: Text("Continue"),
                                            onPressed: () {
                                              Navigator.of(context)
                                                  .pushNamed(InfoPage.routeName);
                                            })
                                      ],
                                    ),
                                  );
                                },
                              );
                            },
                            child: Text("for policeman"),
                          ),
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