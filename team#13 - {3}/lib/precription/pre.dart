import 'package:flutter/material.dart';
import 'package:health/global.dart';
import 'package:health/precription/pre_widget.dart';
class Prescription extends StatelessWidget {
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
                  " Prescription",
                  style: TextStyle(
                    fontSize: 30,

                  ),
                ),
                SizedBox(height: 20,),
                ListView.builder(
                  itemCount: preList.length,
                  shrinkWrap: true,
                  itemBuilder: (context, i) => PreContainer(id: i),
                )
              ]
          ),),
      ),
    );
  }
}
