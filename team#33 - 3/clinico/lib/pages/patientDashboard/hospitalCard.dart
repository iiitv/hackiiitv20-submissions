import 'package:flutter/material.dart';

class HospitalCard extends StatelessWidget {
  double pad = 70;
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {},
      child: Card(
        margin: EdgeInsets.fromLTRB(16.0, 16.0, 16.0, 0),
        child: Padding(
          padding: const EdgeInsets.fromLTRB(28.0, 15.0, 24.0, 15.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Text(
                'Hospital Name',
                style: TextStyle(
                  fontSize: 24.0,
                  color: Colors.grey[800],
                ),
              ),
              SizedBox(height: pad),
              GestureDetector(
                child: Text(
                  "Doctor's Name",
                  style: TextStyle(
                    fontSize: 14.0,
                    color: Colors.grey[600],
                  ),
                ),
                onTap: () {},
              ),
              SizedBox(
                height: 2.0,
              ),
            ],
          ),
        ),
      ),
    );
  }
}
