export const lab1 = {
  id: 1,
  slug: 'lab-1',
  title: 'Lab 1 — Class, Constructor, Overloading, Inheritance, and Overriding',
  description:
    'Fundamental OOP concepts: creating classes and objects, constructors (default, parameterized, copy), method/constructor overloading, single/multilevel/hierarchical inheritance, and method overriding with super.',
  folder: 'Lab_1',
  programs: [
    {
      name: 'Program1_StudentClassObject.java',
      path: 'Lab_1/Program1_StudentClassObject.java',
      concept: 'Class and Object creation',
      description:
        'Introduces the building blocks of OOP — a class as a blueprint and objects as instances. A Student class is defined with data fields (name, rollNo) and a method to display them. The main method creates two separate Student objects and assigns different values to each.',
      purpose:
        'Every Java program that models real-world entities starts with classes and objects. This program shows how data and behaviour are bundled together and how multiple independent objects can exist from the same class.',
      howItWorks: [
        'The Student class is declared with two instance variables (name, rollNo) and a display() method.',
        'In main(), the first object s1 is created using new Student().',
        'Fields are assigned directly: s1.name = "Amit" and s1.rollNo = 101.',
        's1.display() prints the values stored in that object.',
        'A second object s2 is created independently with different field values.',
        's2.display() prints its own data — proving each object has its own copy of instance variables.',
      ],
      classes: [
        { name: 'Student', role: 'Blueprint with name, rollNo fields and display() method' },
        { name: 'Program1_StudentClassObject', role: 'Contains main() — creates and uses two Student objects' },
      ],
      notes: [
        'A class is a template; an object is a concrete instance created with new.',
        'Each object has its own copy of instance variables.',
        'Object fields are accessed with the dot operator (object.field).',
        'Methods are called on objects: object.method().',
      ],
      run: 'cd Lab_1\njavac Program1_StudentClassObject.java\njava Program1_StudentClassObject',
      output: 'Name: Amit, Roll No: 101\nName: Priya, Roll No: 102',
    },
    {
      name: 'Program2_DefaultConstructor.java',
      path: 'Lab_1/Program2_DefaultConstructor.java',
      concept: 'Default (no-argument) constructor',
      description:
        'Demonstrates a constructor with no parameters that automatically runs when an object is created. The Rectangle class sets default dimensions (length=10, width=5) inside the default constructor, so every new Rectangle starts with known values.',
      purpose:
        'Constructors initialize object state at creation time. A default constructor is useful when objects should always start with sensible preset values without requiring the caller to pass arguments.',
      howItWorks: [
        'Rectangle declares length and width as instance variables.',
        'The no-argument constructor Rectangle() sets length=10 and width=5 and prints a confirmation message.',
        'When main() calls new Rectangle(), Java automatically invokes this constructor.',
        'The area() method multiplies length × width and returns the result.',
        'main() prints the computed area (10 × 5 = 50).',
      ],
      classes: [
        { name: 'Rectangle', role: 'Has default constructor and area() method' },
        { name: 'Program2_DefaultConstructor', role: 'Creates Rectangle and prints its area' },
      ],
      notes: [
        'If no constructor is written, Java provides a default no-arg constructor.',
        'A constructor has the same name as the class and no return type.',
        'Constructors run automatically on new ClassName().',
        'Instance variables can be initialized inside constructors.',
      ],
      run: 'javac Program2_DefaultConstructor.java && java Program2_DefaultConstructor',
      output: 'Default constructor called\nArea: 50',
    },
    {
      name: 'Program3_ParameterizedConstructor.java',
      path: 'Lab_1/Program3_ParameterizedConstructor.java',
      concept: 'Parameterized constructor',
      description:
        'Shows how to pass values into a constructor so each object can be initialized differently at creation time. The Circle class accepts a radius parameter and stores it for use in the area() calculation.',
      purpose:
        'Parameterized constructors let you create objects with custom initial state in a single line, avoiding separate field assignments after creation.',
      howItWorks: [
        'Circle declares a double radius field.',
        'The constructor Circle(double r) receives the radius and assigns it to this.radius.',
        'main() creates a Circle with radius 7.0: new Circle(7.0).',
        'area() returns Math.PI * radius * radius.',
        'The result is printed to the console.',
      ],
      classes: [
        { name: 'Circle', role: 'Parameterized constructor stores radius; area() uses Math.PI' },
        { name: 'Program3_ParameterizedConstructor', role: 'Creates a Circle(7.0) and prints area' },
      ],
      notes: [
        'this.radius refers to the instance variable; r is the parameter.',
        'Parameterized constructors enable one-line object creation with data.',
        'Math.PI is a built-in constant for accurate circle calculations.',
      ],
      run: 'javac Program3_ParameterizedConstructor.java && java Program3_ParameterizedConstructor',
      output: 'Parameterized constructor called with radius: 7.0\nArea of circle: 153.93804002589985',
    },
    {
      name: 'Program4_CopyConstructor.java',
      path: 'Lab_1/Program4_CopyConstructor.java',
      concept: 'Copy constructor',
      description:
        'Creates a new object by copying the state of an existing object. The Book class has a normal constructor and a copy constructor Book(Book other) that duplicates the title and author fields from another Book instance.',
      purpose:
        'Copy constructors are used when you need a new object with the same data as an existing one, without sharing the same reference. Useful for defensive copying and clone-like behaviour.',
      howItWorks: [
        'b1 is created with the standard constructor: new Book("Java Programming", "Balagurusamy").',
        'b2 is created using the copy constructor: new Book(b1).',
        'Inside Book(Book other), this.title = other.title and this.author = other.author copy the values.',
        'Both objects are independent — changing b1 does not affect b2.',
        'display() is called on both to show they hold the same data.',
      ],
      classes: [
        { name: 'Book', role: 'Standard constructor + copy constructor Book(Book other)' },
        { name: 'Program4_CopyConstructor', role: 'Creates original and copied Book objects' },
      ],
      notes: [
        'A copy constructor takes an object of the same class as its parameter.',
        'It creates a new object with duplicated field values.',
        'Copying is shallow — primitive fields and references are copied as-is.',
        'Java does not auto-generate copy constructors (unlike default constructors).',
      ],
      run: 'javac Program4_CopyConstructor.java && java Program4_CopyConstructor',
      output: 'Copy constructor called\nTitle: Java Programming, Author: Balagurusamy (printed twice)',
    },
    {
      name: 'Program5_MethodOverloading.java',
      path: 'Lab_1/Program5_MethodOverloading.java',
      concept: 'Method overloading',
      description:
        'Defines multiple methods with the same name but different parameter lists. Calculator has three add() methods — two ints, three ints, and two doubles — and Java picks the correct one based on the arguments passed.',
      purpose:
        'Method overloading provides a clean, consistent API where one method name handles similar operations on different inputs, improving code readability.',
      howItWorks: [
        'Calculator defines add(int, int), add(int, int, int), and add(double, double).',
        'main() creates one Calculator object.',
        'calc.add(10, 20) calls the two-int version → returns 30.',
        'calc.add(10, 20, 30) calls the three-int version → returns 60.',
        'calc.add(10.5, 20.5) calls the double version → returns 31.0.',
        'Java resolves the correct method at compile time based on argument types and count.',
      ],
      classes: [
        { name: 'Calculator', role: 'Three overloaded add() methods' },
        { name: 'Program5_MethodOverloading', role: 'Demonstrates all three overloads' },
      ],
      notes: [
        'Overloading requires different parameter lists (number or types).',
        'Return type alone cannot distinguish overloaded methods.',
        'Also called compile-time polymorphism or static binding.',
        'Improves API design — one intuitive name for related operations.',
      ],
      run: 'javac Program5_MethodOverloading.java && java Program5_MethodOverloading',
      output: 'Sum (2 int): 30\nSum (3 int): 60\nSum (2 double): 31.0',
    },
    {
      name: 'Program6_ConstructorOverloading.java',
      path: 'Lab_1/Program6_ConstructorOverloading.java',
      concept: 'Constructor overloading',
      description:
        'Provides multiple constructors in one class, each accepting different parameters. Employee has three constructors: no-args (defaults), name+id only, and name+id+salary — allowing flexible object creation.',
      purpose:
        'Constructor overloading lets users create objects with varying levels of detail, defaulting unspecified fields when fewer arguments are provided.',
      howItWorks: [
        'Employee() sets name="Unknown", id=0, salary=0.0.',
        'Employee(String, int) sets name and id; salary defaults to 0.0.',
        'Employee(String, int, double) sets all three fields.',
        'main() calls all three constructors to create e1, e2, and e3.',
        'Each employee calls display() to show its initialized state.',
        'Java selects the constructor matching the arguments passed to new.',
      ],
      classes: [
        { name: 'Employee', role: 'Three overloaded constructors with progressive detail' },
        { name: 'Program6_ConstructorOverloading', role: 'Creates three employees using different constructors' },
      ],
      notes: [
        'Multiple constructors in one class must differ in parameter list.',
        'Useful for optional fields and sensible defaults.',
        'this() can chain to another constructor in the same class.',
        'Constructor overloading follows the same rules as method overloading.',
      ],
      run: 'javac Program6_ConstructorOverloading.java && java Program6_ConstructorOverloading',
      output: 'Three employee records with increasing detail (ID, Name, Salary)',
    },
    {
      name: 'Program7_SingleInheritance.java',
      path: 'Lab_1/Program7_SingleInheritance.java',
      concept: 'Single inheritance',
      description:
        'Dog extends Animal using the extends keyword, inheriting the eat() method while adding its own bark() method. A Dog object can call both inherited and own methods.',
      purpose:
        'Inheritance promotes code reuse — common behaviour lives in the parent class, and child classes extend it with specialised features. Java supports single inheritance only (one parent per class).',
      howItWorks: [
        'Animal defines eat() which prints "Animal is eating".',
        'Dog extends Animal and adds bark() which prints "Dog is barking".',
        'main() creates a Dog object: Dog d = new Dog().',
        'd.eat() is inherited from Animal — no redefinition needed.',
        'd.bark() is Dog\'s own method.',
        'Both methods run on the same Dog instance.',
      ],
      classes: [
        { name: 'Animal', role: 'Parent (superclass) with eat()' },
        { name: 'Dog', role: 'Child (subclass) extends Animal, adds bark()' },
        { name: 'Program7_SingleInheritance', role: 'Creates Dog and calls inherited + own methods' },
      ],
      notes: [
        'extends establishes an "is-a" relationship: Dog is an Animal.',
        'Child inherits all non-private members of the parent.',
        'Java allows only one direct superclass per class.',
        'Promotes DRY — write common code once in the parent.',
      ],
      run: 'javac Program7_SingleInheritance.java && java Program7_SingleInheritance',
      output: 'Animal is eating\nDog is barking',
    },
    {
      name: 'Program8_MultilevelInheritance.java',
      path: 'Lab_1/Program8_MultilevelInheritance.java',
      concept: 'Multilevel inheritance',
      description:
        'Forms a chain of three classes: Grandparent → Parent → Child. The Child class inherits from Parent, which inherits from Grandparent, so Child can access methods from all levels.',
      purpose:
        'Multilevel inheritance models hierarchical relationships (e.g., LivingBeing → Animal → Dog) where each level adds more specific behaviour on top of the general.',
      howItWorks: [
        'Grandparent defines showGrandparent().',
        'Parent extends Grandparent and adds showParent().',
        'Child extends Parent and adds showChild().',
        'main() creates a Child object.',
        'child.showGrandparent() — inherited through Parent from Grandparent.',
        'child.showParent() — inherited from Parent.',
        'child.showChild() — defined in Child itself.',
      ],
      classes: [
        { name: 'Grandparent', role: 'Top of the chain' },
        { name: 'Parent', role: 'Middle — extends Grandparent' },
        { name: 'Child', role: 'Bottom — extends Parent, inherits entire chain' },
        { name: 'Program8_MultilevelInheritance', role: 'Demonstrates three-level access' },
      ],
      notes: [
        'Inheritance chains can be multiple levels deep.',
        'A subclass inherits all accessible members from the entire ancestor chain.',
        'Avoid very deep hierarchies — they become hard to maintain.',
        'Child "is-a" Parent and also "is-a" Grandparent.',
      ],
      run: 'javac Program8_MultilevelInheritance.java && java Program8_MultilevelInheritance',
      output: 'I am Grandparent\nI am Parent\nI am Child',
    },
    {
      name: 'Program9_HierarchicalInheritance.java',
      path: 'Lab_1/Program9_HierarchicalInheritance.java',
      concept: 'Hierarchical inheritance',
      description:
        'One parent class Vehicle is extended by two separate child classes — Car and Bike. Both children inherit start() from Vehicle but each defines its own specialised method (drive() and ride()).',
      purpose:
        'Hierarchical inheritance models one general type branching into multiple specific types, sharing common behaviour while allowing individual specialisation.',
      howItWorks: [
        'Vehicle defines start() — common to all vehicles.',
        'Car extends Vehicle and adds drive().',
        'Bike extends Vehicle and adds ride().',
        'main() creates separate Car and Bike objects.',
        'car.start() and car.drive() use inherited + own methods.',
        'bike.start() and bike.ride() work independently of Car.',
      ],
      classes: [
        { name: 'Vehicle', role: 'Common parent with start()' },
        { name: 'Car', role: 'Child — adds drive()' },
        { name: 'Bike', role: 'Child — adds ride()' },
        { name: 'Program9_HierarchicalInheritance', role: 'Uses both children independently' },
      ],
      notes: [
        'Multiple classes can extend the same parent.',
        'Siblings (Car and Bike) do not inherit from each other.',
        'Each child gets its own copy of inherited methods.',
        'Common code lives in the parent; differences in each child.',
      ],
      run: 'javac Program9_HierarchicalInheritance.java && java Program9_HierarchicalInheritance',
      output: 'Vehicle started\nCar is driving\nVehicle started\nBike is riding',
    },
    {
      name: 'Program10_MethodOverriding.java',
      path: 'Lab_1/Program10_MethodOverriding.java',
      concept: 'Method overriding with super',
      description:
        'Student overrides the display() method inherited from Person, providing a more specific implementation. It calls super.display() first to run the parent version, then adds its own output. Demonstrates runtime polymorphism via Person p = new Student().',
      purpose:
        'Method overriding lets a subclass replace parent behaviour with its own implementation while still being able to invoke the original via super — essential for extending behaviour without discarding it.',
      howItWorks: [
        'Person defines display() printing "I am a Person".',
        'Student extends Person and overrides display() with @Override.',
        'Inside Student\'s display(), super.display() calls the parent version first.',
        'Then Student prints "I am a Student".',
        'main() declares Person p = new Student() — parent reference, child object.',
        'p.display() calls Student\'s overridden version at runtime (dynamic dispatch).',
      ],
      classes: [
        { name: 'Person', role: 'Parent with display()' },
        { name: 'Student', role: 'Child overriding display(), uses super.display()' },
        { name: 'Program10_MethodOverriding', role: 'Demonstrates runtime polymorphism' },
      ],
      notes: [
        '@Override annotation catches signature mismatches at compile time.',
        'super keyword refers to the immediate parent class.',
        'Runtime polymorphism: the actual object type determines which method runs.',
        'Method signature must match the parent (name, params, return type).',
        'Also called dynamic binding or late binding.',
      ],
      run: 'javac Program10_MethodOverriding.java && java Program10_MethodOverriding',
      output: 'I am a Person\nI am a Student',
    },
  ],
};
