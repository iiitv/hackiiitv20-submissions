package com.example.helloworld;

import androidx.appcompat.app.AppCompatActivity;

import android.Manifest;
import android.content.pm.PackageManager;
import android.location.Location;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.google.android.gms.location.FusedLocationProviderClient;
import com.google.android.gms.location.LocationServices;
import com.google.android.gms.tasks.OnSuccessListener;

public class MainActivity4 extends AppCompatActivity {

    private Button but;
    private TextView textView;
    private FusedLocationProviderClient fusedLocationProviderClient;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main4);

        fusedLocationProviderClient = LocationServices.getFusedLocationProviderClient(this);
        but = findViewById(R.id.button3);
        textView = findViewById(R.id.textView4);

        but.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.M){
                    if(getApplicationContext().checkSelfPermission(Manifest.permission.ACCESS_FINE_LOCATION) == PackageManager.PERMISSION_GRANTED){
                        //LOCATION
                        fusedLocationProviderClient.getLastLocation().addOnSuccessListener(new OnSuccessListener<Location>() {
                            @Override
                            public void onSuccess(Location location) {
                                 if (location != null){
                                     Double lat = location.getLatitude();
                                     Double longt = location.getLongitude();

                                     textView.setText(lat+" , "+longt);
                                     Toast.makeText(MainActivity4.this, "Success", Toast.LENGTH_SHORT).show();
                                 }
                            }
                        });

                    }else{
                        requestPermissions(new String[]{Manifest.permission.ACCESS_FINE_LOCATION}, 99);
                    }

                    }
                }

        });
    }
}