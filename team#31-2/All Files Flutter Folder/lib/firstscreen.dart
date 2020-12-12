import 'package:flutter/material.dart';

class FirstScreen extends StatefulWidget {
  @override
  _FirstScreenState createState() => _FirstScreenState();
}

class _FirstScreenState extends State<FirstScreen> {
  @override
  Widget build(BuildContext context)
   {
    return Scaffold
    (
      appBar: AppBar
      (
        title: Text('1st screen'),
      ),
      body: Center
      (
       child: RaisedButton(
          onPressed: () => {},
          child: Text('Raised Button'),
        ),
         
      ),
    );
  }
}