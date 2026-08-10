// Lab 1 - Program 10: Method overriding using super keyword
class Person {
    void display() {
        System.out.println("I am a Person");
    }
}

class Student extends Person {
    @Override
    void display() {
        super.display();
        System.out.println("I am a Student");
    }
}

public class Program10_MethodOverriding {
    public static void main(String[] args) {
        Person p = new Student();
        p.display();
    }
}
