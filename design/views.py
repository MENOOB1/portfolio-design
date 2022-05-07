import imp
from django.shortcuts import render
from .models import *
# Create your views here.
def home(request):
    allProject=Project.objects.all()
    ExperienceList=Experience.objects.all()
    ResumePdf=Resume.objects.all().last()

    return render(request,'index.html',{'proj':allProject,'resu':ResumePdf,'exp':ExperienceList})