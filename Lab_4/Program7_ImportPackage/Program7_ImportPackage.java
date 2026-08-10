import tools.Calculator;

public class Program7_ImportPackage {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println("Sum: " + calc.add(15, 25));
        System.out.println("Product: " + calc.multiply(6, 7));
    }
}
