export const lab4 = {
  id: 4,
  slug: 'lab-4',
  title: 'Lab 4 — Creating and Accessing Packages',
  description:
    'Java packages, importing across packages, and all four access modifiers: public, protected, default (package-private), and private. Each program is in its own subfolder.',
  folder: 'Lab_4',
  note: 'Always compile from inside each program subfolder so package paths resolve correctly.',
  programs: [
    {
      name: 'Program1_BasicPackage',
      path: 'Lab_4/Program1_BasicPackage/',
      concept: 'Basic package creation and import',
      description:
        'Demonstrates how to create a user-defined package (mypack) and use its classes from another class via the import statement. Greeting lives in mypack; the main class imports and calls it.',
      purpose:
        'Packages organise related classes, prevent naming conflicts, and control access. They mirror a folder structure and are the foundation of Java\'s modular design.',
      howItWorks: [
        'mypack/Greeting.java declares package mypack; at the top.',
        'The file must live in a mypack/ subdirectory matching the package name.',
        'Program1_BasicPackage.java uses import mypack.Greeting; to access the class.',
        'A Greeting object is created and sayHello() is called.',
        'javac compiles both files; java runs the main class.',
      ],
      files: ['Program1_BasicPackage.java', 'mypack/Greeting.java'],
      notes: [
        'package statement must be the first line (after comments) in a .java file.',
        'Directory structure must match package name: mypack/Greeting.java.',
        'import brings a class into scope; fully qualified name works without import.',
        'Default package (no package) cannot be imported by named packages.',
      ],
      run: 'cd Lab_4/Program1_BasicPackage\njavac mypack/Greeting.java Program1_BasicPackage.java\njava Program1_BasicPackage',
      output: 'Hello from mypack package!',
    },
    {
      name: 'Program2_PublicAccess',
      path: 'Lab_4/Program2_PublicAccess/',
      concept: 'Public access modifier',
      description:
        'Shows that a public class and its public members are accessible from any other package. PublicClass in the accessdemo package is imported and used from the default-package main class.',
      purpose:
        'public is the most permissive access level — use it for APIs and classes that should be available everywhere. It is required for the main class JVM entry point.',
      howItWorks: [
        'accessdemo/PublicClass.java is declared public in package accessdemo.',
        'Its display() method is also public.',
        'Program2_PublicAccess.java imports accessdemo.PublicClass.',
        'A PublicClass object is created in main() and display() is called.',
        'Compilation succeeds because public members are visible across packages.',
      ],
      files: ['Program2_PublicAccess.java', 'accessdemo/PublicClass.java'],
      notes: [
        'public class — accessible from any package.',
        'public method — callable from anywhere the object is accessible.',
        'Only one public class per .java file (filename must match class name).',
        'Most API classes and methods are declared public.',
      ],
      run: 'cd Lab_4/Program2_PublicAccess\njavac accessdemo/PublicClass.java Program2_PublicAccess.java\njava Program2_PublicAccess',
      output: 'Public class accessible from any package',
    },
    {
      name: 'Program3_ProtectedAccess',
      path: 'Lab_4/Program3_ProtectedAccess/',
      concept: 'Protected access modifier',
      description:
        'Demonstrates protected access across packages via inheritance. Parent in protectedpkg has a protected method; Child extends Parent in the same package and accesses it; the main class in the default package uses Child.',
      purpose:
        'protected allows subclasses to access parent members even from different packages, while hiding them from unrelated classes. It balances encapsulation with inheritance needs.',
      howItWorks: [
        'protectedpkg/Parent.java has protected void showProtected().',
        'protectedpkg/Child.java extends Parent and calls showProtected() in demo().',
        'Program3_ProtectedAccess.java (default package) imports Child.',
        'child.demo() internally calls the protected method inherited from Parent.',
        'Protected is accessible because Child is a subclass, even across packages.',
      ],
      files: ['Program3_ProtectedAccess.java', 'protectedpkg/Parent.java', 'protectedpkg/Child.java'],
      notes: [
        'protected: accessible within same package AND by subclasses (any package).',
        'A non-subclass in a different package cannot access protected members.',
        'Subclasses inherit protected members from parent classes.',
        'More open than default, more restricted than public.',
      ],
      run: 'cd Lab_4/Program3_ProtectedAccess\njavac protectedpkg/Parent.java protectedpkg/Child.java Program3_ProtectedAccess.java\njava Program3_ProtectedAccess',
      output: 'Protected method accessed from subclass in another package',
    },
    {
      name: 'Program4_DefaultAccess',
      path: 'Lab_4/Program4_DefaultAccess/',
      concept: 'Default (package-private) access',
      description:
        'Shows package-private (default) access — when no modifier is specified, a class or member is only visible within its own package. DefaultClass has no modifier and is used by DefaultDemo in the same package.',
      purpose:
        'Default access is useful for helper classes and internal implementation details that should not be exposed outside the package. It is the most restrictive access for top-level classes.',
      howItWorks: [
        'defaultpkg/DefaultDemo.java contains class DefaultClass (no modifier) and public class DefaultDemo.',
        'DefaultClass.show() is also package-private (no modifier).',
        'DefaultDemo.main() creates a DefaultClass object and calls show().',
        'This works because both classes are in the same defaultpkg package.',
        'An external class in another package could NOT access DefaultClass.',
      ],
      files: ['defaultpkg/DefaultDemo.java'],
      notes: [
        'No modifier = package-private (default) access.',
        'Visible only to classes in the same package.',
        'Cannot be accessed or imported from outside the package.',
        'Common for internal helper classes within a library package.',
      ],
      run: 'cd Lab_4/Program4_DefaultAccess\njavac defaultpkg/DefaultDemo.java\njava defaultpkg.DefaultDemo',
      output: 'Default (package-private) access within same package',
    },
    {
      name: 'Program5_PrivateAccess',
      path: 'Lab_4/Program5_PrivateAccess/',
      concept: 'Private access modifier',
      description:
        'Demonstrates encapsulation with private fields and methods. Account in privatepkg has a private balance — it can only be modified through public deposit() and read via getBalance(). Private methods are only callable within the class itself.',
      purpose:
        'private is the cornerstone of encapsulation — hide internal state and expose only controlled public methods. This prevents external code from corrupting object data.',
      howItWorks: [
        'Account has private double balance initialized to 1000.0.',
        'public deposit(double) adds to balance if amount is positive.',
        'public getBalance() returns the current balance.',
        'private showSecret() can only be called from within Account.',
        'public accessPrivate() calls showSecret() internally — a public gateway.',
        'main() deposits 500, checks balance (1500), and calls accessPrivate().',
      ],
      files: ['Program5_PrivateAccess.java', 'privatepkg/Account.java'],
      notes: [
        'private: accessible only within the declaring class.',
        'Data hiding — internal state cannot be directly modified from outside.',
        'Public methods act as a controlled interface (getters/setters).',
        'Most restrictive access level — use by default, open up only when needed.',
      ],
      run: 'cd Lab_4/Program5_PrivateAccess\njavac privatepkg/Account.java Program5_PrivateAccess.java\njava Program5_PrivateAccess',
      output: 'Deposited: 500.0\nBalance: 1500.0\nPrivate method accessed within same class',
    },
    {
      name: 'Program6_PackageHierarchy',
      path: 'Lab_4/Program6_PackageHierarchy/',
      concept: 'Nested package hierarchy',
      description:
        'Shows multi-level package nesting: university.department.Professor lives three levels deep. university.College imports and uses Professor. The main class imports College from the university package.',
      purpose:
        'Nested packages create logical hierarchies (company.department.team) that mirror organisational structure and prevent name collisions between different domains.',
      howItWorks: [
        'university/department/Professor.java declares package university.department.',
        'university/College.java declares package university and imports university.department.Professor.',
        'College.runCollege() creates a Professor and calls teach().',
        'Program6_PackageHierarchy.java imports university.College.',
        'main() calls college.runCollege() which delegates to Professor.',
      ],
      files: ['Program6_PackageHierarchy.java', 'university/College.java', 'university/department/Professor.java'],
      notes: [
        'Package names use dot notation: university.department maps to university/department/.',
        'Each level is a subdirectory in the file system.',
        'Import specific classes: import university.department.Professor;',
        'Fully qualified names avoid ambiguity: university.department.Professor p = ...',
      ],
      run: 'cd Lab_4/Program6_PackageHierarchy\njavac university/department/Professor.java university/College.java Program6_PackageHierarchy.java\njava Program6_PackageHierarchy',
      output: 'Professor is teaching in department package\nCollege using department package',
    },
    {
      name: 'Program7_ImportPackage',
      path: 'Lab_4/Program7_ImportPackage/',
      concept: 'Importing utility package',
      description:
        'Creates a reusable tools.Calculator utility class in its own package and imports it into the main program. Demonstrates how utility/helper classes are organised and consumed across a project.',
      purpose:
        'Separating utilities into packages promotes code reuse and clean project structure. Any class can import and use Calculator without reimplementing arithmetic.',
      howItWorks: [
        'tools/Calculator.java defines public add() and multiply() methods.',
        'Program7_ImportPackage.java uses import tools.Calculator;.',
        'A Calculator object is created in main().',
        'calc.add(15, 25) returns 40; calc.multiply(6, 7) returns 42.',
        'Results are printed to the console.',
      ],
      files: ['Program7_ImportPackage.java', 'tools/Calculator.java'],
      notes: [
        'Utility classes group related static or instance helper methods.',
        'import tools.Calculator imports one specific class.',
        'import tools.* imports all public classes from the package (use sparingly).',
        'Keeps main code clean by delegating logic to packaged utilities.',
      ],
      run: 'cd Lab_4/Program7_ImportPackage\njavac tools/Calculator.java Program7_ImportPackage.java\njava Program7_ImportPackage',
      output: 'Sum: 40\nProduct: 42',
    },
    {
      name: 'Program8_StaticImport',
      path: 'Lab_4/Program8_StaticImport/',
      concept: 'Static import',
      description:
        'Uses import static to bring static members into scope without the class prefix. Imports Math.PI and Math.pow from java.lang, and also uses a custom shapes.Circle class from another package.',
      purpose:
        'Static imports reduce verbosity when frequently using static constants or methods (like PI, pow). They are common in math-heavy code and test frameworks (e.g., JUnit assertions).',
      howItWorks: [
        'import static java.lang.Math.PI; brings PI into scope directly.',
        'import static java.lang.Math.pow; allows pow(3, 2) instead of Math.pow(3, 2).',
        'shapes/Circle.java provides a Circle class with getArea().',
        'main() creates Circle(5) and prints its area using the package class.',
        'Also computes PI * pow(3, 2) using statically imported Math members.',
      ],
      files: ['Program8_StaticImport.java', 'shapes/Circle.java'],
      notes: [
        'import static package.Class.member; imports one static member.',
        'Use sparingly — too many static imports harm readability.',
        'Math.PI and pow() can be used without the Math. prefix.',
        'Does not work for instance methods — only static members.',
      ],
      run: 'cd Lab_4/Program8_StaticImport\njavac shapes/Circle.java Program8_StaticImport.java\njava Program8_StaticImport',
      output: 'Circle area via package: 78.54\nArea using static import: 28.27',
    },
  ],
  accessTable: [
    { modifier: 'private', sameClass: true, samePackage: false, subclass: false, otherPackage: false },
    { modifier: 'default', sameClass: true, samePackage: true, subclass: false, otherPackage: false },
    { modifier: 'protected', sameClass: true, samePackage: true, subclass: true, otherPackage: false },
    { modifier: 'public', sameClass: true, samePackage: true, subclass: true, otherPackage: true },
  ],
};
