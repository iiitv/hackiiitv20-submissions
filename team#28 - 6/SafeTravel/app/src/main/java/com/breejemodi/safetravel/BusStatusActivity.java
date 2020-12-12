package com.breejemodi.safetravel;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class BusStatusActivity extends AppCompatActivity {

    private TextView txtBusName,txtPCOfSeatPacked,txtRisk;
    private Button btnGPSCheck;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_bus_status);

        init();

        txtBusName.setText(getIntent().getStringExtra("Busno"));
        btnGPSCheck.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(BusStatusActivity.this,GPSActivity.class);
                startActivity(intent);
            }
        });


    }

    private void init() {

        txtBusName = findViewById(R.id.txtBusName);
        txtPCOfSeatPacked = findViewById(R.id.txtPCOfSeatPacked);
        txtRisk = findViewById(R.id.txtRisk);
        btnGPSCheck = findViewById(R.id.btnGPSCheck);

    }
}