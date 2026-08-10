// Lab 3 - Program 7: Printable interface
interface Printable {
    void print();
}

class Document implements Printable {
    String content;

    Document(String content) {
        this.content = content;
    }

    public void print() {
        System.out.println("Printing: " + content);
    }
}

class Photo implements Printable {
    String filename;

    Photo(String filename) {
        this.filename = filename;
    }

    public void print() {
        System.out.println("Printing photo: " + filename);
    }
}

public class Program7_PrintableInterface {
    public static void main(String[] args) {
        Printable doc = new Document("Lab Report");
        Printable photo = new Photo("vacation.jpg");

        doc.print();
        photo.print();
    }
}
