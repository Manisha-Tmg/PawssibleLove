from rest_framework.views import APIView
from rest_framework import generics
from .models import Pet
from .serializer import PetSerializer


class PetCreateSet(generics.ListCreateAPIView):
    queryset = Pet.objects.all()
    serializer_class = PetSerializer


class PetDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Pet.objects.all()
    serializer_class = PetSerializer

