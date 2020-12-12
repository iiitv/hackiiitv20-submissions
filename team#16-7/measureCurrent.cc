#include <LiquidCrystal.h>
float Vacross,Iamp = 0;
const int Shunt_Res = 100;
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

void setup() {
	  lcd.begin(16, 2);
}

void loop() {
	  Vacross = analogRead(A0);
	    
	    Vacross = (Vacross * 5.0) / 1023.0;
	      Iamp = (Vacross * 1000) / Shunt_Res;
	        
	        lcd.setCursor(8, 0);
		  lcd.print("Current = ");
		    lcd.print(Iamp);
		      lcd.print("mA");
		        delay(1000);
}
