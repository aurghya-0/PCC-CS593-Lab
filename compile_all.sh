#!/bin/bash
# Compile and run all lab programs
ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

compile_lab1() {
    echo "=== Lab 1 ==="
    for f in Lab_1/Program*.java; do
        echo "Compiling $f..."
        javac "$f" && java -cp Lab_1 "$(basename "$f" .java)"
    done
}

compile_lab2() {
    echo "=== Lab 2 ==="
    for f in Lab_2/Program*.java; do
        echo "Compiling $f..."
        javac "$f" && java -cp Lab_2 "$(basename "$f" .java)"
    done
}

compile_lab3() {
    echo "=== Lab 3 ==="
    for f in Lab_3/Program*.java; do
        echo "Compiling $f..."
        javac "$f" && java -cp Lab_3 "$(basename "$f" .java)"
    done
}

compile_lab4() {
    echo "=== Lab 4 ==="
    for dir in Lab_4/Program*/; do
        echo "Compiling $dir..."
        (cd "$dir" && javac $(find . -name "*.java") && java "$(basename "$dir")")
    done
}

compile_lab5() {
    echo "=== Lab 5 ==="
    for f in Lab_5/Program*.java; do
        echo "Compiling $f..."
        javac "$f" && java -cp Lab_5 "$(basename "$f" .java)"
    done
}

compile_lab6() {
    echo "=== Lab 6 (GUI - close windows manually) ==="
    for f in Lab_6/Program*.java; do
        echo "Compiling $f..."
        javac "$f" && echo "Run: java -cp Lab_6 $(basename "$f" .java)"
    done
}

case "${1:-all}" in
    1) compile_lab1 ;;
    2) compile_lab2 ;;
    3) compile_lab3 ;;
    4) compile_lab4 ;;
    5) compile_lab5 ;;
    6) compile_lab6 ;;
    all)
        compile_lab1
        compile_lab2
        compile_lab3
        compile_lab4
        compile_lab5
        compile_lab6
        ;;
    *) echo "Usage: $0 [1|2|3|4|5|6|all]" ;;
esac
