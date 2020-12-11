package edu.free;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.drawee.view.SimpleDraweeView;

import java.util.ArrayList;

class CourseAdapter extends RecyclerView.Adapter<CourseAdapter.ViewHolder> {

    RecyclerView recyclerView;
    ArrayList<String> courseName = new ArrayList<>();
    Context context;
    String cName;


    public CourseAdapter(RecyclerView recyclerView, Context context, ArrayList<String> coursrName) {
        this.recyclerView = recyclerView;
        this.courseName = coursrName;
        this.context = context;
    }


    @Override
    public CourseAdapter.ViewHolder onCreateViewHolder( ViewGroup parent, int viewType) {

        View view = LayoutInflater.from(context).inflate(R.layout.website_item,parent,false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {

        holder.nameofFile.setText(courseName.get(position));
    }



    @Override
    public int getItemCount() {
        return courseName.size();
    }

    public void update(String name,String cn){

        courseName.add(name);
        cName = cn;

        notifyDataSetChanged();

    }

    public class ViewHolder extends RecyclerView.ViewHolder{

        TextView nameofFile,weburl;


        public ViewHolder(@NonNull View itemView) {
            super(itemView);

            nameofFile = itemView.findViewById(R.id.webName);
            itemView.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {

                    int position = recyclerView.getChildLayoutPosition(view);
                    Intent intent = new Intent(context,TopicActivity.class);
                    intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                    intent.putExtra("cName",cName);
                    intent.putExtra("tName",courseName.get(position));
                    context.startActivity(intent);

                }
            });
        }


    }


}

