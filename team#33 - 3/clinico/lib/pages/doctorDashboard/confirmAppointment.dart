import 'package:clinico/shared/loading.dart';
import 'package:flutter/material.dart';

class ConfirmAppointment extends StatefulWidget {
  @override
  _ConfirmAppointmentState createState() => _ConfirmAppointmentState();
}

class _ConfirmAppointmentState extends State<ConfirmAppointment> {
  TextEditingController appointmentNumberController =
      new TextEditingController();
  bool isLoading = false, validAppointmentNumber = true;

  void getAppointmentFormInfo() async {
    setState(() {
      isLoading = true;
    });
    setState(() => isLoading = false);
  }

  void confirmAppointmentNumber() async {
    String appointment = appointmentNumberController.text.trim();
    setState(() => validAppointmentNumber = appointment.isNotEmpty);
    int appointmentNumber = int.parse(appointment);
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
                        TextFormField(
                          controller: appointmentNumberController,
                          keyboardType: TextInputType.number,
                          decoration: InputDecoration(
                            filled: true,
                            fillColor: Colors.grey[50],
                            hintText:
                                "allot an appointment number to this patient",
                            border: OutlineInputBorder(),
                            labelText: "Enter an Appointment Number",
                            errorText: validAppointmentNumber
                                ? null
                                : "Appointment number can't be empty",
                          ),
                        ),
                        SizedBox(height: 50),
                        FlatButton(
                          child: Text('Confirm',
                              style:
                                  TextStyle(color: Colors.white, fontSize: 18)),
                          color: Colors.indigoAccent,
                          onPressed: () {
                            confirmAppointmentNumber();
                          },
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
