import privatepkg.Account;

public class Program5_PrivateAccess {
    public static void main(String[] args) {
        Account acc = new Account();
        acc.deposit(500);
        System.out.println("Balance: " + acc.getBalance());
        acc.accessPrivate();
    }
}
