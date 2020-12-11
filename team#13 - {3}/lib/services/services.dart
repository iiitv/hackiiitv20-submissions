import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/foundation.dart';

class Auth{
  final _auth = FirebaseAuth.instance;
  String email;
  String password;

  Auth(String e,String p){
    email=e;
    password=p;
}
  Future SignIN() async
  {
    try {
      final user = await _auth.signInWithEmailAndPassword(
          email: email, password: password);
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
      //navigate here
      final user = await _auth.signInWithEmailAndPassword(
          email: email, password: password);
      if (user != null) {
        print(user);
        return user;}
      else
        return null;
    }
    catch (e){
      print(e);}

  }
}