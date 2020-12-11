import 'dart:io';

import 'package:flutter/material.dart';
import '../util/google_signin.dart';

// import '../pickers/user_image_picker.dart';

class AuthForm extends StatefulWidget {
  final void Function(String userName, String password, String email,
      File image, bool isLogin) formSubmit;
  final bool isLoading;
  AuthForm(this.formSubmit, this.isLoading);
  @override
  _AuthFormState createState() => _AuthFormState();
}

class _AuthFormState extends State<AuthForm> {
  var _formKey = GlobalKey<FormState>();
  var _isLogin = true;
  String _userName = '';
  String _userPAssword = '';
  String _userEmail = '';

  File _userImageFile;
  void pickedImage(File image) {
    _userImageFile = image;
  }

  void _trySubmitForm() {
    final isValid = _formKey.currentState.validate();
    FocusScope.of(context).unfocus();

    // if (_userImageFile == null && !_isLogin) {
    //   Scaffold.of(context).showSnackBar(
    //     SnackBar(
    //       content: Text("Please insert image"),
    //       backgroundColor: Theme.of(context).errorColor,
    //     ),
    //   );
    //   return;
    // }
    if (isValid) {
      _formKey.currentState.save();
      widget.formSubmit(_userName.trim(), _userPAssword.trim(),
          _userEmail.trim(), _userImageFile, _isLogin);
      print(_userEmail);
      print(_userName);
      print(_userPAssword);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Card(
        margin: EdgeInsets.all(20),
        child: SingleChildScrollView(
          padding: EdgeInsets.all(16),
          child: RaisedButton(
            child: Text(
              'Login With Google',
            ),
            onPressed: () {
              var googleSignMe = GoogleSignMeIn();
              googleSignMe.login();
            },

            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(
                  MediaQuery.of(context).size.height * 0.0387820513),
            ),
            //   Form(
            //     key: _formKey,
            //     child: Column(
            //       mainAxisSize: MainAxisSize.min,
            //       children: <Widget>[
            //         // if (!_isLogin) UserImagePicker(pickedImage),
            //         TextFormField(
            //           key: ValueKey('Email'),
            //           keyboardType: TextInputType.emailAddress,
            //           autocorrect: false,
            //           textCapitalization: TextCapitalization.none,
            //           enableSuggestions: false,
            //           validator: (value) {
            //             if (value.isEmpty ||
            //                 !value.contains('@') &&
            //                     (value.contains('.com') || value.contains('.in'))) {
            //               return 'Please Enter valid data';
            //             }
            //             return null;
            //           },
            //           decoration: InputDecoration(
            //             labelText: 'Email Address',
            //           ),
            //           onSaved: (value) {
            //             _userEmail = value;
            //           },
            //         ),
            //         if (!_isLogin)
            //           TextFormField(
            //             textCapitalization: TextCapitalization.words,
            //             autocorrect: true,
            //             enableSuggestions: true,
            //             key: ValueKey("UserName"),
            //             validator: (value) {
            //               if (value.isEmpty || value.length < 5) {
            //                 return 'Very small username';
            //               }
            //               return null;
            //             },
            //             decoration: InputDecoration(
            //               labelText: 'Username',
            //             ),
            //             onSaved: (value) {
            //               _userName = value;
            //             },
            //           ),
            //         TextFormField(
            //           key: ValueKey('Password'),
            //           validator: (value) {
            //             if (value.isEmpty || value.length < 7) {
            //               return 'Password should be atleast 7 characters long';
            //             }
            //             return null;
            //           },
            //           decoration: InputDecoration(
            //             labelText: 'Password',
            //           ),
            //           obscureText: true,
            //           onSaved: (value) {
            //             _userPAssword = value;
            //           },
            //         ),
            //         SizedBox(
            //           height: 12,
            //         ),
            //         if (widget.isLoading == true) CircularProgressIndicator(),
            //         if (!widget.isLoading)
            //           RaisedButton(
            //             child: Text(_isLogin ? 'Login' : 'SignUp'),
            //             onPressed: _trySubmitForm,
            //           ),
            //         if (!widget.isLoading)
            //           FlatButton(
            //             child: Text(_isLogin
            //                 ? 'Create New Account'
            //                 : 'I already have an account'),
            //             onPressed: () {
            //               setState(() {
            //                 _isLogin = !_isLogin;
            //               });
            //             },
            //           ),
            //       ],
            //     ),
          ),
        ),
      ),
    );
  }
}
