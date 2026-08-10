// Lab 6 - Program 8: Applet lifecycle demonstration
import javax.swing.*;
import java.awt.*;

class LifecyclePanel extends JPanel {
    private String message = "init() called";

    public void init() {
        message = "init() - Applet initialized";
        repaint();
    }

    public void start() {
        message = "start() - Applet started";
        repaint();
    }

    public void stop() {
        message = "stop() - Applet stopped";
        repaint();
    }

    public void destroy() {
        message = "destroy() - Applet destroyed";
        repaint();
    }

    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.setFont(new Font("Arial", Font.BOLD, 16));
        g.drawString("Applet Lifecycle Demo", 60, 50);
        g.drawString(message, 60, 100);
    }
}

public class Program8_AppletLifecycle {
    public static void main(String[] args) throws InterruptedException {
        JFrame frame = new JFrame("Applet Lifecycle");
        LifecyclePanel panel = new LifecyclePanel();
        frame.add(panel);
        frame.setSize(400, 200);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);

        panel.init();
        Thread.sleep(1000);
        panel.start();
        Thread.sleep(1000);
        panel.stop();
        Thread.sleep(1000);
        panel.destroy();
    }
}
