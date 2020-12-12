import 'package:flutter/material.dart';
import 'package:geolocation/geolocation.dart';
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
  
  
}

class _AppState extends State<HomePage> {
  String _locationMessage = "";

  getPermission() async {
    final GeolocationResult result = await Geolocation.requestLocationPermission({LocationPermission permission: const LocationPermission(),
bool openSettingsIfDenied: true});
            return result;
  }

  void _getCurrentLocation() async {
      // var position;
    return getPermission().then((result) async{
      if(result.isSuccessful)
{
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
      switch(result.error.additionalInfo as GeolocationAndroidPlayServices) {
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
}
    });
      
  }

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
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
