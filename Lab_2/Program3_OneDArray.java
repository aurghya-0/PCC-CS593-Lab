// Lab 2 - Program 3: One-dimensional array
public class Program3_OneDArray {
    public static void main(String[] args) {
        int[] marks = {85, 90, 78, 92, 88};

        System.out.println("Array elements:");
        for (int i = 0; i < marks.length; i++) {
            System.out.println("marks[" + i + "] = " + marks[i]);
        }

        System.out.println("Using enhanced for loop:");
        for (int mark : marks) {
            System.out.print(mark + " ");
        }
        System.out.println();
    }
}
