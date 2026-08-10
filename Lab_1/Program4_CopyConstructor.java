// Lab 1 - Program 4: Copy constructor
class Book {
    String title;
    String author;

    Book(String title, String author) {
        this.title = title;
        this.author = author;
    }

    Book(Book other) {
        this.title = other.title;
        this.author = other.author;
        System.out.println("Copy constructor called");
    }

    void display() {
        System.out.println("Title: " + title + ", Author: " + author);
    }
}

public class Program4_CopyConstructor {
    public static void main(String[] args) {
        Book b1 = new Book("Java Programming", "Balagurusamy");
        Book b2 = new Book(b1);
        b1.display();
        b2.display();
    }
}
