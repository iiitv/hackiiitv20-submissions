package edu.free;

import android.content.Intent;
import android.os.Bundle;
import android.webkit.WebView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.database.ChildEventListener;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;

import java.util.ArrayList;

public class TopicActivity extends AppCompatActivity {

    RecyclerView topicRecycler;
    String courseName,topicName;
    FirebaseAuth mAuth;
    FirebaseUser user;

    DatabaseReference databaseReference;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_topic);

        mAuth = FirebaseAuth.getInstance();
        user = mAuth.getCurrentUser();

        Intent intent = getIntent();
        courseName = intent.getStringExtra("cName");
        topicName = intent.getStringExtra("tName");

        topicRecycler = findViewById(R.id.topicRecycler);

        topicRecycler.setLayoutManager(new LinearLayoutManager(getApplicationContext()));

        databaseActivities();


    }

    private void databaseActivities() {

        TopicAdapter topicAdapter = new TopicAdapter(topicRecycler, getApplicationContext(), new ArrayList<String>(),new ArrayList<String>());
        topicRecycler.setAdapter(topicAdapter);


        databaseReference = FirebaseDatabase.getInstance().getReference("Courses").child(courseName).child("Topic").child(topicName);
        Toast.makeText(this, "Loading Topics", Toast.LENGTH_SHORT).show();

        databaseReference.addChildEventListener(new ChildEventListener() {
            @Override
            public void onChildAdded(@NonNull DataSnapshot snapshot, @Nullable String previousChildName) {

                String videoT = snapshot.getKey();
                String videoId = (String)snapshot.getValue();
                ((TopicAdapter)topicRecycler.getAdapter()).update(videoId,videoT);

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


}