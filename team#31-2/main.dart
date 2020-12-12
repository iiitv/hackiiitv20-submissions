import 'package:flutter/material.dart';
//import 'package:url_launcher/url_launcher.dart';
//import 'package:url_launcher/url_launcher.dart';
import 'package:team_31/aftermain.dart';
void main()=> runApp(MyApp());

class MyApp extends StatelessWidget
{
     @override
     Widget build(BuildContext context)
     {
          return MaterialApp
          (
             debugShowCheckedModeBanner: false,
            home: Aftermain(),
           
            
          );
     }
}
