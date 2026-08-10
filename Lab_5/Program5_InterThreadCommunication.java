// Lab 5 - Program 5: Inter-thread communication using wait and notify
class Message {
    private String content;
    private boolean available = false;

    synchronized void produce(String msg) {
        while (available) {
            try {
                wait();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
        content = msg;
        available = true;
        System.out.println("Produced: " + msg);
        notify();
    }

    synchronized String consume() {
        while (!available) {
            try {
                wait();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
        available = false;
        System.out.println("Consumed: " + content);
        notify();
        return content;
    }
}

public class Program5_InterThreadCommunication {
    public static void main(String[] args) throws InterruptedException {
        Message message = new Message();

        Thread producer = new Thread(() -> {
            message.produce("Hello from Producer");
        });

        Thread consumer = new Thread(() -> {
            message.consume();
        });

        producer.start();
        consumer.start();
        producer.join();
        consumer.join();
    }
}
