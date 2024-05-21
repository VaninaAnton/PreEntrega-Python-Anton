from django.http import HttpResponse
from django.template import Context, Template


def saludar(request):
	return HttpResponse("Hola Django-Coder")

def segunda_vista(request):
	return HttpResponse("<h1> Puedo usar etiquetas HTML en las respuesta</h1>")

def nombre(request, nombre: str, apellido: str):
	nombre = nombre.capitalize()
	apellido = apellido.capitalize()
	return HttpResponse(f"{apellido}, {nombre}")

