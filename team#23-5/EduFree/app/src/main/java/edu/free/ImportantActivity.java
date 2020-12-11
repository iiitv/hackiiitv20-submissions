package edu.free;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.webkit.WebView;

public class ImportantActivity extends AppCompatActivity {

    WebView wv;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_important);

        wv = (WebView) findViewById(R.id.important_website_web);
        wv.loadUrl("file:///asset/linksite.html");

    }
}