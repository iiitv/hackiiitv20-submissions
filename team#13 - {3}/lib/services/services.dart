import 'package:firebase_auth/firebase_auth.dart';
// import 'package:flutter/foundation.dart';
import 'package:health/model/patient.dart';
import 'package:health/services/database.dart';

class Auth{
  final _auth = FirebaseAuth.instance;
  String email,password,age,bg,name,gender;

  Auth({this.email,this.password,this.age,this.bg,this.name,this.gender});

  Future SignIN() async
  {
    try {
      final user = await _auth.signInWithEmailAndPassword(
          email: email, password:password);
      if (user != null) {
        print(user);
        return user;}
      else
        return null;
      }
      catch (e){
      print(e);}
  
  }



  Future Register() async
  {
    try {
      final newUser = await _auth.createUserWithEmailAndPassword(email: email, password: password);

      final  user = await _auth.signInWithEmailAndPassword(
          email: email, password:password);
      //creating new documentU
      String s= FirebaseAuth.instance.currentUser.uid.toString();
      await Database(uid:s).updateUserData('ds', 'das', 'fasd', 'fad');
      if (user != null) {
        return user;}
      else
        return null;
    }
    catch (e){
      print(e);}

  }
}
