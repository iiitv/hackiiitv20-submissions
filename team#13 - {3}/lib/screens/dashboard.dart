import 'package:flutter/material.dart';

import 'appointment.dart';

class DashBoard extends StatefulWidget {
  @override
  _DashBoardState createState() => _DashBoardState();
}

class _DashBoardState extends State<DashBoard> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(child: Expanded(
      child: PageView(children: <Widget>[


        Column(children: <Widget>[
          Expanded(
            child: Scaffold(
              backgroundColor: Colors.white,
              appBar: AppBar(title: Text('',
                style: TextStyle(
                  fontFamily: 'Comfortaa',
                  fontSize: 40,
                  color: Colors.white,
                ),
              ),
                backgroundColor: Colors.purple,
              ),
              body: Column(mainAxisAlignment: MainAxisAlignment.start,
                  children: <Widget>[
                    Container(
                      child: Center(
                        child: Image(image: AssetImage('images/picHead.jpg'),),
                      ),
                    ),

                    Row(mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Container(
                          margin: EdgeInsets.all(15),
                          height: 130,
                          width: 180,
                          decoration: BoxDecoration(
                            borderRadius:BorderRadius.circular(30),
                            // color: Colors.white,
                            color: Color.fromRGBO(238, 210, 238, 50),
                          ),
                          child: Center(child: FlatButton(
                            onPressed: (){
                              Navigator.push(context, MaterialPageRoute(builder: (context)=>Appointment()));
                            },
                            child: Text('Appointment',
                              style: TextStyle(
                                  fontSize: 25,
                                  fontFamily: 'Comfortaa'
                              ),),
                          )),
                        ),


                        Container(
                          margin: EdgeInsets.all(15),
                          height: 130,
                          width: 180,
                          decoration: BoxDecoration(
                            borderRadius:BorderRadius.circular(30),
                            // color: Colors.white,
                            color: Color.fromRGBO(238, 210, 238, 50),
                          ),
                          child: Center(child: FlatButton(
                            onPressed: (){
                              Navigator.push(context, MaterialPageRoute(builder: (context)=>Appointment()));
                            },
                            child: Text('Appointment',
                              style: TextStyle(
                                  fontSize: 25,
                                  fontFamily: 'Comfortaa'
                              ),),
                          )),
                        ),




                      ],
                    ),
                    Row(mainAxisAlignment: MainAxisAlignment.center,
                      children: [

                        Container(
                          margin: EdgeInsets.all(15),
                          height: 130,
                          width: 180,
                          decoration: BoxDecoration(
                            borderRadius:BorderRadius.circular(30),
                            // color: Colors.white,
                            color: Color.fromRGBO(238, 210, 238, 50),
                          ),
                          child: Center(child: FlatButton(
                            onPressed: (){
                              Navigator.push(context, MaterialPageRoute(builder: (context)=>Appointment()));
                            },
                            child: Text('Appointment',
                              style: TextStyle(
                                  fontSize: 25,
                                  fontFamily: 'Comfortaa'
                              ),),
                          )),
                        ),






                        Container(
                          margin: EdgeInsets.all(15),
                          height: 130,
                          width: 180,
                          decoration: BoxDecoration(
                            borderRadius:BorderRadius.circular(30),
                            // color: Colors.white,
                            color: Color.fromRGBO(238, 210, 238, 50),
                          ),
                          child: Center(child: FlatButton(
                            onPressed: (){
                              Navigator.push(context, MaterialPageRoute(builder: (context)=>Appointment()));
                            },
                            child: Text('Appointment',
                              style: TextStyle(
                                  fontSize: 25,
                                  fontFamily: 'Comfortaa'
                              ),),
                          )),
                        ),
                      ],

                    )
                    ,

                    Container(margin: EdgeInsets.all(15),
                      height: 130,
                      width: 400,
                      decoration: BoxDecoration(
                        borderRadius:BorderRadius.circular(30),
                        color: Color.fromRGBO(238, 210, 238, 50),
                      ),
                      child: Center(child: Text('Prescription',
                        style: TextStyle(
                            fontSize: 40,
                            fontFamily: 'Comfortaa'
                        ),)),
                    ),




                  ]
              ),
            ),
          )],),

        Column(children: <Widget>[
          Expanded(
            child: Scaffold(
              backgroundColor: Colors.white,
              appBar: AppBar(title: Text('My Profile',
                style: TextStyle(
                  fontFamily: 'Comfortaa',
                  fontSize: 30,
                  color: Colors.white,
                ),
              ),
                backgroundColor: Colors.purple,
              ),
              body:Column(mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.end,
                children: <Widget>[
                  SizedBox(width: 350,),
                  CircleAvatar(child:Image(image: AssetImage('images/picProfile.png'),),
                    backgroundColor: Colors.white,
                    radius: 150,),


                  Container(height: 50,
                      width: 250,
                      margin: EdgeInsets.all(15),
                      decoration: BoxDecoration(
                        borderRadius:BorderRadius.circular(30),
                        color: Color.fromRGBO(238, 210, 238, 50),
                      ),
                      child: Center(child: Text('Details',
                        style: TextStyle(
                          fontSize: 20,
                        ),
                      ))),
                  Container(height: 50,
                      width: 250,
                      margin: EdgeInsets.all(15),
                      decoration: BoxDecoration(
                        borderRadius:BorderRadius.circular(30),
                        color: Color.fromRGBO(238, 210, 238, 50),
                      ),
                      child: Center(child: Text('My Reports',
                        style: TextStyle(
                          fontSize: 20,
                        ),
                      ))),
                  Container(height: 50,
                      width: 250,
                      margin: EdgeInsets.all(15),
                      decoration: BoxDecoration(
                        borderRadius:BorderRadius.circular(30),
                        color: Color.fromRGBO(238, 210, 238, 50),
                      ),
                      child: Center(child: Text('Payments',
                        style: TextStyle(
                          fontSize: 20,
                        ),
                      ))),
                  Container(height: 50,
                      width: 250,
                      margin: EdgeInsets.all(15),
                      decoration: BoxDecoration(
                        borderRadius:BorderRadius.circular(30),
                        color: Color.fromRGBO(238, 210, 238, 50),
                      ),
                      child: Center(child: Text('Settings',
                        style: TextStyle(
                          fontSize: 20,
                        ),
                      ))),



                ],) ,),


          )],),




      ],
      ),
    ), );
  }}


