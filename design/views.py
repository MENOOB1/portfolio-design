from django.core.mail import send_mail
from django.shortcuts import render

from .models import *
# Create your views here.
def home(request):
     
    allProject=Project.objects.all()
    ExperienceList=Experience.objects.all()
    ResumePdf=Resume.objects.all().last()
    if request.method=='POST':
        name=request.POST['name']
        email=request.POST['email']
        message=request.POST['message']
        send_mail(
            name,
            email+"    "+message,
            email,
            ['rv432222@gmail.com'],
            fail_silently=False,
        )

    return render(request,'index.html',{'proj':allProject,'resu':ResumePdf,'exp':ExperienceList})