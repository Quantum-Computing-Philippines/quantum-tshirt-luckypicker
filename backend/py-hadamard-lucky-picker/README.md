
# Qiskit Random Number Picker up to 127

This is a simple application that generates random numbers from 0 to 127 using the Qiskit library. It applies the Hadamard gate to all qubits to create a superposition, and performs 2000 shots to get a probability distribution.

## How to Use

To use the application, simply send a GET request to the following endpoint:

bashCopy code

`url:port/myapp/luckypic` 

For example:

bashCopy code

`backend.goquantum.online:8000/myapp/luckypic` 

The response will be a JSON object with a "counts" field containing the probability distribution for the generated numbers.

## Limitations

The number can only be generated up to 127, meaning that participants must be within 127 for each category (S, M, L, XL).

## How to Dockerize

To build a Docker image of the application, run the following commands:

cssCopy code

`docker build -t my-qiskit-random-number-picker-up-to-127 .
docker run -p 80:8000 my-qiskit-random-number-picker-up-to-127` 

## Sample Response

Here is a sample response from the application:

jsonCopy code

`{
  "counts": {
    "0": 16,
    "1": 16,
    "2": 15,
    "3": 9,
    "4": 12,
    "5": 13,
    "6": 22,
    "7": 14,
    "8": 17,
    "9": 11,
    "10": 13,
    "11": 18,
    "12": 14,
    "13": 17,
    "14": 11,
    "15": 12,
    "16": 14,
    "17": 16,
    "18": 10,
    "19": 24,
    "20": 23,
    "21": 11,
    "22": 13,
    "23": 14,
    "24": 17,
    "25": 13,
    "26": 13,
    "27": 12,
    "28": 14,
    "29": 13,
    "30": 15,
    "31": 17,
    "32": 16,
    "33": 10,
    "34": 21,
    "35": 17,
    "36": 15,
    "37": 24,
    "38": 6,
    "39": 19,
    "40": 13,
    "41": 15,
    "42": 11,
    "43": 18,
    "44": 19,
    "45": 15,
    "46": 17,
    "47": 13,
    "48": 20,
    "49": 13,
    "50": 13,
    "51": 14,
    "52": 17,
    "53": 13,
    "54": 14,
    "55": 20,
    "56": 17,
    "57": 17,
    "58": 19,
    "59": 13,
    "60": 12,
    "61": 23,
    "62": 19,
    "63": 19,
    "64": 12,
    "65": 16,
    "66": 15,
    "67": 12,
    "68": 11,
    "69": 13,
    "70": 17,
    "71": 15,
    "72": 15 ... "127" : 12 }
    } `


# Extending: Creating a Django Application
Sure, here are the steps to create a "Hello, world!" Django application:

1.  Open a terminal or command prompt and navigate to the directory where you want to create your Django project.
    
2.  Create a new Django project by running the following command:
    
    Copy code
    
    `django-admin startproject myproject` 
    
    Replace `myproject` with the name of your project.
    
3.  Navigate to the project directory by running:
    
    bashCopy code
    
    `cd myproject` 
    
4.  Create a new Django app by running the following command:
    
    Copy code
    
    `python manage.py startapp myapp` 
    
    Replace `myapp` with the name of your app.
    
5.  Open the `myproject/settings.py` file in a text editor and add `'myapp'` to the `INSTALLED_APPS` list:
    
    pythonCopy code
    ```
    `INSTALLED_APPS = [
        'django.contrib.admin',
        'django.contrib.auth',
        'django.contrib.contenttypes',
        'django.contrib.sessions',
        'django.contrib.messages',
        'django.contrib.staticfiles',
        'myapp',
    ]` 
    ```
6.  Open the `myapp/views.py` file in a text editor and define a new view function that returns a `HttpResponse` with the message "Hello, world!":
    
    pythonCopy code
    ```
    `from django.http import HttpResponse
    
    def hello(request):
        return HttpResponse("Hello, world!")` 
    ```
    
7.  Open the `myapp/urls.py` file in a text editor and define a new URL pattern that maps the URL `/hello/` to the `hello` view function:
    
    pythonCopy code
    ```
    `from django.urls import path
    from . import views
    
    urlpatterns = [
        path('hello/', views.hello, name='hello'),
    ]` 
    ```
8.  Open the `myproject/urls.py` file in a text editor and include the `myapp.urls` module:
    
    pythonCopy code
    ```
    `from django.contrib import admin
    from django.urls import include, path
    
    urlpatterns = [
        path('admin/', admin.site.urls),
        path('myapp/', include('myapp.urls')),
    ]` 
    ```
    This includes the `myapp.urls` module under the `/myapp/` URL prefix.
    
9.  Start the development server by running the following command:
    
    Copy code
    
    `python manage.py runserver` 
    
10.  Open a web browser and navigate to `http://localhost:8000/myapp/hello/`. You should see the message "Hello, world!".
    

That's it! You've created a simple "Hello, world!" Django application.