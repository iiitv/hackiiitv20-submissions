import 'package:clinico/services/auth.dart';
import 'package:clinico/services/backend.dart';
import 'package:flutter/material.dart';

class PatientDashboard extends StatelessWidget {
  final AuthServices _auth = AuthServices();
  Backend backend = new Backend();
  TextEditingController searchController = new TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: GestureDetector(
        child: ListView(
          children:[
            Container(
              padding: EdgeInsets.symmetric(horizontal: 20, vertical: 2),
              decoration: BoxDecoration(
                  borderRadius: BorderRadius.all(Radius.circular(15)),
                  border: Border.all(width: 2.0, color: Colors.black45)
              ),
              child: TextField(
                controller: searchController,
                cursorColor: Colors.black,
                style: TextStyle(color: Colors.black, fontSize: 16),
                decoration: InputDecoration(
                    icon: Icon(
                      Icons.search,
                      color: Colors.black,
                    ),
                    suffixIcon: IconButton(
                      icon:Icon(Icons.clear),
                      color:Colors.black,
                      onPressed: (){searchController.clear();},
                    ),
                    hintText: "Search With Clinic Name or city",
                    hintStyle: TextStyle(color: Colors.grey),
                    border: InputBorder.none),
              ),
            ),
            backend.showAllHospitalCard()
          ]
        ),
        onTap: (){
          FocusScope.of(context).requestFocus(new FocusNode());
        },
      ),
    );
  }
}