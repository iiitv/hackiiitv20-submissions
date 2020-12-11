import java.util.*;
import java.awt.Color;
import java.awt.Font;
import java.awt.Image;
import java.awt.event.ActionEvent;
import java.awt.event.*;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPasswordField;
import javax.swing.JTextField;

import java.io.*;
import javax.imageio.ImageIO;
import javax.swing.*;
import java.awt.image.BufferedImage;


class LoginPage  implements ActionListener  {
	
	

	JFrame frame= new JFrame();
	
	JButton loginButton=new JButton("Login");
	JButton resetButton=new JButton("Reset");
	JTextField userIDField=new JTextField();
	JPasswordField userPasswordField=new JPasswordField(); 
	JLabel userIDLabel=new JLabel("userID:");
	JLabel userPasswordLabel=new JLabel("Password");
	JLabel messageLabel=new JLabel("WELCOME ");
	
	static String USERID, PASS;
	
	HashMap<String,String>logininfo =new HashMap<String,String>();
	
	LoginPage(HashMap<String,String>loginInfoOriginal){
		
		logininfo=loginInfoOriginal;
		userIDLabel.setBounds(50, 100, 75, 25);
		userPasswordLabel.setBounds(50, 150, 75, 25);
		
		
		messageLabel.setBounds(125,250,250,35);
		messageLabel.setFont(new Font(null,Font.ITALIC,25));
		userIDField.setBounds(125, 100, 200, 25);
		userPasswordField.setBounds(125, 150, 200, 25);
		
		loginButton.setBounds(125, 200, 100, 25);
		loginButton.setFocusable(false);
		loginButton.addActionListener(this);
		
		resetButton.setBounds(225, 200, 100, 25);
		resetButton.setFocusable(false);
		resetButton.addActionListener(this);
		
		ImageIcon background_image=new ImageIcon("E:/Images/Image1.jpeg");
		
		Image img=background_image.getImage();
		Image temp_img=img.getScaledInstance(900,600,Image.SCALE_SMOOTH);
		background_image=new ImageIcon(temp_img);
		JLabel background=new JLabel("",background_image,JLabel.RIGHT);
		background.setBounds(400,100, 900, 600);
		frame.getContentPane().add(background);
		
		frame.add(userIDLabel);
		frame.add(userPasswordLabel);
		frame.add(userIDField);
		frame.add(userPasswordField);
		frame.add(messageLabel);
		frame.add(loginButton);
		frame.add(resetButton);
		frame.add(messageLabel);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setSize(1500,1000);
		frame.setLayout(null);
		frame.setVisible(true);
		
	    frame.pack();
	    frame.setLocation(400,200);
	    frame.setVisible(true);
		
			
	}

	@Override
	public void actionPerformed(ActionEvent e)  {
		
		if(e.getSource()==resetButton) {
			userIDField.setText("");
			userPasswordField.setText("");
		}
		if(e.getSource()==loginButton) {
			String userID=userIDField.getText();
			String password=String.valueOf(userPasswordField.getPassword());
			USERID = userID;
			PASS = password;
			
			if(logininfo.containsKey(userID)) {
				if(logininfo.get(userID).equals(password)) {
					messageLabel.setForeground(Color.green);
					messageLabel.setText("LOGIN SUCCESSFULL");
					
					frame.dispose();
				}
					
					else {
					messageLabel.setForeground(Color.red);
					messageLabel.setText(" WRONG Password");
					
				}
			}
			else {
				messageLabel.setForeground(Color.red);
				messageLabel.setText("Username not found");
			}
		}
	}
	
	
	public static String getInfo() {
		return USERID;
	}
}
