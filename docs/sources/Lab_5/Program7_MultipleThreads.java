// Lab 5 - Program 7: Multiple threads with sleep
class Printer extends Thread {
    private String message;

    Printer(String message) {
        this.message = message;
    }

    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println(message + " - iteration " + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                return;
            }
        }
    }
}

public class Program7_MultipleThreads {
    public static void main(String[] args) {
        Printer p1 = new Printer("Thread-1");
        Printer p2 = new Printer("Thread-2");
        Printer p3 = new Printer("Thread-3");

        p1.start();
        p2.start();
        p3.start();
    }
}
