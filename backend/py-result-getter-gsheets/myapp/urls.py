from django.urls import path
from . import views

urlpatterns = [
    path('get_sizes/', views.get_sizes, name='get_sizes'),
]