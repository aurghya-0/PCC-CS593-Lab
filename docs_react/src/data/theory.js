export const labTheory = {
  0: {
    overview:
      'Before diving into Object-Oriented Programming, you need a solid grasp of Java syntax. This lab covers the building blocks: writing and running programs, storing data in variables, making decisions, repeating actions with loops, working with arrays, and organising code into methods.',
    prerequisites: [
      'A Java JDK (8 or later) installed on your system',
      'A text editor or IDE (VS Code, IntelliJ, or any editor)',
      'Basic computer literacy — no prior programming experience required',
    ],
    topics: [
      {
        title: 'Program Structure',
        summary:
          'Every Java program is a class with a main method. The JVM starts execution from main(String[] args).',
        points: [
          'Filename must match the public class name (e.g., Program1_HelloWorld.java).',
          'Compile with javac FileName.java; run with java ClassName.',
          'System.out.println() prints to the console.',
        ],
      },
      {
        title: 'Variables & Data Types',
        summary:
          'Variables store data. Primitives (int, double, boolean, char) hold simple values; String holds text.',
        points: [
          'Declare: type name = value; (e.g., int age = 20;).',
          'int for integers, double for decimals, boolean for true/false.',
          'String is a reference type — use double quotes for literals.',
        ],
      },
      {
        title: 'Operators & Expressions',
        summary:
          'Arithmetic (+, -, *, /, %), relational (==, !=, <, >), and logical (&&, ||, !) operators build expressions.',
        points: [
          'Integer division truncates: 7 / 2 = 3, not 3.5.',
          'Modulo % returns the remainder.',
          'Use parentheses to control evaluation order.',
        ],
      },
      {
        title: 'Control Flow',
        summary:
          'if-else and switch make decisions; for, while, and do-while repeat code.',
        points: [
          'if / else-if / else — execute one branch based on a condition.',
          'switch — match a variable against multiple constant values.',
          'for — best when iteration count is known; while — condition-checked loop.',
        ],
      },
      {
        title: 'Arrays & Methods',
        summary:
          'Arrays hold fixed-size collections of the same type. Methods encapsulate reusable logic.',
        points: [
          'Declare: int[] arr = {1, 2, 3}; access with arr[index].',
          'length property gives array size; indices start at 0.',
          'Methods: returnType name(params) { body } — use static for class-level helpers.',
        ],
      },
    ],
    keyTerms: [
      { term: 'JDK', definition: 'Java Development Kit — includes compiler (javac) and runtime (java).' },
      { term: 'Primitive', definition: 'Built-in value types: int, double, boolean, char, etc.' },
      { term: 'main', definition: 'Entry point method — public static void main(String[] args).' },
      { term: 'Loop', definition: 'Construct that repeats a block of code while a condition holds.' },
      { term: 'Method', definition: 'Named block of code that can take parameters and return a value.' },
    ],
  },

  1: {
    overview:
      'Object-Oriented Programming (OOP) organises code around objects that combine data (fields) and behaviour (methods). This lab covers the four pillars of OOP at an introductory level — encapsulation through classes, inheritance for code reuse, and polymorphism through overloading and overriding.',
    prerequisites: [
      'Lab 0 completed — variables, operators, control flow, arrays, and methods',
      'Understanding of methods and the main() entry point',
      'Familiarity with compiling (javac) and running (java) Java programs',
    ],
    topics: [
      {
        title: 'Classes and Objects',
        summary:
          'A class is a blueprint; an object is a runtime instance of that class. Fields store state, methods define behaviour.',
        points: [
          'Declare a class with the class keyword; create objects with new ClassName().',
          'Instance variables belong to each object; each object has its own copy.',
          'Access members using the dot operator: object.field, object.method().',
        ],
      },
      {
        title: 'Constructors',
        summary:
          'Constructors initialise objects when they are created. They share the class name and have no return type.',
        points: [
          'Default constructor — no parameters; Java provides one if none is written.',
          'Parameterized constructor — accepts arguments to set initial field values.',
          'Copy constructor — creates a new object by copying another object\'s state.',
          'Constructor overloading — multiple constructors with different parameter lists.',
        ],
      },
      {
        title: 'Method Overloading',
        summary:
          'Multiple methods with the same name but different parameters in the same class. Resolved at compile time.',
        points: [
          'Parameters must differ in number, type, or order.',
          'Return type alone cannot distinguish overloaded methods.',
          'Also called compile-time polymorphism or static binding.',
        ],
      },
      {
        title: 'Inheritance',
        summary:
          'A child class (subclass) acquires fields and methods from a parent class (superclass) using extends. Java supports single class inheritance only.',
        points: [
          'Single — one parent, one child (e.g., Dog extends Animal).',
          'Multilevel — chain of inheritance (Grandparent → Parent → Child).',
          'Hierarchical — multiple children share one parent (Car and Bike extend Vehicle).',
        ],
      },
      {
        title: 'Method Overriding',
        summary:
          'A subclass redefines a parent method with the same signature. The JVM calls the version matching the actual object type at runtime.',
        points: [
          'Use @Override annotation for clarity and compile-time checks.',
          'super keyword calls the parent version of an overridden method.',
          'Runtime polymorphism: Parent ref = new Child(); ref.method() calls Child\'s version.',
        ],
      },
    ],
    keyTerms: [
      { term: 'Encapsulation', definition: 'Bundling data and methods together, hiding internal details.' },
      { term: 'Inheritance', definition: 'Mechanism where a class acquires properties of another class.' },
      { term: 'Polymorphism', definition: 'One interface, many forms — overloading (compile-time) and overriding (runtime).' },
      { term: 'this', definition: 'Reference to the current object; resolves field/method ambiguity.' },
      { term: 'super', definition: 'Reference to the immediate parent class; used to call parent constructors or methods.' },
    ],
  },

  2: {
    overview:
      'Java distinguishes primitives (int, double, boolean) from objects. Wrapper classes bridge this gap, and arrays provide fixed-size collections for storing multiple values of the same type. This lab also covers fundamental array algorithms.',
    prerequisites: [
      'Primitive data types: int, double, boolean, char',
      'Loops and basic method definitions from Lab 1',
      'Understanding of method parameters and return values',
    ],
    topics: [
      {
        title: 'Wrapper Classes',
        summary:
          'Each primitive has a corresponding wrapper class (int → Integer, double → Double). Wrappers allow primitives in Collections and generic APIs.',
        points: [
          'Autoboxing — automatic conversion from primitive to wrapper (int → Integer).',
          'Unboxing — automatic conversion from wrapper to primitive (Integer → int).',
          'parseXxx() — convert String to primitive; toString() — primitive to String.',
          'valueOf() and xxxValue() — explicit boxing and unboxing methods.',
        ],
      },
      {
        title: 'One-Dimensional Arrays',
        summary:
          'An array stores a fixed number of elements of the same type in contiguous memory, indexed from 0.',
        points: [
          'Declaration: int[] arr = new int[5]; or int[] arr = {1, 2, 3};',
          'arr.length gives the number of elements.',
          'Traverse with index loop or enhanced for-each loop.',
        ],
      },
      {
        title: 'Two-Dimensional Arrays',
        summary:
          'An array of arrays — useful for matrices, tables, and grids. Accessed with two indices: arr[row][col].',
        points: [
          'int[][] matrix = {{1,2},{3,4}}; — rows can vary in length (jagged array).',
          'Use nested loops: outer for rows, inner for columns.',
        ],
      },
      {
        title: 'Searching and Sorting',
        summary:
          'Linear search scans every element (O(n)). Bubble sort repeatedly swaps adjacent out-of-order pairs (O(n²)).',
        points: [
          'Linear search works on unsorted arrays; returns index or -1.',
          'Bubble sort is simple but slow for large datasets; Arrays.sort() is preferred in practice.',
          'Accumulator pattern: initialise a variable, update it in a loop (sum, max, min).',
        ],
      },
    ],
    keyTerms: [
      { term: 'Autoboxing', definition: 'Implicit conversion of a primitive to its wrapper object.' },
      { term: 'Array index', definition: 'Zero-based position of an element; valid range is 0 to length-1.' },
      { term: 'Linear search', definition: 'Sequential scan until element is found or array ends.' },
      { term: 'Bubble sort', definition: 'Adjacent comparison and swap algorithm; largest elements bubble to the end.' },
    ],
  },

  3: {
    overview:
      'An interface defines a contract — a set of method signatures that implementing classes must provide. Interfaces enable multiple inheritance of behaviour and are central to Java\'s polymorphism and API design.',
    prerequisites: [
      'Classes, objects, and inheritance from Lab 1',
      'Understanding of abstract behaviour vs concrete implementation',
      'Method overriding concepts',
    ],
    topics: [
      {
        title: 'Defining and Implementing Interfaces',
        summary:
          'Use interface keyword to declare; implements keyword on the class. All interface methods must be implemented unless the class is abstract.',
        points: [
          'Interface methods are implicitly public and abstract (pre-Java 8).',
          'A class can implement multiple interfaces: class Duck implements Flyable, Swimmable.',
          'Interface references enable polymorphism: Drawable d = new Square();',
        ],
      },
      {
        title: 'Interface Inheritance',
        summary:
          'One interface can extend another, inheriting its method signatures. A class implementing the child must satisfy the entire hierarchy.',
        points: [
          'interface Pet extends Animal { void play(); } — Pet inherits eat() from Animal.',
          'Interfaces can extend multiple other interfaces.',
        ],
      },
      {
        title: 'Multiple Inheritance via Interfaces',
        summary:
          'Java prohibits extending multiple classes but allows implementing multiple interfaces, avoiding the diamond problem while combining behaviours.',
        points: [
          'class Car implements Engine, Wheels — combines two capability contracts.',
          'Use when a class needs behaviours from multiple unrelated sources.',
        ],
      },
      {
        title: 'Default and Static Methods (Java 8+)',
        summary:
          'Interfaces can now include default methods (with body) and static methods, allowing interfaces to evolve without breaking existing code.',
        points: [
          'default void honk() { ... } — inherited by implementors; can be overridden.',
          'static void showInfo() — called as InterfaceName.showInfo(), not on instances.',
        ],
      },
    ],
    keyTerms: [
      { term: 'Interface', definition: 'A reference type that declares method signatures without implementation.' },
      { term: 'implements', definition: 'Keyword linking a class to one or more interfaces.' },
      { term: 'Contract', definition: 'A promise that implementing classes will provide specified methods.' },
      { term: 'Polymorphism', definition: 'Treating different implementing classes uniformly through an interface reference.' },
    ],
  },

  4: {
    overview:
      'Packages group related classes into namespaces, preventing name conflicts and organising large projects. Access modifiers control visibility of classes and members across package boundaries — a core aspect of encapsulation.',
    prerequisites: [
      'Classes and inheritance from Lab 1',
      'Understanding of public vs private at a basic level',
      'File system folder concepts (directories map to packages)',
    ],
    topics: [
      {
        title: 'Packages',
        summary:
          'package declaration at the top of a file; directory structure must match (mypack/MyClass.java → package mypack;).',
        points: [
          'import package.ClassName; brings a class into scope.',
          'import static java.lang.Math.PI; imports a static member directly.',
          'Fully qualified name: package.subpackage.ClassName — no import needed.',
          'Nested packages: university.department.Professor → university/department/Professor.java.',
        ],
      },
      {
        title: 'Access Modifiers',
        summary:
          'Four levels control who can access a class or member. From most to least restrictive: private → default → protected → public.',
        points: [
          'private — only within the declaring class.',
          'default (no modifier) — within the same package only.',
          'protected — same package + subclasses in any package.',
          'public — accessible from anywhere.',
        ],
      },
      {
        title: 'Encapsulation in Practice',
        summary:
          'Hide internal state with private fields; expose controlled access through public methods (getters, setters, business methods).',
        points: [
          'Private fields prevent direct external modification.',
          'Public methods validate and control how data is read or changed.',
          'Package-private helpers stay hidden from outside the package.',
        ],
      },
    ],
    keyTerms: [
      { term: 'Package', definition: 'A namespace that groups related classes; maps to a folder structure.' },
      { term: 'import', definition: 'Brings a class or static member from another package into the current file.' },
      { term: 'Encapsulation', definition: 'Hiding internal details and exposing a controlled public interface.' },
      { term: 'Package-private', definition: 'Default access — visible only within the same package.' },
    ],
  },

  5: {
    overview:
      'Multithreading allows concurrent execution — multiple threads run within one program, sharing memory but having independent execution paths. Proper synchronisation is essential to prevent race conditions and corrupted shared data.',
    prerequisites: [
      'Classes, objects, and methods from Lab 1',
      'Understanding of loops and method calls',
      'Basic awareness that programs can perform multiple tasks',
    ],
    topics: [
      {
        title: 'Creating Threads',
        summary:
          'Two standard approaches: extend Thread and override run(), or implement Runnable and pass to new Thread(runnable).',
        points: [
          'Always call start() — not run() directly — to launch a new thread.',
          'Runnable is preferred; it separates the task from the thread mechanism.',
          'Each thread has its own stack; shares heap memory with other threads.',
        ],
      },
      {
        title: 'Synchronisation',
        summary:
          'synchronized keyword ensures only one thread executes a critical section at a time, preventing race conditions on shared data.',
        points: [
          'Race condition — two threads interleave read-modify-write on the same variable.',
          'synchronized methods acquire the object\'s intrinsic lock before executing.',
          'Without sync, count++ can lose updates (not atomic).',
        ],
      },
      {
        title: 'Thread Coordination',
        summary:
          'Threads communicate using wait(), notify(), and notifyAll() on shared objects, plus join() to wait for completion.',
        points: [
          'wait() — releases lock and pauses until notified.',
          'notify()/notifyAll() — wakes waiting threads.',
          'join() — blocks until the target thread finishes.',
          'Producer-Consumer — classic pattern with a bounded shared buffer.',
        ],
      },
      {
        title: 'Thread Priorities',
        summary:
          'Priorities (1–10) hint to the scheduler which threads are more important. Behaviour is OS-dependent and should not be relied on for correctness.',
        points: [
          'Thread.MIN_PRIORITY (1), NORM_PRIORITY (5), MAX_PRIORITY (10).',
          'Use synchronisation for ordering, not priorities.',
        ],
      },
    ],
    keyTerms: [
      { term: 'Thread', definition: 'A lightweight unit of execution within a process.' },
      { term: 'Race condition', definition: 'Bug caused by unsynchronised concurrent access to shared mutable state.' },
      { term: 'synchronized', definition: 'Keyword ensuring mutual exclusion on a block or method.' },
      { term: 'Producer-Consumer', definition: 'Pattern where one thread produces data and another consumes it via a shared buffer.' },
    ],
  },

  6: {
    overview:
      'GUI programming in Java uses the Abstract Window Toolkit (AWT) and Swing for drawing graphics and handling user events. Although applets are deprecated, the same concepts — panels, graphics contexts, colours, fonts, and event listeners — apply to modern Swing and JavaFX applications.',
    prerequisites: [
      'Classes, objects, and inheritance from Lab 1',
      'Interfaces and event-driven thinking from Lab 3',
      'Basic understanding of coordinates (x, y) on a screen',
    ],
    topics: [
      {
        title: 'Swing Components',
        summary:
          'JFrame is the top-level window; JPanel is a drawing surface inside it. Override paintComponent(Graphics g) to render custom graphics.',
        points: [
          'Always call super.paintComponent(g) first to clear the background.',
          'repaint() schedules a redraw; never call paintComponent() directly.',
          'setSize(), setVisible(true), setDefaultCloseOperation(EXIT_ON_CLOSE) configure the window.',
        ],
      },
      {
        title: 'Graphics Drawing',
        summary:
          'The Graphics class provides primitives: lines, rectangles, ovals, arcs, strings, colours, and fonts.',
        points: [
          'drawLine, drawRect, fillRect, drawOval, fillOval, drawArc — basic shapes.',
          'setColor(Color.RED) or new Color(r, g, b) — controls drawing colour.',
          'setFont(new Font(name, style, size)) — controls text appearance.',
          'Origin (0,0) is top-left; x increases right, y increases downward.',
        ],
      },
      {
        title: 'Event Handling',
        summary:
          'GUIs are event-driven — the program responds to user actions (clicks, key presses) via listener interfaces.',
        points: [
          'Implement MouseListener and register with addMouseListener(this).',
          'mouseClicked(MouseEvent e) — e.getX(), e.getY() give click coordinates.',
          'Adapter classes (MouseAdapter) reduce boilerplate for unused listener methods.',
        ],
      },
      {
        title: 'Applet Lifecycle',
        summary:
          'Traditional applets follow init → start → stop → destroy. In Swing, similar setup/teardown logic applies when creating and closing windows.',
        points: [
          'init() — one-time setup; start() — become active; stop() — pause; destroy() — cleanup.',
          'Modern equivalent: initialise in constructor, clean up on window close.',
        ],
      },
    ],
    keyTerms: [
      { term: 'JPanel', definition: 'A Swing container used as a custom drawing surface.' },
      { term: 'Graphics', definition: 'AWT context object for drawing shapes, text, and images.' },
      { term: 'paintComponent', definition: 'Method called by Swing to render the panel\'s contents.' },
      { term: 'Event-driven', definition: 'Program flow determined by user/system events, not a fixed sequence.' },
    ],
  },
};
