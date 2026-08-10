// Lab 0 - Program 8: while and do-while loops
public class Program8_WhileDoWhile {
    public static void main(String[] args) {
        System.out.println("Counting down with while:");
        int count = 5;
        while (count > 0) {
            System.out.print(count + " ");
            count--;
        }
        System.out.println();

        System.out.println("Counting up with do-while:");
        int num = 1;
        do {
            System.out.print(num + " ");
            num++;
        } while (num <= 5);
        System.out.println();
    }
}
