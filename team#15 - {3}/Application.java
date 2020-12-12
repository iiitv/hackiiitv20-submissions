package AlleviateAidAdvisory;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

interface I1 {                      //interface for applications of portal 

    public void Health();
    public void DiseaseRisk();
    }

class Application  implements I1         //class for applications for portal 
{
	
	Scanner sc=new Scanner (System.in);
	Boolean b=true;
	
	public void DiseaseRisk()
	  {
		  int setPoints=0,setPoints1=0, setPoints2=0;
		  String high,low,medium;
		  int  time;
		  
		  System.out.println("\nKNOW YOUR DISEASE RISK");
		  System.out.println("\nSince how much days you are facing any symptoms?\n(enter <integer> day/days");
		  time=sc.nextInt();
		  if(time<=2 )
		  {
			  setPoints=setPoints+2;
		  }
		  else if(time>2 && time<=5)
		  {
			  setPoints=setPoints+4;
		  }
		  else if(time>5)
		  {
			  setPoints=setPoints+7;
		  }
		  System.out.println("How much it affected your body");
		  System.out.println("1. NOT SO MUCH");
		  System.out.println("2.FEELING BAD");
		  System.out.println("3.AFFECTED VERY MUCH ");
		  System.out.println("ENTER YOUR CHOICE");
		  int choice=sc.nextInt();
		  if(choice==1 )
		  {
			  setPoints1=setPoints1+2;
		  }
		  else if(choice==2)
		  {
			  setPoints1=setPoints1+4;
		  }
		  
		  else if(choice==3)
		  {
			  setPoints1=setPoints1+7;
		  }
		 System.out.println("\nCan you able to walk on your own");
		 System.out.println("PRESS 1 FOR YES");
		 System.out.println("PRESS 2 FOR NO");
		 System.out.println("ENTER YOUR CHOICE");
		 int choice1 = sc.nextInt();
		 if(choice1==1 )
		  {
			  setPoints2=setPoints2+7;
		  }
		  else if(choice1==2)
		  {
			  setPoints2=setPoints2+5;
		  }
		 int count=setPoints+setPoints1+setPoints2;
		 if(count<10)
		 {
			 System.out.println("\n\nRISK LEVEL => LOW");
		 }
		 else if(count>10 && count<20)
		 {
			 System.out.println("\n\nRISK LEVEL => MEDIUM");
		 }
		 else if(count>20)
		 {
			 System.out.println("\n\nRisk Level => HIGH");
		 }
	  }

    public void Health()
    {
    	int b=1;
    	while(b==1) {
    		
    	System.out.println("Health Team welcomes You");
    	System.out.println("1. Hospital Issues");
    	System.out.println("2. Medicine Issues");
    	System.out.println("3. Doctor's Advice ");
    	System.out.println("4. Patient Help");
    	System.out.println("5. Calculate Risk according to your health");
    	
    	int c=sc.nextInt();
    	
    		switch(c)
    		{
    		case 1:
    			HospitalIssues();
    			break;
    		case 2:
    			MedicineIssues();
    			break;
    		case 3:
    			DoctorAdvice();
    		case 4:
    			PatientHelp();
    		case 5:
    			DiseaseRisk();
    			
    		default:
    			System.out.println("INVALID CHOICE");
    		}
    		System.out.println("");
    		System.out.println("Press 1 to Revisit Health Page");
    		System.out.println("Press 0 to Exit");
    		b=sc.nextInt();
    	}
    	if(b==0)
    	{
    		System.out.println("THANK YOU FOR VISITING US");
    	}
    }
   
    public  void HospitalIssues (){
    {
    	System.out.println("We Are Here to help you with Hospital Issues");
    	System.out.println("Press 1 to see Hospitals Details ");
    	int Hospital=sc.nextInt();
    	if(Hospital==1) {
    	try {
    		int ch;
    	BufferedReader file1=new BufferedReader(new FileReader("C:/Team#15/GraminSewaHospitalTimings.txt"));
    	while((ch=file1.read())!=-1) {
    		System.out.print((char)ch);
    	}
    	file1.close();
    	}catch(IOException e)
    	{
    		System.out.println(e.getMessage());
    	}
    	}
    	else
    	{
    		System.out.println("THANK YOU FOR VISITING US");
    		System.exit(0);
    	}
    }
    
    }
    private void MedicineIssues()
    {
    	System.out.println("Welcome To Medicine Related Issues");
    	System.out.println("Press 1 to know more about Medicines");
    	int Medicine=sc.nextInt();
    	if(Medicine==1)
    	{
    		try {
    		int ch;
    		BufferedReader file2=new BufferedReader(new FileReader("C:/Team#15/Medicineinfo.txt"));
    		while((ch=file2.read())!=-1)
    		{
    			System.out.print((char)ch);
    		}
    		file2.close();
    		}catch(IOException e)
    		{
    			System.out.println(e.getMessage());
    		}
    		}
    	else
    	{
    		System.out.println("Thank YOU For visiting Us");
    	}
    	
    	}
    
    private void DoctorAdvice()
    {
    	System.out.println("ASK YOUR QUERIES TO DOCTORS");
    	sc.nextLine();
    	String st=sc.nextLine();
    	System.out.println("YOUR QUERY IS RECORDED CONCERNED DOCTOR WILL GUIDE YOU SOON");
    }    
  public void PatientHelp()
  {
	  System.out.println("What Type of problem do you have???");
	  System.out.println("1. HAIR RELATED");
	  System.out.println("2. HEAD RELATED");
	  System.out.println("3. EAR RELATED");
	  System.out.println("4. EYES RELATED");
	  System.out.println("5. NOSE RELATED");
	  System.out.println("6. SKIN RELATED");
	  System.out.println("7. TEETH  RELATED");
	  System.out.println("8. THYROID RELATED");
	  System.out.println("9. JOINTS RELATED");
	  System.out.println("10. STOMACH RELATED");
	  System.out.println("11. HEART RELATED");
	  System.out.println("12. RESPIRATORY RELATED");
	  System.out.println("13. DIGESTION RELATED");
	  System.out.println("14. KIDNEY RELATED");
	  System.out.println("15. REPRODUCTION RELATED");
	  System.out.println("16. BURNING RELATED ");
	  System.out.println("17. Others");
	  int ch=sc.nextInt();
	  switch(ch)
	  {
	  case 1:
		  
		 int op=1;
		 while(op==1)
		 {	 
		  System.out.println("SPECIFY YOUR SYMPTOMS");
		  try
		  {
			  int c;
			  BufferedReader file1=new BufferedReader(new FileReader("C:/Team#15/Hair related.txt"));
			  while((c=file1.read())!=-1)
			  {
				  System.out.print((char)c);
			  }
		  } catch(IOException e)
			  {
				  System.out.println(e.getMessage());
			  }
		  System.out.println("Enter Type Number To Know More");
		  int a=sc.nextInt();
		  if(a==1)
		  {
			  try
			  {
				  int c;
				  BufferedReader filex=new BufferedReader(new FileReader("C:/Team#15/Hairtype1.txt"));
				  while((c=filex.read())!=-1)
				  {
					  System.out.print((char)c);
					  
				  }
				  filex.close();
			  } catch(IOException e)
				  {
					  System.out.println(e.getMessage());
				  }  
			  
		  }
		  else if(a==2)
		  {
			  try
			  {
				  int c;
				  BufferedReader file2=new BufferedReader(new FileReader("C:/Team#15/HAIRTYPE2.txt"));
				  while((c=file2.read())!=-1)
				  {
					  System.out.print((char)c);
				  }
				  file2.close();
			  } catch(IOException e)
				  {
					  System.out.println(e.getMessage());
				  }  
		  }
		  System.out.println(" ");
		System.out.println("PRESS 1 TO GO ON HAIR PROBLEMS PAGE");
		System.out.println("Press 2 to exit");
		op=sc.nextInt();
	}
	if(op==2)
	{
		System.out.println("Hope we helped you!!");
	}
	break;
	case 2:
		  int opt=1;
			 while(opt==1)
		{	 
			  System.out.println("SPECIFY YOUR SYMPTOMS");
			  try
			  {
				  int c;
				  BufferedReader file3=new BufferedReader(new FileReader("C:/Team#15/Head Related.txt"));
				  while((c=file3.read())!=-1)
				  {
					  System.out.print((char)c);
				  }
			  } catch(IOException e)
				  {
					  System.out.println(e.getMessage());
				  }
			  System.out.println("Enter Type Number To Know More");
			  int a=sc.nextInt();
			  if(a==1)
			  {
				  try
				  {
					  int c;
					  BufferedReader file4=new BufferedReader(new FileReader("C:/Team#15/Head type1.txt"));
					  while((c=file4.read())!=-1)
					  {
						  System.out.print((char)c);
					  }
				  } catch(IOException e)
					  {
						  System.out.println(e.getMessage());
					  }  
				  
			  }
			  else if(a==2)
			  {
				  try
				  {
					  int c;
					  BufferedReader file5=new BufferedReader(new FileReader("C:/Team#15/Head type2.txt"));
					  while((c=file5.read())!=-1)
					  {
						  System.out.print((char)c);
					  }
				  } catch(IOException e)
					  {
						  System.out.println(e.getMessage());
					  }  
			  }
			  else if(a==3)
			  {
				  int c;
				  try {
				  BufferedReader file6=new BufferedReader(new FileReader("C:/Team#15/HEAD TYPE3.txt"));
				  while((c=file6.read())!=-1)
				  {
					  System.out.print((char)c);
				  }
			  } catch(IOException e)
				  {
					  System.out.println(e.getMessage());
				  }  
				  
			  }
			  else if(a==4)
			  {
				  int c;
				  try {
				  BufferedReader file7=new BufferedReader(new FileReader("E:/Team#15/HEAD TYPE4.txt"));
				  while((c=file7.read())!=-1)
				  {
					  System.out.print((char)c);
				  }
			  } catch(IOException e)
				  {
					  System.out.println(e.getMessage());
				  }    
			  }
			  
			  else if(a==5)
			  {
				  int c;
				  try {
				  BufferedReader file8=new BufferedReader(new FileReader("C:/Team#15/HEAD TYPE5.txt"));
				  while((c=file8.read())!=-1)
				  {
					  System.out.print((char)c);
				  }
			  } catch(IOException e)
				  {
					  System.out.println(e.getMessage());
				  }      
			  } 
			  
			System.out.println("PRESS 1 TO GO ON Head PROBLEMS PAGE");
			System.out.println("Press 2 to exit");
			sc.nextInt();
			op=sc.nextInt();
		}
		if(opt==2)
		{
			System.out.println("Hope we helped you!!");
		}
		break;
	
		
	case 3:
		  int opti=1;
			 while(opti==1)
		{	 
			  System.out.println("SPECIFY YOUR SYMPTOMS");
			  try
			  {
				  int c;
				  BufferedReader filea=new BufferedReader(new FileReader("C:/Team#15/EAR RELATED.txt"));
				  while((c=filea.read())!=-1)
				  {
					  System.out.print((char)c);
				  }
			  } catch(IOException e)
				  {
					  System.out.println(e.getMessage());
				  }
			  System.out.println("Enter Type Number To Know More");
			  int a=sc.nextInt();
			  if(a==1)
			  {
				  try
				  {
					  int c;
					  BufferedReader fileb=new BufferedReader(new FileReader("C:/Team#15/EAR TYPE 1.txt"));
					  while((c=fileb.read())!=-1)
					  {
						  System.out.print((char)c);
					  }
				  } catch(IOException e)
					  {
						  System.out.println(e.getMessage());
					  }  
				  
			  }
			  else if(a==2)
			  {
				  try
				  {
					  int c;
					  BufferedReader filec=new BufferedReader(new FileReader("C:/Team#15/EAR TYPE 2.txt"));
					  while((c=filec.read())!=-1)
					  {
						  System.out.print((char)c);
					  }
				  } catch(IOException e)
					  {
						  System.out.println(e.getMessage());
					  }  
			  }
			  else if(a==3)
			  {
				  int c;
				  try {
				  BufferedReader filed=new BufferedReader(new FileReader("C:/Team#15/EAR TYPE 3.txt"));
				  while((c=filed.read())!=-1)
				  {
					  System.out.print((char)c);
				  }
				  filed.close();
			  } catch(IOException e)
				  {
					  System.out.println(e.getMessage());
				  }  
				  
			  }
		
			  System.out.println(" ");
			System.out.println("PRESS 1 TO GO ON Head PROBLEMS PAGE");
			System.out.println("Press 2 to exit");
		
			op=sc.nextInt();
		}
		if(opti==2)
		{
			System.out.println("Hope we helped you!!");
		}
		break;
	  case 4:
		  int optio=1;
			 while(optio==1)
		{	 
			  System.out.println("SPECIFY YOUR SYMPTOMS");
			  try
			  {
				  int c;
				  BufferedReader filef=new BufferedReader(new FileReader("C:/Team#15/EYE RELATED.txt"));
				  while((c=filef.read())!=-1)
				  {
					  System.out.print((char)c);
				  }
			  } catch(IOException e)
				  {
					  System.out.println(e.getMessage());
				  }
			  System.out.println("Enter Type Number To Know More");
			  int a=sc.nextInt();
			  if(a==1)
			  {
				  try
				  {
					  int c;
					  BufferedReader fileg=new BufferedReader(new FileReader("C:/Team#15/EYE TYPE 1.txt"));
					  while((c=fileg.read())!=-1)
					  {
						  System.out.print((char)c);
					  }
				  } catch(IOException e)
					  {
						  System.out.println(e.getMessage());
					  }  
				  
			  }
			  else if(a==2)
			  {
				  try
				  {
					  int c;
					  BufferedReader fileh=new BufferedReader(new FileReader("C:/Team#15/EYE TYPE 2.txt"));
					  while((c=fileh.read())!=-1)
					  {
						  System.out.print((char)c);
					  }
				  } catch(IOException e)
					  {
						  System.out.println(e.getMessage());
					  }  
			  }
			  else if(a==3)
			  {
				  int c;
				  try {
				  BufferedReader filei=new BufferedReader(new FileReader("C:/Team#15/EYE TYPE 3.txt"));
				  while((c=filei.read())!=-1)
				  {
					  System.out.print((char)c);
				  }
				  filei.close();
			  } catch(IOException e)
				  {
					  System.out.println(e.getMessage());
				  }  
				  
			  }
		
			  System.out.println(" ");
			System.out.println("PRESS 1 TO GO ON Head PROBLEMS PAGE");
			System.out.println("Press 2 to exit");
		
			op=sc.nextInt();
		}
		if(optio==2)
		{
			System.out.println("Hope we helped you!!");
		}
		break;
		
	  }

    }
}
