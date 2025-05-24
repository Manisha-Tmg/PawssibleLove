
from django.contrib import admin
from django.urls import path
from myapp.user_views import PetCreateSet,PetDetailView 

urlpatterns = [
    path('admin/', admin.site.urls),

    path()
]


