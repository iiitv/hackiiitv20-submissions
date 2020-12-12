import 'package:clinico/model/user.dart';
import 'package:clinico/pages/role.dart';
import 'package:clinico/services/backend.dart';
import 'package:clinico/shared/loading.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';

class DoctorCounter extends StatefulWidget {
  @override
  _DoctorCounterState createState() => _DoctorCounterState();
}

class _DoctorCounterState extends State<DoctorCounter> {
  TextEditingController counterController = TextEditingController();
  bool isLoading = false;
  int counter;
  @override
  void initState() {
    super.initState();
    getDoctorDetails();
  }

  void getDoctorDetails() async {
    setState(() => isLoading = true);
    DocumentSnapshot doc = await doctorCollection.doc(currentUser.uid).get();
    counter = doc.data()["counter"];
    counterController.text = counter.toString();
    setState(() => isLoading = false);
  }

  updateValue(int val)async{
      doctorCollection.doc(currentUser.uid).update({
        "counter":val
      });
      setState(()=>counter = val);
      counterController.text = counter.toString();
  }

  @override
  Widget build(BuildContext context) {
    return isLoading?Loading():ListView(
      children: [
        SizedBox(height:70),
        Center(
          child:Text(counter.toString(),style:TextStyle(fontSize:35))
        ),
        Center(
            child:GestureDetector(
              child: Card(
                color: Colors.indigo,
                elevation: 5,
                shape: RoundedRectangleBorder(
                  side: BorderSide(color: Colors.white70, width: 1),
                  borderRadius: BorderRadius.circular(100),
                ),
                margin: EdgeInsets.all(20.0),
                child:Padding(
                  padding: EdgeInsets.all(60),
                )
              ),
              onDoubleTap: (){
                updateValue(counter+1);
              },
            )
        ),
        Center(
          child: Padding(
            padding: const EdgeInsets.only(left: 15,right:15),
            child:Text("Double Tap on Above Button to increase the counter by one")
          ),
        ),
        SizedBox(height:20),
        Center(
          child:Text("OR",style:TextStyle(fontSize:30)) 
        ),
        SizedBox(height:20),
        Center(
          child:Text("Set It Manually") 
        ),
        Container(
          padding:EdgeInsets.all(20),
          child:TextField(
            keyboardType: TextInputType.number,
            textAlign: TextAlign.center,
            controller: counterController,
          ) 
        ),
        SizedBox(height:15),
        Center(
          child: RaisedButton(
            color: Colors.indigo,
            child:Text("Update"),
            onPressed: (){
              if(counterController.text.trim()!=""){
                 updateValue(int.parse(counterController.text.trim()));
              }
            },
          ),
        )
      ],
    );
  }
}