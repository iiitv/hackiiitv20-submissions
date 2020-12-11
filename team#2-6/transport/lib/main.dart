import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:transport/screens/auth_screen.dart';
import 'package:transport/screens/homePage.dart';
import 'package:transport/screens/splash_screen.dart';
import './screens/auth_screen.dart';
import 'screens/auth_screen.dart';

void main() {
  // WidgetsFlutterBinding.ensureInitialized();
  // Firebase.initializeApp();
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final Future<FirebaseApp> _initialization = Firebase.initializeApp();
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: FutureBuilder(
        future: _initialization,
        builder: (context, projectSnap) {
          if (projectSnap.hasData)
            return StreamBuilder<User>(
                stream: FirebaseAuth.instance.authStateChanges(),
                builder: (context, snapshot) {
                  if (snapshot.connectionState == ConnectionState.active) {
                    if (snapshot.hasData) {
                      return HomePage();
                    }
                  }
                  return AuthScreen();
                });
          return CircularProgressIndicator();
        },
      ),
      routes: {
        AuthScreen.routeName: (context) => AuthScreen(),
        // EventDetailsPage.routeName: (context) => EventDetailsPage(),
      },
      // StreamBuilder(
      //     stream: FirebaseAuth.instance.authStateChanges(),
      //     builder: (ctx, userSnapshot) {
      //       if (userSnapshot.hasData) {
      //         print('monik chutiya');
      //         return HomePage();
      //         //Navigator.of(context)
      //       }
      //       if (userSnapshot.connectionState == ConnectionState.waiting) {
      //         print("Amit madarchod hai");
      //         return SplashScreen();
      //       }
      //       // else if(userSnapshot.connectionState==ConnectionState.)
      //       return AuthScreen();
      //     });
      // if (projectSnap.hasData)
      // return StreamBuilder(builder: (ctx, userSnapshot) {
      //   if (userSnapshot.connectionState == ConnectionState.active) {
      //     print(userSnapshot.connectionState);
      //     return HomePage();
      //   }
      //   if (userSnapshot.connectionState == ConnectionState.waiting) {
      //     print(userSnapshot.connectionState);
      //     return SplashScreen();
      //   }
      //   // if (userSnapshot.hasData) {
      //   //   return HomePage();
      //   // }
      //   // if(userSnapshot.connectionState==Connection)
      //   return AuthScreen();
      // });
      //       stream: FirebaseAuth.instance.authStateChanges(),
      //       builder: (context, snapshot) {
      //         if (snapshot.connectionState == ConnectionState.active) {
      //           if (snapshot.hasData) {
      //             return HomePage();
      //           }
      //         }
      //         return AuthScreen();
      //       });
      // return CircularProgressIndicator();
      //   },
      // ),
      // routes:{
      // '/':(ctx)=>AuthScreen(),
      //SplashScreen.routeName:(ctx)=>SplashScreen(),
//HomePage.routeName:(ctx)=>HomePage(),
      // },
      title: 'Flutter Demo',
    );
  }
}
