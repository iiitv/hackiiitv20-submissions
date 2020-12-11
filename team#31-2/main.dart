import 'package:flutter/material.dart';
import 'package:geolocator/geolocator.dart';
import 'package:firebase_database/firebase_database.dart';
//import 'package:firebase_database/firebase_database.dart';


void main() => runApp(App());

class App extends StatefulWidget {
  @override 
  _AppState createState() => _AppState(); 
}

class _AppState extends State<App> 
{
   final fb = FirebaseDatabase.instance;

  String _locationMessagelatitude = ""; 
  String _locationMessagelongitude = ""; 

  void _getCurrentLocation() async {

    final position = await Geolocator.getCurrentPosition(desiredAccuracy: LocationAccuracy.high);
    print(position);
    

    setState(() {
      _locationMessagelatitude = "${position.latitude}";
      _locationMessagelongitude =  "${position.longitude}";
    });

  }


  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    final ref=fb.reference().child("Student");
    return MaterialApp(
      title: 'Flutter Demo',
      home: Scaffold(
        appBar: AppBar(
          title: Text("Location Services")
        ),
        body: Align(
            child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
            Text(_locationMessagelatitude), 
            Text(_locationMessagelongitude),
            FlatButton(
              onPressed: () {
                  _getCurrentLocation();
                    ref.child("anuj").set({
                          "latitude": _locationMessagelatitude,
                          "longitude":_locationMessagelongitude,
                        
                        }
                 );
              },
              color: Colors.green,
              child: Text("Find Location")
            ),
            // RaisedButton(
            //   onPressed: (){
            //     // ref.child("raunak").set(_locationMessagelatitude);
            //     // ref.child("raunak").set(_locationMessagelongitude);
            //      ref.child("raunak").set({
            //               "latitude": _locationMessagelatitude,
            //               "longitude":_locationMessagelongitude,
                        
            //             }
            //      );

            //   },
            //   child: Text("Registration"),
            // ),
          ]),
        )
      )
    );
  }
}