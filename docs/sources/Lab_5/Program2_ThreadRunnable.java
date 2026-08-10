// Lab 5 - Program 2: Thread by implementing Runnable
class Task implements Runnable {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(Thread.currentThread().getName() + " count: " + i);
        }
    }
}

public class Program2_ThreadRunnable {
    public static void main(String[] args) {
        Task task = new Task();
        Thread t1 = new Thread(task, "Thread-A");
        Thread t2 = new Thread(task, "Thread-B");
        t1.start();
        t2.start();
    }
}
