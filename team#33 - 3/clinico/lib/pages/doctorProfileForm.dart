import 'package:flutter/material.dart';

class DoctorProfileForm extends StatefulWidget {
  @override
  _DoctorProfileFormState createState() => _DoctorProfileFormState();
}

class _DoctorProfileFormState extends State<DoctorProfileForm> {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Scaffold(
        appBar: AppBar(
          title: Text("Doctor's Profile Form"),
        ),
        body: Container(
          child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24),
              child: ListView(
                children: [
                  SizedBox(height: 30),
                  Center(
                    child: Container(
                      margin: EdgeInsets.only(top: 20),
                      child: Hero(
                        tag: 'profile photo',
                        child: CircleAvatar(
                          backgroundImage: NetworkImage(''),
                          radius: 50,
                        ),
                      ),
                    ),
                  ),
                  SizedBox(height: 50),
                  TextFormField(
                    decoration: InputDecoration(
                      filled: true,
                      fillColor: Colors.grey[50],
                      hintText: "Enter your full Name",
                      border: OutlineInputBorder(),
                      labelText: "Name",
                    ),
                  ),
                  SizedBox(height: 40),
                  TextFormField(
                    decoration: InputDecoration(
                      filled: true,
                      fillColor: Colors.grey[50],
                      hintText: "Enter your educational qualifications",
                      border: OutlineInputBorder(),
                      labelText: "Educational Qualifications",
                    ),
                  ),
                  SizedBox(height: 40),
                  TextFormField(
                    decoration: InputDecoration(
                      filled: true,
                      fillColor: Colors.grey[50],
                      hintText: "Enter the number of years of experience",
                      border: OutlineInputBorder(),
                      labelText: "Years of Professional Experience",
                    ),
                  ),
                  SizedBox(height: 40),
                  TextFormField(
                    keyboardType: TextInputType.multiline,
                    maxLines: null,
                    decoration: InputDecoration(
                      filled: true,
                      fillColor: Colors.grey[50],
                      hintText:
                          "Workplaces where you have worked and are working.",
                      border: OutlineInputBorder(),
                      labelText: "Workplaces",
                    ),
                  ),
                  SizedBox(height: 40),
                  TextFormField(
                    keyboardType: TextInputType.multiline,
                    maxLines: null,
                    decoration: InputDecoration(
                      filled: true,
                      fillColor: Colors.grey[50],
                      hintText:
                          "Write a bio about reflecting your professional career.",
                      border: OutlineInputBorder(),
                      labelText: "Bio",
                    ),
                  ),
                  SizedBox(height: 40),
                  GestureDetector(
                    child: Container(
                      alignment: Alignment.center,
                      width: MediaQuery.of(context).size.width,
                      padding: EdgeInsets.symmetric(vertical: 12),
                      decoration: BoxDecoration(
                          boxShadow: [
                            BoxShadow(
                              offset: const Offset(3.0, 3.0),
                              color: Colors.grey,
                              blurRadius: 4.0,
                              spreadRadius: 2.0,
                            )
                          ],
                          gradient: LinearGradient(colors: [
                            const Color(0xff007EF4),
                            const Color(0xFF2A75BC),
                          ])),
                      child: Text(
                        "Submit",
                        style: TextStyle(color: Colors.white, fontSize: 18),
                      ),
                    ),
                    onTap: () {},
                  )
                ],
              )),
        ),
      ),
    );
  }
}
