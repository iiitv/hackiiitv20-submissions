package com.breejemodi.safetravel;

import android.app.Service;
import android.content.Intent;
import android.os.IBinder;
import android.os.Looper;

import com.google.android.gms.location.FusedLocationProviderClient;
import com.google.android.gms.location.LocationCallback;
import com.google.android.gms.location.LocationRequest;
import com.google.android.gms.location.LocationResult;
import com.google.android.gms.location.LocationServices;

import androidx.annotation.Nullable;

public class LocationService extends Service {

    FusedLocationProviderClient fusedLocationProviderClient;
    LocationCallback locationCallback;

    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    @Override
    public void onCreate() {
        super.onCreate();

        fusedLocationProviderClient = LocationServices.getFusedLocationProviderClient(this);
        locationCallback = new LocationCallback(){

            @Override
            public void onLocationResult(LocationResult locationResult) {
                super.onLocationResult(locationResult);
            }
        };
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {

        requestLocation();
        return super.onStartCommand(intent, flags, startId);
    }

    private void requestLocation(){

        LocationRequest locationRequest = new LocationRequest();
        locationRequest.setInterval(5000);
        locationRequest.setPriority(LocationRequest.PRIORITY_BALANCED_POWER_ACCURACY);
        fusedLocationProviderClient.requestLocationUpdates(locationRequest,locationCallback, Looper.myLooper());

    }

}
