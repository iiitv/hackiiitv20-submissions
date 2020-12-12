package com.breejemodi.safetravel;

import java.util.ArrayList;

public class RouteBus {

    private ArrayList<String> route ;
    private int startTimehr,endTimeHr;
    private String id;

    public RouteBus(ArrayList<String> route, int startTimehr, int endTimeHr,String id) {
        this.route = route;
        this.startTimehr = startTimehr;
        this.endTimeHr = endTimeHr;
        this.id= id;
    }

    public ArrayList<String> getRoute() {
        return route;
    }

    public void setRoute(ArrayList<String> route) {
        this.route = route;
    }

    public int getStartTimehr() {
        return startTimehr;
    }

    public void setStartTimehr(int startTimehr) {
        this.startTimehr = startTimehr;
    }

    public int getEndTimeHr() {
        return endTimeHr;
    }

    public void setEndTimeHr(int endTimeHr) {
        this.endTimeHr = endTimeHr;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

}
