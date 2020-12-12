import 'package:flutter/material.dart';

class OnBoardingInstructions {
  final String image, title, subtitle;

  OnBoardingInstructions(this.image, this.title, this.subtitle);
}

class MyColors {
  static const grey = Color(0xfff3f3f3),
      orange = Color(0xffffb755),
      red = Color(0xffed5568),
      lightGreen = Color(0xffdbf3e8),
      darkGreen = Color(0xff4ac18e),
      blue = Color(0xff40beee);
}

class PreInfo{
  String name,time , date;
  PreInfo({this.name,this.time,this.date});
}
List<PreInfo> preList=[
  PreInfo(
      name:'Dr Aryan Yadav',
      time: '10:30 AM',
      date: '21 December'
  ),

];
class Vcinfo{
  String name,link,time,date;
  Vcinfo({this.name,this.link,this.time,this.date});
}


List<Vcinfo> vc=[
  Vcinfo(
    name:'Dr Aryan Yadav',
    link:'http://meet.google.com/sxu-qsfa-jsas',
    time: '12:20 PM',
    date: '21 December'
  ),
  Vcinfo(
      name:'Dr Kartik',
      link:'http://meet.google.com/jdfu-qiffm-jds',
      time: '02:30 PM',
      date: '25 December'
  ),
  Vcinfo(
      name:'Dr Monica',
      link:'http://meet.google.com/jxu-dsva-jew',
      time: '11:10 PM',
      date: '28 December'
  ),
  Vcinfo(
      name:'Dr Gulati',
      link:'http://meet.google.com/jxu-aifs-jes',
      time: '12:20 PM',
      date: '2 January'
  ),
];

class NearBy{
String name,loc,dis;
NearBy({this.name,this.loc,this.dis});

}


List<NearBy> near=[
NearBy(
  name: 'Sanjiwani chemist',
  dis:'1.2 Km',
  loc:'Gurugram',
),
  NearBy(
    name: 'Balaji Mdicos',
    dis:'1.8 Km',
    loc:'Gurugram',
  ),
  NearBy(
    name: 'Apollo pharmacy',
    dis:'2.2 Km',
    loc:'Gurugram',
  ),
  NearBy(
    name: 'KD chemist',
    dis:'3.6 Km',
    loc:'Gurugram',
  ),





];
class DoctorInfo {
  final String name,
      image,
      type,
      reviewCount,

      workingHours,
      patientsCount,
      experience,
      certifications;
  final double reviews;

  DoctorInfo({
    this.name,
    this.image,
    this.type,
    this.reviews,
    this.reviewCount,

    this.workingHours,
    this.patientsCount,
    this.experience,
    this.certifications,
  });
}

List<DoctorInfo> doctorInfo = [
  DoctorInfo(
    image:
    "https://image.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg",

    certifications: "5",
    experience: "12",
    name: "Dr Aryan Yadav",
    patientsCount: "38",
    reviewCount: "180",
    reviews: 5,
    type: 'Gyno',
    workingHours: "Mon - Fri 09:00 - 17:00",
  ),
  DoctorInfo(
    image:
    "https://image.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg",
    certifications: "1",
    experience: "3",
    name: "Dr Monica",
    patientsCount: "38",
    reviewCount: "300",
    reviews: 3,
    type: "ENT",
    workingHours: "Mon - Fri 09:00 - 17:00",
  ),

  DoctorInfo(
    image:
    "https://image.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg",
    certifications: "5",
    experience: "8",
    name: "Dr Kartik",
    patientsCount: "85",
    reviewCount: "132",
    reviews: 3.2,
    type: "Heart Surgeon",
    workingHours: "Mon - Fri 09:00 - 17:00",
  ),
  DoctorInfo(
    image:
    "https://image.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg",
    certifications: "12",
    experience: "50",
    name: "Dr Mashur Gulati",
    patientsCount: "1",
    reviewCount: "1",
    reviews: 5,
    type: "General Practitioner",
    workingHours: "Mon - Fri 09:00 - 17:00",
  ),
];

List<OnBoardingInstructions> onBoardingInstructions = [
  OnBoardingInstructions(
    "assets/images/onboarding2.png",
    "Call a doctor to visit you",
    "Aur bete kya haal hai XD",
  ),
  OnBoardingInstructions(
    "assets/images/onboarding3.png",
    "Call a doctor to visit you",
    "Aur bete kya haal hai XD",
  ),
];

List<Map<String, dynamic>> categories = [
  {
    'icon': 'assets/icons/doctor.png',
    'title': 'General Practitioner',
    'color': MyColors.red,
  },
  {
    'icon': 'assets/icons/tooth.png',
    'title': 'Dental Surgeon',
    'color': MyColors.orange,
  },
];

String avatar =
    "https://pbs.twimg.com/profile_images/1233356631188082689/qcmTohZh_400x400.jpg";
