from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
    return render(request, 'index.html')
    # return HttpResponse("hello")

def about(request):
    return render(request, 'about.html')
    # return HttpResponse("about")

def doctor(request):
    return render(request, 'doctor.html')
    # return HttpResponse("customer")

def patient(request):
    return render(request, 'patient.html')
    # return HttpResponse("customer")

def ad(request):
    return render(request, 'ad.html')
    # return HttpResponse("customer")

def contact(request):
    return render(request, 'contact.html')
    # return HttpResponse("contact")