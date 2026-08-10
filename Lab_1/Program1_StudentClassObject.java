// Lab 1 - Program 1: Creating a class and objects
class Student {
    String name;
    int rollNo;

    void display() {
        System.out.println("Name: " + name + ", Roll No: " + rollNo);
    }
}

public class Program1_StudentClassObject {
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.name = "Amit";
        s1.rollNo = 101;
        s1.display();

        Student s2 = new Student();
        s2.name = "Priya";
        s2.rollNo = 102;
        s2.display();
    }
}
