from django.http import HttpResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from qiskit import QuantumCircuit, Aer, execute
from qiskit.visualization import plot_histogram
from collections import Counter


def hello(request):
    return HttpResponse("Hello, world!")

def hello1(request):
    return HttpResponse("Hello, world!1")



@csrf_exempt
def luckypic(request):
    if request.method == 'GET':
        # Get the number of qubits from the request body
        n = int(request.POST.get('n', '7'))

        # Create a quantum circuit with n qubits
        qc = QuantumCircuit(n, n)

        # Apply Hadamard gate to all qubits
        for i in range(n):
            qc.h(i)

        # Measure all qubits
        for i in range(n):
            qc.measure(i, i)

        # Run the circuit on a simulator
        simulator = Aer.get_backend('qasm_simulator')
        job = execute(qc, simulator, shots=2000)
        result = job.result()

        # Get the measurement outcomes and format as decimal
        counts = {int(k, 2): v for k, v in result.get_counts(qc).items()}

        # Return the measurement outcomes as a JSON response
        return JsonResponse({'counts': counts})

    else:
        # Return an error response if the request method is not POST
        return JsonResponse({'error': 'Invalid request method'})

