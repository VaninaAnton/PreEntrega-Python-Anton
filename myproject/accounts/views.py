from django.shortcuts import render

# Create your views here.

from django.shortcuts import render
from .forms import Clase1Form, Clase2Form, Clase3Form

def my_view(request):
    clase1_form = Clase1Form()
    clase2_form = Clase2Form()
    clase3_form = Clase3Form()
    
    if request.method == 'POST':
        if 'clase1_submit' in request.POST:
            clase1_form = Clase1Form(request.POST)
            if clase1_form.is_valid():
                clase1_form.save()
        elif 'clase2_submit' in request.POST:
            clase2_form = Clase2Form(request.POST)
            if clase2_form.is_valid():
                clase2_form.save()
        elif 'clase3_submit' in request.POST:
            clase3_form = Clase3Form(request.POST)
            if clase3_form.is_valid():
                clase3_form.save()

    return render(request, 'my_template.html', {'clase1_form': clase1_form, 'clase2_form': clase2_form, 'clase3_form': clase3_form})
