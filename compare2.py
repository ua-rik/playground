import time
import numpy as np
import pandas as pd

# For loop
start_time = time.time()
sum_for = 0
for i in range(int(1e7)):
    sum_for += i
print(f"For loop: {time.time() - start_time} seconds")

# List comprehension with sum
start_time = time.time()
sum_comprehension = sum([i for i in range(int(1e7))])
print(f"List comprehension: {time.time() - start_time} seconds")

# NumPy sum
start_time = time.time()
arr = np.arange(1e7)
sum_numpy = np.sum(arr)
print(f"NumPy sum: {time.time() - start_time} seconds")

# Pandas sum
start_time = time.time()
df = pd.Series(range(int(1e7)))
sum_pandas = df.sum()
print(f"Pandas sum: {time.time() - start_time} seconds")