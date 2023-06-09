# -*- coding: utf-8 -*-
"""QiskitRandomizer.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1aXs4HlE8-BnEUq4zF17b_ELYs2SXReLV
"""

# !pip install ipywidgets pylatexenc qiskit==0.16.1 scikit-build

# !python --version

# pip install qiskit qiskit-aer

#  pip install "numpy<1.24"
# pip install matplotlib

from qiskit import QuantumCircuit, Aer, execute
from qiskit.visualization import plot_histogram
from collections import Counter

# Create a quantum circuit with n qubits
# max is 6 = 64 or 63


n = 6
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

qc.draw(output='mpl')

from qiskit import QuantumRegister, ClassicalRegister, QuantumCircuit
from qiskit import BasicAer, execute
from qiskit.tools.visualization import plot_histogram    

n=7
q = QuantumRegister(n)
c = ClassicalRegister(n)
circuit = QuantumCircuit(q, c)


for i in range(n):
    circuit.h(q[i])
    
circuit.measure(q,c)

job = execute(circuit, BasicAer.get_backend('qasm_simulator'), shots=2023)

# filter out measurement outcomes with 53 and up
bit_counts = job.result().get_counts()
filtered_counts = {bitstring: bit_counts[bitstring] for bitstring in bit_counts if int(bitstring, 2) < 9}

# convert the filtered bit string results to one of integers and plot the histogram
int_counts = {}
for bitstring in filtered_counts:
    int_counts[int(bitstring, 2)] = filtered_counts[bitstring]

# print(int_counts)
# plot_histogram(int_counts, bar_labels=True, figsize=(24, 6))

# filter out measurement outcomes with 53 and up
bit_counts = job.result().get_counts()
filtered_counts = {bitstring: bit_counts[bitstring] for bitstring in bit_counts if int(bitstring, 2) < 9}

# sort the filtered counts by values in descending order and print the top 10
sorted_counts = sorted(filtered_counts.items(), key=lambda x: x[1], reverse=True)
# print("Top 10 measurement outcomes:")
# for bitstring, count in sorted_counts[:10]:
#     decimal_val = int(bitstring, 2)
#     print(f"{decimal_val}: {count}")

# add here logic such that if 1st and 2nd is a match then call the function again and repeat