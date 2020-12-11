import 'package:flutter/material.dart';
import 'package:team_31/sentmeassage.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> 
{
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Fluter Send Mail '),
      ),
      body: Center(
        child: MaterialButton(
          color: Colors.purple,
          child: Text(
            'Send Mail',
            style: TextStyle(color: Colors.white),
          ),
          onPressed: () {
            sendMail();
          },
        ),
      ),
    );
  }
}
