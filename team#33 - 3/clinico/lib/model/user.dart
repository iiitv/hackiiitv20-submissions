class MyUser{
  final String uid;
  final String displayName;
  final String email;
  final String photoURL;
  final String status;

  MyUser({this.uid,this.displayName,this.email,this.photoURL,this.status});
}

class Doctor extends MyUser{
  String clinicName;
  String fee;
}