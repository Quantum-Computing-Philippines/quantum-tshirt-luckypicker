from qiskit import QuantumCircuit, Aer, execute
from qiskit.visualization import plot_histogram
from collections import Counter

# Create a quantum circuit with n qubits
# max is 7 = 128 or 127

n = 7
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

# Print the measurement outcomes
print(result.get_counts(qc))