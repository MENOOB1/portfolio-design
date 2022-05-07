from statistics import mode
from turtle import position
from django.db import models

# Create your models here.
class Resume(models.Model):
    resume=models.FileField(upload_to ='uploads')



class Project(models.Model):
    title=models.CharField(max_length=20)
    mainImg=models.FileField(upload_to='uploads')
    img1=models.FileField(upload_to='uploads')
    img2=models.FileField(upload_to='uploads')
    img3=models.FileField(upload_to='uploads')
    img4=models.FileField(upload_to='uploads')
    desc=models.TextField()
    live_link=models.CharField(max_length=200)
    github_link=models.CharField(max_length=200)

class Experience(models.Model):
    position=models.CharField(max_length=20)
    comp_pos=models.TextField(null=True)
    work_desc=models.TextField()    

