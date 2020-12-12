package edu.free;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Patterns;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ProgressBar;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;

public class SignNewUserActivity extends AppCompatActivity {

    EditText userName ,userPassword;
    private FirebaseAuth mAuth;
    ProgressBar progressBar;
    Button register;
    TextView signUpToIn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sign_new_user);

        mAuth = FirebaseAuth.getInstance();

        progressBar = (ProgressBar)findViewById(R.id.progBar);
        userName = (EditText)findViewById(R.id.email);
        userPassword = (EditText)findViewById(R.id.userP);
        signUpToIn = findViewById(R.id.signUpToIn);
        register = findViewById(R.id.RegisterUser);


        onClickEvents();

    }

    private void onClickEvents() {

        register.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                registerUser();
            }
        });

        signUpToIn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(getApplicationContext(),MainActivity.class));
                finish();
            }
        });




    }

    private  void registerUser()
    {
        String useremail = userName.getText().toString().trim();
        String userpassword = userPassword.getText().toString().trim();

        if(useremail.isEmpty()){

            userName.setError("Email is Empty");
            userName.requestFocus();
            return;
        }

        if(!Patterns.EMAIL_ADDRESS.matcher(useremail).matches()){
            userName.setError("Please enter valid email");
            userName.requestFocus();
            return;
        }

        if(userpassword.isEmpty()){

            userPassword.setError("Password is Empty");
            userPassword.requestFocus();
            return;
        }

        if(userpassword.length()<6){
            userPassword.setError("Minimum length is 6");
            userPassword.requestFocus();
            return;
        }

        progressBar.setVisibility(View.VISIBLE);

        mAuth.createUserWithEmailAndPassword(useremail,userpassword).addOnCompleteListener(new OnCompleteListener<AuthResult>() {
            @Override
            public void onComplete(@NonNull Task<AuthResult> task) {
                if(task.isSuccessful())
                {
                    progressBar.setVisibility(View.GONE);

                    startActivity(new Intent(getApplicationContext(),HomeActivity.class));
                    finish();

                }else{
                    Toast.makeText(getApplicationContext(),task.getException().getMessage(),Toast.LENGTH_SHORT).show();
                    userName.requestFocus();
                    progressBar.setVisibility(View.GONE);
                }
            }
        });

    }

}
