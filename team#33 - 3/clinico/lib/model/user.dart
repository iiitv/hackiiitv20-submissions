class MyUser{
  final String uid;
  final String displayName;
  final String email;
  final String photoURL;

  MyUser({this.uid,this.displayName,this.email,this.photoURL});
}

class Doctor extends MyUser{
  String clinicName;
  String fee;
}