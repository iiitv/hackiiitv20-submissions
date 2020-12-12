import 'package:flutter/material.dart';
import '../global.dart';
import '../details.dart';
import 'package:smooth_star_rating/smooth_star_rating.dart';

import '../global.dart';

class nbContainer extends StatelessWidget {
  final int id;

  const nbContainer({Key key, this.id}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Container(
        decoration: BoxDecoration(boxShadow: [
          BoxShadow(color: Colors.black.withOpacity(.1), blurRadius: 3)
        ], color: Colors.white, borderRadius: BorderRadius.circular(9.0)),
        margin: const EdgeInsets.all(9.0),
        padding: const EdgeInsets.all(9.0),
        child: Row(
          children: <Widget>[
            SizedBox(
              height: 51,
            ),
            SizedBox(width: 9),
            Expanded(
              child: Row(mainAxisAlignment:MainAxisAlignment.spaceBetween,
                children: <Widget>[
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                      Text("${near[id].name}",
                          style:TextStyle(
                            fontSize: 25,
                          )),
                      Text("${near[id].loc}",
                          style:TextStyle(
                            fontSize: 15,
                          )), 
                      Row(
                        children: <Widget>[

                        ],
                      )
                    ],
                  ),
                  Row(children: <Widget>[

                    Text(
                        "${near[id].dis}",
                        style:TextStyle(
                          fontSize: 20,
                          color: Colors.purple,
                        )
                    ),
                    Icon(Icons.location_pin,
                    size: 30,)
                  ],),
                ],
              ),
            ),
            SizedBox(width: 9),

          ],
        ));

  }
}