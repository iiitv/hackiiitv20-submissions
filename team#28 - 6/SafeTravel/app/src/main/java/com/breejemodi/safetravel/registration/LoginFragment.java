package com.breejemodi.safetravel.registration;

import android.content.Intent;
import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

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
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;

import java.util.regex.Pattern;

public class LoginFragment extends Fragment {

    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    private String mParam1;
    private String mParam2;

    public LoginFragment() {
        // Required empty public constructor
    }

    public static LoginFragment newInstance(String param1, String param2) {
        LoginFragment fragment = new LoginFragment();
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
        return inflater.inflate(R.layout.fragment_login, container, false);
    }

    private EditText edtEmailID, edtPasswordLogin;
    private Button btnLogin;
    private ProgressBar progressBar;
    private TextView txtSignup,txtForgotPassword;
    private FirebaseAuth firebaseAuth;

    public static final Pattern VALID_EMAIL_ADDRESS_REGEX =
            Pattern.compile("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$", Pattern.CASE_INSENSITIVE);

    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);

        init(view);

        btnLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                if(edtEmailID.getText().toString().isEmpty()){
                    progressBar.setVisibility(View.VISIBLE);
                    edtEmailID.setError("Required!");
                    return;
                }
                if(edtPasswordLogin.getText().toString().isEmpty()){
                    progressBar.setVisibility(View.VISIBLE);
                    edtPasswordLogin.setError("Required!");
                    return;
                }

                if(VALID_EMAIL_ADDRESS_REGEX.matcher(edtEmailID.getText().toString()).find()){

                    progressBar.setVisibility(View.VISIBLE);
                    login(edtEmailID.getText().toString());

                }

            }
        });

        txtForgotPassword.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                ((RegisterActivity)getActivity()).setFragment(new ForgotPasswordFragment());
            }
        });

        txtSignup.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                ((RegisterActivity)getActivity()).setFragment(new CreateAccountFragment());
            }
        });
    }

    private void login(String edtEmailID) {

        firebaseAuth = FirebaseAuth.getInstance();
        firebaseAuth.signInWithEmailAndPassword(edtEmailID,edtPasswordLogin.getText().toString()).addOnCompleteListener(new OnCompleteListener<AuthResult>() {
            @Override
            public void onComplete(@NonNull Task<AuthResult> task) {
                if(task.isSuccessful()){

                    Intent mIntent = new Intent(getContext(), MainActivity.class);
                    startActivity(mIntent);
                    getActivity().finish();

                }else{

                    String error = task.getException().getMessage();
                    Toast.makeText(getContext(),error,Toast.LENGTH_LONG);
                    progressBar.setVisibility(View.INVISIBLE);

                }
            }
        });

    }

    private void init(View view) {
        edtEmailID = view.findViewById(R.id.edtEmailLogin);
        edtPasswordLogin = view.findViewById(R.id.edtPasswordLogin);
        btnLogin = view.findViewById(R.id.btnLogin);
        progressBar = view.findViewById(R.id.pb);
        txtSignup = view.findViewById(R.id.edtsignup);
        txtForgotPassword = view.findViewById(R.id.edtForgotPass);
    }

}