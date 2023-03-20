from django.urls import path
from . import views

urlpatterns = [
    path('hello/', views.hello, name='hello'),
    path('hello1/', views.hello1, name='hello1'),
    path('luckypic/', views.luckypic, name='luckypic'),
]
