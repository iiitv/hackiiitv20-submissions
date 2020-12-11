import 'package:clinico/model/user.dart';
import 'package:clinico/pages/patientDashboard/hospitalCard.dart';
import 'package:clinico/shared/loading.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';

final CollectionReference doctorCollection = FirebaseFirestore.instance.collection('doctors');
final CollectionReference patientCollection = FirebaseFirestore.instance.collection('patients');

class Backend{
    Future<void> addDoctorInDataBase(Doctor doctor)async{
      await doctorCollection.doc(doctor.uid).set({
         "clinicName":doctor.clinicName,
         "educationalQualification":doctor.educationalQualification,
         "timing":doctor.timing,
         "address":doctor.address,
         "fee":doctor.fee,
         "paymentMethod":doctor.paymentMethod, 
         "bio":doctor.bio,
         "displayName":doctor.displayName,
         "email":doctor.email,
         "photoURL":doctor.photoURL,
         "searchedText":doctor.clinicName.toLowerCase()
      });
    }

    showAllHospitalCard(){
      return StreamBuilder(
        stream: doctorCollection.snapshots(),
        builder: (context,snapshot){
          if(!snapshot.hasData){
            return Loading();
          }
          List<HospitalCard> allhospital = new List();
          snapshot.data.docs.forEach((doc){
              allhospital.add(
                HospitalCard(
                  clinicName:doc.data()["clinicName"],
                  doctorName: doc.data()["displayName"],
                  uid:doc.id
                )
              );
          });
          return Column(
            children:allhospital
          );
        }
      );
    }

    Future<void> AddPatient(MyUser user)async{
      await patientCollection.doc(user.uid).set({
        "name":user.displayName,
        "email":user.email,
        "photoURL":user.photoURL,
      });
    }

    SearchHospital(String key){
      return StreamBuilder(
        stream: doctorCollection.where("searchedText",isGreaterThanOrEqualTo: key).snapshots(),
        builder: (context,snapshot){
          if(!snapshot.hasData){
            return Loading();
          }
          List<HospitalCard> allhospital = new List();
          snapshot.data.docs.forEach((doc){
              allhospital.add(
                HospitalCard(
                  clinicName:doc.data()["clinicName"],
                  doctorName: doc.data()["displayName"],
                  uid:doc.id
                )
              );
          });
          if(allhospital.isEmpty){
            return Column(
              children: [
                Padding(
                  padding: const EdgeInsets.all(13.0),
                  child: Center(
                    child:Text(
                      "Look like there is no great match according to your search.",
                      style: TextStyle(fontSize: 18)
                    )
                  ),
                ),
                Center(
                  child:Text(
                    "Other Hospital",
                    style: TextStyle(fontSize: 18)
                  )
                ),
                showAllHospitalCard()
              ],
            );
          }
          return Column(
            children: allhospital,
          );
        }
      );
    }
}