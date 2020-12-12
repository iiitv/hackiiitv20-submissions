import 'package:clinico/shared/loading.dart';
import 'package:flutter/material.dart';

class AppointmentFormStatus extends StatefulWidget {
  @override
  _AppointmentFormStatusState createState() => _AppointmentFormStatusState();
}

class _AppointmentFormStatusState extends State<AppointmentFormStatus> {
  bool isLoading = false;

  @override
  void initState() {
    super.initState();
    getAppointmentFormInfo();
  }

  void getAppointmentFormInfo() async {
    setState(() {
      isLoading = true;
    });

    setState(() => isLoading = false);
  }

  @override
  Widget build(BuildContext context) {
    return isLoading
        ? Loading()
        : Container(
            child: Scaffold(
              appBar: AppBar(
                backgroundColor: Colors.indigo,
                title: Text('Appointment Status',
                    style: TextStyle(color: Colors.white)),
              ),
              body: Padding(
                padding: const EdgeInsets.fromLTRB(20, 0, 20, 0),
                child: Container(
                  child: Padding(
                    padding: const EdgeInsets.fromLTRB(15, 8, 15, 8),
                    child: ListView(
                      children: [
                        SizedBox(
                          height: 20,
                        ),
                        Center(
                          child: Text(
                            "Clinic's Name",
                            style: TextStyle(
                              fontSize: 30,
                            ),
                          ),
                        ),
                        SizedBox(
                          height: 30,
                        ),
                        Center(
                          child: Text(
                            "Current Appointment Number : ",
                            style: TextStyle(
                              fontSize: 22,
                            ),
                          ),
                        ),
                        SizedBox(
                          height: 20,
                        ),
                        Divider(),
                        SizedBox(
                          height: 30,
                        ),
                        Text(
                          'Your Appointment Number : ',
                          style: TextStyle(
                            fontSize: 18,
                          ),
                        ),
                        SizedBox(
                          height: 30,
                        ),
                        Text(
                          'Name : Darshan Hande',
                          style: TextStyle(
                            fontSize: 18,
                          ),
                        ),
                        SizedBox(
                          height: 30,
                        ),
                        Text(
                          'Age : 19',
                          style: TextStyle(
                            fontSize: 18,
                          ),
                        ),
                        SizedBox(
                          height: 30,
                        ),
                        Text(
                          'Gender : Male',
                          style: TextStyle(
                            fontSize: 18,
                          ),
                        ),
                        SizedBox(
                          height: 30,
                        ),
                        Text(
                          'Comments : ',
                          style: TextStyle(
                            fontSize: 18,
                          ),
                        ),
                        SizedBox(
                          height: 10,
                        ),
                        Text(
                          'Comments Comments Comments Comments Comments Comments Comments Comments Comments Comments Comments Comments Comments Comments ',
                          style: TextStyle(
                            fontSize: 18,
                          ),
                        ),
                        SizedBox(
                          height: 30,
                        ),
                        Text(
                          'Payment Screenshot : ',
                          style: TextStyle(
                            fontSize: 18,
                          ),
                        ),
                        Container(
                          child: Image.network(
                            'image.url',
                            height: 300,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ),
          );
  }
}
