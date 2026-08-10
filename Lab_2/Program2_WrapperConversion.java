// Lab 2 - Program 2: Wrapper class conversion methods
public class Program2_WrapperConversion {
    public static void main(String[] args) {
        String str = "123";
        int num = Integer.parseInt(str);
        System.out.println("String to int: " + num);

        String numStr = Integer.toString(456);
        System.out.println("Int to String: " + numStr);

        double d = Double.parseDouble("3.14");
        System.out.println("String to double: " + d);

        boolean flag = Boolean.parseBoolean("true");
        System.out.println("String to boolean: " + flag);
    }
}
