import 'package:flutter/material.dart';


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
        title: Text('Thank You'),
        centerTitle: true,
      ),
      body: Center
      (
       child: Text("Thank You For Registering. In case of emergency in your locality, you will be notified via Email.",style: TextStyle(fontSize: 30),),

      ),
    );
  }
}
