package protectedpkg;

public class Child extends Parent {
    public void demo() {
        showProtected();
        System.out.println("Child accessing protected method from subclass");
    }
}
