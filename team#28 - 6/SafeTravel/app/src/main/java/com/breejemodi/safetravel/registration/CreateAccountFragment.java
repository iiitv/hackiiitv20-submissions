package com.breejemodi.safetravel.registration;

import android.content.Intent;
import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

import com.breejemodi.safetravel.MainActivity;
import com.breejemodi.safetravel.R;
import com.breejemodi.safetravel.SplashActivity;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;

import java.util.regex.Pattern;


public class CreateAccountFragment extends Fragment {

    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    private String mParam1;
    private String mParam2;

    public CreateAccountFragment() {
        // Required empty public constructor
    }

    public static CreateAccountFragment newInstance(String param1, String param2) {
        CreateAccountFragment fragment = new CreateAccountFragment();
        Bundle args = new Bundle();
        args.putString(ARG_PARAM1, param1);
        args.putString(ARG_PARAM2, param2);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            mParam1 = getArguments().getString(ARG_PARAM1);
            mParam2 = getArguments().getString(ARG_PARAM2);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_create_account, container, false);
    }

    private EditText edtEmailID, edtPasswordSignUp;
    private Button btnSignUp;
    private ProgressBar progressBar;
    private TextView txtLogin;
    private FirebaseAuth firebaseAuth;

    public static final Pattern VALID_EMAIL_ADDRESS_REGEX =
            Pattern.compile("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$", Pattern.CASE_INSENSITIVE);

    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);

        init(view);

        firebaseAuth = FirebaseAuth.getInstance();

        txtLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                ((RegisterActivity)getActivity()).setFragment(new LoginFragment());
            }
        });

        btnSignUp.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                edtEmailID.setError(null);
                edtPasswordSignUp.setError(null);

                if(edtEmailID.getText().toString().isEmpty()){
                    edtEmailID.setError("Required!");
                    return;
                }
                if(edtPasswordSignUp.getText().toString().isEmpty()){
                    edtPasswordSignUp.setError("Required!");
                    return;
                }

                if(!VALID_EMAIL_ADDRESS_REGEX.matcher(edtEmailID.getText().toString()).find()){
                    edtEmailID.setError("Please Enter Valid Email");
                    return;
                }
                createAccount(view);
            }
        });
    }

    private void createAccount(View view) {

        firebaseAuth = FirebaseAuth.getInstance();

        progressBar.setVisibility(View.VISIBLE);
        firebaseAuth.createUserWithEmailAndPassword(edtEmailID.getText().toString(), edtPasswordSignUp.getText().toString())
                .addOnCompleteListener(getActivity(), new OnCompleteListener<AuthResult>() {
                    @Override
                    public void onComplete(@NonNull Task<AuthResult> task) {
                        if (task.isSuccessful()) {
                            // Sign in success, update UI with the signed-in user's information
                            Log.d("TAG", "createUserWithEmail:success");
                            FirebaseUser user = firebaseAuth.getCurrentUser();
                            Intent intent = new Intent(getContext(), MainActivity.class);
                            startActivity(intent);

                        } else {
                            // If sign in fails, display a message to the user.
                            try {
                                Log.w("TAG", "createUserWithEmail:failure", task.getException());
                            }catch (Exception ignored){
                            }
                            Toast.makeText(getActivity(), "Error in Creating Account... Try Again!", Toast.LENGTH_SHORT).show();
                            progressBar.setVisibility(View.INVISIBLE);

                        }
                        // ...
                    }
                });
    }

    private void init(View view) {

        edtEmailID = view.findViewById(R.id.edtEmail);
        edtPasswordSignUp = view.findViewById(R.id.edtPassword);
        btnSignUp = view.findViewById(R.id.btnCreateAccount);
        progressBar = view.findViewById(R.id.progressBar);
        txtLogin = view.findViewById(R.id.edtlogin);
    }

    @Override
    public void onStart() {
        super.onStart();
        // Check if user is signed in (non-null) and update UI accordingly.
        FirebaseUser currentUser = firebaseAuth.getCurrentUser();
    }


}