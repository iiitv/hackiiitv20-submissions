from django.contrib import admin
from django.urls import path
from home import views

urlpatterns = [
    path("", views.index, name='home'),
    path("/templates/about", views.about, name='about'),
    path("/templates/doctor", views.doctor, name='doctor'),
    path("/templates/patient", views.patient, name='patient'),
    path("/templates/ad", views.ad, name='ad'),
    path("/templates/contact", views.contact, name='contact')
]
