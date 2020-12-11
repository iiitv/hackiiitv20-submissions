package com.breejemodi.safetravel;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import com.breejemodi.safetravel.registration.RegisterActivity;

public class SplashActivity extends AppCompatActivity {

    private Button btnGetStarted;
    private ImageView edlogo;
    private TextView txtWelcome;
    private Animation topAnim, bottomAnim;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);

        btnGetStarted = findViewById(R.id.btnGetStarted);
        edlogo = findViewById(R.id.stlogo);
        txtWelcome = findViewById(R.id.welcomeText);
        topAnim = AnimationUtils.loadAnimation(this,R.anim.top_animation);
        bottomAnim = AnimationUtils.loadAnimation(this,R.anim.bottom_animation);

        edlogo.setAnimation(topAnim);
        txtWelcome.setAnimation(bottomAnim);
        btnGetStarted.setAnimation(bottomAnim);

        btnGetStarted.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(SplashActivity.this, RegisterActivity.class);
                startActivity(intent);
                finish();
            }
        });
    }
}