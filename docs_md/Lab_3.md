# Lab 3 — Developing Interfaces

This lab covers Java interfaces: basic implementation, multiple interfaces, interface inheritance, multiple inheritance via interfaces, and default/static interface methods.

---

## Program1_BasicInterface.java

**Path:** `Lab_3/Program1_BasicInterface.java`  
**Concept:** Basic interface implementation

### Description
Defines a `Drawable` interface with a `draw()` method. `Square` implements it. Demonstrates interface reference holding implementing object.

### Classes / Interfaces
| Name | Type | Role |
|------|------|------|
| `Drawable` | Interface | Declares `draw()` |
| `Square` | Class | Implements `Drawable` |
| `Program1_BasicInterface` | Class | Main class |

### How to Run
```bash
cd Lab_3
javac Program1_BasicInterface.java && java Program1_BasicInterface
```

---

## Program2_MultipleInterfaces.java

**Path:** `Lab_3/Program2_MultipleInterfaces.java`  
**Concept:** Implementing multiple interfaces

### Description
`Duck` implements both `Flyable` and `Swimmable`, demonstrating that a class can implement more than one interface.

### Classes / Interfaces
| Name | Type | Role |
|------|------|------|
| `Flyable` | Interface | Declares `fly()` |
| `Swimmable` | Interface | Declares `swim()` |
| `Duck` | Class | Implements both interfaces |

### How to Run
```bash
javac Program2_MultipleInterfaces.java && java Program2_MultipleInterfaces
```

---

## Program3_InterfaceExtending.java

**Path:** `Lab_3/Program3_InterfaceExtending.java`  
**Concept:** Interface extending another interface

### Description
`Pet` extends `Animal`, inheriting `eat()` and adding `play()`. `Cat` implements `Pet` and must provide both methods.

### Classes / Interfaces
| Name | Type | Role |
|------|------|------|
| `Animal` | Interface | Declares `eat()` |
| `Pet` | Interface | Extends `Animal`, adds `play()` |
| `Cat` | Class | Implements `Pet` |

### How to Run
```bash
javac Program3_InterfaceExtending.java && java Program3_InterfaceExtending
```

---

## Program4_MultipleInheritance.java

**Path:** `Lab_3/Program4_MultipleInheritance.java`  
**Concept:** Multiple inheritance through interfaces

### Description
`Car` implements both `Engine` and `Wheels`. Java does not support multiple class inheritance, but interfaces allow a class to inherit behavior from multiple sources.

### Classes / Interfaces
| Name | Type | Role |
|------|------|------|
| `Engine` | Interface | Declares `startEngine()` |
| `Wheels` | Interface | Declares `rotateWheels()` |
| `Car` | Class | Implements both |

### How to Run
```bash
javac Program4_MultipleInheritance.java && java Program4_MultipleInheritance
```

---

## Program5_BankAccountInterface.java

**Path:** `Lab_3/Program5_BankAccountInterface.java`  
**Concept:** Practical interface — bank account

### Description
`BankAccount` interface defines `deposit`, `withdraw`, and `getBalance`. `SavingsAccount` provides a concrete implementation with balance validation.

### Classes / Interfaces
| Name | Type | Role |
|------|------|------|
| `BankAccount` | Interface | Account operations contract |
| `SavingsAccount` | Class | Concrete implementation with private balance |
| `Program5_BankAccountInterface` | Class | Main class — uses interface reference |

### How to Run
```bash
javac Program5_BankAccountInterface.java && java Program5_BankAccountInterface
```

---

## Program6_ShapeInterface.java

**Path:** `Lab_3/Program6_ShapeInterface.java`  
**Concept:** Interface with multiple implementations

### Description
`Shape` interface declares `area()` and `perimeter()`. `Rectangle` and `Circle` each provide their own formulas.

### Classes / Interfaces
| Name | Type | Role |
|------|------|------|
| `Shape` | Interface | `area()`, `perimeter()` |
| `Rectangle` | Class | Implements `Shape` |
| `Circle` | Class | Implements `Shape` |

### How to Run
```bash
javac Program6_ShapeInterface.java && java Program6_ShapeInterface
```

---

## Program7_PrintableInterface.java

**Path:** `Lab_3/Program7_PrintableInterface.java`  
**Concept:** Polymorphism via interface

### Description
`Printable` interface with `print()` method. `Document` and `Photo` implement it differently, demonstrating interface-based polymorphism.

### Classes / Interfaces
| Name | Type | Role |
|------|------|------|
| `Printable` | Interface | Declares `print()` |
| `Document` | Class | Prints text content |
| `Photo` | Class | Prints photo filename |

### How to Run
```bash
javac Program7_PrintableInterface.java && java Program7_PrintableInterface
```

---

## Program8_DefaultStaticInterface.java

**Path:** `Lab_3/Program8_DefaultStaticInterface.java`  
**Concept:** Default and static methods in interfaces

### Description
`Vehicle` interface includes a `default` method `honk()` (with default implementation) and a `static` method `showInfo()`. `Motorcycle` only needs to implement `start()`.

### Key Concepts
- `default` methods in interfaces (Java 8+)
- `static` methods in interfaces
- Implementing class inherits default behavior

### How to Run
```bash
javac Program8_DefaultStaticInterface.java && java Program8_DefaultStaticInterface
```
