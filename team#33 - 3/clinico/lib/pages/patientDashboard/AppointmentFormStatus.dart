import 'package:clinico/model/appointment.dart';
import 'package:clinico/services/backend.dart';
import 'package:clinico/shared/loading.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';

class AppointmentFormStatus extends StatefulWidget {
  Appointment appointment;
  String msg;
  int appointmentNumber;
  AppointmentFormStatus({this.appointment}) {
    msg = appointment.confirmed
        ? "Your Appointment Number is ${appointment.appointmentNumber}"
        : "Your Appointment in ${appointment.clinicName} is pending";
  }
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
    DocumentSnapshot doc =
        await doctorCollection.doc(widget.appointment.doctorId).get();
    widget.appointmentNumber = doc.data()["counter"];
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
                            widget.appointment.clinicName,
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
                            "Current Appointment Number : " +
                                widget.appointmentNumber.toString(),
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
                          widget.msg,
                          style: TextStyle(
                            fontSize: 18,
                          ),
                        ),
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
                      ],
                    ),
                  ),
                ),
              ),
            ),
          );
  }
}
