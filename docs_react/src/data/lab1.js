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
        'Defines a Student class with instance variables and a display() method. Creates two objects and assigns field values.',
      classes: [
        { name: 'Student', role: 'Model class with name, rollNo, and display()' },
        { name: 'Program1_StudentClassObject', role: 'Main class — creates two Student objects' },
      ],
      run: 'cd Lab_1\njavac Program1_StudentClassObject.java\njava Program1_StudentClassObject',
      output: 'Prints name and roll number for two student objects.',
    },
    {
      name: 'Program2_DefaultConstructor.java',
      path: 'Lab_1/Program2_DefaultConstructor.java',
      concept: 'Default (no-argument) constructor',
      description:
        'Rectangle class uses a default constructor to initialize length=10 and width=5 when no arguments are passed.',
      classes: [
        { name: 'Rectangle', role: 'Default constructor sets length=10, width=5' },
        { name: 'Program2_DefaultConstructor', role: 'Main class — prints area' },
      ],
      run: 'javac Program2_DefaultConstructor.java && java Program2_DefaultConstructor',
    },
    {
      name: 'Program3_ParameterizedConstructor.java',
      path: 'Lab_1/Program3_ParameterizedConstructor.java',
      concept: 'Parameterized constructor',
      description: 'Circle class accepts radius via constructor and computes area using Math.PI.',
      classes: [
        { name: 'Circle', role: 'Parameterized constructor takes double radius' },
        { name: 'Program3_ParameterizedConstructor', role: 'Main class' },
      ],
      run: 'javac Program3_ParameterizedConstructor.java && java Program3_ParameterizedConstructor',
    },
    {
      name: 'Program4_CopyConstructor.java',
      path: 'Lab_1/Program4_CopyConstructor.java',
      concept: 'Copy constructor',
      description: 'Book class defines a copy constructor Book(Book other) that duplicates fields from an existing object.',
      classes: [
        { name: 'Book', role: 'Standard + copy constructor' },
        { name: 'Program4_CopyConstructor', role: 'Main class — original and copied book' },
      ],
      run: 'javac Program4_CopyConstructor.java && java Program4_CopyConstructor',
    },
    {
      name: 'Program5_MethodOverloading.java',
      path: 'Lab_1/Program5_MethodOverloading.java',
      concept: 'Method overloading',
      description: 'Calculator defines three overloaded add() methods: (int,int), (int,int,int), and (double,double).',
      classes: [
        { name: 'Calculator', role: 'Overloaded add() methods' },
        { name: 'Program5_MethodOverloading', role: 'Main class — calls all overloads' },
      ],
      run: 'javac Program5_MethodOverloading.java && java Program5_MethodOverloading',
    },
    {
      name: 'Program6_ConstructorOverloading.java',
      path: 'Lab_1/Program6_ConstructorOverloading.java',
      concept: 'Constructor overloading',
      description: 'Employee class provides three constructors: no-args, name+id, and name+id+salary.',
      classes: [
        { name: 'Employee', role: 'Three overloaded constructors' },
        { name: 'Program6_ConstructorOverloading', role: 'Main class — three employees' },
      ],
      run: 'javac Program6_ConstructorOverloading.java && java Program6_ConstructorOverloading',
    },
    {
      name: 'Program7_SingleInheritance.java',
      path: 'Lab_1/Program7_SingleInheritance.java',
      concept: 'Single inheritance',
      description: 'Dog extends Animal, inheriting eat() while adding bark().',
      classes: [
        { name: 'Animal', role: 'Parent with eat()' },
        { name: 'Dog', role: 'Child extending Animal, adds bark()' },
        { name: 'Program7_SingleInheritance', role: 'Main class' },
      ],
      run: 'javac Program7_SingleInheritance.java && java Program7_SingleInheritance',
    },
    {
      name: 'Program8_MultilevelInheritance.java',
      path: 'Lab_1/Program8_MultilevelInheritance.java',
      concept: 'Multilevel inheritance',
      description: 'Three-level chain: Grandparent → Parent → Child. Child accesses methods from all ancestor levels.',
      classes: [
        { name: 'Grandparent', role: 'Top-level class' },
        { name: 'Parent', role: 'Extends Grandparent' },
        { name: 'Child', role: 'Extends Parent' },
        { name: 'Program8_MultilevelInheritance', role: 'Main class' },
      ],
      run: 'javac Program8_MultilevelInheritance.java && java Program8_MultilevelInheritance',
    },
    {
      name: 'Program9_HierarchicalInheritance.java',
      path: 'Lab_1/Program9_HierarchicalInheritance.java',
      concept: 'Hierarchical inheritance',
      description: 'Vehicle is extended by Car and Bike, each adding its own method.',
      classes: [
        { name: 'Vehicle', role: 'Parent with start()' },
        { name: 'Car', role: 'Child with drive()' },
        { name: 'Bike', role: 'Child with ride()' },
        { name: 'Program9_HierarchicalInheritance', role: 'Main class' },
      ],
      run: 'javac Program9_HierarchicalInheritance.java && java Program9_HierarchicalInheritance',
    },
    {
      name: 'Program10_MethodOverriding.java',
      path: 'Lab_1/Program10_MethodOverriding.java',
      concept: 'Method overriding with super',
      description:
        'Student overrides Person.display() and calls super.display() first. Demonstrates runtime polymorphism with Person p = new Student().',
      classes: [
        { name: 'Person', role: 'Parent with display()' },
        { name: 'Student', role: 'Child overriding display(), uses super' },
        { name: 'Program10_MethodOverriding', role: 'Main class' },
      ],
      run: 'javac Program10_MethodOverriding.java && java Program10_MethodOverriding',
      notes: ['@Override annotation', 'super keyword', 'Runtime polymorphism'],
    },
  ],
};
