// Lab 6 - Program 1: Basic applet (graphics panel with lifecycle)
import javax.swing.*;
import java.awt.*;

class BasicAppletPanel extends JPanel {
    private String status = "Initializing...";

    public void init() {
        status = "Applet Initialized";
        repaint();
    }

    public void start() {
        status = "Applet Started";
        repaint();
    }

    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.drawString("Basic Applet Demo", 50, 50);
        g.drawString("Status: " + status, 50, 80);
    }
}

public class Program1_BasicApplet {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Basic Applet");
        BasicAppletPanel panel = new BasicAppletPanel();
        frame.add(panel);
        frame.setSize(400, 200);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
        panel.init();
        panel.start();
    }
}
