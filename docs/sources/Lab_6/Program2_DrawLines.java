// Lab 6 - Program 2: Drawing lines
import javax.swing.*;
import java.awt.*;

class LinePanel extends JPanel {
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.drawLine(20, 20, 300, 20);
        g.drawLine(20, 20, 20, 200);
        g.drawLine(20, 200, 300, 200);
        g.drawLine(300, 20, 300, 200);
        g.drawLine(20, 20, 300, 200);
    }
}

public class Program2_DrawLines {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Draw Lines");
        frame.add(new LinePanel());
        frame.setSize(400, 300);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}
