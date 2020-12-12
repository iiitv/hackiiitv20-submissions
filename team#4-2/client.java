import java.io.IOException;
import java.net.*;
import java.util.*;
class Client {
    
public static void main(String[] args) throws IOException{ 
  
    
    DatagramSocket ds = new DatagramSocket();
    int i =1;
    byte[] b1 = String.valueOf(i).getBytes();
    InetAddress ia = InetAddress.getLocalHost();
    DatagramPacket dp1 = new DatagramPacket(b1,b1.length,ia,9999); 
    ds.send(dp1);
    while (true){
      byte[] b2 = new byte[1024];
      DatagramPacket dp2 = new DatagramPacket(b2, b2.length);
      ds.receive(dp2);
      String output = new String(dp2.getData(),0,dp2.getLength());
      System.out.println(output);

        
    }
  }
}