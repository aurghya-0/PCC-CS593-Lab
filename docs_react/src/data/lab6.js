export const lab6 = {
  id: 6,
  slug: 'lab-6',
  title: 'Lab 6 — Applet Programming',
  description:
    'Applet-style graphics: drawing shapes, colors, fonts, mouse event handling, and lifecycle methods. Uses Swing (JPanel/JFrame) instead of deprecated java.applet.Applet (removed in Java 11).',
  folder: 'Lab_6',
  note: 'All programs open a GUI window. Close the window before running the next program.',
  programs: [
    {
      name: 'Program1_BasicApplet.java',
      path: 'Lab_6/Program1_BasicApplet.java',
      concept: 'Basic applet with lifecycle',
      description:
        'Introduces applet-style programming using Swing. BasicAppletPanel extends JPanel and implements init() and start() lifecycle methods. A JFrame hosts the panel and displays text drawn with Graphics.drawString().',
      purpose:
        'Applets introduced event-driven GUI programming. While the Applet class is deprecated, the same concepts — panels, graphics contexts, and lifecycle — apply to modern Swing and JavaFX applications.',
      howItWorks: [
        'BasicAppletPanel extends JPanel with a status field and lifecycle methods.',
        'init() sets status to "Applet Initialized"; start() sets "Applet Started".',
        'paintComponent(Graphics g) draws text on the panel using drawString().',
        'main() creates a JFrame, adds the panel, sets size 400×200, and shows it.',
        'panel.init() and panel.start() are called manually to simulate applet lifecycle.',
        'repaint() triggers a redraw so the updated status text appears.',
      ],
      notes: [
        'JPanel replaces Applet; JFrame replaces the browser container.',
        'paintComponent() is called automatically when the panel needs redrawing.',
        'Always call super.paintComponent(g) first to clear the background.',
        'Lifecycle: init → start → stop → destroy (mirrors original Applet API).',
      ],
      run: 'cd Lab_6\njavac Program1_BasicApplet.java && java Program1_BasicApplet',
      output: 'GUI window showing "Basic Applet Demo" and current lifecycle status',
    },
    {
      name: 'Program2_DrawLines.java',
      path: 'Lab_6/Program2_DrawLines.java',
      concept: 'Drawing lines',
      description:
        'Draws straight lines on a JPanel using Graphics.drawLine(x1, y1, x2, y2). Creates a rectangle outline from four lines and adds a diagonal line across it, demonstrating coordinate-based drawing.',
      purpose:
        'Line drawing is the foundation of all computer graphics. The Graphics class provides primitives that combine to form complex shapes, charts, and diagrams.',
      howItWorks: [
        'LinePanel extends JPanel and overrides paintComponent(Graphics g).',
        'g.drawLine(20, 20, 300, 20) draws the top horizontal line.',
        'Three more lines form the left, bottom, and right sides of a rectangle.',
        'g.drawLine(20, 20, 300, 200) draws a diagonal from top-left to bottom-right.',
        'main() creates a JFrame(400×300), adds LinePanel, and displays it.',
        'Coordinates are in pixels: (0,0) is top-left; x increases right, y increases down.',
      ],
      notes: [
        'drawLine(x1, y1, x2, y2) draws from point (x1,y1) to (x2,y2).',
        'Graphics coordinates: origin at top-left corner of the component.',
        'Lines are 1 pixel wide by default.',
        'Complex shapes are built by combining multiple drawLine calls.',
      ],
      run: 'javac Program2_DrawLines.java && java Program2_DrawLines',
      output: 'GUI window with a rectangle outline and a diagonal line',
    },
    {
      name: 'Program3_DrawRectangles.java',
      path: 'Lab_6/Program3_DrawRectangles.java',
      concept: 'Drawing rectangles',
      description:
        'Draws rectangles using drawRect() for outlines and fillRect() for solid filled rectangles. Shows the difference between stroked (outline only) and filled shapes.',
      purpose:
        'Rectangles are the most common UI element shape. drawRect and fillRect are used for buttons, panels, backgrounds, bar charts, and layout containers.',
      howItWorks: [
        'RectanglePanel overrides paintComponent() to draw two rectangles.',
        'g.drawRect(30, 30, 150, 80) draws an outlined rectangle at (30,30) with width 150, height 80.',
        'g.fillRect(200, 30, 120, 100) draws a solid filled rectangle.',
        'drawRect only draws the border; fillRect fills the entire area.',
        'main() displays the panel in a 400×300 JFrame window.',
      ],
      notes: [
        'drawRect(x, y, width, height) — outline only.',
        'fillRect(x, y, width, height) — solid fill.',
        '(x, y) is the top-left corner; width and height extend right and down.',
        'Fill colour uses the current Color set by setColor().',
      ],
      run: 'javac Program3_DrawRectangles.java && java Program3_DrawRectangles',
      output: 'GUI window with one outlined and one filled rectangle',
    },
    {
      name: 'Program4_DrawCircles.java',
      path: 'Lab_6/Program4_DrawCircles.java',
      concept: 'Drawing circles and arcs',
      description:
        'Draws circular and oval shapes using drawOval(), fillOval(), and drawArc(). Since Java has no dedicated circle method, a circle is drawn as an oval with equal width and height.',
      purpose:
        'Circles and arcs are essential for pie charts, gauges, avatars, and decorative UI. Understanding ovals and arcs covers all curved drawing in Java 2D.',
      howItWorks: [
        'g.drawOval(50, 50, 100, 100) draws a circle outline (width = height = 100).',
        'g.fillOval(200, 50, 120, 80) draws a filled ellipse (wider than tall).',
        'g.drawArc(50, 180, 100, 80, 0, 180) draws a semicircle arc.',
        'Arc parameters: bounding box (x,y,w,h), start angle, arc angle (degrees).',
        '0° is 3 o\'clock; angles increase clockwise.',
        'main() shows all three shapes in a 400×350 window.',
      ],
      notes: [
        'drawOval/fillOval use a bounding box — equal width/height gives a circle.',
        'drawArc(x, y, w, h, startAngle, arcAngle) — angles in degrees.',
        'startAngle 0 = east (3 o\'clock); 180 = semicircle.',
        'For advanced graphics, java.awt.Graphics2D offers anti-aliasing and transforms.',
      ],
      run: 'javac Program4_DrawCircles.java && java Program4_DrawCircles',
      output: 'GUI window with circle outline, filled oval, and semicircular arc',
    },
    {
      name: 'Program5_Colors.java',
      path: 'Lab_6/Program5_Colors.java',
      concept: 'Using colors',
      description:
        'Demonstrates setting drawing colours with Graphics.setColor(). Draws three filled squares in predefined colours (RED, GREEN, BLUE) and an orange oval using a custom RGB colour new Color(255, 165, 0).',
      purpose:
        'Colour transforms monochrome drawings into meaningful visualisations. setColor() controls both line and fill colour for all subsequent drawing operations until changed.',
      howItWorks: [
        'g.setColor(Color.RED) then g.fillRect(30, 30, 80, 80) draws a red square.',
        'setColor(Color.GREEN) and fillRect draws a green square at x=120.',
        'setColor(Color.BLUE) and fillRect draws a blue square at x=210.',
        'setColor(new Color(255, 165, 0)) creates custom orange (RGB).',
        'fillOval(100, 130, 120, 80) draws an orange ellipse below the squares.',
        'setColor persists until the next setColor call.',
      ],
      notes: [
        'Color constants: RED, GREEN, BLUE, YELLOW, CYAN, MAGENTA, BLACK, WHITE, etc.',
        'new Color(r, g, b) — each component 0–255.',
        'setColor() affects all subsequent draw/fill operations.',
        'new Color(r, g, b, a) adds alpha (transparency) 0–255.',
      ],
      run: 'javac Program5_Colors.java && java Program5_Colors',
      output: 'GUI window with red, green, blue squares and an orange oval',
    },
    {
      name: 'Program6_Fonts.java',
      path: 'Lab_6/Program6_Fonts.java',
      concept: 'Using fonts',
      description:
        'Renders text in different font families, styles, and sizes using Graphics.setFont() and the Font class. Shows Arial Plain 16, Times New Roman Bold 20, and Courier New Italic 18.',
      purpose:
        'Typography is crucial for readable GUIs. The Font class controls typeface, weight, and size — essential for headings, labels, code displays, and styled text.',
      howItWorks: [
        'g.setFont(new Font("Arial", Font.PLAIN, 16)) sets the current font.',
        'g.drawString("Plain Arial 16", 30, 40) renders text at position (30, 40).',
        'Font changed to Times New Roman Bold 20 for the second line.',
        'Font changed to Courier New Italic 18 for the third line.',
        'drawString(x, y) uses the baseline of the text — y is the text bottom, not top.',
        'main() displays all three font styles in a 450×200 window.',
      ],
      notes: [
        'Font(name, style, size) — name is family, style is PLAIN/BOLD/ITALIC/BOLD_ITALIC.',
        'Font.BOLD, Font.ITALIC, Font.PLAIN are style constants.',
        'Size is in points (approximately pixels at standard DPI).',
        'If the font family is not installed, a fallback font is used.',
      ],
      run: 'javac Program6_Fonts.java && java Program6_Fonts',
      output: 'GUI window with three lines of text in different fonts and styles',
    },
    {
      name: 'Program7_EventHandling.java',
      path: 'Lab_6/Program7_EventHandling.java',
      concept: 'Mouse event handling',
      description:
        'Implements MouseListener to respond to mouse clicks. Clicking anywhere on the panel draws a filled circle at the click position and displays the (x, y) coordinates. Demonstrates the event-driven programming model.',
      purpose:
        'GUI applications are event-driven — they respond to user actions rather than running a fixed sequence. Mouse events are the most common interaction in graphical programs.',
      howItWorks: [
        'EventPanel implements MouseListener and registers itself via addMouseListener(this).',
        'mouseClicked(MouseEvent e) captures e.getX() and e.getY() click coordinates.',
        'Stores clickX and clickY, then calls repaint() to trigger a redraw.',
        'paintComponent() draws instructions, then a filled circle at the click point.',
        'Also displays "Clicked at (x, y)" text below the instructions.',
        'Other MouseListener methods (pressed, released, entered, exited) are empty stubs.',
      ],
      notes: [
        'Event-driven: user action → event object → listener method → response.',
        'MouseListener has 5 methods; use adapter class to override only what you need.',
        'repaint() schedules a paintComponent() call — never call paintComponent directly.',
        'getX()/getY() return coordinates relative to the component\'s top-left.',
        'Modern alternative: MouseAdapter or lambda with addMouseListener.',
      ],
      run: 'javac Program7_EventHandling.java && java Program7_EventHandling',
      output: 'GUI window — click anywhere to draw a circle and show coordinates',
    },
    {
      name: 'Program8_AppletLifecycle.java',
      path: 'Lab_6/Program8_AppletLifecycle.java',
      concept: 'Applet lifecycle',
      description:
        'Demonstrates all four applet lifecycle methods: init(), start(), stop(), and destroy(). Each method updates a status message and triggers a repaint. main() calls them sequentially with 1-second delays to show the progression.',
      purpose:
        'Understanding lifecycle is key to resource management in GUI apps — initialise in init(), start animations in start(), pause in stop(), clean up in destroy().',
      howItWorks: [
        'LifecyclePanel has a message field updated by each lifecycle method.',
        'init() → "Applet Initialized"; start() → "Applet Started"; etc.',
        'Each method calls repaint() to update the displayed status text.',
        'main() creates a JFrame and shows the panel.',
        'Calls init(), sleeps 1s, start(), sleeps 1s, stop(), sleeps 1s, destroy().',
        'The user sees the status message change four times over ~3 seconds.',
      ],
      notes: [
        'init() — one-time setup (load resources, initialise variables).',
        'start() — applet becomes active (start timers, resume animations).',
        'stop() — applet becomes inactive (pause timers, stop animations).',
        'destroy() — cleanup (release resources, close connections).',
        'In real applets, the browser called these automatically; here we simulate manually.',
      ],
      run: 'javac Program8_AppletLifecycle.java && java Program8_AppletLifecycle',
      output: 'GUI window cycling through: Initialized → Started → Stopped → Destroyed',
    },
  ],
};
