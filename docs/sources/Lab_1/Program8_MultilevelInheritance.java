// Lab 1 - Program 8: Multilevel inheritance
class Grandparent {
    void showGrandparent() {
        System.out.println("I am Grandparent");
    }
}

class Parent extends Grandparent {
    void showParent() {
        System.out.println("I am Parent");
    }
}

class Child extends Parent {
    void showChild() {
        System.out.println("I am Child");
    }
}

public class Program8_MultilevelInheritance {
    public static void main(String[] args) {
        Child c = new Child();
        c.showGrandparent();
        c.showParent();
        c.showChild();
    }
}
