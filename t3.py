import time
import numpy as np
import json
import random
import hashlib
from datetime import datetime, timedelta

start_time = time.time()
s = ''
for i in range(100000):
    s += 'a'
print(f"String concatenation in Python: {time.time() - start_time} seconds")

start_time = time.time()
with open('large_file.txt', 'r') as file:
    text = file.read()
word_count = len(text.split())
print(f"File reading in Python: {time.time() - start_time} seconds")


start_time = time.time()
A = np.random.rand(500, 500)
B = np.random.rand(500, 500)
C = np.dot(A, B)
print(f"Matrix multiplication in Python (NumPy): {time.time() - start_time} seconds")



data = [{'id': i, 'name': f'name_{i}'} for i in range(100000)]

start_time = time.time()
json_str = json.dumps(data)
print(f"JSON serialization in Python: {time.time() - start_time} seconds")

start_time = time.time()
data_loaded = json.loads(json_str)
print(f"JSON deserialization in Python: {time.time() - start_time} seconds")


#
arr = [random.randint(0, int(1e7)) for _ in range(1_000_000)]
target = arr[-1]

start_time = time.time()
found = target in arr
print(f"Element search in Python: {time.time() - start_time} seconds")

import time
import random

arr = [random.random() for _ in range(1_000_000)]

start_time = time.time()
arr.sort()
print(f"Sorting in Python: {time.time() - start_time} seconds")

data = 'a' * 1000000

start_time = time.time()
hash_result = hashlib.sha256(data.encode()).hexdigest()
print(f"Hash generation in Python: {time.time() - start_time} seconds")



start_time = time.time()
date = datetime.now()
for _ in range(1000000):
    date += timedelta(days=1)
print(f"Date manipulation in Python: {time.time() - start_time} seconds")

