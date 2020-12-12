package com.breejemodi.safetravel;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;

public class resultAdapter extends RecyclerView.Adapter<resultAdapter.MyViewHolder> {

    ArrayList<RouteBus> data;
    Context context;
    String endoftravel;
    public resultAdapter(Context ct, ArrayList<RouteBus> d,String e){
        context = ct;
        data = d;
        endoftravel =e;

    }
    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        LayoutInflater inflater = LayoutInflater.from(context);
        View view =inflater.inflate(R.layout.my_row,parent,false);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        holder.busnoid.setText(data.get(position).getId());
        holder.destination.setText(endoftravel);

    }

    @Override
    public int getItemCount() {
        return data.size();
    }

    public class MyViewHolder extends RecyclerView.ViewHolder{
        TextView busnoid,destination;

        public MyViewHolder(@NonNull View itemView) {

            super(itemView);
            busnoid=itemView.findViewById(R.id.busno);
            destination=itemView.findViewById(R.id.destination);

            itemView.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    Intent setIntent = new Intent(itemView.getContext(),BusStatusActivity.class);
                    setIntent.putExtra("Busno", busnoid.getText().toString());
                    itemView.getContext().startActivity(setIntent);
                }
            });
        }


    }



}
