import 'package:clinico/model/user.dart';
import 'package:flutter/material.dart';

class HospitalProfile extends StatelessWidget {
  Doctor doctor;
  HospitalProfile({this.doctor});
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Scaffold(
        extendBodyBehindAppBar: true,
        body: Container(
          child: CustomScrollView(
            slivers: [
              SliverAppBar(
                iconTheme: IconThemeData(
                  color: Colors.white,
                ),
                backgroundColor: Colors.grey[700],
                pinned: true,
                expandedHeight: 300.0,
                flexibleSpace: FlexibleSpaceBar(
                  background: Hero(
                    tag: 'location',
                    child: Image.network(
                      'doctor.photoURL',
                      height: 300,
                      fit: BoxFit.cover,
                    ),
                  ),
                ),
              ),
              SliverFixedExtentList(
                itemExtent: MediaQuery.of(context).size.height * 8,
                delegate: SliverChildListDelegate([
                  Container(
                    child: Column(
                      children: [
                        SizedBox(
                          height: 40,
                        ),
                        Text(
                          'Doctor.clinicName',
                          style: TextStyle(
                            fontSize: 35,
                            fontStyle: FontStyle.italic,
                          ),
                        ),
                        SizedBox(
                          height: 50,
                        ),
                        Text(
                          'Dr. ' + 'doctor.displayName',
                          style: TextStyle(
                            fontSize: 24,
                          ),
                        ),
                        SizedBox(
                          height: 30,
                        ),
                        Text(
                          'doctor.qualifications',
                          style: TextStyle(
                            fontSize: 24,
                          ),
                        ),
                        SizedBox(
                          height: 30,
                        ),
                        Text(
                          'doctor.bio',
                          style: TextStyle(
                            fontSize: 24,
                          ),
                        ),
                        SizedBox(
                          height: 30,
                        ),
                        Text(
                          'doctor.address',
                          style: TextStyle(
                            fontSize: 24,
                          ),
                        ),
                        SizedBox(
                          height: 30,
                        ),
                        Text(
                          'doctor.timing',
                          style: TextStyle(
                            fontSize: 24,
                          ),
                        ),
                        SizedBox(
                          height: 30,
                        ),
                        Text(
                          'Ruppes ' + 'doctor.fees' + ' at clinic',
                          style: TextStyle(
                            fontSize: 24,
                          ),
                        ),
                        SizedBox(
                          height: 30,
                        ),
                      ],
                    ),
                  ),
                ]),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
