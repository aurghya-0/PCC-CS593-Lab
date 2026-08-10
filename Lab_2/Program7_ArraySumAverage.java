// Lab 2 - Program 7: Array sum and average
public class Program7_ArraySumAverage {
    public static void main(String[] args) {
        int[] scores = {78, 85, 92, 88, 95};
        int sum = 0;

        for (int score : scores) {
            sum += score;
        }

        double average = (double) sum / scores.length;
        System.out.println("Sum: " + sum);
        System.out.println("Average: " + average);
    }
}
