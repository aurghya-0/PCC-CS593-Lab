// Lab 1 - Program 2: Default constructor
class Rectangle {
    int length, width;

    Rectangle() {
        length = 10;
        width = 5;
        System.out.println("Default constructor called");
    }

    int area() {
        return length * width;
    }
}

public class Program2_DefaultConstructor {
    public static void main(String[] args) {
        Rectangle r = new Rectangle();
        System.out.println("Area: " + r.area());
    }
}
