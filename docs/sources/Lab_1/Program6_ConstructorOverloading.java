// Lab 1 - Program 6: Constructor overloading
class Employee {
    String name;
    int id;
    double salary;

    Employee() {
        name = "Unknown";
        id = 0;
        salary = 0.0;
    }

    Employee(String name, int id) {
        this.name = name;
        this.id = id;
        salary = 0.0;
    }

    Employee(String name, int id, double salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }

    void display() {
        System.out.println("ID: " + id + ", Name: " + name + ", Salary: " + salary);
    }
}

public class Program6_ConstructorOverloading {
    public static void main(String[] args) {
        Employee e1 = new Employee();
        Employee e2 = new Employee("Rahul", 201);
        Employee e3 = new Employee("Sneha", 202, 50000.0);

        e1.display();
        e2.display();
        e3.display();
    }
}
