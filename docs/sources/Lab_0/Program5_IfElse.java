// Lab 0 - Program 5: if, else-if, and else statements
public class Program5_IfElse {
    public static void main(String[] args) {
        int marks = 72;

        if (marks >= 90) {
            System.out.println("Grade: A");
        } else if (marks >= 75) {
            System.out.println("Grade: B");
        } else if (marks >= 60) {
            System.out.println("Grade: C");
        } else {
            System.out.println("Grade: F");
        }

        System.out.println("Marks: " + marks);
    }
}
