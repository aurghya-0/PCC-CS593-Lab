# Lab 6 — Applet Programming

This lab covers applet-style graphics programming: drawing shapes, using colors and fonts, event handling, and applet lifecycle methods.

> **Note:** These programs use **Swing** (`JPanel`, `JFrame`) instead of the deprecated `java.applet.Applet` class (removed in Java 11). The drawing APIs (`Graphics`, `Color`, `Font`) and lifecycle concepts (`init`, `start`, `stop`, `destroy`) are identical to traditional applets.

All Lab 6 programs open a GUI window. Close the window before running the next program.

---

## Program1_BasicApplet.java

**Path:** `Lab_6/Program1_BasicApplet.java`  
**Concept:** Basic applet with lifecycle methods

### Description
`BasicAppletPanel` extends `JPanel` and implements `init()` and `start()` lifecycle methods. Text is drawn on the panel using `Graphics.drawString()`.

### Classes
| Class | Role |
|-------|------|
| `BasicAppletPanel` | Custom panel with lifecycle methods and `paintComponent()` |
| `Program1_BasicApplet` | Creates `JFrame`, calls `init()` and `start()` |

### How to Run
```bash
cd Lab_6
javac Program1_BasicApplet.java && java Program1_BasicApplet
```

---

## Program2_DrawLines.java

**Path:** `Lab_6/Program2_DrawLines.java`  
**Concept:** Drawing lines

### Description
`LinePanel` draws a rectangle outline and a diagonal line using `Graphics.drawLine(x1, y1, x2, y2)`.

### Key API
- `g.drawLine(20, 20, 300, 20)` — horizontal line
- `g.drawLine(20, 20, 300, 200)` — diagonal line

### How to Run
```bash
javac Program2_DrawLines.java && java Program2_DrawLines
```

---

## Program3_DrawRectangles.java

**Path:** `Lab_6/Program3_DrawRectangles.java`  
**Concept:** Drawing rectangles

### Description
Draws an outlined rectangle with `drawRect()` and a filled rectangle with `fillRect()`.

### Key APIs
- `g.drawRect(x, y, width, height)` — outline only
- `g.fillRect(x, y, width, height)` — filled rectangle

### How to Run
```bash
javac Program3_DrawRectangles.java && java Program3_DrawRectangles
```

---

## Program4_DrawCircles.java

**Path:** `Lab_6/Program4_DrawCircles.java`  
**Concept:** Drawing circles and arcs

### Description
Draws a circle outline, a filled oval, and a semicircular arc.

### Key APIs
- `g.drawOval(x, y, width, height)` — circle/ellipse outline
- `g.fillOval(x, y, width, height)` — filled oval
- `g.drawArc(x, y, width, height, startAngle, arcAngle)` — arc

### How to Run
```bash
javac Program4_DrawCircles.java && java Program4_DrawCircles
```

---

## Program5_Colors.java

**Path:** `Lab_6/Program5_Colors.java`  
**Concept:** Using colors

### Description
Draws three filled squares in `Color.RED`, `Color.GREEN`, and `Color.BLUE`, plus an orange oval using `new Color(255, 165, 0)`.

### Key APIs
- `g.setColor(Color.RED)` — predefined colors
- `g.setColor(new Color(r, g, b))` — custom RGB color
- `g.fillRect()` / `g.fillOval()` — filled shapes

### How to Run
```bash
javac Program5_Colors.java && java Program5_Colors
```

---

## Program6_Fonts.java

**Path:** `Lab_6/Program6_Fonts.java`  
**Concept:** Using fonts

### Description
Draws text in three different font styles: Arial Plain 16, Times New Roman Bold 20, and Courier New Italic 18.

### Key API
- `g.setFont(new Font(name, style, size))`
- Styles: `Font.PLAIN`, `Font.BOLD`, `Font.ITALIC`

### How to Run
```bash
javac Program6_Fonts.java && java Program6_Fonts
```

---

## Program7_EventHandling.java

**Path:** `Lab_6/Program7_EventHandling.java`  
**Concept:** Mouse event handling

### Description
`EventPanel` implements `MouseListener`. Clicking anywhere on the panel draws a filled circle at the click position and displays the coordinates.

### Classes
| Class | Role |
|-------|------|
| `EventPanel` | Implements `MouseListener`, handles `mouseClicked()` |
| `Program7_EventHandling` | Creates frame with event panel |

### Key APIs
- `MouseListener` interface
- `mouseClicked(MouseEvent e)` — `e.getX()`, `e.getY()`
- `repaint()` — triggers redraw

### How to Run
```bash
javac Program7_EventHandling.java && java Program7_EventHandling
```

---

## Program8_AppletLifecycle.java

**Path:** `Lab_6/Program8_AppletLifecycle.java`  
**Concept:** Applet lifecycle demonstration

### Description
`LifecyclePanel` implements all four applet lifecycle methods: `init()`, `start()`, `stop()`, and `destroy()`. The main method calls each in sequence with 1-second delays, updating the displayed status message.

### Lifecycle Methods
| Method | When Called |
|--------|-------------|
| `init()` | Applet is first created |
| `start()` | Applet becomes active |
| `stop()` | Applet is no longer active |
| `destroy()` | Applet is being removed |

### How to Run
```bash
javac Program8_AppletLifecycle.java && java Program8_AppletLifecycle
```

---

## Common Swing Pattern (All Lab 6 Programs)

```java
JFrame frame = new JFrame("Title");
frame.add(new MyPanel());
frame.setSize(400, 300);
frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
frame.setVisible(true);
```

All custom panels override `paintComponent(Graphics g)` and call `super.paintComponent(g)` first to ensure proper rendering.
