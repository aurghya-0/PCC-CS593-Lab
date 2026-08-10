# Lab 2 — Wrapper Class and Arrays

This lab covers Java wrapper classes (autoboxing/unboxing, type conversion) and array operations including 1D/2D arrays, searching, and sorting.

---

## Program1_BoxingUnboxing.java

**Path:** `Lab_2/Program1_BoxingUnboxing.java`  
**Concept:** Autoboxing and unboxing

### Description
Demonstrates automatic conversion between primitive `int` and wrapper `Integer`, plus explicit `valueOf()` and `intValue()` methods.

### Key APIs
- Autoboxing: `Integer obj = num`
- Unboxing: `int unboxed = obj`
- `Integer.valueOf(100)`
- `Integer.intValue()`

### How to Run
```bash
cd Lab_2
javac Program1_BoxingUnboxing.java && java Program1_BoxingUnboxing
```

---

## Program2_WrapperConversion.java

**Path:** `Lab_2/Program2_WrapperConversion.java`  
**Concept:** Wrapper class conversion methods

### Description
Shows parsing and conversion between `String` and primitive types using wrapper class static methods.

### Key APIs
- `Integer.parseInt(String)`
- `Integer.toString(int)`
- `Double.parseDouble(String)`
- `Boolean.parseBoolean(String)`

### How to Run
```bash
javac Program2_WrapperConversion.java && java Program2_WrapperConversion
```

---

## Program3_OneDArray.java

**Path:** `Lab_2/Program3_OneDArray.java`  
**Concept:** One-dimensional array

### Description
Creates an `int[]` array of marks, iterates using a standard `for` loop and an enhanced `for-each` loop.

### Key Concepts
- Array declaration and initialization
- `array.length`
- Index-based and for-each iteration

### How to Run
```bash
javac Program3_OneDArray.java && java Program3_OneDArray
```

---

## Program4_TwoDArray.java

**Path:** `Lab_2/Program4_TwoDArray.java`  
**Concept:** Two-dimensional array

### Description
Creates a 3×3 matrix and prints it using nested loops.

### Key Concepts
- 2D array initialization with literal values
- Nested `for` loops for row/column traversal

### How to Run
```bash
javac Program4_TwoDArray.java && java Program4_TwoDArray
```

---

## Program5_ArraySearch.java

**Path:** `Lab_2/Program5_ArraySearch.java`  
**Concept:** Linear search

### Description
Implements `linearSearch(int[] arr, int key)` that returns the index of the key or `-1` if not found.

### Methods
| Method | Description |
|--------|-------------|
| `linearSearch(int[], int)` | Returns index of key, or -1 |
| `main(String[])` | Searches for 45 in a sample array |

### How to Run
```bash
javac Program5_ArraySearch.java && java Program5_ArraySearch
```

---

## Program6_ArraySorting.java

**Path:** `Lab_2/Program6_ArraySorting.java`  
**Concept:** Bubble sort

### Description
Implements the bubble sort algorithm to sort an integer array in ascending order and prints before/after results.

### Methods
| Method | Description |
|--------|-------------|
| `bubbleSort(int[])` | Sorts array in-place using bubble sort |
| `main(String[])` | Demonstrates sorting on sample data |

### How to Run
```bash
javac Program6_ArraySorting.java && java Program6_ArraySorting
```

---

## Program7_ArraySumAverage.java

**Path:** `Lab_2/Program7_ArraySumAverage.java`  
**Concept:** Array sum and average

### Description
Computes the sum and average of an integer array of scores using a for-each loop.

### Key Concepts
- Accumulator pattern (`sum += score`)
- Casting to `double` for accurate average

### How to Run
```bash
javac Program7_ArraySumAverage.java && java Program7_ArraySumAverage
```

---

## Program8_ArrayMaxMin.java

**Path:** `Lab_2/Program8_ArrayMaxMin.java`  
**Concept:** Find maximum and minimum

### Description
Traverses an array to find the largest and smallest elements, initializing both from `arr[0]`.

### How to Run
```bash
javac Program8_ArrayMaxMin.java && java Program8_ArrayMaxMin
```

### Expected Output
```
Maximum: 89
Minimum: 12
```
