// Lab 1 - Program 3: Parameterized constructor
class Circle {
    double radius;

    Circle(double r) {
        radius = r;
        System.out.println("Parameterized constructor called with radius: " + r);
    }

    double area() {
        return Math.PI * radius * radius;
    }
}

public class Program3_ParameterizedConstructor {
    public static void main(String[] args) {
        Circle c = new Circle(7.0);
        System.out.println("Area of circle: " + c.area());
    }
}
