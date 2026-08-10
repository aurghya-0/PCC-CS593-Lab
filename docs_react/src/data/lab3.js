export const lab3 = {
  id: 3,
  slug: 'lab-3',
  title: 'Lab 3 — Developing Interfaces',
  description:
    'Java interfaces: basic implementation, multiple interfaces, interface inheritance, multiple inheritance via interfaces, and default/static interface methods.',
  folder: 'Lab_3',
  programs: [
    {
      name: 'Program1_BasicInterface.java',
      path: 'Lab_3/Program1_BasicInterface.java',
      concept: 'Basic interface implementation',
      description:
        'Introduces Java interfaces — abstract contracts that define what a class must do without specifying how. Drawable declares a draw() method; Square provides the concrete implementation. An interface reference can hold any implementing object.',
      purpose:
        'Interfaces define capabilities that classes promise to provide. They enable loose coupling — code depends on the interface, not the specific class, making systems more flexible and testable.',
      howItWorks: [
        'interface Drawable { void draw(); } declares a method without a body.',
        'class Square implements Drawable and provides the draw() implementation.',
        'main() creates: Drawable d = new Square() — interface type, Square object.',
        'd.draw() calls Square\'s implementation via dynamic dispatch.',
        'The output confirms the Square\'s draw method executed.',
      ],
      classes: [
        { name: 'Drawable', role: 'Interface — contract with void draw()' },
        { name: 'Square', role: 'Concrete class implementing Drawable' },
        { name: 'Program1_BasicInterface', role: 'Uses interface reference polymorphically' },
      ],
      notes: [
        'Interface methods are implicitly public and abstract (pre-Java 8).',
        'A class must implement all interface methods or be declared abstract.',
        'Interface references enable polymorphism — same type, different behaviours.',
        'implements keyword links a class to an interface.',
      ],
      run: 'cd Lab_3\njavac Program1_BasicInterface.java && java Program1_BasicInterface',
      output: 'Drawing a Square',
    },
    {
      name: 'Program2_MultipleInterfaces.java',
      path: 'Lab_3/Program2_MultipleInterfaces.java',
      concept: 'Implementing multiple interfaces',
      description:
        'A single class can implement multiple interfaces, combining several capabilities. Duck implements both Flyable and Swimmable, providing fly() and swim() methods. This models real-world entities with multiple roles.',
      purpose:
        'While Java allows only single class inheritance, multiple interface implementation lets a class adopt several behavioural contracts — solving the "can fly AND swim" problem without multiple inheritance of classes.',
      howItWorks: [
        'Flyable declares fly(); Swimmable declares swim().',
        'Duck implements Flyable, Swimmable — comma-separated interface list.',
        'Duck must provide both fly() and swim() implementations.',
        'main() creates a Duck and calls duck.fly() then duck.swim().',
        'Each method executes its own implementation independently.',
      ],
      classes: [
        { name: 'Flyable', role: 'Interface — flying capability' },
        { name: 'Swimmable', role: 'Interface — swimming capability' },
        { name: 'Duck', role: 'Implements both interfaces' },
        { name: 'Program2_MultipleInterfaces', role: 'Demonstrates dual-capability object' },
      ],
      notes: [
        'A class can implement any number of interfaces.',
        'All interface methods must be implemented (unless default methods exist).',
        'Interfaces model "can-do" relationships (capabilities).',
        'Alternative to multiple inheritance which Java prohibits for classes.',
      ],
      run: 'javac Program2_MultipleInterfaces.java && java Program2_MultipleInterfaces',
      output: 'Duck is flying\nDuck is swimming',
    },
    {
      name: 'Program3_InterfaceExtending.java',
      path: 'Lab_3/Program3_InterfaceExtending.java',
      concept: 'Interface extending another interface',
      description:
        'One interface can extend another, inheriting its methods and adding new ones. Pet extends Animal (gaining eat()) and adds play(). Cat implements Pet and must provide both methods.',
      purpose:
        'Interface inheritance creates specialised contracts from general ones, similar to class inheritance but for behaviour specifications. It builds hierarchical APIs.',
      howItWorks: [
        'Animal interface declares eat().',
        'Pet extends Animal and adds play() — inherits eat() requirement.',
        'Cat implements Pet — must provide both eat() and play().',
        'main() creates a Cat and calls cat.eat() and cat.play().',
        'Both inherited and own interface methods are satisfied by Cat.',
      ],
      classes: [
        { name: 'Animal', role: 'Base interface — eat()' },
        { name: 'Pet', role: 'Extends Animal, adds play()' },
        { name: 'Cat', role: 'Implements all methods from Pet (and Animal)' },
      ],
      notes: [
        'Interfaces can extend multiple other interfaces.',
        'Implementing class must satisfy the entire interface hierarchy.',
        'extends in interfaces inherits method signatures, not implementations.',
        'Creates layered contracts: Animal → Pet → Cat.',
      ],
      run: 'javac Program3_InterfaceExtending.java && java Program3_InterfaceExtending',
      output: 'Cat is eating\nCat is playing',
    },
    {
      name: 'Program4_MultipleInheritance.java',
      path: 'Lab_3/Program4_MultipleInheritance.java',
      concept: 'Multiple inheritance through interfaces',
      description:
        'Java does not allow a class to extend multiple classes, but a class can implement multiple interfaces. Car implements both Engine and Wheels, combining startEngine() and rotateWheels() behaviours in one class.',
      purpose:
        'This is Java\'s solution to the multiple inheritance problem. Interfaces provide the benefits of inheriting from multiple sources (combined behaviour) without the diamond problem of multiple class inheritance.',
      howItWorks: [
        'Engine interface declares startEngine(); Wheels declares rotateWheels().',
        'Car implements Engine, Wheels — must implement both methods.',
        'startEngine() prints "Car engine started".',
        'rotateWheels() prints "Car wheels rotating".',
        'main() creates a Car and calls both interface methods.',
      ],
      classes: [
        { name: 'Engine', role: 'Interface — engine behaviour' },
        { name: 'Wheels', role: 'Interface — wheel behaviour' },
        { name: 'Car', role: 'Implements both — combines behaviours' },
      ],
      notes: [
        'Java classes: single inheritance only (extends one class).',
        'Java interfaces: a class can implement many interfaces.',
        'Avoids the diamond problem of C++ multiple inheritance.',
        'A class can extend one class AND implement multiple interfaces.',
      ],
      run: 'javac Program4_MultipleInheritance.java && java Program4_MultipleInheritance',
      output: 'Car engine started\nCar wheels rotating',
    },
    {
      name: 'Program5_BankAccountInterface.java',
      path: 'Lab_3/Program5_BankAccountInterface.java',
      concept: 'Practical interface — bank account',
      description:
        'Models a real-world banking scenario using an interface. BankAccount defines the contract (deposit, withdraw, getBalance). SavingsAccount provides a concrete implementation with a private balance field and validation logic.',
      purpose:
        'Interfaces are ideal for defining service contracts in applications. Different account types (Savings, Current) can implement the same BankAccount interface with different internal logic.',
      howItWorks: [
        'BankAccount interface declares deposit, withdraw, and getBalance.',
        'SavingsAccount implements BankAccount with a private double balance.',
        'deposit() adds to balance if amount > 0.',
        'withdraw() subtracts only if sufficient balance exists.',
        'main() uses BankAccount reference pointing to SavingsAccount object.',
        'Deposits 5000, withdraws 1500, prints remaining balance 3500.',
      ],
      classes: [
        { name: 'BankAccount', role: 'Interface — banking operations contract' },
        { name: 'SavingsAccount', role: 'Concrete implementation with balance validation' },
        { name: 'Program5_BankAccountInterface', role: 'Uses interface reference for polymorphism' },
      ],
      notes: [
        'Program to interface, not implementation — a core OOP principle.',
        'Interface reference allows swapping implementations without changing client code.',
        'Private fields hide implementation details; public methods expose the contract.',
        'Enables unit testing with mock implementations of the interface.',
      ],
      run: 'javac Program5_BankAccountInterface.java && java Program5_BankAccountInterface',
      output: 'Deposited: 5000.0\nWithdrawn: 1500.0\nBalance: 3500.0',
    },
    {
      name: 'Program6_ShapeInterface.java',
      path: 'Lab_3/Program6_ShapeInterface.java',
      concept: 'Interface with multiple implementations',
      description:
        'Shape interface declares area() and perimeter(). Rectangle and Circle each implement these methods with their own geometric formulas. Demonstrates one interface, many implementations — classic polymorphism.',
      purpose:
        'This pattern appears everywhere in software: a common operation (calculate area) with type-specific implementations. Callers work with Shape references without knowing the concrete type.',
      howItWorks: [
        'Shape interface declares double area() and double perimeter().',
        'Rectangle stores length and width; area = l×w, perimeter = 2(l+w).',
        'Circle stores radius; area = πr², perimeter = 2πr.',
        'main() creates Shape references for both Rectangle(5,3) and Circle(4).',
        'Each reference calls its own implementation\'s formulas.',
        'Results are printed for both shapes.',
      ],
      classes: [
        { name: 'Shape', role: 'Interface — geometric operations' },
        { name: 'Rectangle', role: 'Implementation using length × width' },
        { name: 'Circle', role: 'Implementation using π and radius' },
      ],
      notes: [
        'One interface, multiple implementations — key polymorphism pattern.',
        'Adding a new shape (Triangle) requires no changes to existing code.',
        'Shape[] array can hold mixed Rectangle and Circle objects.',
        'Formulas differ but the calling code stays the same.',
      ],
      run: 'javac Program6_ShapeInterface.java && java Program6_ShapeInterface',
      output: 'Rectangle Area: 15.0, Perimeter: 16.0\nCircle Area: 50.27, Perimeter: 25.13',
    },
    {
      name: 'Program7_PrintableInterface.java',
      path: 'Lab_3/Program7_PrintableInterface.java',
      concept: 'Polymorphism via interface',
      description:
        'Printable interface defines a print() method. Document and Photo implement it differently — Document prints text content, Photo prints a filename. Both are used through Printable references in main().',
      purpose:
        'Shows how unrelated classes can share a common interface for a uniform operation. Any Printable object can be passed to code that only knows about the print() contract.',
      howItWorks: [
        'Printable interface declares void print().',
        'Document stores a text content string; print() outputs "Printing: {content}".',
        'Photo stores a filename; print() outputs "Printing photo: {filename}".',
        'main() creates Printable references for both Document and Photo.',
        'doc.print() and photo.print() each execute their own implementation.',
      ],
      classes: [
        { name: 'Printable', role: 'Interface — anything that can be printed' },
        { name: 'Document', role: 'Prints text content' },
        { name: 'Photo', role: 'Prints image filename' },
      ],
      notes: [
        'Unrelated classes can implement the same interface.',
        'Interface enables treating different types uniformly.',
        'Useful for plugin architectures and strategy patterns.',
        'Client code depends only on Printable, not Document or Photo.',
      ],
      run: 'javac Program7_PrintableInterface.java && java Program7_PrintableInterface',
      output: 'Printing: Lab Report\nPrinting photo: vacation.jpg',
    },
    {
      name: 'Program8_DefaultStaticInterface.java',
      path: 'Lab_3/Program8_DefaultStaticInterface.java',
      concept: 'Default and static methods in interfaces',
      description:
        'Java 8 added default and static methods to interfaces. Vehicle has a default honk() with a built-in implementation and a static showInfo(). Motorcycle only needs to implement start() — it inherits honk() automatically.',
      purpose:
        'Default methods let interfaces evolve without breaking existing implementations. Static methods provide utility functions associated with the interface type without needing a separate helper class.',
      howItWorks: [
        'Vehicle interface declares abstract start(), default honk(), and static showInfo().',
        'Motorcycle implements Vehicle — only start() is required.',
        'main() calls Vehicle.showInfo() — static method on the interface itself.',
        'Motorcycle bike = new Motorcycle(); bike.start() runs the implementation.',
        'bike.honk() uses the default implementation from Vehicle interface.',
      ],
      classes: [
        { name: 'Vehicle', role: 'Interface with abstract, default, and static methods' },
        { name: 'Motorcycle', role: 'Implements only start(); inherits default honk()' },
      ],
      notes: [
        'default methods have a body in the interface (Java 8+).',
        'static methods belong to the interface, called as InterfaceName.method().',
        'Default methods solve the "adding methods breaks implementors" problem.',
        'A class can override a default method if needed.',
        'Used extensively in Java Collections (e.g., List.sort()).',
      ],
      run: 'javac Program8_DefaultStaticInterface.java && java Program8_DefaultStaticInterface',
      output: 'This is a Vehicle interface\nMotorcycle started\nVehicle honking!',
    },
  ],
};
