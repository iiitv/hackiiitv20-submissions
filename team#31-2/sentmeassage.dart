
import 'package:mailer/mailer.dart';
import 'package:mailer/smtp_server/gmail.dart';
//import 'package:toast/toast.dart';
//import 'package:team_31/main_1.dart';

sendMail(String sendemail ,String addre) async {
   
    
    String username = "womensafetybharat@gmail.com";
    String password = "hackbeast";
    // print(sendemail);
    // ignore: deprecated_member_use
    final smtpServer = gmail(username, password);
    // Creating the Gmail server

    // Create our email message.
    final message = Message()
      ..from = Address(username)
      ..recipients.add(sendemail) //recipent email
      ..ccRecipients.addAll(['anujpillai1201@gmail.com', 'raunakjaiswal.hajipur@gmail.com'  , '201951083@iiitvadodara.ac.in']) //cc Recipents emails
      //..bccRecipients.add(Address('bccAddress@example.com')) //bcc Recipents emails
      ..subject = 'Women Safety ${DateTime.now()}' //subject of the email
      //..text =
      //'This is the plain text.\nThis is line 2 of the text part.'
      ..html =
         // "<h3>$addre</h3>\n<p>Click me to Verify</a></p>";

           "<h3>Emergency Help Required.<br>Location :$addre</h3>\n<p><a href='https://www.google.co.in/maps'>Google Maps Link</a></p>";
    try {
      final sendReport = await send(message, smtpServer);
      print('Message sent: ' +
          sendReport.toString()); //print if the email is sent
    } on MailerException catch (e) {
      print('Message not sent. \n' +
          e.toString()); //print if the email is not sent
      // e.toString() will show why the email is not sending
    }
  }