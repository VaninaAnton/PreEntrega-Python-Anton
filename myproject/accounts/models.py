from django.db import models

# Create your models here.

from django.db import models

class Clase1(models.Model):
    campo1 = models.CharField(max_length=100)
    campo2 = models.IntegerField()

class Clase2(models.Model):
    campo3 = models.CharField(max_length=50)
    campo4 = models.TextField()

class Clase3(models.Model):
    campo5 = models.DateField()
    campo6 = models.BooleanField()
