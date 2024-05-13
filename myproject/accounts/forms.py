from django import forms
from .models import Clase1, Clase2, Clase3

class Clase1Form(forms.ModelForm):
    class Meta:
        model = Clase1
        fields = '__all__'

class Clase2Form(forms.ModelForm):
    class Meta:
        model = Clase2
        fields = '__all__'

class Clase3Form(forms.ModelForm):
    class Meta:
        model = Clase3
        fields = '__all__'


#formulario de búsqueda.
class SearchForm(forms.Form):
    search_query = forms.CharField(max_length=100, label='Buscar')
