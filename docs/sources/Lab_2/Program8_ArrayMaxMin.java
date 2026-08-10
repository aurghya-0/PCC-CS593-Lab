// Lab 2 - Program 8: Find maximum and minimum in array
public class Program8_ArrayMaxMin {
    public static void main(String[] args) {
        int[] arr = {45, 12, 78, 34, 89, 23};
        int max = arr[0];
        int min = arr[0];

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
            if (arr[i] < min) {
                min = arr[i];
            }
        }

        System.out.println("Maximum: " + max);
        System.out.println("Minimum: " + min);
    }
}
