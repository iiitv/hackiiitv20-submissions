import 'package:flutter/material.dart';
import 'package:firebase_database/firebase_database.dart';
import 'package:geolocator/geolocator.dart';
import 'package:team_31/homepage.dart';
class Needregister extends StatefulWidget
 {
  @override
  _NeedregisterState createState() => _NeedregisterState();
}

class _NeedregisterState extends State<Needregister> {
  final fb = FirebaseDatabase.instance;
 
  final List<String> textFieldsValue = [];

  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  String _locationMessagelatitude = ""; 

  String _locationMessagelongitude = ""; 

  String retrievedName="";

  void _getCurrentLocation() async {

    final position = await Geolocator.getCurrentPosition(desiredAccuracy: LocationAccuracy.high);
    print(position);
    

    setState(() {
      _locationMessagelatitude = "${position.latitude}";
      _locationMessagelongitude =  "${position.longitude}";
    });

  }

  @override
  Widget build(BuildContext context) {
    final ref=fb.reference().child("hackbeast");
    return Scaffold(
        body: Center(
          child: Form(
              key: _formKey,
              child:
               Column(
                 mainAxisAlignment: MainAxisAlignment.center,
                 children: 
                 [ 
                TextFormField
                (
                 decoration: InputDecoration(
                   fillColor: Colors.grey,
                   focusColor: Colors.grey,
                  labelText: 'Your pincode',
                  
                  ),
                  keyboardType: TextInputType.number,
                  validator: (value) {
                    textFieldsValue.add(value);
                    return ;
                  },
                ),
                TextFormField(
                  decoration: InputDecoration(
                  fillColor: Colors.grey,
                  focusColor: Colors.grey,
                  labelText: 'Your email id',
                  
                  ),
                  keyboardType: TextInputType.emailAddress,
                  validator: (value) {
                    textFieldsValue.add(value);
                    return ;
                  },
                ),
                 
                          SizedBox(
                       height: 20.0,
                        ),
                ////////////////////////////////////////////////
               RaisedButton
               (
                    child: Text('Save',style: TextStyle(fontSize: 20)),
                  onPressed: () 
          {
          _formKey.currentState.validate();
          //print(textFieldsValue);
            _getCurrentLocation();
              
               //ref.child("test").child("write").update("5");
                 //"rollno" : "2522",
                 

              // });
                // ref.child("helping").child("${textFieldsValue[0]}").child("address").child("${1}").child("latitude").once().then((DataSnapshot data)
                // {
                //    setState(() 
                //   {
                //   retrievedName=data.value;
                //      print(retrievedName);
                //    });

                //    if(retrievedName==null)
                //    {
                //      ref.child("helping").child("${textFieldsValue[0]}").set({
                //        "number": "1",
                //      });
                //    }
                //    else
                //    {
                //         ref.child("helping").child("${textFieldsValue[0]}").set({
                //        "number": "1",
                //      });
                //    }
                // });//);
                
             ref.child("helping").child("${textFieldsValue[0]}").child("address").child("${1}").set({
                          "latitude": _locationMessagelatitude,
                          "longitude":_locationMessagelongitude,
                          "Email": ("${textFieldsValue[1]}"),
                        
                        }
                 );

                // ref.child("helping").child("${textFieldsValue[0]}").child("address").child("${2}").set({
                //           "latitude": "244522",
                //           "longitude":"410255",
                //           "Email": ("${textFieldsValue[1]}"),
                        
                //         }
                //  );
                //  ref.child("helping").child("${textFieldsValue[0]}").child("address").child("${3}").set({
                //           "latitude": "244522",
                //           "longitude":"410255",
                //           "Email": ("${textFieldsValue[1]}"),
                        
                //         }
                //  );

            // ref.child("kerala").child("${textFieldsValue[0]}").set({
            //   "latitude": "25522",
            //   "longitude": "53336",
                        
            //             }
            //      );
             
            //Text("Thank You");
               Navigator.push(context,MaterialPageRoute(builder: (context) =>  HomePage()),);

           }
                
                 ),
                 // Text("Thank You"),
                // TextFormField(
                //   validator: (value) {
                //     textFieldsValue.add(value);
                //     ///it will be more complex because you want dynamic textfields
                //   },
                // ),
              ])),
        ),
        
        //floatingActionButton: FloatingActionButton
        // RaisedButton
        // (
        //   onPressed: () 
        //   {
        //   _formKey.currentState.validate();
        //   //print(textFieldsValue);
        //     _getCurrentLocation();
              
        //        //ref.child("test").child("write").update("5");
        //          //"rollno" : "2522",
                 

        //       // });
        //         // ref.child("helping").child("${textFieldsValue[0]}").child("address").child("${1}").child("latitude").once().then((DataSnapshot data)
        //         // {
        //         //    setState(() 
        //         //   {
        //         //   retrievedName=data.value;
        //         //      print(retrievedName);
        //         //    });

        //         //    if(retrievedName==null)
        //         //    {
        //         //      ref.child("helping").child("${textFieldsValue[0]}").set({
        //         //        "number": "1",
        //         //      });
        //         //    }
        //         //    else
        //         //    {
        //         //         ref.child("helping").child("${textFieldsValue[0]}").set({
        //         //        "number": "1",
        //         //      });
        //         //    }
        //         // });//);
                
        //      ref.child("helping").child("${textFieldsValue[0]}").child("address").child("${1}").set({
        //                   "latitude": _locationMessagelatitude,
        //                   "longitude":_locationMessagelongitude,
        //                   "Email": ("${textFieldsValue[1]}"),
                        
        //                 }
        //          );

        //         // ref.child("helping").child("${textFieldsValue[0]}").child("address").child("${2}").set({
        //         //           "latitude": "244522",
        //         //           "longitude":"410255",
        //         //           "Email": ("${textFieldsValue[1]}"),
                        
        //         //         }
        //         //  );
        //         //  ref.child("helping").child("${textFieldsValue[0]}").child("address").child("${3}").set({
        //         //           "latitude": "244522",
        //         //           "longitude":"410255",
        //         //           "Email": ("${textFieldsValue[1]}"),
                        
        //         //         }
        //         //  );

        //     // ref.child("kerala").child("${textFieldsValue[0]}").set({
        //     //   "latitude": "25522",
        //     //   "longitude": "53336",
                        
        //     //             }
        //     //      );

        //    }
        // ),
        //  Text(retrievedName),
      );
  }
}