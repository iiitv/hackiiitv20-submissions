package edu.free;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.app.AlertDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.RelativeLayout;
import android.widget.Spinner;

import com.google.android.gms.ads.AdView;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.database.ChildEventListener;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;

import java.util.ArrayList;

public class HomeActivity extends AppCompatActivity implements AdapterView.OnItemSelectedListener {

    RecyclerView courseRecycler;
    RelativeLayout homeRelLayout;

    Toolbar toolbar;
    FirebaseAuth mAuth;
    FirebaseUser user;

    DatabaseReference databaseReference;

    AlertDialog.Builder builder;


    Spinner spinner;
    String Type;
    String appShare;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        builder = new AlertDialog.Builder(this);


        mAuth = FirebaseAuth.getInstance();
        user = mAuth.getCurrentUser();

        courseRecycler = findViewById(R.id.courseRecycler);
        spinner = findViewById(R.id.spinnerMenu);

        toolbar = findViewById(R.id.toolbar);
        toolbar.setTitle("EduFree");
        setSupportActionBar(toolbar);

        Type = "Programming";

        spinner = findViewById(R.id.spinnerMenu);
        ArrayAdapter<CharSequence> adapter = ArrayAdapter.createFromResource(getApplicationContext(), R.array.courseList, android.R.layout.simple_spinner_item);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinner.setAdapter(adapter);
        spinner.setOnItemSelectedListener(this);

        courseRecycler.setLayoutManager(new LinearLayoutManager(getApplicationContext()));

        databaseActivities();



    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        MenuInflater inflater = getMenuInflater();
        inflater.inflate(R.menu.menumain, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        int id = item.getItemId();

        if (id == R.id.log_out) {
            AlertExit();
            AlertDialog alertDialog = builder.create();
            alertDialog.show();

        } else if (id == R.id.share) {


            Intent intent = new Intent(Intent.ACTION_SEND);
            intent.setType("text/plain");
            String shareBody = appShare;
            //This app help you to test your skill and learn new things,This app keep you updated with world and you are able to get important websites which will make your work easier and smooth.Now Browse seamlessly.
            String shareSub = "Gyani:Be Enlightened ,A common app for all age!";
            intent.putExtra(Intent.EXTRA_SUBJECT, shareSub);
            intent.putExtra(Intent.EXTRA_TEXT, shareBody);
            startActivity(Intent.createChooser(intent, "Share using..."));
        }

        return true;
    }


    public void AlertExit() {

        builder.setMessage("Do you really want to Logout?").setTitle("Confirmation")
                .setPositiveButton("Ok", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {

                        if (user != null) {
                            mAuth.signOut();
                            finish();
                            startActivity(new Intent(getApplicationContext(), MainActivity.class));
                        }

                    }
                }).setNegativeButton("Cancel", null).setCancelable(false);


    }

    private void databaseActivities() {

        CourseAdapter courseAdapter = new CourseAdapter(courseRecycler, getApplicationContext(), new ArrayList<String>());
        courseRecycler.setAdapter(courseAdapter);


        databaseReference = FirebaseDatabase.getInstance().getReference("Courses").child(Type).child("Topic");

        databaseReference.addChildEventListener(new ChildEventListener() {
            @Override
            public void onChildAdded(@NonNull DataSnapshot snapshot, @Nullable String previousChildName) {

                String fileName = snapshot.getKey().toString();

                ((CourseAdapter) courseRecycler.getAdapter()).update(fileName);


            }

            @Override
            public void onChildChanged(@NonNull DataSnapshot snapshot, @Nullable String previousChildName) {

            }

            @Override
            public void onChildRemoved(@NonNull DataSnapshot snapshot) {

            }

            @Override
            public void onChildMoved(@NonNull DataSnapshot snapshot, @Nullable String previousChildName) {

            }

            @Override
            public void onCancelled(@NonNull DatabaseError error) {

            }
        });
    }

    @Override
    public void onItemSelected(AdapterView<?> adapterView, View view, int i, long l) {
        Type = adapterView.getItemAtPosition(i).toString();
        databaseActivities();
    }

    @Override
    public void onNothingSelected(AdapterView<?> adapterView) {

    }
}
