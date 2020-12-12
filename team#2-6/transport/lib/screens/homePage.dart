import 'package:flutter/material.dart';
import 'package:geolocation/geolocation.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/services.dart';
import 'package:geoflutterfire/geoflutterfire.dart';

// import 'package:flutter_map/flutter_map.dart';

// class HomePage extends StatelessWidget {
//   static const String routeName = 'homePage';
//   Widget build(BuildContext ctx) {
//     return Scaffold(
//       body: Text('hi'),
//     );
//   }
// }

class HomePage extends StatefulWidget {
  @override
  static const String routeName = 'homePage';

  _AppState createState() => _AppState();

  final FirebaseAuth auth = FirebaseAuth.instance;

//   final User user = await auth.currentUser();
// final userid = user.uid;
// print(user.id);

// final User user = auth.currentUser().then((User user) {
//   final userid = user.uid;
  // rest of the code|  do stuff
// });

}

class _AppState extends State<HomePage> {
  final FirebaseAuth auth = FirebaseAuth.instance;
  String _locationMessage = "";
  FirebaseFirestore firestore = FirebaseFirestore.instance;
  Geoflutterfire geo = Geoflutterfire();
//     static Future<GeolocationResult> requestLocationPermission({
//   LocationPermission permission = const LocationPermission(),
//   bool openSettingsIfDenied = true,
// }) =>
//     _locationChannel.requestLocationPermission(_
//     ));

  getPermission() async {
    final GeolocationResult result =
        await Geolocation.requestLocationPermission();
    return result;
  }

  void _getCurrentLocation() async {
    // var position;

    return getPermission().then((result) async {
      // try{
      if (result.isSuccessful) {
        LocationResult result = await Geolocation.lastKnownLocation();
        double lat;
        double lng;
        if (result.isSuccessful) {
          // location request successful, location is guaranteed to not be null
          lat = result.location.latitude;
          lng = result.location.longitude;

          print(lat);

          setState(() {
            _locationMessage = "$lat, $lng";
          });
        } else {
          switch (result.error.type) {
            case GeolocationResultErrorType.runtime:
              // runtime error, check result.error.message
              break;
            case GeolocationResultErrorType.locationNotFound:
              // location request did not return any result
              break;
            case GeolocationResultErrorType.serviceDisabled:
              // location services disabled on device
              // might be that GPS is turned off, or parental control (android)
              break;
            case GeolocationResultErrorType.permissionNotGranted:
              // location has not been requested yet
              // app must request permission in order to access the location
              break;
            case GeolocationResultErrorType.permissionDenied:
              // user denied the location permission for the app
              // rejection is final on iOS, and can be on Android if user checks `don't ask again`
              // user will need to manually allow the app from the settings, see requestLocationPermission(openSettingsIfDenied: true)
              break;
            case GeolocationResultErrorType.playServicesUnavailable:
              // android only
              // result.error.additionalInfo contains more details on the play services error
              switch (result.error.additionalInfo
                  as GeolocationAndroidPlayServices) {
                // do something, like showing a dialog inviting the user to install/update play services
                case GeolocationAndroidPlayServices.missing:
                case GeolocationAndroidPlayServices.updating:
                case GeolocationAndroidPlayServices.versionUpdateRequired:
                case GeolocationAndroidPlayServices.disabled:
                case GeolocationAndroidPlayServices.invalid:
              }
              break;
          }
        }
        try {
          GeoFirePoint point = geo.point(latitude: lat, longitude: lng);
          await firestore.collection('user').doc(auth.currentUser.uid).set({
            'Location': point.data,
          });
        } catch (err) {
          var message = 'Please check your credentials';
          if (err.message != null) {
            message = err.message;
          }
        }
      }
    });
  }

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    print(auth.currentUser.uid);

    return MaterialApp(
        title: 'Flutter Demo',
        home: Scaffold(
            appBar: AppBar(title: Text("Location Services")),
            body: Align(
              child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    Text(_locationMessage),
                    FlatButton(
                        onPressed: () {
                          _getCurrentLocation();
                        },
                        color: Colors.green,
                        child: Text("Find Location"))
                  ]),
            )));
  }
}
