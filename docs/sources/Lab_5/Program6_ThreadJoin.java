// Lab 5 - Program 6: Thread join
class Worker extends Thread {
    public void run() {
        System.out.println("Worker thread started");
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        System.out.println("Worker thread finished");
    }
}

public class Program6_ThreadJoin {
    public static void main(String[] args) throws InterruptedException {
        Worker worker = new Worker();
        worker.start();
        System.out.println("Main thread waiting for worker...");
        worker.join();
        System.out.println("Main thread continues after worker completes");
    }
}
