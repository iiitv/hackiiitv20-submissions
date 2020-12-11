
import 'package:mailer/mailer.dart';
import 'package:mailer/smtp_server/gmail.dart';
//import 'package:toast/toast.dart';

sendMail() async {
    String username = "womensafetybharat@gmail.com";
    String password = "hackbeast";

    final smtpServer = gmail(username, password);
    // Creating the Gmail server

    // Create our email message.
    final message = Message()
      ..from = Address(username)
      ..recipients.add('raunakjaiswal.hajipur@gmail.com') //recipent email
      ..ccRecipients.addAll(['anujpillai1201@gmail.com']) //cc Recipents emails
      //..bccRecipients.add(Address('bccAddress@example.com')) //bcc Recipents emails
      ..subject = 'Women Safety ${DateTime.now()}' //subject of the email
      //..text =
      //'This is the plain text.\nThis is line 2 of the text part.'
      ..html =
          "<h3>Thanks for registering with localhost. Please click this link to complete this registation</h3>\n<p>Click me to Verify</a></p>"; //body of the email

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