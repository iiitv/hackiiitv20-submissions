package edu.free;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class VideoFullScreenActivity extends AppCompatActivity {

    String vId,vType;
    WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_video_full_screen);

        Intent intent = getIntent();
        vId = intent.getStringExtra("vId");
        vType = intent.getStringExtra("vType");

        webView = findViewById(R.id.fullWebView);

        webView.setWebChromeClient(new WebChromeClient());
        webView.getSettings().setPluginState(WebSettings.PluginState.ON);
        webView.setWebViewClient(new WebViewClient());
        webView.getSettings();
        webView.getSettings().setJavaScriptEnabled(true);
        webView.setBackgroundColor(0x00000000);
        webView.setKeepScreenOn(true);
        webView.setHorizontalScrollBarEnabled(false);
        webView.setVerticalScrollBarEnabled(false);
        webView.getSettings().setBuiltInZoomControls(true);

        final String mimeType = "text/html";
        final String encoding = "UTF-8";
        String id = vId;
        if (vType.charAt(0) == 'P'){
            String html = getHTMLPlaylist(id);
            webView.loadDataWithBaseURL("", html, mimeType, encoding, "");

        }else{
            String html = getHTML(id);
            webView.loadDataWithBaseURL("", html, mimeType, encoding, "");
        }


    }

    public String getHTML(String vid)
    {

        String html = "<html>"

                + "<head>"
                + "</head>"
                + "<body style=\"border: 0; padding: 0\">"
                + "<iframe "
                + "type=\"text/html\" "
                + "class=\"youtube-player\" "
                + "width= 100%\""
                + "\" "
                + "height= 95%\""
                + "\" "
                + "src=\"http://www.youtube.com/embed/"
                + vid
                + "?controls=1&showinfo=0&showsearch=0&modestbranding=0" +
                "&autoplay=1&fs=1&vq=hd720\" " + "frameborder=\"0\" allowfullscreen></iframe>"
                + "</body>"
                + "</html>";

        return html;
    }

    public String getHTMLPlaylist(String vid)
    {

        String html = "<html>"

                + "<head>"
                + "</head>"
                + "<body style=\"border: 0; padding: 0\">"
                + "<iframe "
                + "type=\"text/html\" "
                + "class=\"youtube-player\" "
                + "width= 100%\""
                + "\" "
                + "height= 95%\""
                + "\" "
                + "src=\"http://www.youtube.com/embed/videoseries?list="
                + vid.trim()
                + "\" frameborder=\"0\" allow=\"autoplay;encrpted-media\" allowfullscreen></iframe>"
                + "</body>"
                + "</html>";

        return html;
    }


}