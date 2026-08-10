# PCC-CS593 — Object Oriented Programming Lab (Java)

Java lab programs for **B.Tech CSE Semester V**, based on the MAKAUT West Bengal OOP Lab syllabus. The repository contains **60 programs** organized across **7 lab modules** (including a Java basics primer).

**Live documentation:** [aurghya-0.github.io/PCC-CS593-Lab](https://aurghya-0.github.io/PCC-CS593-Lab/)

## Syllabus Coverage

| Lab | Topic | Programs |
|-----|-------|----------|
| Lab 0 | Java Syntax Basics | 10 |
| Lab 1 | Class, Constructor, Overloading, Inheritance, Overriding | 10 |
| Lab 2 | Wrapper Class and Arrays | 8 |
| Lab 3 | Developing Interfaces | 8 |
| Lab 4 | Creating and Accessing Packages | 8 |
| Lab 5 | Multithreaded Programming | 8 |
| Lab 6 | Applet Programming (Swing-based) | 8 |

> Full interactive documentation is in the [`docs/`](docs/) folder (built from [`docs_react/`](docs_react/)). Markdown source docs are in [`docs_md/`](docs_md/).

## Prerequisites

- **Java JDK 8 or higher** (JDK 11+ recommended)
- Terminal / command line access

Verify installation:

```bash
java -version
javac -version
```

## Project Structure

```
PCC-CS593/
├── Lab_0/                  # Java syntax basics
├── Lab_1/                  # OOP fundamentals
├── Lab_2/                  # Wrapper classes & arrays
├── Lab_3/                  # Interfaces
├── Lab_4/                  # Packages (subfolder per program)
├── Lab_5/                  # Multithreading
├── Lab_6/                  # Graphics & events (Swing)
├── docs/                   # Built React site (GitHub Pages)
├── docs_md/                # Markdown documentation source
├── docs_react/             # React docs source code
├── compile_all.sh          # Batch compile & run script
├── .gitignore
└── README.md
```

## Running Programs

### Lab 0 (Java basics)

```bash
cd Lab_0
javac Program1_HelloWorld.java
java Program1_HelloWorld
```

### Lab 1, 2, 3, 5 (single-file programs)

```bash
cd Lab_1
javac Program1_StudentClassObject.java
java Program1_StudentClassObject
```

### Lab 4 (package-based programs)

Each program lives in its own subfolder. Compile from inside that folder:

```bash
cd Lab_4/Program1_BasicPackage
javac mypack/Greeting.java Program1_BasicPackage.java
java Program1_BasicPackage
```

### Lab 6 (GUI programs)

Opens a window — close it before running the next program:

```bash
cd Lab_6
javac Program2_DrawLines.java
java Program2_DrawLines
```

### Batch script

```bash
chmod +x compile_all.sh
./compile_all.sh        # compile & run all labs (0 through 6)
./compile_all.sh 0      # Lab 0 only
./compile_all.sh 3      # Lab 3 only
```

## Documentation

### Interactive site (GitHub Pages)

The `docs/` folder contains the built React documentation site.

**Build and publish:**

```bash
cd docs_react
npm install
npm run build          # outputs to ../docs/ (includes source files)
git add docs/
git commit -m "Update docs site"
git push
```

Each program on the docs site has a **View Source Code** button to read the Java files in the browser.

**Enable GitHub Pages:** Settings → Pages → Source: branch `main`, folder **`/docs`**

### Markdown docs

Original markdown documentation is in [`docs_md/`](docs_md/):

- [Documentation Index](docs_md/README.md)
- [Lab 0](docs_md/Lab_0.md) · [Lab 1](docs_md/Lab_1.md) · [Lab 2](docs_md/Lab_2.md) · [Lab 3](docs_md/Lab_3.md)
- [Lab 4](docs_md/Lab_4.md) · [Lab 5](docs_md/Lab_5.md) · [Lab 6](docs_md/Lab_6.md)
- [Utilities](docs_md/UTILITIES.md)

See [`docs_react/README.md`](docs_react/README.md) for development instructions.

## Notes

- **Lab 6** uses `JPanel` and `JFrame` (Swing) instead of the deprecated `java.applet.Applet` class, which was removed in Java 11. The concepts — drawing, colors, fonts, events, and lifecycle — match the syllabus.
- **Lab 4** programs demonstrate access modifiers across package boundaries; always compile from the program's root directory so package paths resolve correctly.

## Course Information

- **Course:** Object Oriented Programming Lab (PCC-CS593)
- **University:** Maulana Abul Kalam Azad University of Technology, West Bengal
- **Branch:** B.Tech Computer Science & Engineering
- **Semester:** V
- **Language:** Java
