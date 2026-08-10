// Lab 6 - Program 3: Drawing rectangles
import javax.swing.*;
import java.awt.*;

class RectanglePanel extends JPanel {
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.drawRect(30, 30, 150, 80);
        g.fillRect(200, 30, 120, 100);
    }
}

public class Program3_DrawRectangles {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Draw Rectangles");
        frame.add(new RectanglePanel());
        frame.setSize(400, 300);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}
