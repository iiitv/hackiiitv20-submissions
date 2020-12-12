import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:health/model/patient.dart';

class Database{
    String uid;
  Database({this.uid});

  final CollectionReference Ref = FirebaseFirestore.instance.collection('Users');
  Future updateUserData(String name,String age,String gender,String bg) async{
    return await Ref.doc(uid).set({
      'name':name,
      'age':age,
      'gender':gender,
      'bg':bg,
    });

  }
}