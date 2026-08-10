# Lab 1 — Class, Constructor, Overloading, Inheritance, and Overriding

This lab covers fundamental Object-Oriented Programming concepts in Java: creating classes and objects, different types of constructors, method/constructor overloading, inheritance types, and method overriding.

---

## Program1_StudentClassObject.java

**Path:** `Lab_1/Program1_StudentClassObject.java`  
**Concept:** Class and Object creation

### Description
Demonstrates how to define a class (`Student`) with instance variables and a method, then create multiple objects and assign values to their fields.

### Classes
| Class | Role |
|-------|------|
| `Student` | Model class with `name`, `rollNo`, and `display()` |
| `Program1_StudentClassObject` | Main class — creates two `Student` objects |

### How to Run
```bash
cd Lab_1
javac Program1_StudentClassObject.java
java Program1_StudentClassObject
```

### Expected Output
Prints name and roll number for two student objects.

---

## Program2_DefaultConstructor.java

**Path:** `Lab_1/Program2_DefaultConstructor.java`  
**Concept:** Default (no-argument) constructor

### Description
A `Rectangle` class uses a default constructor to initialize `length` and `width` with fixed values when no arguments are passed.

### Classes
| Class | Role |
|-------|------|
| `Rectangle` | Has default constructor setting length=10, width=5 |
| `Program2_DefaultConstructor` | Main class — creates `Rectangle` and prints area |

### How to Run
```bash
javac Program2_DefaultConstructor.java && java Program2_DefaultConstructor
```

---

## Program3_ParameterizedConstructor.java

**Path:** `Lab_1/Program3_ParameterizedConstructor.java`  
**Concept:** Parameterized constructor

### Description
A `Circle` class accepts radius via its constructor and uses it to compute area.

### Classes
| Class | Role |
|-------|------|
| `Circle` | Parameterized constructor takes `double radius` |
| `Program3_ParameterizedConstructor` | Main class |

### How to Run
```bash
javac Program3_ParameterizedConstructor.java && java Program3_ParameterizedConstructor
```

---

## Program4_CopyConstructor.java

**Path:** `Lab_1/Program4_CopyConstructor.java`  
**Concept:** Copy constructor

### Description
A `Book` class defines a copy constructor that creates a new object by copying fields from an existing `Book` instance.

### Classes
| Class | Role |
|-------|------|
| `Book` | Standard constructor + copy constructor `Book(Book other)` |
| `Program4_CopyConstructor` | Main class — creates original and copied book |

### How to Run
```bash
javac Program4_CopyConstructor.java && java Program4_CopyConstructor
```

---

## Program5_MethodOverloading.java

**Path:** `Lab_1/Program5_MethodOverloading.java`  
**Concept:** Method overloading

### Description
A `Calculator` class defines three overloaded `add()` methods — two `int` parameters, three `int` parameters, and two `double` parameters.

### Classes
| Class | Role |
|-------|------|
| `Calculator` | Overloaded `add()` methods |
| `Program5_MethodOverloading` | Main class — calls all three overloads |

### How to Run
```bash
javac Program5_MethodOverloading.java && java Program5_MethodOverloading
```

---

## Program6_ConstructorOverloading.java

**Path:** `Lab_1/Program6_ConstructorOverloading.java`  
**Concept:** Constructor overloading

### Description
An `Employee` class provides three constructors: no-args, name+id, and name+id+salary.

### Classes
| Class | Role |
|-------|------|
| `Employee` | Three overloaded constructors |
| `Program6_ConstructorOverloading` | Main class — creates three employees |

### How to Run
```bash
javac Program6_ConstructorOverloading.java && java Program6_ConstructorOverloading
```

---

## Program7_SingleInheritance.java

**Path:** `Lab_1/Program7_SingleInheritance.java`  
**Concept:** Single inheritance

### Description
`Dog` extends `Animal`, inheriting the `eat()` method while adding its own `bark()` method.

### Classes
| Class | Role |
|-------|------|
| `Animal` | Parent class with `eat()` |
| `Dog` | Child class extending `Animal`, adds `bark()` |
| `Program7_SingleInheritance` | Main class |

### How to Run
```bash
javac Program7_SingleInheritance.java && java Program7_SingleInheritance
```

---

## Program8_MultilevelInheritance.java

**Path:** `Lab_1/Program8_MultilevelInheritance.java`  
**Concept:** Multilevel inheritance

### Description
Three-level chain: `Grandparent` → `Parent` → `Child`. The child can access methods from all ancestor levels.

### Classes
| Class | Role |
|-------|------|
| `Grandparent` | Top-level class |
| `Parent` | Extends `Grandparent` |
| `Child` | Extends `Parent` |
| `Program8_MultilevelInheritance` | Main class |

### How to Run
```bash
javac Program8_MultilevelInheritance.java && java Program8_MultilevelInheritance
```

---

## Program9_HierarchicalInheritance.java

**Path:** `Lab_1/Program9_HierarchicalInheritance.java`  
**Concept:** Hierarchical inheritance

### Description
One parent class `Vehicle` is extended by two child classes `Car` and `Bike`, each adding its own method.

### Classes
| Class | Role |
|-------|------|
| `Vehicle` | Parent with `start()` |
| `Car` | Child with `drive()` |
| `Bike` | Child with `ride()` |
| `Program9_HierarchicalInheritance` | Main class |

### How to Run
```bash
javac Program9_HierarchicalInheritance.java && java Program9_HierarchicalInheritance
```

---

## Program10_MethodOverriding.java

**Path:** `Lab_1/Program10_MethodOverriding.java`  
**Concept:** Method overriding with `super`

### Description
`Student` overrides `Person.display()` and calls the parent version using `super.display()` before printing its own message. Demonstrates runtime polymorphism.

### Classes
| Class | Role |
|-------|------|
| `Person` | Parent with `display()` |
| `Student` | Child overriding `display()`, uses `super` |
| `Program10_MethodOverriding` | Main class — `Person p = new Student()` |

### How to Run
```bash
javac Program10_MethodOverriding.java && java Program10_MethodOverriding
```

### Key Concepts Demonstrated
- `@Override` annotation
- `super` keyword
- Runtime polymorphism (parent reference, child object)
