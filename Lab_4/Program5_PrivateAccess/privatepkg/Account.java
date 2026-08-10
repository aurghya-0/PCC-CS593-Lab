package privatepkg;

public class Account {
    private double balance = 1000.0;

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: " + amount);
        }
    }

    public double getBalance() {
        return balance;
    }

    private void showSecret() {
        System.out.println("This is a private method");
    }

    public void accessPrivate() {
        showSecret();
        System.out.println("Private method accessed within same class");
    }
}
