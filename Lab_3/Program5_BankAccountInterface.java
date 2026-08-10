// Lab 3 - Program 5: Bank account interface
interface BankAccount {
    void deposit(double amount);
    void withdraw(double amount);
    double getBalance();
}

class SavingsAccount implements BankAccount {
    private double balance = 0;

    public void deposit(double amount) {
        balance += amount;
        System.out.println("Deposited: " + amount);
    }

    public void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: " + amount);
        } else {
            System.out.println("Insufficient balance");
        }
    }

    public double getBalance() {
        return balance;
    }
}

public class Program5_BankAccountInterface {
    public static void main(String[] args) {
        BankAccount account = new SavingsAccount();
        account.deposit(5000);
        account.withdraw(1500);
        System.out.println("Balance: " + account.getBalance());
    }
}
