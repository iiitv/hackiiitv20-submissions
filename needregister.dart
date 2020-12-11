import 'package:flutter/material.dart';
import 'package:firebase_database/firebase_database.dart';
class Needregister extends StatelessWidget
 {
  final fb = FirebaseDatabase.instance;
  final List<String> textFieldsValue = [];
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    final ref=fb.reference().child("women");
    return Scaffold(
        body: Center(
          child: Form(
              key: _formKey,
              child: Column(children: [
                TextFormField(
                  validator: (value) {
                    textFieldsValue.add(value);
                    return ;
                  },
                ),
                TextFormField(
                  validator: (value) {
                    textFieldsValue.add(value);
                    return ;
                  },
                ),
                // TextFormField(
                //   validator: (value) {
                //     textFieldsValue.add(value);
                //     ///it will be more complex because you want dynamic textfields
                //   },
                // ),
              ])),
        ),
        floatingActionButton: FloatingActionButton
        (
          onPressed: () 
          {
          _formKey.currentState.validate();
          //print(textFieldsValue);

            ref.child("kerala").child("${textFieldsValue[0]}").set({
              "latitude": "25522",
              "longitude": "53336",
                        
                        }
                 );

           }
        )
      );
  }
}