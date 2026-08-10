// Lab 0 - Program 9: Array declaration, initialization, and traversal
public class Program9_ArraysBasics {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};

        System.out.println("Array elements:");
        for (int i = 0; i < numbers.length; i++) {
            System.out.println("numbers[" + i + "] = " + numbers[i]);
        }

        int sum = 0;
        for (int n : numbers) {
            sum += n;
        }
        System.out.println("Sum: " + sum);
        System.out.println("Average: " + (sum / (double) numbers.length));
    }
}
