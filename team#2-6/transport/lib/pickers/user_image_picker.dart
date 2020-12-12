import 'dart:io';
import 'dart:async';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

class UserImagePicker extends StatefulWidget {
  UserImagePicker(this.imagePickFn);
  final Function(File pickedImage) imagePickFn;
  @override
  _UserImagePickerState createState() => _UserImagePickerState();
}

class _UserImagePickerState extends State<UserImagePicker> {
  dynamic _pickedImage;
  Future _pickImage() async {
    final picker = ImagePicker();
    dynamic pickedImageFile = await picker.getImage(
        source: ImageSource.camera, imageQuality: 85, maxWidth: 150);
    setState(() {
      _pickedImage = File(pickedImageFile.path);
    });
    widget.imagePickFn(_pickedImage);
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        FlatButton.icon(
          onPressed: _pickImage,
          icon: Icon(Icons.image),
          label: Text("Add Image"),
          textColor: Theme.of(context).primaryColor,
        ),
        Container(
          color: Colors.grey,
          child: _pickedImage != null ? FileImage(_pickedImage) : Container(),
        ),
      ],
    );
  }
}
