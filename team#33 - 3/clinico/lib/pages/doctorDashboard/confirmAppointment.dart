import 'package:clinico/model/appointment.dart';
import 'package:clinico/shared/loading.dart';
import 'package:flutter/material.dart';

class ConfirmAppointment extends StatefulWidget {
  Appointment appointment;
  String msg;
  ConfirmAppointment({this.appointment, this.msg});
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
    Navigator.pop(context);
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
                            widget.appointment.clinicName,
                            style: TextStyle(
                              fontSize: 30,
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
                          'Name : ' + widget.appointment.name,
                          style: TextStyle(
                            fontSize: 18,
                          ),
                        ),
                        SizedBox(
                          height: 30,
                        ),
                        Text(
                          'Age : ' + widget.appointment.age.toString(),
                          style: TextStyle(
                            fontSize: 18,
                          ),
                        ),
                        SizedBox(
                          height: 30,
                        ),
                        Text(
                          'Gender : ' + widget.appointment.gender,
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
                          widget.appointment.comment,
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
                        SizedBox(
                          height: 20,
                        ),
                        Container(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Image.network(
                                '${widget.appointment.stringimage}',
                                height: 800,
                              ),
                            ],
                          ),
                        ),
                        SizedBox(height: 20),
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
