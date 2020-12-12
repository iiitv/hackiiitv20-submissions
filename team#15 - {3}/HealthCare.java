package AlleviateAidAdvisory;

import java.util.Scanner;

public class HealthCare   {
   
	public static void main (String args[])
	{
		int choice, authenticated = 0 , choice2, choice3;
		Scanner Sc = new Scanner(System.in);
	
		System.out.println("#### WELCOME TO ONLINE HEALTHCARE SYSTEM ####");
		
		while(true) {
			
			System.out.println("\n1> Login");
			System.out.println("2> Register");
			System.out.println("3> Exit");
		
			choice = Sc.nextInt();
		
			if(choice == 1) {
				
				boolean T = AllUser.CheckUser();
				
				if(T == true) {
                    authenticated = 1;
                	AllUser idpassword = new AllUser();
					LoginPage loginPage = new LoginPage(idpassword.getLoginInfo());
					
					
				}
				else {
					System.out.println("You do not have an account...Register First.");
				}
			}
			else if(choice == 2) {
				 AllUser.CreateUser();
	             //authenticated = 1;
				
			}
			else if(choice == 3) {
				break;
			}
			/*
			else if(choice == 4) {
				AllUser.print();
			}
			else if(choice == 5) {
				AllUser.printfamily();
			}
			else if(choice == 6) {
				System.out.println(AllUser.getIndex());
			}*/
			
			
			
			if(authenticated == 1) {
				
				System.out.println("\n\n##### WELCOME ######");
				
				while(true) {
					
					System.out.println("\n  1> Display Your Profile");
					System.out.println("  2> Add Family Member");
					System.out.println("  3> Family Member Profile");
					System.out.println("  4> Health");
					System.out.println("  5> Logout");
					
					choice2 = Sc.nextInt();
					
					if(choice2 == 1) {
						AllUser.SetIndex(LoginPage.getInfo());
						int a = AllUser.getIndex();
						AllUser.Profile(a);
					}
					else if(choice2 == 2) {
						AllUser.SetIndex(LoginPage.getInfo());
						do {
							AllUser.AddFamilyMembers();
							
							System.out.println("\n     1> add More Members");
							System.out.println("     2> back to home screem");
							
							choice3 = Sc.nextInt();
							if(choice3 == 2) {
								break;
							}
							
						} while(true);
						
						
						
					}
					
					else if(choice2 == 3) {
						//AllUser.SetIndex(LoginPage.getInfo());
						AllUser.FamilyProfile(AllUser.getIndex());
					}
					else if(choice2 == 4) {
						
						Application a= new Application();
						a.Health();
							
					}
					else if(choice2 == 5) {
						break;
					}
					
					
				}//inner while loop ends
				
			}
			
		}//outer while loop ends		
		
	}
}
