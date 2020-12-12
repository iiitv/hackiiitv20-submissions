import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import "package:latlong/latlong.dart" as latLng;

// buildMap() {
//   double ltd = 1.5;
//   double lon = 2.5;
//   return new latLng.LatLng(ltd, lon);
// }
///////////
// eventsQuery.documents.forEach((document) {
//   eventsHashMap.putIfAbsent(document['id'], () => new AustinFeedsMeEvent(
//       name: document['name'],
//       time: document['time'],
//       description: document['description'],
//       url: document['event_url'],
//       photoUrl: _getEventPhotoUrl(document['group']),
//       latLng: _getLatLng(document)));
// });

Widget build(BuildContext context) {
  double ltd = 1.5;
  double lon = 2.5;
  return new FlutterMap(
    options: new MapOptions(
      center: new latLng.LatLng(ltd, lon),
      zoom: 13.0,
    ),
    layers: [
      new TileLayerOptions(
          urlTemplate: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          subdomains: ['a', 'b', 'c']),
      new MarkerLayerOptions(
        markers: [
          new Marker(
            width: 80.0,
            height: 80.0,
            point: new latLng.LatLng(ltd, lon),
            builder: (ctx) => new Container(
              child: new FlutterLogo(),
            ),
          ),
        ],
      ),
    ],
  );
}
