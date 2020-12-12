package edu.free;

import androidx.appcompat.app.AppCompatActivity;

import android.app.AlertDialog;
import android.app.DownloadManager;
import android.content.DialogInterface;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.os.Environment;
import android.view.View;
import android.webkit.DownloadListener;
import android.webkit.URLUtil;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.ProgressBar;
import android.widget.TextView;
import android.widget.Toast;

public class ImportantActivity extends AppCompatActivity {

    WebView webView;
    ProgressBar progressBar;
    String url,heading;
    TextView headingTxtView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_important);

        headingTxtView = findViewById(R.id.important_text);
        webView = (WebView) findViewById(R.id.important_website_web);
        progressBar = findViewById(R.id.progress_bar);

        Intent intent = getIntent();
        url = intent.getStringExtra("url");
        heading = intent.getStringExtra("heading");

        //url = "https://devparmar1.github.io/linksite";

        headingTxtView.setText(heading);

        webView.getSettings().setJavaScriptEnabled(true);
        webView.getSettings().setAllowFileAccess(true);
        webView.getSettings().setBuiltInZoomControls(true);
        webView.getSettings().setDisplayZoomControls(false);
        webView.setDownloadListener(new DownloadListener() {
            @Override
            public void onDownloadStart(String url, String userAgent, String contentDisposition, String mimetype, long contentLength) {
                DownloadManager.Request request = new DownloadManager.Request(Uri.parse(url));
                request.setDescription("Download file...");
                request.setTitle(URLUtil.guessFileName(url,contentDisposition,mimetype));
                request.allowScanningByMediaScanner();
                request.setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED);
                request.setDestinationInExternalPublicDir(Environment.DIRECTORY_DOWNLOADS,URLUtil.guessFileName(url,contentDisposition,mimetype));
                DownloadManager dm = (DownloadManager)getSystemService(DOWNLOAD_SERVICE);
                dm.enqueue(request);
                Toast.makeText(getApplicationContext(),"Downloading file...",Toast.LENGTH_LONG).show();
            }
        });
        webView.canGoBack();
        webView.setWebViewClient(new MyWebViewClient());
        if (url != null){
            webView.loadUrl(url);
            //"http://drive.google.com/viewerng/viewer?embedded=true&url="+
        }else{finish();}


    }

    @Override
    public void onBackPressed() {
        if (webView.canGoBack()){
            webView.goBack();
        }else{
            new AlertDialog.Builder(this).setTitle("Exit").setMessage("Are you sure you want to close?")
                    .setPositiveButton("Yes", new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog, int which) {

                            finish();
                        }
                    }).setNegativeButton("No",null).show();
        }
    }

    public class MyWebViewClient extends WebViewClient {

        @Override
        public boolean shouldOverrideUrlLoading(WebView view, String url) {
            view.loadUrl(url);
            if(progressBar.getVisibility() == View.GONE){
                progressBar.setVisibility(View.VISIBLE);
            }
            return true;
        }

        @Override
        public void onPageFinished(WebView view, String url) {
            if(progressBar.getVisibility()==View.VISIBLE){
                progressBar.setVisibility(View.GONE);
            }
        }


    }

}