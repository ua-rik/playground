
import time
import numpy as np

# Генератор
def generator(n):
    for i in range(n):
        yield i

start_time = time.time()
sum_gen = sum(generator(int(1e7)))
print(f"Generator: {time.time() - start_time} seconds")

# Множення матриць з NumPy
start_time = time.time()
arr1 = np.random.rand(1000, 1000)
arr2 = np.random.rand(1000, 1000)
result = np.dot(arr1, arr2)
print(f"NumPy matrix multiplication: {time.time() - start_time} seconds")

# Сортування з NumPy
start_time = time.time()
arr = np.random.rand(int(1e7))
sorted_arr = np.sort(arr)
print(f"NumPy sort: {time.time() - start_time} seconds")

# Читання великого файлу
start_time = time.time()
with open('large_file.txt', 'r') as f:
    data = f.read()
print(f"File read: {time.time() - start_time} seconds")
