import 'package:geocoder/geocoder.dart';
import 'package:geolocator/geolocator.dart';

class Woman {
  String name;
  String email1; //First email of any close relative
  String email2; //Second email of any other close relative
  double locX;
  double locY;
  String addr1;
  String addr2;
  // These two emails will be used as cc in the mail sent during emergency
  Woman(String name, String email, String email2, double locX, double locY) {
    this.name = name;
    this.email1 = email1;
    this.email2 = email2;
    this.locX = locX;
    this.locY = locY;
  }
  Woman.a1() {}
  getPincode() {
    String str = getAddressBasedOnLocation();
    String pin = str.substring(str.length - 13, str.length - 7);
    return pin;
  }

  getAddressBasedOnLocation() async {
    final coordinates = new Coordinates(23.051101, 72.488794);
    var addresses =
        await Geocoder.local.findAddressesFromCoordinates(coordinates);
    addr2 = addresses.first.addressLine;
    return addr2;
  }
}
