// Lab 1 - Program 5: Method overloading
class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }

    double add(double a, double b) {
        return a + b;
    }
}

public class Program5_MethodOverloading {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println("Sum (2 int): " + calc.add(10, 20));
        System.out.println("Sum (3 int): " + calc.add(10, 20, 30));
        System.out.println("Sum (2 double): " + calc.add(10.5, 20.5));
    }
}
