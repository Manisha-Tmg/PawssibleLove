from django.db import models

class Pet(models.Model):
    name = models.CharField(max_length=100)
    species = models.CharField(max_length=30)
    breed = models.CharField(max_length=30)
    age = models.IntegerField()
    color = models.CharField(max_length=30)
    description = models.TextField()
    # pet_image = 
    adopted = models.BooleanField(default=False)
    is_delated = models.BooleanField(default=False)


def __str__(self):
    return self.name
    

class User