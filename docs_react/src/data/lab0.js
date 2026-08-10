export const lab0 = {
  id: 0,
  slug: 'lab-0',
  title: 'Lab 0 — Java Syntax Basics',
  description:
    'Foundational Java syntax before OOP: Hello World, variables and data types, operators, input/output, conditional statements, loops, arrays, and methods.',
  folder: 'Lab_0',
  programs: [
    {
      name: 'Program1_HelloWorld.java',
      path: 'Lab_0/Program1_HelloWorld.java',
      concept: 'Hello World & main method',
      description:
        'The simplest Java program. Every Java application starts execution from the main method. System.out.println() prints text to the console, each call on a new line.',
      purpose:
        'Understand the basic structure of a Java program: a public class matching the filename, and a public static void main(String[] args) entry point.',
      howItWorks: [
        'The class Program1_HelloWorld must match the filename.',
        'main() is the entry point — the JVM calls it when the program runs.',
        'System.out.println() sends output to the console.',
        'Each println call prints on a separate line.',
      ],
      notes: [
        'Class name and filename must match exactly (case-sensitive).',
        'main must be public static void with String[] args parameter.',
        'Statements end with a semicolon.',
      ],
      run: 'cd Lab_0\njavac Program1_HelloWorld.java\njava Program1_HelloWorld',
      output: 'Hello, World!\nWelcome to Java Programming',
    },
    {
      name: 'Program2_VariablesAndDataTypes.java',
      path: 'Lab_0/Program2_VariablesAndDataTypes.java',
      concept: 'Variables & data types',
      description:
        'Declares and prints values of common Java types: int, double, char, boolean, and String. Variables store data that can change during program execution.',
      purpose:
        'Learn how to declare variables, assign values, and understand the difference between primitive types and the String reference type.',
      howItWorks: [
        'int age stores whole numbers; double gpa stores decimals.',
        'char grade holds a single character in single quotes.',
        'boolean isEnrolled is true or false.',
        'String name is a sequence of characters in double quotes.',
        'The + operator concatenates strings with other values for printing.',
      ],
      notes: [
        'Primitives: byte, short, int, long, float, double, char, boolean.',
        'String is a class, not a primitive — use double quotes.',
        'Variable names are camelCase by convention.',
      ],
      run: 'cd Lab_0\njavac Program2_VariablesAndDataTypes.java\njava Program2_VariablesAndDataTypes',
      output: 'Name: Amit\nAge: 20\nGPA: 8.75\nGrade: A\nEnrolled: true',
    },
    {
      name: 'Program3_Operators.java',
      path: 'Lab_0/Program3_Operators.java',
      concept: 'Operators',
      description:
        'Demonstrates arithmetic (+, -, *, /, %), relational (>, ==), and logical (&&, ||, !) operators on integer and boolean values.',
      purpose:
        'Operators let you perform calculations, compare values, and combine boolean conditions — essential for control flow and expressions.',
      howItWorks: [
        'Arithmetic: +, -, *, / perform math; % gives the remainder.',
        'Integer division truncates: 15 / 4 = 3, not 3.75.',
        'Relational operators return true or false.',
        'Logical && (AND), || (OR), ! (NOT) combine boolean expressions.',
      ],
      notes: [
        'Use (double) cast or 15.0 / 4 for floating-point division.',
        '== compares values; = is assignment.',
        'Short-circuit: && stops if left is false; || stops if left is true.',
      ],
      run: 'cd Lab_0\njavac Program3_Operators.java\njava Program3_Operators',
      output: 'a + b = 19\na - b = 11\na * b = 60\na / b = 3\na % b = 3\na > b: true\na == b: false\nx && y: false\nx || y: true\n!x: false',
    },
    {
      name: 'Program4_InputOutput.java',
      path: 'Lab_0/Program4_InputOutput.java',
      concept: 'Input & output',
      description:
        'Uses java.util.Scanner to read a name (String) and age (int) from the keyboard, then prints a personalised greeting.',
      purpose:
        'Interactive programs need input. Scanner is the standard way to read typed input from the console in beginner Java programs.',
      howItWorks: [
        'import java.util.Scanner brings in the Scanner class.',
        'new Scanner(System.in) connects to keyboard input.',
        'nextLine() reads a full line of text; nextInt() reads an integer.',
        'Always close the Scanner when done to free resources.',
      ],
      notes: [
        'After nextInt(), call nextLine() to consume the leftover newline before reading a String.',
        'System.out.print() prints without a newline; println() adds one.',
        'For production apps, try-with-resources is preferred: try (Scanner sc = new Scanner(System.in)) { ... }',
      ],
      run: 'cd Lab_0\njavac Program4_InputOutput.java\njava Program4_InputOutput',
      output: 'Enter your name: Amit\nEnter your age: 20\nHello, Amit! You are 20 years old.',
    },
    {
      name: 'Program5_IfElse.java',
      path: 'Lab_0/Program5_IfElse.java',
      concept: 'if-else statements',
      description:
        'Assigns a letter grade based on marks using a chain of if, else-if, and else. Only one branch executes.',
      purpose:
        'Conditional statements let programs make decisions and execute different code paths based on conditions.',
      howItWorks: [
        'if (marks >= 90) checks the highest grade first.',
        'else if chains additional conditions in order.',
        'else runs when no condition is true.',
        'With marks = 72, the second branch (>= 75) is false, third (>= 60) is true → Grade C.',
      ],
      notes: [
        'Conditions must be boolean expressions.',
        'Braces { } are required for multi-statement blocks.',
        'Order matters — check most specific conditions first.',
      ],
      run: 'cd Lab_0\njavac Program5_IfElse.java\njava Program5_IfElse',
      output: 'Grade: C\nMarks: 72',
    },
    {
      name: 'Program6_SwitchCase.java',
      path: 'Lab_0/Program6_SwitchCase.java',
      concept: 'switch-case',
      description:
        'Maps an integer day number (1–7) to a day name using a switch statement. break prevents fall-through to the next case.',
      purpose:
        'switch is cleaner than long if-else chains when comparing one variable against many constant values.',
      howItWorks: [
        'switch (day) evaluates the day variable.',
        'Each case matches a specific value.',
        'break exits the switch after a match.',
        'default handles values not listed in any case.',
      ],
      notes: [
        'Forgetting break causes fall-through to subsequent cases.',
        'Java 14+ supports switch expressions with -> syntax.',
        'case values must be compile-time constants.',
      ],
      run: 'cd Lab_0\njavac Program6_SwitchCase.java\njava Program6_SwitchCase',
      output: 'Day 3 is Wednesday',
    },
    {
      name: 'Program7_ForLoop.java',
      path: 'Lab_0/Program7_ForLoop.java',
      concept: 'for loop',
      description:
        'Prints the multiplication table of 5 and computes the sum of integers from 1 to 100 using for loops.',
      purpose:
        'Loops repeat code a known number of times. The for loop is ideal when you know the start, end, and increment.',
      howItWorks: [
        'for (int i = 1; i <= 10; i++) — init, condition, increment.',
        'The loop body runs while the condition is true.',
        'i++ increments i by 1 after each iteration.',
        'A second loop accumulates sum from 1 to 100.',
      ],
      notes: [
        'Loop variable scope is limited to the for block.',
        'Infinite loops occur if the condition never becomes false.',
        'Enhanced for (for-each) is used for collections and arrays.',
      ],
      run: 'cd Lab_0\njavac Program7_ForLoop.java\njava Program7_ForLoop',
      output: 'Multiplication table of 5:\n5 x 1 = 5\n...\n5 x 10 = 50\nSum of 1 to 100: 5050',
    },
    {
      name: 'Program8_WhileDoWhile.java',
      path: 'Lab_0/Program8_WhileDoWhile.java',
      concept: 'while & do-while',
      description:
        'Counts down from 5 using a while loop, then counts up from 1 to 5 using a do-while loop.',
      purpose:
        'while and do-while repeat code while a condition is true. do-while always runs the body at least once.',
      howItWorks: [
        'while checks the condition before each iteration.',
        'When count reaches 0, the while loop stops.',
        'do-while runs the body first, then checks the condition.',
        'Both loops need a statement that eventually makes the condition false.',
      ],
      notes: [
        'Use while when the loop may not run at all.',
        'Use do-while when you need at least one execution.',
        'Avoid infinite loops — ensure the loop variable changes.',
      ],
      run: 'cd Lab_0\njavac Program8_WhileDoWhile.java\njava Program8_WhileDoWhile',
      output: 'Counting down with while:\n5 4 3 2 1 \nCounting up with do-while:\n1 2 3 4 5',
    },
    {
      name: 'Program9_ArraysBasics.java',
      path: 'Lab_0/Program9_ArraysBasics.java',
      concept: 'Arrays',
      description:
        'Creates an integer array, prints each element by index, then calculates sum and average using a for-each loop.',
      purpose:
        'Arrays store multiple values of the same type in a fixed-size container — a stepping stone before collections in later labs.',
      howItWorks: [
        'int[] numbers = {10, 20, 30, 40, 50} declares and initializes.',
        'numbers.length gives the array size (5).',
        'Index access: numbers[0] is the first element.',
        'Enhanced for (int n : numbers) iterates without an index.',
      ],
      notes: [
        'Array indices run from 0 to length - 1.',
        'Accessing an invalid index throws ArrayIndexOutOfBoundsException.',
        'Arrays have fixed size once created.',
      ],
      run: 'cd Lab_0\njavac Program9_ArraysBasics.java\njava Program9_ArraysBasics',
      output: 'Array elements:\nnumbers[0] = 10\n...\nnumbers[4] = 50\nSum: 150\nAverage: 30.0',
    },
    {
      name: 'Program10_Methods.java',
      path: 'Lab_0/Program10_Methods.java',
      concept: 'Methods',
      description:
        'Defines three methods: greet (void, no return), add (returns int), and isEven (returns boolean). main calls each method.',
      purpose:
        'Methods break code into reusable blocks. They can take parameters and return values, making programs modular and easier to maintain.',
      howItWorks: [
        'static methods belong to the class — callable from main without an object.',
        'add(int a, int b) takes two ints and returns their sum.',
        'isEven(int n) returns true if n is divisible by 2.',
        'greet(String name) prints a message — void means no return value.',
      ],
      notes: [
        'Method signature = name + parameter types (not return type).',
        'return exits the method immediately with a value.',
        'Non-static methods require an object to call — covered in Lab 1.',
      ],
      run: 'cd Lab_0\njavac Program10_Methods.java\njava Program10_Methods',
      output: 'Hello, Priya!\nSum: 20\nIs 7 even? false\nIs 14 even? true',
    },
  ],
};
