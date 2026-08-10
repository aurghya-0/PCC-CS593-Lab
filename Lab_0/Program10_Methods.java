// Lab 0 - Program 10: Methods with parameters and return values
public class Program10_Methods {
    static int add(int a, int b) {
        return a + b;
    }

    static boolean isEven(int n) {
        return n % 2 == 0;
    }

    static void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }

    public static void main(String[] args) {
        greet("Priya");
        System.out.println("Sum: " + add(12, 8));
        System.out.println("Is 7 even? " + isEven(7));
        System.out.println("Is 14 even? " + isEven(14));
    }
}
