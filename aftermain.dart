import 'package:flutter/material.dart';
//import 'package:url_launcher/url_launcher.dart';
//import 'package:url_launcher/url_launcher.dart';
import 'package:team_31/needregister.dart';


class Aftermain extends StatelessWidget
{
     @override
     Widget build(BuildContext context)
     {
          return Scaffold
            (
                appBar: AppBar(backgroundColor: Colors.pink,title: Center
                (
                  child: Container
                (
                  child: Row
                  (
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: <Widget>
                    [
                      
                        // Icon(Icons.navigate_before,size: 50,color: Colors.white,),
                      Text('HACKBEAST',  style: TextStyle( fontSize: 25,color: Colors.black,),  ),
                      //Icon(Icons.navigate_before,size: 20,color: Colors.white,),
                      //Icon(Icons.navigate_next,color: Colors.transparent,),
                      //Icon(Icons.navigate_next,size: 50,color: Colors.white,),
                    ],
                  ),
                )
                 //Text('welcome to hello world',  style: TextStyle(color: Colors.black), ),
                  ), ),
                
                backgroundColor: Colors.yellow,
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
                       Text('Women Shafety Bharat', style: TextStyle(color: Colors.black),),
                      SizedBox(
                       height: 20.0,
                        ),
                       RaisedButton
                       (
                         child: Text('Register as women need '),
                         onPressed: (){
                            Navigator.push(context,MaterialPageRoute(builder: (context) => Needregister()),);
                         },
                         color: Colors.green,
                          textColor: Colors.white,
                          padding: EdgeInsets.fromLTRB(10, 10, 10, 10),
                          splashColor: Colors.red,
                      ),
                    
                      RaisedButton
                       (
                         child: Text('register to help'),
                         onPressed: ()
                         {
                            //print("RaisedButton clicked");
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
