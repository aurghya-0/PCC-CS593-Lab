// Lab 3 - Program 1: Basic interface implementation
interface Drawable {
    void draw();
}

class Square implements Drawable {
    public void draw() {
        System.out.println("Drawing a Square");
    }
}

public class Program1_BasicInterface {
    public static void main(String[] args) {
        Drawable d = new Square();
        d.draw();
    }
}
