import 'package:flutter/material.dart';

class Role extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Scaffold(
        appBar: AppBar(
          title: Text('Your Role'),
          backgroundColor: Colors.indigo,
        ),
        body: Container(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              Container(
                child: Image.asset(
                  'assets/doctor.png',
                  height: 300,
                ),
              ),
              Container(
                child: GestureDetector(
                  child: Padding(
                      padding: const EdgeInsets.fromLTRB(15.0, 0, 15, 0),
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
                          color: Colors.indigoAccent,
                        ),
                        child: Text(
                          "I am a Doctor",
                          style: TextStyle(color: Colors.white, fontSize: 18),
                        ),
                        //   child: Image.asset(
                        // 'assets/doctor.png',
                        // height: 300,
                      )),
                  onTap: () {},
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(15.0, 0, 15, 0),
                child: GestureDetector(
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
                      color: Colors.indigoAccent,
                    ),
                    child: Text(
                      "I am a patient",
                      style: TextStyle(color: Colors.white, fontSize: 18),
                    ),
                  ),
                  onTap: () {},
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
