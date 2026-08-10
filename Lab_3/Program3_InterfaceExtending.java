// Lab 3 - Program 3: Interface extending another interface
interface Animal {
    void eat();
}

interface Pet extends Animal {
    void play();
}

class Cat implements Pet {
    public void eat() {
        System.out.println("Cat is eating");
    }

    public void play() {
        System.out.println("Cat is playing");
    }
}

public class Program3_InterfaceExtending {
    public static void main(String[] args) {
        Cat cat = new Cat();
        cat.eat();
        cat.play();
    }
}
