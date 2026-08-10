import static java.lang.Math.PI;
import static java.lang.Math.pow;
import shapes.Circle;

public class Program8_StaticImport {
    public static void main(String[] args) {
        Circle circle = new Circle(5);
        System.out.println("Circle area via package: " + circle.getArea());

        double area = PI * pow(3, 2);
        System.out.println("Area using static import: " + area);
    }
}
