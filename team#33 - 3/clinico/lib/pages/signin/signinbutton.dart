import 'package:clinico/services/auth.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class SignButton extends StatelessWidget {

  final String name;
  SignButton({this.name});

  @override
  Widget build(BuildContext context) {

    final AuthServices _auth = AuthServices();

    return RawMaterialButton(
      shape: StadiumBorder(),
      onPressed: () {},
      fillColor: Colors.white,
      splashColor: Colors.grey,
      hoverElevation: 20,
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: <Widget>[
          Padding(
            padding: EdgeInsets.symmetric(vertical: 15,horizontal: 15),
            child: Text(
              '$name',
              style: TextStyle(
                fontSize: 17,
              ),
            ),
          ),
        ],
      ),
    );
  }
}