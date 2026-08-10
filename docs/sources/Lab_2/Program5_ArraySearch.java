// Lab 2 - Program 5: Linear search in array
public class Program5_ArraySearch {
    public static int linearSearch(int[] arr, int key) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == key) {
                return i;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        int[] numbers = {10, 25, 30, 45, 50, 65};
        int key = 45;
        int result = linearSearch(numbers, key);

        if (result != -1) {
            System.out.println("Element " + key + " found at index " + result);
        } else {
            System.out.println("Element " + key + " not found");
        }
    }
}
