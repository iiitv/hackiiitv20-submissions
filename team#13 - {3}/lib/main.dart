import 'package:flutter/material.dart';

import 'screens/dashboard.dart';
import 'screens/loginScreen.dart';


void main() {
  runApp(MaterialApp(home: Scaffold(backgroundColor: Colors.purple,
    appBar: AppBar(backgroundColor: Colors.purple,
      title: Text('Health +',
        style: TextStyle(
            fontFamily: 'Comfortaa',
            fontSize: 40,
            color: Colors.white
        ),),
    ),
    body:SafeArea( child:Home(),),
  ),));
}
class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(mainAxisAlignment:MainAxisAlignment.end,
        children: <Widget>[
           CircleAvatar(child: Image(image: AssetImage('images/pic.jpg'),),
           backgroundColor: Colors.purple,
           radius: 200,),
          SizedBox(height: 100,),
          Container(color: Colors.white,
            margin: EdgeInsets.all(20),
            child: FlatButton(minWidth: 200,
              child:Text(
                'Login',
                style: TextStyle(
                    color: Colors.purple,
                    fontSize: 30,
                    fontFamily: 'FjallaOne'
                ),),
              onPressed: (){
              Navigator.push(context, MaterialPageRoute(builder: (context) => LoginPage()));
              },
            ),
          ),
          Container(color: Colors.white,
            child: FlatButton(minWidth: 200,
              child:Text(
                  'Register',
                  style: TextStyle(
                  color: Colors.purple,
                  fontSize: 30,
                  fontFamily: 'FjallaOne'
              ),),
              onPressed: (){
                Navigator.push(context, MaterialPageRoute(builder: (context) => DashBoard()));
              },
              ),
            ),

          SizedBox(height: 100,),
        ],
      ),
    );
  }
}
// child: Text('Login',
// style: TextStyle(fontSize: 50,
// color: Colors.white
// ),
// ),