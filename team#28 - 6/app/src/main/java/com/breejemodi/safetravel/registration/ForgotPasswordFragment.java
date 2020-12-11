package com.breejemodi.safetravel.registration;

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
import android.widget.Toast;

import com.breejemodi.safetravel.R;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.FirebaseAuth;

import java.util.regex.Pattern;

public class ForgotPasswordFragment extends Fragment {

    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    private String mParam1;
    private String mParam2;

    public ForgotPasswordFragment() {
        // Required empty public constructor
    }

    public static ForgotPasswordFragment newInstance(String param1, String param2) {
        ForgotPasswordFragment fragment = new ForgotPasswordFragment();
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
        return inflater.inflate(R.layout.fragment_forgot_password, container, false);
    }

    private EditText edtEmailFP;
    private ProgressBar progressBar;
    private Button btnResetPassword;
    private FirebaseAuth firebaseAuth;

    public static final Pattern VALID_EMAIL_ADDRESS_REGEX =
            Pattern.compile("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$", Pattern.CASE_INSENSITIVE);

    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);

        init(view);

        firebaseAuth = FirebaseAuth.getInstance();

        btnResetPassword.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                edtEmailFP.setError(null);
                if(VALID_EMAIL_ADDRESS_REGEX.matcher(edtEmailFP.getText().toString()).find()){
                    progressBar.setVisibility(View.VISIBLE);
                    btnResetPassword.setEnabled(false);

                    firebaseAuth.sendPasswordResetEmail(edtEmailFP.getText().toString()).addOnCompleteListener(new OnCompleteListener<Void>() {
                        @Override
                        public void onComplete(@NonNull Task<Void> task) {
                            if(task.isSuccessful()){

                                progressBar.setVisibility(View.VISIBLE);
                                Toast.makeText(getContext(),"Reset Password Email has been Sent Successfully!", Toast.LENGTH_LONG).show();
                                try {
                                    ((RegisterActivity)getActivity()).setFragment(new LoginFragment());
                                }catch(Exception ignored){}

                            }else {
                                String error = null;
                                try {
                                    error = task.getException().getMessage();
                                } catch (Exception ignored) {
                                }
                                edtEmailFP.setError(error);
                                progressBar.setVisibility(View.INVISIBLE);
                            }
                            btnResetPassword.setEnabled(true);
                        }
                    });
                }else{
                    edtEmailFP.setError("Enter Valid Email ID!");
                }
            }
        });
    }

    private void init(View view) {
        edtEmailFP = view.findViewById(R.id.edtEmailFP);
        btnResetPassword = view.findViewById(R.id.btnSendLink);
        progressBar = view.findViewById(R.id.pbForgotPass);

    }

}