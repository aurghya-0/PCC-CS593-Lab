// Lab 5 - Program 4: Thread priorities
class PriorityThread extends Thread {
    PriorityThread(String name) {
        super(name);
    }

    public void run() {
        System.out.println(getName() + " running with priority: " + getPriority());
    }
}

public class Program4_ThreadPriority {
    public static void main(String[] args) {
        PriorityThread t1 = new PriorityThread("Low-Priority");
        PriorityThread t2 = new PriorityThread("High-Priority");

        t1.setPriority(Thread.MIN_PRIORITY);
        t2.setPriority(Thread.MAX_PRIORITY);

        t2.start();
        t1.start();
    }
}
