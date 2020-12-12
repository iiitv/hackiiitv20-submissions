import 'package:flutter/material.dart';
import 'package:geolocator/geolocator.dart';
import 'package:firebase_database/firebase_database.dart';
//import 'package:firebase_database/firebase_database.dart';
//import 'package:team_31/myData.dart';
//import 'package:geolocator/geolocator.dart';
import 'package:geocoder/geocoder.dart';
import 'dart:math' show cos, sqrt, asin;

import 'package:team_31/sentmeassage.dart';

//import 'package:team_31/sentmeassage.dart';

//import 'package:team_31/sentmeassage.dart';

//import 'package:team_31/sentmeassage.dart';
//import 'package:team_31/MyData.dart';

class MyData 
{
  String latitude;
  String longitude;
  String email;

  MyData( String latitude,String longitude,String email)
  {
    this.latitude = latitude;
    this.longitude = longitude;
    this.email= email;
  }
  

}
void main() => runApp(App());
// String addr2;
// getAddressBasedOnLocation() async {
//     final coordinates = new Coordinates(23.051101, 72.488794);
//     var addresses =
//         await Geocoder.local.findAddressesFromCoordinates(coordinates);
//     addr2 = addresses.first.addressLine;
//     return addr2;
//  }
// ignore: camel_case_types
// class myData 
// {
//   String latitude, longitude;

//   myData(this.latitude, this.longitude);
// }

bool calculateDistance(String lt1, String lo1,String lt2,String lo2)
{
    var lat1 = double.parse(lt1);
    var lon1 = double.parse(lo1);
    var lat2 = double.parse(lt2);
    var lon2 = double.parse(lo2);

  //print("done");
    var p = 0.017453292519943295;
    var c = cos;
    var a = 0.5 - c((lat2 - lat1) * p)/2 + 
          c(lat1 * p) * c(lat2 * p) * 
          (1 - c((lon2 - lon1) * p))/2;
    double dist = 12742 * asin(sqrt(a));
    if(dist<3){
      
      return true;
    }
    else{
      return false;
    }
  }
class App extends StatefulWidget {
  @override 
  _AppState createState() => _AppState(); 
}

class _AppState extends State<App> 
{

   //var alldata = new <MyData>();
    
   final fb = FirebaseDatabase.instance;

  String _locationMessagelatitude = ""; 
  String _locationMessagelongitude = ""; 
  String postalcode="";
  String  retrievelatitude="";
  String   retrievelongitude="";
  String    retrieveemail="";
  String email="";
  String  addre="";
  void _getCurrentLocation() async {

    final position = await Geolocator.getCurrentPosition(desiredAccuracy: LocationAccuracy.high);
    //print(position);
    
    setState(() {
      _locationMessagelatitude = "${position.latitude}";
      _locationMessagelongitude =  "${position.longitude}";
    });
    //print(await addresses);

        
    // final coordinates = new Coordinates(position.latitude, position.longitude);
    // List<Address> addresses = await Geocoder.local.findAddressesFromCoordinates(coordinates);
    // print(addresses);

    final coordinates = new Coordinates(position.latitude, position.longitude);
    //final coordinates = new Coordinates(23.051101, 72.488794);
        var addresses = await Geocoder.local.findAddressesFromCoordinates(coordinates);
        var first = addresses.first;
        // ignore: unused_local_variable
        var addr = addresses.first.addressLine;
       addre  = addr;
       // print(addr);
       // ignore: await_only_futures
       //await print(first);
    //     print("${first.featureName} : ${first.addressLine}");

    //     print("Country:${first.countryName} AdminArea:${first.adminArea} SubAdminArea:${first.subAdminArea}");

    //  print("Locality:${first.locality}: postalcode: ${first.postalCode}");
       postalcode = "${first.postalCode}";
      // print(postalcode);
  }
  @override
  Widget build(BuildContext context) {
    final ref=fb.reference().child("need");
    final refTwo=fb.reference().child("hackbeast");
    return MaterialApp(
      title: 'hackathon',
      home: Scaffold(
        appBar: AppBar(
          title: Text("Panic Button"),
          centerTitle: true,
        ),
        body: Align(
            child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
           // Text(_locationMessagelatitude), 
            //Text(_locationMessagelongitude),
            
            FlatButton(
              onPressed: () {
                  _getCurrentLocation(); 
                  
                  //myData d = new myData;

                    // myData d = new myData;
                     
                      
                    ref.child("women").set({
                          "latitude": _locationMessagelatitude,
                          "longitude":_locationMessagelongitude,
                        
                        }
                 );
                 // ignore: unnecessary_brace_in_string_interps
                
           for(var i=1;i<=1;i++)
           {
             
                 // ignore: unnecessary_brace_in_string_interps
                 refTwo.child("helping").child(postalcode).child("address").child("${i}").child("latitude").once().then((DataSnapshot snap)
                 {
                      // email=snap.value.['latitude'];
                  setState(() 
                  {
                     retrievelatitude="${snap.value}";
                      // print(retrievelatitude);
            
                 });
                  });

                  // ignore: unnecessary_brace_in_string_interps
                  refTwo.child("helping").child(postalcode).child("address").child("${i}").child("longitude").once().then((DataSnapshot snap)
                 {
                      // email=snap.value.['latitude'];
                  setState(() 
                  {
                     retrievelongitude="${snap.value}";
                      // print( retrievelongitude);
            
                 });
                  });

                  // ignore: unnecessary_brace_in_string_interps
                  refTwo.child("helping").child(postalcode).child("address").child("${i}").child("Email").once().then((DataSnapshot snap)
                 {
                      // email=snap.value.['latitude'];
                  setState(() 
                  {
                     retrieveemail="${snap.value}";
                      // print(retrieveemail);
            
                 });
                  });
                // MyData ob  =
                 MyData md= new MyData(retrievelatitude,retrievelongitude,retrieveemail);
                 //print(md.email);
               //  print(addre);
              //  print(_locationMessagelatitude);
              //   print(_locationMessagelongitude);
              //    print(md.latitude);
              //     print( md.longitude);

               // bool kk = calculateDistance(_locationMessagelatitude, _locationMessagelongitude, md.latitude, md.longitude);
                //print(kk);
                if(calculateDistance(_locationMessagelatitude, _locationMessagelongitude, md.latitude, md.longitude) != null)
                {
                          sendMail(md.email, addre);
                          print("sent mail");
                }
                else
                {
                      print("no candidate");
                }
                  //allData.add(md);
           }
            //print(allData);
                //   refTwo.child("helping").child(postalcode).child("address").child("${3}").once().then((DataSnapshot snap)
                //  {
                //       // email=snap.value.['latitude'];
                //   setState(() 
                //   {
                //      retrievedname= snap.["${latitude}"].value;
                //        print(retrievedname);
            
                //  });
                //  });

               
                  //print(await ${addresses);
                //  ref.child("women").set({
                //           "latitude": _locationMessagelatitude,
                //           "longitude":_locationMessagelongitude,
                        
                //         }
                  
                //  );
                //   ref.child("ahemdabad").child("844101").child("3").set({
                //           "latitude": _locationMessagelatitude,
                //           "longitude":_locationMessagelongitude,
                        
                //         }
                  
                //  );
            
                //  ref.child("women").once().then((DataSnapshot snap)
                // {
                //  //  var keys = data.value;
                //    //print(data.value.key);
                //   var keys = snap.value.keys;
                //   var data=snap.value;
                //    allData.clear();
                //   for (var key in keys) 
                //   {
                //    myData d = new myData
                //    (
                //      data[key]['latitude'],
                //      data[key]['longitude'],
                //     );
                //     allData.add(d);
                //     //print(d.latitude);
                //  }
                // setState(() {
                     //print('Length : ${allData.length}');
                      //retrievedName=' ${first.postalCode}';
                      //print( retrievedName);
              // });
    
                  // print(key);
                  // setState(() 
                  // {
                  //   retrievedName=data.value;
                  // });
              //});

              },
              color: Color(0xffb30000),
              child: Text("Emergency",style: TextStyle(color: Colors.white,fontSize: 35,fontFamily: 'Merriweather'),)

            ),
              //Text(retrievelatitude),
            // RaisedButton(
             // onPressed: (){
                // ref.child("raunak").set(_locationMessagelatitude);
                // ref.child("raunak").set(_locationMessagelongitude);
                //  ref.child("raunak").set({
                //           "latitude": _locationMessagelatitude,
                //           "longitude":_locationMessagelongitude,
                        
                //         }
                //  );
                  //ref.child("name").once().then((DataSnapshot data)
            //   onPressed: ()
            //   {
            //     ref.child("name").child("anuj").child("latitude").once().then((DataSnapshot data)
            //     {
            //       setState(() 
            //       {
            //         retrievedName=data.value;
            //       });
            //     });
              
            

            //   },
            //   child: Text("Retrive"),
            // ),
            // Text(retrievedName),
          ]),
        )
      )
    );
  }
}