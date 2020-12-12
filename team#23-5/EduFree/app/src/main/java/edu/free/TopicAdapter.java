package edu.free;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Button;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.cardview.widget.CardView;
import androidx.recyclerview.widget.RecyclerView;

import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.drawee.view.SimpleDraweeView;

import java.util.ArrayList;

class TopicAdapter extends RecyclerView.Adapter<TopicAdapter.ViewHolder> {

    RecyclerView recyclerView;
    ArrayList<String> videoId = new ArrayList<>();
    ArrayList<String> videoIdT = new ArrayList<>();
    Context context;


    public TopicAdapter(RecyclerView recyclerView, Context context, ArrayList<String> videoId,ArrayList<String> videoIdT) {
        this.recyclerView = recyclerView;
        this.videoId = videoId;
        this.context = context;
        this.videoIdT = videoIdT;
    }


    @Override
    public TopicAdapter.ViewHolder onCreateViewHolder( ViewGroup parent, int viewType) {

        View view = LayoutInflater.from(context).inflate(R.layout.video_item,parent,false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, final int position) {

        ((ViewHolder) holder).youtubeWebEmbed.setWebChromeClient(new WebChromeClient());
        ((ViewHolder) holder).youtubeWebEmbed.getSettings().setPluginState(WebSettings.PluginState.ON);
        ((ViewHolder) holder).youtubeWebEmbed.setWebViewClient(new WebViewClient());
        ((ViewHolder) holder).youtubeWebEmbed.getSettings();
        ((ViewHolder) holder).youtubeWebEmbed.getSettings().setJavaScriptEnabled(true);
        ((ViewHolder) holder).youtubeWebEmbed.setBackgroundColor(0x00000000);
        ((ViewHolder) holder).youtubeWebEmbed.setKeepScreenOn(true);
        ((ViewHolder) holder).youtubeWebEmbed.setHorizontalScrollBarEnabled(false);
        ((ViewHolder) holder).youtubeWebEmbed.setVerticalScrollBarEnabled(false);
        ((ViewHolder) holder).youtubeWebEmbed.getSettings().setBuiltInZoomControls(true);


        final String mimeType = "text/html";
        final String encoding = "UTF-8";
        String id = videoId.get(position);
        if (videoIdT.get(position).charAt(0) == 'P'){
            String html = getHTMLPlaylist(id);
            ((ViewHolder) holder).youtubeWebEmbed.loadDataWithBaseURL("", html, mimeType, encoding, "");

        }else{
            String html = getHTML(id);
            ((ViewHolder) holder).youtubeWebEmbed.loadDataWithBaseURL("", html, mimeType, encoding, "");
        }

        ((ViewHolder) holder).fullscreenBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(context,VideoFullScreenActivity.class);
                intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                intent.putExtra("vId",videoId.get(position));
                intent.putExtra("vType",videoIdT.get(position));
                context.startActivity(intent);
            }
        });

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
                "&autoplay=1&fs=1&vq=hd720\" " + "frameborder=\"0\" allow=\"encrpted-media;picture-in-picture\" allowfullscreen></iframe>"
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
                + "\" frameborder=\"0\" allow=\"autoplay;encrpted-media;picture-in-picture\" allowfullscreen></iframe>"
                + "</body>"
                + "</html>";

        return html;
    }



    @Override
    public int getItemCount() {
        return videoId.size();
    }

    public void update(String name,String vt){

        videoId.add(name);
        videoIdT.add(vt);

        notifyDataSetChanged();

    }

    public class ViewHolder extends RecyclerView.ViewHolder{

        WebView youtubeWebEmbed;
        CardView cardView;
        Button fullscreenBtn;


        public ViewHolder(@NonNull View itemView) {
            super(itemView);

            cardView = itemView.findViewById(R.id.cardView_video);
            youtubeWebEmbed = itemView.findViewById(R.id.youtubeWebembedItem);
            fullscreenBtn = itemView.findViewById(R.id.fullscreenBtn);


        }


    }




}

