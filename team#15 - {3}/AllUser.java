package AlleviateAidAdvisory;

import java.util.HashMap;
import java.util.Scanner;

class AllUser {

    static int I = 1, Index = 0, Familyindex = 0;

    static String user, pass1, name, phone, pass2, email;
    static String User, pass, identity;
    static int i, check = 0, k;
    
    static Scanner sc = new Scanner(System.in);
    
    static HashMap<String,String> logininfo=new HashMap<String,String>();
    static String[][] detail = new String[10][4];
    static String[][][] familyMembers = new String[10][5][3];

    public static void CreateUser() {

        System.out.println("\n----------------------------------");
        System.out.println("--> Enter Your Details Carefully :");
        System.out.println("----------------------------------");
        

        System.out.println("\nEnter your name : ");
        name = sc.next();

        System.out.println("\nEnter your Phone Number : ");
        phone = sc.next();
        
        System.out.println("\nEnter your Email : ");
        email = sc.next();

        System.out.println("\nEnter your Password : ");
        pass1 = sc.next();

        System.out.println("\nConfirm Password : ");
        pass2 = sc.next();

        System.out.println("\n#########################");

        if (pass1.equals(pass2)) {
        	
        	detail[I-1][0] = name;
        	detail[I-1][1] = phone;
        	detail[I-1][2] = pass1;
        	detail[I-1][3] = email;
        	
        	User = detail[I-1][0];
        	pass = detail[I-1][2];
        	logininfo.put(User, pass);

            Index = I;
            I++;

            System.out.println(" Succesfully Registered!");
            System.out.println("#########################");
        } else {
            System.out.println("Password Doesn't Match");
        }

    }
    
    /*
    public static void print() {
    	for(int i=0; i<10; i++) {
    		for(int j=0; j<4; j++) {
    			System.out.print(detail[i][j] + " ");
    		}
    		System.out.println();
    	}
    }*/
    
    public static boolean CheckUser() {

        Scanner sc = new Scanner(System.in);
        
        if(detail[0][0] != null && detail[0][2] != null) {
 
        	return true;
        }
        return false;
    }
    
    public static void SetIndex(String N) {
    	
    	for(int x=0 ; x<=I ; x++) {
    		
    		if(detail[x][0].equals(N)) {
    			Index = x + 1;
    			//System.out.println("Yes: "+ detail[x][0]);
    			break;
    		}
    	}
    }
    
    public static void Profile(int I1) {

        System.out.println("  PROFILE :-");
        System.out.println("  --> Name :      " + detail[I1-1][0]);
        System.out.println("  --> Email Id :  " + detail[I1-1][3]);
    }
    
    
    
    public static void AddFamilyMembers() {
    	
    	System.out.print("\n  Enter Details of Family Member :");
    	System.out.print("\n    Enter Name : ");
    	familyMembers[Index - 1][Familyindex][0] = sc.next();
    	
    	System.out.print("    Enter Gender : ");
    	familyMembers[Index - 1][Familyindex][1] = sc.next();
    	
    	System.out.print("    Enter Age : ");
    	familyMembers[Index - 1][Familyindex][2] = sc.next();
    	
    	Familyindex ++;
    	
    	
    }
    
    public static void FamilyProfile(int Fi) {
    	System.out.print(" Enter the Name of family Member : ");
    	identity = sc.next();
    	
    	for(k=0 ; k < Familyindex; k++) {
    		
    		if(familyMembers[Fi - 1][k][0].equals(identity)) {
    			check = 1;
    			
    			System.out.println("\n  Profile:-");
    			System.out.println("\n  --> Name : " + familyMembers[Fi-1][k][0]);
    			System.out.println("  --> Gender : "+ familyMembers[Fi-1][k][1]);
    			System.out.println("  --> Age : " + familyMembers[Fi-1][k][2] + "\n");
		
    		}else {
    			check = 0;
    		}
    		
    	}
 
    	if(check == 0) {
    			System.out.print(" Member not Found!\n");
    	}
    	
    }
    
    protected HashMap getLoginInfo() {
    	
    	  return logininfo;
    }
    
    public static int getIndex() {
    	return Index;
    }
    
    /*
    public static void printfamily() {
    	
    	for(int l=0; l<10; l++) {
    		for(int m=0; m<5; m++) {
    			for(int n=0; n<3; n++) {
    				System.out.print(familyMembers[l][m][n] + " ");
    			}
    			System.out.println();
    		}
    		System.out.println();
    	}
    	
    }*/
}
