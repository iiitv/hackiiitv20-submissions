import 'package:flutter/material.dart';
import 'package:health/widget.dart';

import '../global.dart';

class Appointment extends StatefulWidget {
  @override
  _AppointmentState createState() => _AppointmentState();
}

class _AppointmentState extends State<Appointment> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(

      child: Scaffold(
        appBar: AppBar(backgroundColor: Colors.purple,
        title: Padding(
        padding: EdgeInsets.all(90),
       child: Text('Health+',
    style: TextStyle(
    fontSize: 35),),),),

        body: Container(
           child: Column(crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
            SizedBox(height: 20,),
            Text(
              " Doctors",
              style: TextStyle(
                fontSize: 30,

              ),
            ),
                SizedBox(height: 20,),
            ListView.builder(
              itemCount: doctorInfo.length,
              shrinkWrap: true,
              itemBuilder: (context, i) => DoctorContainer(id: i),
            )
            ]
        ),),
      ),
    );
  }
}
