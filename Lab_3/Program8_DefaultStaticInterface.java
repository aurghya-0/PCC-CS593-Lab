// Lab 3 - Program 8: Default and static methods in interface
interface Vehicle {
    void start();

    default void honk() {
        System.out.println("Vehicle honking!");
    }

    static void showInfo() {
        System.out.println("This is a Vehicle interface");
    }
}

class Motorcycle implements Vehicle {
    public void start() {
        System.out.println("Motorcycle started");
    }
}

public class Program8_DefaultStaticInterface {
    public static void main(String[] args) {
        Vehicle.showInfo();
        Motorcycle bike = new Motorcycle();
        bike.start();
        bike.honk();
    }
}
