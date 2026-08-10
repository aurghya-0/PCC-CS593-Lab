export const lab2 = {
  id: 2,
  slug: 'lab-2',
  title: 'Lab 2 — Wrapper Class and Arrays',
  description:
    'Java wrapper classes (autoboxing/unboxing, type conversion) and array operations: 1D/2D arrays, linear search, bubble sort, sum/average, and max/min.',
  folder: 'Lab_2',
  programs: [
    {
      name: 'Program1_BoxingUnboxing.java',
      path: 'Lab_2/Program1_BoxingUnboxing.java',
      concept: 'Autoboxing and unboxing',
      description:
        'Demonstrates automatic conversion between primitive int and wrapper class Integer. Java automatically boxes a primitive into an object (autoboxing) and unboxes an object back to a primitive when needed. Also shows explicit conversion using valueOf() and intValue().',
      purpose:
        'Wrapper classes bridge primitives and objects, enabling primitives to be used in Collections and generic APIs. Autoboxing/unboxing (Java 5+) hides the manual conversion.',
      howItWorks: [
        'int num = 42 stores a primitive value.',
        'Integer obj = num performs autoboxing — Java wraps 42 into an Integer object.',
        'int unboxed = obj performs unboxing — extracts the primitive 42 from the Integer.',
        'Integer.valueOf(100) explicitly creates an Integer from a primitive.',
        'a.intValue() explicitly extracts the int primitive from the Integer object.',
        'All values are printed to show each conversion step.',
      ],
      notes: [
        'Wrapper classes: Integer, Double, Boolean, Character, etc.',
        'Autoboxing: primitive → wrapper (automatic).',
        'Unboxing: wrapper → primitive (automatic).',
        'valueOf() and xxxValue() are explicit conversion methods.',
        'Null wrapper objects cause NullPointerException on unboxing.',
      ],
      run: 'cd Lab_2\njavac Program1_BoxingUnboxing.java && java Program1_BoxingUnboxing',
      output: 'Autoboxed: 42\nUnboxed: 42\nvalueOf and intValue: 100',
    },
    {
      name: 'Program2_WrapperConversion.java',
      path: 'Lab_2/Program2_WrapperConversion.java',
      concept: 'Wrapper class conversion methods',
      description:
        'Shows how wrapper classes convert between Strings and primitives — essential for reading user input, parsing file data, and formatting output. Demonstrates parseInt, toString, parseDouble, and parseBoolean.',
      purpose:
        'Real programs constantly convert between text and numbers. Wrapper class static parsing methods provide safe, standard ways to perform these conversions.',
      howItWorks: [
        'Integer.parseInt("123") converts the String "123" to int 123.',
        'Integer.toString(456) converts int 456 to String "456".',
        'Double.parseDouble("3.14") parses a decimal string to double.',
        'Boolean.parseBoolean("true") converts the string to boolean true.',
        'Each result is printed to demonstrate the conversion.',
      ],
      notes: [
        'parseXxx() methods throw NumberFormatException on invalid input.',
        'toString() works on any primitive via wrapper classes.',
        'Use Double.parseDouble for decimal numbers, Integer.parseInt for whole numbers.',
        'Boolean.parseBoolean returns false for any string other than "true" (case-insensitive).',
      ],
      run: 'javac Program2_WrapperConversion.java && java Program2_WrapperConversion',
      output: 'String to int: 123\nInt to String: 456\nString to double: 3.14\nString to boolean: true',
    },
    {
      name: 'Program3_OneDArray.java',
      path: 'Lab_2/Program3_OneDArray.java',
      concept: 'One-dimensional array',
      description:
        'Creates a one-dimensional integer array of student marks, then traverses it using both an index-based for loop and an enhanced for-each loop. Shows array declaration, initialization, length property, and iteration.',
      purpose:
        'Arrays store multiple values of the same type in contiguous memory. Understanding array creation and traversal is fundamental for processing collections of data.',
      howItWorks: [
        'int[] marks = {85, 90, 78, 92, 88} declares and initializes a 5-element array.',
        'A standard for loop uses marks.length to iterate from index 0 to 4.',
        'Each element is printed as marks[i] = value.',
        'An enhanced for loop (for (int mark : marks)) iterates over each element directly.',
        'Both loops access the same data using different syntax.',
      ],
      notes: [
        'Array indices start at 0 and end at length - 1.',
        'marks.length gives the number of elements (not the last index).',
        'Enhanced for-each is cleaner when you don\'t need the index.',
        'Arrays have fixed size once created.',
        'Accessing marks[length] causes ArrayIndexOutOfBoundsException.',
      ],
      run: 'javac Program3_OneDArray.java && java Program3_OneDArray',
      output: 'All five marks printed with indices, then the same values in a row',
    },
    {
      name: 'Program4_TwoDArray.java',
      path: 'Lab_2/Program4_TwoDArray.java',
      concept: 'Two-dimensional array',
      description:
        'Creates a 3×3 matrix (two-dimensional array) and prints it in row-column format using nested for loops. A 2D array is essentially an array of arrays, useful for tables, grids, and matrices.',
      purpose:
        '2D arrays model tabular data like spreadsheets, game boards, and mathematical matrices. Nested loops are the standard way to traverse them.',
      howItWorks: [
        'int[][] matrix defines a 2D array initialized with three rows of three values each.',
        'The outer loop (i) iterates over rows (matrix.length = 3).',
        'The inner loop (j) iterates over columns in each row (matrix[i].length = 3).',
        'matrix[i][j] accesses the element at row i, column j.',
        'Each row is printed on one line with space-separated values.',
      ],
      notes: [
        '2D arrays are arrays of 1D arrays — rows can have different lengths (jagged arrays).',
        'matrix.length = number of rows; matrix[i].length = columns in row i.',
        'Nested loops: outer for rows, inner for columns.',
        'Useful for matrices, images (pixels), seating charts, etc.',
      ],
      run: 'javac Program4_TwoDArray.java && java Program4_TwoDArray',
      output: '3×3 matrix:\n1 2 3\n4 5 6\n7 8 9',
    },
    {
      name: 'Program5_ArraySearch.java',
      path: 'Lab_2/Program5_ArraySearch.java',
      concept: 'Linear search',
      description:
        'Implements the linear search algorithm to find an element in an unsorted array. The method scans each element sequentially and returns the index if found, or -1 if the element does not exist.',
      purpose:
        'Linear search is the simplest search algorithm — no sorting required. It is used when data is unsorted or the collection is small enough that O(n) performance is acceptable.',
      howItWorks: [
        'linearSearch(int[] arr, int key) takes the array and target value.',
        'A for loop checks each element: if arr[i] == key, return index i.',
        'If the loop completes without a match, return -1.',
        'main() creates an array {10, 25, 30, 45, 50, 65} and searches for 45.',
        'The returned index 3 is printed with a success message.',
      ],
      notes: [
        'Time complexity: O(n) — worst case checks every element.',
        'Works on both sorted and unsorted arrays.',
        'Returning -1 is a common convention for "not found".',
        'Binary search is faster (O(log n)) but requires a sorted array.',
      ],
      run: 'javac Program5_ArraySearch.java && java Program5_ArraySearch',
      output: 'Element 45 found at index 3',
    },
    {
      name: 'Program6_ArraySorting.java',
      path: 'Lab_2/Program6_ArraySorting.java',
      concept: 'Bubble sort',
      description:
        'Implements bubble sort to arrange an integer array in ascending order. Repeatedly compares adjacent elements and swaps them if they are in the wrong order, "bubbling" the largest values to the end each pass.',
      purpose:
        'Sorting is one of the most common operations on arrays. Bubble sort, while not the most efficient, is easy to understand and illustrates the swap-and-compare pattern used in many sorting algorithms.',
      howItWorks: [
        'bubbleSort() uses two nested loops over the array.',
        'The outer loop runs n-1 passes (one less than array length).',
        'The inner loop compares arr[j] and arr[j+1] for each adjacent pair.',
        'If arr[j] > arr[j+1], they are swapped using a temporary variable.',
        'After each outer pass, the largest unsorted element settles at the end.',
        'main() prints the array before and after sorting.',
      ],
      notes: [
        'Time complexity: O(n²) — not efficient for large arrays.',
        'Space complexity: O(1) — sorts in-place, no extra array needed.',
        'Bubble sort is stable — equal elements keep their relative order.',
        'Arrays.sort() in Java uses faster algorithms (Timsort) for production code.',
      ],
      run: 'javac Program6_ArraySorting.java && java Program6_ArraySorting',
      output: 'Before: 64 34 25 12 22 11 90\nAfter: 11 12 22 25 34 64 90',
    },
    {
      name: 'Program7_ArraySumAverage.java',
      path: 'Lab_2/Program7_ArraySumAverage.java',
      concept: 'Array sum and average',
      description:
        'Computes the sum and arithmetic mean of an integer array of exam scores. Uses an accumulator variable in a for-each loop and casts to double before division to avoid integer truncation.',
      purpose:
        'Aggregating array data (sum, average, count) is a fundamental statistical operation. This program shows the accumulator pattern and the importance of type casting in division.',
      howItWorks: [
        'int[] scores = {78, 85, 92, 88, 95} holds five exam scores.',
        'int sum = 0 initializes the accumulator.',
        'The for-each loop adds each score to sum: sum += score.',
        'After the loop, sum = 438.',
        'double average = (double) sum / scores.length casts sum to double before division.',
        'Without casting, 438 / 5 = 87 (integer division truncates). With casting: 87.6.',
      ],
      notes: [
        'Accumulator pattern: start at 0, add each element in a loop.',
        'Always cast to double before division to preserve decimal precision.',
        'scores.length gives the count of elements for the average denominator.',
        'For-each loop is ideal when you only need values, not indices.',
      ],
      run: 'javac Program7_ArraySumAverage.java && java Program7_ArraySumAverage',
      output: 'Sum: 438\nAverage: 87.6',
    },
    {
      name: 'Program8_ArrayMaxMin.java',
      path: 'Lab_2/Program8_ArrayMaxMin.java',
      concept: 'Find maximum and minimum',
      description:
        'Traverses an integer array to find the largest and smallest values. Initializes both max and min from the first element, then updates them whenever a larger or smaller value is found.',
      purpose:
        'Finding extremes in a dataset is a common task. This algorithm works in a single pass (O(n)) and is the basis for range calculations and normalization.',
      howItWorks: [
        'int[] arr = {45, 12, 78, 34, 89, 23} is the input array.',
        'max and min are both initialized to arr[0] = 45.',
        'The loop starts from index 1 and compares each element.',
        'If arr[i] > max, update max to arr[i].',
        'If arr[i] < min, update min to arr[i].',
        'After one full pass, max = 89 and min = 12 are printed.',
      ],
      notes: [
        'Single-pass algorithm: O(n) time, O(1) extra space.',
        'Initialize from arr[0], not 0 — avoids errors with all-negative arrays.',
        'Can be extended to also track the index of max/min.',
        'Collections.max() and Collections.min() provide this for Java collections.',
      ],
      run: 'javac Program8_ArrayMaxMin.java && java Program8_ArrayMaxMin',
      output: 'Maximum: 89\nMinimum: 12',
    },
  ],
};
