import 'package:first_app/Woman.dart';
import 'package:first_app/main.dart';
import 'package:mailer/mailer.dart';
import 'package:mailer/smtp_server/gmail.dart';

//import 'package:toast/toast.dart';
var w = new Woman.a1();
sendMail() async {
  String username = "desuccessor0@gmail.com";
  String password = "anujjuna12";

  final smtpServer = gmail(username, password);
  // Creating the Gmail server
  print(w.getAddressBasedOnLocation());
  // Create our email message.
  final message = Message()
    ..from = Address(username)
    ..recipients.add('anujpillai1201@gmail.com') //recipent email
    //..ccRecipients.addAll(['destCc1@example.com', 'destCc2@example.com']) //cc Recipents emails
    //..bccRecipients.add(Address('bccAddress@example.com')) //bcc Recipents emails
    ..subject = 'Emergency Alert ${DateTime.now()}' //subject of the email
    //..text =
    //'This is the plain text.\nThis is line 2 of the text part.'
    ..html =
        "<h3>${await w.getAddressBasedOnLocation()}</h3>\n<p>Click me to Verify</a></p>"; //body of the email

  try {
    final sendReport = await send(message, smtpServer);
    print(
        'Message sent: ' + sendReport.toString()); //print if the email is sent
  } on MailerException catch (e) {
    print(
        'Message not sent. \n' + e.toString()); //print if the email is not sent
    // e.toString() will show why the email is not sending
  }
}
