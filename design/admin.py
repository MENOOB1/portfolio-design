from django.contrib import admin

from design.models import Experience, Project,Resume

# Register your models here.
admin.site.register(Resume)
admin.site.register(Project)
admin.site.register(Experience)

