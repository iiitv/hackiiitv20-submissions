class MyUser{
  final String uid;
  final String displayName;
  final String email;
  final String photoURL;
  bool isDoctor;
  MyUser({this.uid,this.displayName,this.email,this.photoURL});
}

class Doctor{
   String clinicName,educationalQualification ,timing ,address, fee, paymentMethod, bio,uid,displayName,email,photoURL ;
   Doctor({this.uid,this.displayName,this.email,this.photoURL,this.clinicName,this.educationalQualification ,this.timing ,this.address, this.fee, this.paymentMethod, this.bio});
}