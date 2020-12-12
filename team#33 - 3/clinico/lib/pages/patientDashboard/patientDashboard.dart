import 'package:clinico/services/auth.dart';
import 'package:clinico/services/backend.dart';
import 'package:flutter/material.dart';

class PatientDashboard extends StatefulWidget {
  @override
  _PatientDashboardState createState() => _PatientDashboardState();
}

class _PatientDashboardState extends State<PatientDashboard> {
  final AuthServices _auth = AuthServices();
  String search;
  bool showSearchResult = false;
  Backend backend = new Backend();

  checkClearSearchResult(String key){
      if(search.trim().isEmpty){
        setState(()=>showSearchResult = false);
      }
  }

  handleSearchResult(String key){
      if(key.trim().isNotEmpty){
        setState((){
          showSearchResult = true;
          search = key.trim().toLowerCase();
        });
      }else{
         setState(()=>showSearchResult = false);
      }
  }

  showHospitalAccordingly(){
     return showSearchResult?backend.SearchHospital(search):backend.showAllHospitalCard();
  }

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
                onChanged: (val){checkClearSearchResult(val);},
                onSubmitted: (val){handleSearchResult(val);},
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
                    hintText: "Search By Clinic Name",
                    hintStyle: TextStyle(color: Colors.grey),
                    border: InputBorder.none),
              ),
            ),
            showHospitalAccordingly(),
          ]
        ),
        onTap: (){
          FocusScope.of(context).requestFocus(new FocusNode());
        },
      ),
    );
  }
}
