package com.breejemodi.safetravel;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.Manifest;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.pm.PackageManager;
import android.os.Build;
import android.os.Bundle;
import android.widget.Toast;

import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.Marker;
import com.google.android.gms.maps.model.MarkerOptions;

public class GPSActivity extends AppCompatActivity implements OnMapReadyCallback {

    SupportMapFragment supportMapFragment;
    GoogleMap googleMap;
    Marker marker;
    LocationBroadcastReceiver receiver;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_g_p_s);

        receiver = new LocationBroadcastReceiver();
        if(Build.VERSION.SDK_INT>=23){
            if(checkSelfPermission(Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED){
                //Request Location
                requestPermissions(new String[]{Manifest.permission.ACCESS_FINE_LOCATION}, 100);
            }
            else{
                //Req Location Permission
                startService();
            }
        }
        else{
            //Start Location Service
            startService();
        }

        supportMapFragment = (SupportMapFragment) getSupportFragmentManager().findFragmentById(R.id.mapFrag);
        supportMapFragment.getMapAsync(this);
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);

        switch (requestCode){
            case 100:
                if(grantResults[0] == PackageManager.PERMISSION_GRANTED){
                    startService();
                }
                else{
                    Toast.makeText(this, "Give Permission to Access Location", Toast.LENGTH_SHORT).show();
                }
        }
    }

    void startService(){

        IntentFilter filter = new IntentFilter("ACT_LOC");
        registerReceiver(receiver,filter);
        Intent intent = new Intent(GPSActivity.this,LocationService.class);
        startService(intent);

    }

    @Override
    protected void onPause() {
        super.onPause();
        try{
            unregisterReceiver(receiver);
        }catch(Exception e){}

    }

    @Override
    public void onMapReady(GoogleMap googleMap) {
        if(this.googleMap == null){
            this.googleMap = googleMap;
        }
    }

    public class LocationBroadcastReceiver extends BroadcastReceiver {

        @Override
        public void onReceive(Context context, Intent intent) {
            if(intent.getAction().equals("ACT_LOC")){

                double lat = intent.getDoubleExtra("Latitude", 0f);
                double longitude = intent.getDoubleExtra("Longitude",0f);
                Toast.makeText(context, "Lat is : " + lat + " Long is : " + longitude, Toast.LENGTH_SHORT).show();
                if(googleMap!=null){
                    LatLng latLng = new LatLng(lat,longitude);
                    if(marker !=null){
                        marker.setPosition(latLng);
                    }
                    else{
                        MarkerOptions markerOptions = new MarkerOptions();
                        markerOptions.position(latLng);
                        marker = googleMap.addMarker(markerOptions);
                    }
                    googleMap.setOnMapLoadedCallback(new GoogleMap.OnMapLoadedCallback() {
                        @Override
                        public void onMapLoaded() {
                            googleMap.moveCamera(CameraUpdateFactory.newLatLngZoom(latLng,14));
                        }
                    });

                }
            }
        }
    }
}