// Lab 6 - Program 7: Basic event handling (mouse click)
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

class EventPanel extends JPanel implements MouseListener {
    private int clickX = -1;
    private int clickY = -1;

    EventPanel() {
        addMouseListener(this);
    }

    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.drawString("Click anywhere on this panel", 50, 30);
        if (clickX >= 0) {
            g.fillOval(clickX - 15, clickY - 15, 30, 30);
            g.drawString("Clicked at (" + clickX + ", " + clickY + ")", 50, 60);
        }
    }

    public void mouseClicked(MouseEvent e) {
        clickX = e.getX();
        clickY = e.getY();
        repaint();
    }

    public void mousePressed(MouseEvent e) {}
    public void mouseReleased(MouseEvent e) {}
    public void mouseEntered(MouseEvent e) {}
    public void mouseExited(MouseEvent e) {}
}

public class Program7_EventHandling {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Event Handling");
        frame.add(new EventPanel());
        frame.setSize(400, 300);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}
