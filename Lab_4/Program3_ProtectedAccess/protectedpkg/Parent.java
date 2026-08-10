package protectedpkg;

public class Parent {
    protected void showProtected() {
        System.out.println("Protected method accessed from subclass in another package");
    }
}
