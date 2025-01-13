
from django.contrib import admin
from django.urls import path
from myapp.user_views import PetCreateSet,PetDetailView 

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/pets/',PetCreateSet.as_view(),name='pet-list-create'),
    path('api/pets/<int:pet_id>',PetDetailView.as_view(),name='pet-details')
]


