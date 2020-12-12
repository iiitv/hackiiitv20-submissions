package com.example.helloworld;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class MainActivity3 extends AppCompatActivity {

    private Button NextButton;
    private EditText phone1;
    private EditText phone2;
    private EditText phone3;
    private EditText email1;
    private EditText email2;
    private EditText email3;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main3);

        NextButton = (Button)findViewById(R.id.button2);
        phone1 = (EditText) findViewById(R.id.editTextPhone);
        phone2 = (EditText) findViewById(R.id.editTextPhone2);
        phone3 = (EditText) findViewById(R.id.editTextPhone3);
        email1 = (EditText) findViewById(R.id.editTextTextEmailAddress);
        email2 = (EditText) findViewById(R.id.editTextTextEmailAddress2);
        email3 = (EditText) findViewById(R.id.editTextTextEmailAddress3);


        NextButton.setOnClickListener(new View.OnClickListener() {
            @Override


            public void onClick(View view) {
                Intent intent = new Intent(MainActivity3.this, MainActivity4.class);
                startActivity(intent);
            }
        });
    }


}