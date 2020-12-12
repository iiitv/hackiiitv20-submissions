package com.breejemodi.safetravel;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

public class ConductorSideStatus extends AppCompatActivity implements AdapterView.OnItemSelectedListener {

    private ImageView plus,minus;
    private TextView txtNoOfSeatsUsed;
    private Spinner spinner;
    private int noOfSeatsUsed = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_conductor_side_status);

        init();

        ArrayAdapter<CharSequence> adapter = ArrayAdapter.createFromResource(this,R.array.status, android.R.layout.simple_spinner_item);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinner.setAdapter(adapter);
        spinner.setOnItemSelectedListener(this);

        plus.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                noOfSeatsUsed++;
                txtNoOfSeatsUsed.setText(noOfSeatsUsed);
            }
        });

        minus.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                noOfSeatsUsed--;
                txtNoOfSeatsUsed.setText(noOfSeatsUsed);
            }
        });



    }

    private void init() {

        plus = findViewById(R.id.plus);
        minus = findViewById(R.id.minus);
        txtNoOfSeatsUsed = findViewById(R.id.txtNoOfSeats);
        spinner = findViewById(R.id.spinner);
    }

    @Override
    public void onItemSelected(AdapterView<?> adapterView, View view, int i, long l) {
        String text = adapterView.getItemAtPosition(i).toString();
        Toast.makeText(adapterView.getContext(), text, Toast.LENGTH_SHORT).show();
    }

    @Override
    public void onNothingSelected(AdapterView<?> adapterView) {

    }
}