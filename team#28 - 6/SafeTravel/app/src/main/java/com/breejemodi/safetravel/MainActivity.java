package com.breejemodi.safetravel;

import androidx.annotation.NonNull;
import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.Toolbar;

import java.util.ArrayList;
import java.util.Arrays;

public class MainActivity extends AppCompatActivity {

    EditText start ,end;
    ImageView searchbutton;
    RecyclerView recyclerView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        ActionBar actionBar = getSupportActionBar();
        actionBar.setTitle("Safe Travel");

        final ArrayList<RouteBus> shedule = new ArrayList<RouteBus>();
        RouteBus temp ;
        ArrayList<String> temp1 = new ArrayList<>(Arrays.asList("Odhav Ring Road","Chhotalal Ni Chali","Vallabh Nagar","Odhav Fire Station","Grid Station","Ajit Mills","Rakhial","Sarangpur"));
        temp = new RouteBus(temp1,0,0,"GJ 01 AB 0001");
        shedule.add(temp);
        ArrayList<String> temp2 = new ArrayList<>(Arrays.asList("Virat Nagar","Jogeshwari Society","CTM","Lal Bangla","Hatkeshwar Terminus","Bombay Housing","Khokhra","L.G. Corner","Maninagar Terminus"));
        temp = new RouteBus(temp2,0,0,"GJ 01 BC 0002");
        shedule.add(temp);
        ArrayList<String> temp3 = new ArrayList<>(Arrays.asList("BapuNagar","Ajit Mills","Swastik Industries","Amraiwaadi","Rudreshwar Mahadev","Hatkeshwar Circle","Khokhra","Siyon Nagar","Railway Crossing","Maninagar Terminus"));
        temp = new RouteBus(temp3,0,0,"GJ 01 CD 0003");
        shedule.add(temp);
        ArrayList<String> temp4 = new ArrayList<>(Arrays.asList("V.S. Hospital","Nehru Bridge","Lal Darwaja","Astodia Circle","Raipur","Sarangpur","Kalupur","Shardaben Hospital","BapuNagar"));
        temp = new RouteBus(temp4,0,0,"GJ 01 DE 0004");
        shedule.add(temp);
        ArrayList<String> temp5 = new ArrayList<>(Arrays.asList("Nehru Bridge","Gujarat College","Panchvati","Rajhans Society","Gujarat University","Vijay Cross Road","Memnagar","Thaltej"));
        temp = new RouteBus(temp5,0,0,"GJ 01 EF 0005");
        shedule.add(temp);
        ArrayList<String> temp6 = new ArrayList<>(Arrays.asList("Sarangpur","Geeta Mandir","Paldi","Sharda Mandir","Polytechnic","Sunrise Park","Gurukul","Commerce College","Navrangpura","Income Tax"));
        temp = new RouteBus(temp6,0,0,"GJ 01 FG 0006");
        shedule.add(temp);
        ArrayList<String> temp7 = new ArrayList<>(Arrays.asList("Iskon Mandir","Satellite Station","Jodhpur Road","Haridas Park","Panchvati","Law College","Town Hall","Sanyash Ashram","Lal Darwaja"));
        temp = new RouteBus(temp7,0,0,"GJ 01 GH 0007");
        shedule.add(temp);
        ArrayList<String> temp8 = new ArrayList<>(Arrays.asList("Delhi Darwaja","Hathi Singh Wadi","Hirabag","Shahibag","Camp Hanuman","Sardarnagar","Indira Bridge","Bhadreshwar","Nana Chiloda"));
        temp = new RouteBus(temp8,0,0,"GJ 01 HI 0008");
        shedule.add(temp);
        ArrayList<String> temp9 = new ArrayList<>(Arrays.asList("Arbuda Nagar","Mukesh Nagar","Rajendra Park","Sheetal Chhaya Society","Satyamnagar","Chakudiya Mahadev","Gomtipur Darwaja","Patel Mills","Sarangpur"));
        temp = new RouteBus(temp9,0,0,"GJ 01 IJ 0009");
        shedule.add(temp);
        ArrayList<String> temp10 = new ArrayList<>(Arrays.asList("Lal Darwaja","Raipur Darwaja","Patel Mills","Rakhial","Soni Ni Chali","Ajit Mills","Vallabhnagar","G.I.D.C. Tank","Adinath Nagar"));
        temp = new RouteBus(temp10,0,0,"GJ 01 JK 0010");
        shedule.add(temp);
        start = findViewById(R.id.txtFrom);
        end = findViewById(R.id.txtto);


        searchbutton = findViewById(R.id.btnSearch);
        searchbutton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                String StartPointName = start.getText().toString();
                String EndPointName = end.getText().toString();
                ArrayList<RouteBus> ans;
                ans = getdetail(StartPointName,EndPointName,shedule);
                recyclerView = findViewById(R.id.result);
                resultAdapter rAdapter = new resultAdapter(MainActivity.this,ans,EndPointName);
                recyclerView.setAdapter(rAdapter);
                recyclerView.setLayoutManager(new LinearLayoutManager(MainActivity.this));

            }
        });

    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {

        getMenuInflater().inflate(R.menu.main,menu);

        return super.onCreateOptionsMenu(menu);
    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {

        if(item.getItemId() == R.id.plus){
            Intent intent = new Intent(MainActivity.this, ConductorSideStatus.class);
            startActivity(intent);
        }

        return super.onOptionsItemSelected(item);
    }

    private ArrayList<RouteBus> getdetail(String nameStart, String nameEnd, ArrayList<RouteBus> obj){
        ArrayList<RouteBus> ans = new ArrayList<RouteBus>();

        for (int i=0 ;i<obj.size();i++){
            int temp = 0;
            for (int j=0 ;j<obj.get(i).getRoute().size();j++){

                if(nameStart.equals(obj.get(i).getRoute().get(j))){
                    temp++;
                }
                if(nameEnd.equals(obj.get(i).getRoute().get(j))){
                    temp++;
                }
            }
            if(temp==2){
                ans.add(obj.get(i));
            }
        }
        return ans;
    }
}