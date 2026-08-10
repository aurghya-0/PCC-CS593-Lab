package defaultpkg;

class DefaultClass {
    void show() {
        System.out.println("Default (package-private) access within same package");
    }
}

public class DefaultDemo {
    public static void main(String[] args) {
        DefaultClass obj = new DefaultClass();
        obj.show();
    }
}
