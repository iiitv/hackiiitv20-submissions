import 'Woman.dart';

class Local {
  String name;
  String email;
  double locX;
  double locY;
  // Local(Local obj) {
  //   this.name = obj.name;
  //   this.email = obj.email;
  //   this.locX = obj.locX;
  //   this.locY = obj.locY;
  // }
  //The email of the local will be used to send the current location of emargency if and only of the
  //local lies in the radius of action
  Local(String name, String email, double locX, double locY) {
    this.name = name;
    this.email = email;
    this.locX = locX;
    this.locY = locY;
    display();
  }

  void display() {
    print(name);
    print(email);
  }
}
