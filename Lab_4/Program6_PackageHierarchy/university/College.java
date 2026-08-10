package university;

import university.department.Professor;

public class College {
    public void runCollege() {
        Professor prof = new Professor();
        prof.teach();
        System.out.println("College using department package");
    }
}
