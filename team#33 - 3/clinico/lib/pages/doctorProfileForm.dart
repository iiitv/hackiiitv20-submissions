import 'package:clinico/model/user.dart';
import 'package:clinico/pages/doctorDashboard/doctorBottomBar.dart';
import 'package:clinico/pages/role.dart';
import 'package:clinico/services/backend.dart';
import 'package:clinico/shared/loading.dart';
import 'package:flutter/material.dart';

class DoctorProfileForm extends StatefulWidget {
  MyUser user;
  Doctor doctor;
  bool isEdit;
  DoctorProfileForm({this.user,this.doctor,this.isEdit});
  @override
  _DoctorProfileFormState createState() => _DoctorProfileFormState();
}

class _DoctorProfileFormState extends State<DoctorProfileForm> {
  TextEditingController clinicNameController = new TextEditingController();
  TextEditingController educationalQualificationController = new TextEditingController();
  TextEditingController timingController = new TextEditingController();
  TextEditingController addressController = new TextEditingController();
  TextEditingController feeController = new TextEditingController();
  TextEditingController paymentMethodController = new TextEditingController();
  TextEditingController bioController = new TextEditingController();
  bool validClinicName = true,validTiming = true,validAdd = true,validFee = true,validPayMeth = true,isLoading = false;

  @override
  void initState(){
    super.initState();
    if(widget.isEdit){
      clinicNameController.text = widget.doctor.clinicName;
      educationalQualificationController.text = widget.doctor.educationalQualification;
      timingController.text = widget.doctor.timing;
      addressController.text = widget.doctor.address;
      feeController.text = widget.doctor.fee;
      paymentMethodController.text = widget.doctor.paymentMethod;
      bioController.text = widget.doctor.bio;
    }
  }

  void saveDoctorDetail()async{
    String clinicName = clinicNameController.text.trim();
    String educationalQualification = educationalQualificationController.text.trim();
    String timing = timingController.text.trim();
    String address = addressController.text.trim();
    String fee = feeController.text.trim();
    String paymentMethod = paymentMethodController.text.trim();
    String bio = bioController.text.trim();
    setState((){
      validClinicName = clinicName.isNotEmpty;
      validTiming = timing.isNotEmpty;
      validAdd = address.isNotEmpty;
      validFee = fee.isNotEmpty;
      validPayMeth = paymentMethod.isNotEmpty;
    });
    if(validClinicName && validTiming &&validAdd &&validFee &&validPayMeth){
      if(!widget.isEdit){
        currentUser = widget.user;
        currentUser.isDoctor = true;
      }
      setState(()=>isLoading = true);
       Doctor doctor = new Doctor(
         uid:widget.isEdit?widget.doctor.uid:widget.user.uid,
         clinicName:clinicName,
         educationalQualification:educationalQualification,
         timing:timing,
         address:address,
         fee:fee,
         paymentMethod:paymentMethod, 
         bio:bio,
         displayName:widget.isEdit?widget.doctor.displayName:widget.user.displayName,
         email:widget.isEdit?widget.doctor.email:widget.user.email,
         photoURL:widget.isEdit?widget.doctor.photoURL:widget.user.photoURL
       );
       await Backend().addDoctorInDataBase(doctor);
       Navigator.pop(context);
       Navigator.pop(context);
       Navigator.push(context,MaterialPageRoute(builder:(BuildContext context)=>DoctorBottom()));
    }
  }
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.indigo,
          title: Text(widget.isEdit?"Edit Your Profile":"Create Your Profile"),
        ),
        body: isLoading?Loading():Container(
          child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24),
              child: ListView(
                children: [
                  SizedBox(height: 30),
                  Center(
                    child: Container(
                      margin: EdgeInsets.only(top: 20),
                      child: CircleAvatar(
                        backgroundImage: NetworkImage(widget.isEdit?widget.doctor.photoURL:widget.user.photoURL),
                        radius: 50,
                      ),
                    ),
                  ),
                  Center(
                    child: Container(
                      margin: EdgeInsets.only(top: 20),
                      child: Text(widget.isEdit?widget.doctor.displayName:widget.user.displayName)
                    ),
                  ),
                  Center(
                    child: Container(
                      margin: EdgeInsets.only(top: 20),
                      child: Text(widget.isEdit?widget.doctor.email:widget.user.email)
                    ),
                  ),
                  SizedBox(height: 40),
                  TextFormField(
                    controller: clinicNameController,
                    maxLines: null,
                    decoration: InputDecoration(
                      filled: true,
                      fillColor: Colors.grey[50],
                      hintText: "Enter your clinic Name",
                      border: OutlineInputBorder(),
                      labelText: "Clinic Name",
                      errorText: validClinicName?null:"Clinic Name can't be empty"
                    ),
                  ),
                  SizedBox(height: 40),
                  TextFormField(
                    controller: educationalQualificationController,
                    keyboardType: TextInputType.multiline,
                    maxLines: null,
                    decoration: InputDecoration(
                      filled: true,
                      fillColor: Colors.grey[50],
                      hintText: "Enter your educational qualifications",
                      border: OutlineInputBorder(),
                      labelText: "Educational Qualifications",
                    ),
                  ),
                  SizedBox(height: 40),
                  TextFormField(
                     controller: timingController,
                    keyboardType: TextInputType.multiline,
                    maxLines: null,
                    decoration: InputDecoration(
                      filled: true,
                      fillColor: Colors.grey[50],
                      hintText: "Enter Your Clinic Timing",
                      border: OutlineInputBorder(),
                      labelText: "Timing",
                      errorText: validTiming?null:"Timing can't be empty"
                    ),
                  ),
                  SizedBox(height: 40),
                  TextFormField(
                    controller: addressController,
                    keyboardType: TextInputType.multiline,
                    maxLines: null,
                    decoration: InputDecoration(
                      filled: true,
                      fillColor: Colors.grey[50],
                      hintText:
                          "Enter Full Address of Your Clinic",
                      border: OutlineInputBorder(),
                      labelText: "Address",
                      errorText:validAdd?null:"Address can't be empty"
                    ),
                  ),
                  SizedBox(height: 40),
                  TextFormField(
                    controller: feeController,
                    decoration: InputDecoration(
                      filled: true,
                      fillColor: Colors.grey[50],
                      hintText:
                          "Enter Your Fee Amount.",
                      border: OutlineInputBorder(),
                      labelText: "Fee",
                      errorText:validFee?null:"Fees can't be empty"
                    ),
                  ),
                  SizedBox(height: 40),
                  TextFormField(
                    controller: paymentMethodController,
                    keyboardType: TextInputType.multiline,
                    maxLines: null,
                    decoration: InputDecoration(
                      filled: true,
                      fillColor: Colors.grey[50],
                      hintText:
                          "Enter Your Upi Id.",
                      border: OutlineInputBorder(),
                      labelText: "Payment Method",
                      errorText:validPayMeth?null:"PayMent Method can't be empty"
                    ),
                  ),
                  SizedBox(height: 40),
                  TextFormField(
                    controller: bioController,
                    keyboardType: TextInputType.multiline,
                    maxLines: null,
                    decoration: InputDecoration(
                      filled: true,
                      fillColor: Colors.grey[50],
                      hintText:
                          "Write a short bio about you.",
                      border: OutlineInputBorder(),
                      labelText: "Bio",
                    ),
                  ),
                  SizedBox(height: 40),
                  GestureDetector(
                    child: Container(
                      alignment: Alignment.center,
                      width: MediaQuery.of(context).size.width,
                      padding: EdgeInsets.symmetric(vertical: 12),
                      decoration: BoxDecoration(
                          boxShadow: [
                            BoxShadow(
                              offset: const Offset(3.0, 3.0),
                              color: Colors.grey,
                              blurRadius: 4.0,
                              spreadRadius: 2.0,
                            )
                          ],
                          gradient: LinearGradient(colors: [
                            const Color(0xff007EF4),
                            const Color(0xFF2A75BC),
                          ])),
                      child: Text(
                        widget.isEdit?"Edit":"Submit",
                        style: TextStyle(color: Colors.white, fontSize: 18),
                      ),
                    ),
                    onTap: () {
                      saveDoctorDetail();
                    },
                  ),
                  SizedBox(height:40)
                ],
              )),
        ),
      ),
    );
  }
}
