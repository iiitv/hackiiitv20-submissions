import 'package:flutter/material.dart';
//import 'package:url_launcher/url_launcher.dart';
//import 'package:url_launcher/url_launcher.dart';
import 'package:team_31/needregister.dart';
import 'package:team_31/main_1.dart';

class Aftermain extends StatelessWidget
{
     @override
     Widget build(BuildContext context)
     {
          return Scaffold
            (
                appBar: AppBar(backgroundColor: Color(0xffb30000),title: Center
                (
                  child: Container
                (
                  child: Row
                  (
                    mainAxisAlignment: MainAxisAlignment.center,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: <Widget>
                    [
                      
                       //child: Center() // Icon(Icons.navigate_before,size: 50,color: Colors.white,),
                      Text('HACKBEAST',  style: TextStyle( fontSize: 25,color: Color(0xffffffff)),textAlign:  TextAlign.center, ),
                      //Icon(Icons.navigate_before,size: 20,color: Colors.white,),
                      //Icon(Icons.navigate_next,color: Colors.transparent,),
                      //Icon(Icons.navigate_next,size: 50,color: Colors.white,),
                    ],
                  ),
                )
                 //Text('welcome to hello world',  style: TextStyle(color: Colors.black), ),
                  ), ),
                
                backgroundColor: Color(0xffe6e6e6),
               // body: Center(child: Text('hello raunak', style: TextStyle(color: Colors.white),), ),
               body: Container
               (
                 child: Center
                 (
                   child: Column
                   (
                     mainAxisAlignment: MainAxisAlignment.center,
                     children: <Widget>
                     [
                       Text('Woman Safety Bharat', style: TextStyle(color: Colors.black,fontFamily: 'Merriweather',fontWeight: FontWeight.w600,fontSize: 35),),
                      SizedBox(
                       height: 20.0,
                        ),
                       RaisedButton
                       (
                         child: Text('Woman Help',style: TextStyle(fontSize: 20)),
                         onPressed: (){
                            Navigator.push(context,MaterialPageRoute(builder: (context) => App()),);
                         },
                         color: Color(0xffb30000),
                          textColor: Colors.white,
                          padding: EdgeInsets.fromLTRB(10, 10, 10, 10),
                          splashColor: Colors.red,
                      ),
                          SizedBox(
                       height: 20.0,
                        ),
                      RaisedButton
                       (
                         child: Text('Register As Help',style: TextStyle(fontSize: 20)),
                         onPressed: ()
                         {
                            Navigator.push(context,MaterialPageRoute(builder: (context) => Needregister()),);//print("RaisedButton clicked");
                         },
                         color: Colors.green,
                          textColor: Colors.white,
                          padding: EdgeInsets.fromLTRB(10, 10, 10, 10),
                          splashColor: Colors.red,
                      ),
                     ],
                   ),
                 ),
               ),
            
          );
     }
}
