# Lab 4 — Creating and Accessing Packages

This lab demonstrates Java packages, importing classes across packages, and all four access modifiers: `public`, `protected`, default (package-private), and `private`.

Each program is in its own subfolder under `Lab_4/` because packages require a matching directory structure.

---

## Program 1 — Basic Package

**Folder:** `Lab_4/Program1_BasicPackage/`

### Program1_BasicPackage.java
**Path:** `Lab_4/Program1_BasicPackage/Program1_BasicPackage.java`  
**Concept:** Importing and using a user-defined package

Imports `mypack.Greeting` and calls `sayHello()` on a new instance.

### mypack/Greeting.java
**Path:** `Lab_4/Program1_BasicPackage/mypack/Greeting.java`  
**Package:** `mypack`

Public class with a `sayHello()` method that prints a greeting message.

### How to Run
```bash
cd Lab_4/Program1_BasicPackage
javac mypack/Greeting.java Program1_BasicPackage.java
java Program1_BasicPackage
```

---

## Program 2 — Public Access

**Folder:** `Lab_4/Program2_PublicAccess/`

### Program2_PublicAccess.java
**Path:** `Lab_4/Program2_PublicAccess/Program2_PublicAccess.java`  
**Concept:** Accessing a `public` class from another package

Imports `accessdemo.PublicClass` and calls its `display()` method.

### accessdemo/PublicClass.java
**Path:** `Lab_4/Program2_PublicAccess/accessdemo/PublicClass.java`  
**Package:** `accessdemo`

A `public` class accessible from any other package that imports it.

### How to Run
```bash
cd Lab_4/Program2_PublicAccess
javac accessdemo/PublicClass.java Program2_PublicAccess.java
java Program2_PublicAccess
```

---

## Program 3 — Protected Access

**Folder:** `Lab_4/Program3_ProtectedAccess/`

### Program3_ProtectedAccess.java
**Path:** `Lab_4/Program3_ProtectedAccess/Program3_ProtectedAccess.java`  
**Concept:** Protected access via subclass in a different package

Imports `protectedpkg.Child` and calls `demo()`, which internally accesses a `protected` method inherited from `Parent`.

### protectedpkg/Parent.java
**Path:** `Lab_4/Program3_ProtectedAccess/protectedpkg/Parent.java`  
**Package:** `protectedpkg`

Contains `protected void showProtected()` — accessible to subclasses and classes in the same package.

### protectedpkg/Child.java
**Path:** `Lab_4/Program3_ProtectedAccess/protectedpkg/Child.java`  
**Package:** `protectedpkg`

Extends `Parent`. Calls `showProtected()` from within the subclass, demonstrating protected access.

### How to Run
```bash
cd Lab_4/Program3_ProtectedAccess
javac protectedpkg/Parent.java protectedpkg/Child.java Program3_ProtectedAccess.java
java Program3_ProtectedAccess
```

---

## Program 4 — Default (Package-Private) Access

**Folder:** `Lab_4/Program4_DefaultAccess/`

### defaultpkg/DefaultDemo.java
**Path:** `Lab_4/Program4_DefaultAccess/defaultpkg/DefaultDemo.java`  
**Package:** `defaultpkg`  
**Concept:** Default access modifier

Contains a package-private class `DefaultClass` (no modifier) that is only accessible within the `defaultpkg` package. `DefaultDemo` (public) creates and uses `DefaultClass` from the same package.

### Classes
| Class | Access | Description |
|-------|--------|-------------|
| `DefaultClass` | package-private | Only visible within `defaultpkg` |
| `DefaultDemo` | public | Main class with `main()` method |

### How to Run
```bash
cd Lab_4/Program4_DefaultAccess
javac defaultpkg/DefaultDemo.java
java defaultpkg.DefaultDemo
```

---

## Program 5 — Private Access

**Folder:** `Lab_4/Program5_PrivateAccess/`

### Program5_PrivateAccess.java
**Path:** `Lab_4/Program5_PrivateAccess/Program5_PrivateAccess.java`  
**Concept:** Accessing public methods that encapsulate private members

Uses `Account` from `privatepkg` — can call public `deposit()` and `getBalance()` but cannot access private `balance` directly.

### privatepkg/Account.java
**Path:** `Lab_4/Program5_PrivateAccess/privatepkg/Account.java`  
**Package:** `privatepkg`

- `private double balance` — not accessible outside the class
- `public void deposit(double)` — controlled access to modify balance
- `public double getBalance()` — controlled read access
- `private void showSecret()` — only callable within the class
- `public void accessPrivate()` — demonstrates internal private method call

### How to Run
```bash
cd Lab_4/Program5_PrivateAccess
javac privatepkg/Account.java Program5_PrivateAccess.java
java Program5_PrivateAccess
```

---

## Program 6 — Package Hierarchy

**Folder:** `Lab_4/Program6_PackageHierarchy/`

### Program6_PackageHierarchy.java
**Path:** `Lab_4/Program6_PackageHierarchy/Program6_PackageHierarchy.java`  
**Concept:** Nested package hierarchy

Imports `university.College` and calls `runCollege()`.

### university/College.java
**Path:** `Lab_4/Program6_PackageHierarchy/university/College.java`  
**Package:** `university`

Imports `university.department.Professor` and uses it within `runCollege()`.

### university/department/Professor.java
**Path:** `Lab_4/Program6_PackageHierarchy/university/department/Professor.java`  
**Package:** `university.department`

Public class with `teach()` method. Demonstrates multi-level package nesting.

### How to Run
```bash
cd Lab_4/Program6_PackageHierarchy
javac university/department/Professor.java university/College.java Program6_PackageHierarchy.java
java Program6_PackageHierarchy
```

---

## Program 7 — Import Package

**Folder:** `Lab_4/Program7_ImportPackage/`

### Program7_ImportPackage.java
**Path:** `Lab_4/Program7_ImportPackage/Program7_ImportPackage.java`  
**Concept:** Importing a utility class from a custom package

Uses `import tools.Calculator` to access `add()` and `multiply()` methods.

### tools/Calculator.java
**Path:** `Lab_4/Program7_ImportPackage/tools/Calculator.java`  
**Package:** `tools`

Public utility class with `add(int, int)` and `multiply(int, int)` methods.

### How to Run
```bash
cd Lab_4/Program7_ImportPackage
javac tools/Calculator.java Program7_ImportPackage.java
java Program7_ImportPackage
```

---

## Program 8 — Static Import

**Folder:** `Lab_4/Program8_StaticImport/`

### Program8_StaticImport.java
**Path:** `Lab_4/Program8_StaticImport/Program8_StaticImport.java`  
**Concept:** Static import and package import combined

Uses `import static java.lang.Math.PI` and `import static java.lang.Math.pow` to use `PI` and `pow` without the `Math.` prefix. Also imports `shapes.Circle`.

### shapes/Circle.java
**Path:** `Lab_4/Program8_StaticImport/shapes/Circle.java`  
**Package:** `shapes`

Circle class with private radius and public `getArea()` method.

### How to Run
```bash
cd Lab_4/Program8_StaticImport
javac shapes/Circle.java Program8_StaticImport.java
java Program8_StaticImport
```

---

## Access Modifier Summary

| Modifier | Same Class | Same Package | Subclass (diff pkg) | Other Package |
|----------|-----------|--------------|---------------------|---------------|
| `private` | Yes | No | No | No |
| default | Yes | Yes | No | No |
| `protected` | Yes | Yes | Yes | No |
| `public` | Yes | Yes | Yes | Yes |
