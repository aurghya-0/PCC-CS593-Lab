// Lab 6 - Program 6: Using fonts
import javax.swing.*;
import java.awt.*;

class FontPanel extends JPanel {
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.setFont(new Font("Arial", Font.PLAIN, 16));
        g.drawString("Plain Arial 16", 30, 40);

        g.setFont(new Font("Times New Roman", Font.BOLD, 20));
        g.drawString("Bold Times New Roman 20", 30, 80);

        g.setFont(new Font("Courier New", Font.ITALIC, 18));
        g.drawString("Italic Courier New 18", 30, 120);
    }
}

public class Program6_Fonts {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Fonts Demo");
        frame.add(new FontPanel());
        frame.setSize(450, 200);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}
