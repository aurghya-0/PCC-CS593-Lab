// Lab 6 - Program 4: Drawing circles and ovals
import javax.swing.*;
import java.awt.*;

class CirclePanel extends JPanel {
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.drawOval(50, 50, 100, 100);
        g.fillOval(200, 50, 120, 80);
        g.drawArc(50, 180, 100, 80, 0, 180);
    }
}

public class Program4_DrawCircles {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Draw Circles");
        frame.add(new CirclePanel());
        frame.setSize(400, 350);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}
