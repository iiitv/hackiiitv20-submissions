from django.shortcuts import render,get_object_or_404
from django.http import HttpResponse,HttpResponseRedirect
from.models import Docter,Patient

# Create your views here.
def index (request):
    return render(request,'healthline/index.html')


def patients(request):
    # latest_release = Docter.objects.order_by('grain_date')
    latest_release = Docter.objects.all()
    context = {'latest_release': latest_release}
    return render(request, 'healthline/market.html', context)

def docter(request):
    if request.method == 'POST':
        if request.POST.get('docter_name'):


            post=Docter()
            post.docter_name=request.POST.get('docter_name')
            post.docter_type=request.POST.get('docter_type')
            post.doctor_exp=request.POST.get('docter_exp')
            # post.docter_image=request.POST.get('docter_image')
            post.save()
            return render(request,'healthline/index.html')
        else:
            return render(request,'healthline/index.html')

    return render(request,'healthline/market2.html')

def posting(request):
    all_docters = Docter.objects.all()
    context = {'all_docters':all_docters}
    return render(request,'healthline/market.html',context)
