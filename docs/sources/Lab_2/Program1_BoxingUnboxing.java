// Lab 2 - Program 1: Autoboxing and unboxing with wrapper classes
public class Program1_BoxingUnboxing {
    public static void main(String[] args) {
        int num = 42;
        Integer obj = num; // autoboxing
        System.out.println("Autoboxed: " + obj);

        int unboxed = obj; // unboxing
        System.out.println("Unboxed: " + unboxed);

        Integer a = Integer.valueOf(100);
        int b = a.intValue();
        System.out.println("valueOf and intValue: " + b);
    }
}
