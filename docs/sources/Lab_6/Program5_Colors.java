// Lab 6 - Program 5: Using colors
import javax.swing.*;
import java.awt.*;

class ColorPanel extends JPanel {
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.setColor(Color.RED);
        g.fillRect(30, 30, 80, 80);

        g.setColor(Color.GREEN);
        g.fillRect(120, 30, 80, 80);

        g.setColor(Color.BLUE);
        g.fillRect(210, 30, 80, 80);

        g.setColor(new Color(255, 165, 0));
        g.fillOval(100, 130, 120, 80);
    }
}

public class Program5_Colors {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Colors Demo");
        frame.add(new ColorPanel());
        frame.setSize(400, 300);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}
