import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.*;
import java.net.*; 
import javax.swing.*;







class checkPing extends Thread{
	
	boolean flag = false;
	public void run(){
		
		while(true){
	
		try {
			String ipAddress = "127.0.0.1";
			InetAddress inet = InetAddress.getByName(ipAddress);
			System.out.println("Sending Ping Request to " + ipAddress);
			if (inet.isReachable(5000)) {
				System.out.println(ipAddress + " is reachable.");
			} else {
				System.out.println(ipAddress + " NOT reachable.");
				Thread e = new ec();
                e.start();
			}
		} catch (Exception e) {
			System.out.println("Exception:" + e.getMessage());
		} 
      }	
	}
	
}

class ec extends Thread{
	
	public void run(){
		
		
		
	   
    	
	}

}




class Server{
public static void main(String[] args) throws IOException {
	
Thread cp = new checkPing();
cp.start();	



try{
	   DatagramSocket ds = new DatagramSocket(9999);
	   byte[] b1 = new byte[1024];
	   DatagramPacket dp1 = new DatagramPacket(b1,b1.length);
	   ds.receive(dp1);
	   int num = Integer.parseInt(new String(dp1.getData(),0,dp1.getLength()).trim());
	   System.out.println(num);
	   String name;
	   long phone1=0,phone2=0,phone3=0;

		if (num == 0) {
	      // nothing to do just checking ping
		}
		else {
	   
	   String p = "Alert Message sent to phone " + phone1 + " " + phone2 + " " + phone3;
	   //JOptionPane.showMessageDialog(null,"Alert Message sent to phone " + phone1 + " " + phone2 + " " + phone3);
	   byte[] b2 = (p+"").getBytes();
       InetAddress ia = InetAddress.getLocalHost();
       DatagramPacket dp2 = new DatagramPacket(b2,b2.length,ia,dp1.getPort()); 
       ds.send(dp2); 
	   /*send message to user*/
		}	
		}
		catch(Exception e){
			
		}




 	
}    

}