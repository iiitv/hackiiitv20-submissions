import 'package:flutter/material.dart';
class DashBoard extends StatefulWidget {
  @override
  _DashBoardState createState() => _DashBoardState();
}

class _DashBoardState extends State<DashBoard> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(child: PageView(children: <Widget>[


      Column(children: <Widget>[
      Expanded(
        child: Scaffold(
        backgroundColor: Colors.white,
        appBar: AppBar(title: Text('Dashboard',
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
                  Container(margin: EdgeInsets.all(15),
                      height: 130,
                      width: 130,
                      decoration: BoxDecoration(
                        borderRadius:BorderRadius.circular(30),
                        // color: Colors.white,
                        color: Color.fromRGBO(238, 210, 238, 50),
                      ),
                      child: Center(child: Text('Apointment',
                      style: TextStyle(
                        fontSize: 25,
                        fontFamily: 'FjallaOne'
                      ),)),
                  ),





                  Container(height: 130,
                      width: 130,
                      margin: EdgeInsets.all(15),
                      decoration: BoxDecoration(
                        borderRadius:BorderRadius.circular(30),
                         color: Color.fromRGBO(238, 210, 238, 50),
                      ),
                      child: Center(child: Text('Video Call',
                          style: TextStyle(
                            fontSize: 25,
                              fontFamily: 'FjallaOne'
                          ),
                      ))),
                ],
              ),
              Row(mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Container(margin: EdgeInsets.all(15),
                    height: 130,
                    width: 130,
                    decoration: BoxDecoration(
                      borderRadius:BorderRadius.circular(30),
                      color: Color.fromRGBO(238, 210, 238, 50),
                    ),
                    child: Center(child: Text('',
                      style: TextStyle(
                        fontSize: 20,
                      ),)),
                  ),





                  Container(height: 130,
                      width: 130,
                      margin: EdgeInsets.all(15),
                      decoration: BoxDecoration(
                        borderRadius:BorderRadius.circular(30),
                        color: Color.fromRGBO(238, 210, 238, 50),
                      ),
                      child: Center(child: Text('',
                        style: TextStyle(
                          fontSize: 20,
                        ),
                      ))),

                ],

              )
              ,

              Container(margin: EdgeInsets.all(15),
                height: 130,
                width: 300,
                decoration: BoxDecoration(
                  borderRadius:BorderRadius.circular(30),
                  color: Color.fromRGBO(238, 210, 238, 50),
                ),
                child: Center(child: Text('Prescription',
                  style: TextStyle(
                    fontSize: 40,
                      fontFamily: 'FjallaOne'
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
            appBar: AppBar(title: Text('Dashboard',
              style: TextStyle(
                fontFamily: 'Comfortaa',
                fontSize: 40,
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
    ), );
  }}