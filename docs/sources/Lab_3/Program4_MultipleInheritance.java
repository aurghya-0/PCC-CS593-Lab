// Lab 3 - Program 4: Multiple inheritance through interfaces
interface Engine {
    void startEngine();
}

interface Wheels {
    void rotateWheels();
}

class Car implements Engine, Wheels {
    public void startEngine() {
        System.out.println("Car engine started");
    }

    public void rotateWheels() {
        System.out.println("Car wheels rotating");
    }
}

public class Program4_MultipleInheritance {
    public static void main(String[] args) {
        Car car = new Car();
        car.startEngine();
        car.rotateWheels();
    }
}
