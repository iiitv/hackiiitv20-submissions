import 'package:flutter/material.dart';
import '../../global.dart';
import '../../details.dart';
import 'package:smooth_star_rating/smooth_star_rating.dart';

import '../../global.dart';

class DoctorContainer extends StatelessWidget {
  final int id;

  const DoctorContainer({Key key, this.id}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => Navigator.push(
        context,
        MaterialPageRoute(
          builder: (context) => DetailsScreen(id: id),
        ),
      ),
      child: Container(
        decoration: BoxDecoration(boxShadow: [
          BoxShadow(color: Colors.black.withOpacity(.1), blurRadius: 3)
        ], color: Colors.white, borderRadius: BorderRadius.circular(9.0)),
        margin: const EdgeInsets.all(9.0),
        padding: const EdgeInsets.all(9.0),
        child: Row(
          children: <Widget>[
            SizedBox(
              height: 51,
              child: CircleAvatar(
                radius: 50,
              backgroundColor: Colors.white,
              child: Image(image: AssetImage('images/pic3.jpg'),),)
            ),
            SizedBox(width: 9),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Text("${doctorInfo[id].name}",
                      style: Theme.of(context).textTheme.subtitle),
                  Text(
                    "${doctorInfo[id].type}",
                    style: TextStyle(color: Colors.grey),
                  ),
                  Row(
                    children: <Widget>[
                      Flexible(
                        child: SmoothStarRating(
                          rating: doctorInfo[id].reviews,
                          size: 15,
                          color: MyColors.orange,
                        ),
                      ),
                      Text("(${doctorInfo[id].reviewCount})"),
                    ],
                  )
                ],
              ),
            ),
            SizedBox(width: 9),
            Column(
              crossAxisAlignment: CrossAxisAlignment.end,
              children: <Widget>[
                GestureDetector(
                  onTap: () {},
                  child: Container(
                    padding: const EdgeInsets.all(3.0),
                    decoration: BoxDecoration(
                      border: Border.all(color: MyColors.grey),
                      borderRadius: BorderRadius.circular(5.0),
                    ),
                    child: Icon(Icons.bookmark_border),
                  ),
                ),
                SizedBox(height: 5),
                GestureDetector(
                  onTap: () {},
                  child: Container(
                    padding: const EdgeInsets.all(9.0),
                    child: Text(
                      "Open",
                      style: Theme.of(context)
                          .textTheme
                          .button
                          .copyWith(color: Colors.white
                      ),
                    ),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(5.0),
                      color: Colors.purple,
                    ),
                  ),
                )
              ],
            )
          ],
        ),
      ),
    );
  }
}
