let aspect = 1.5;
let min_margin = 20;

//Using the dirty pattern so the canvas doesn't get redrawn every frame if it isn't necessary.
let dirty = true;

//Drawables are drawn in order, i.e. items at the end of the array will be drawn on top of earlier items.
let drawables = [];

let textElements = [];

var otherColor;

let view;

//The canvas
let cnv;

let colorInputDiv;
let clockInputDiv;

let clockView = false;

let otherPrivateNumber = 3;

function setup() {
  document.getElementById("PublicColorPicker").addEventListener("input", function(){
    drawables[0].color.baseColor = color(document.getElementById("PublicColorPicker").value);
    dirty = true;
  }, false);

  document.getElementById("PrivateColorPicker").addEventListener("input", function(){
    drawables[1].color.baseColor = color(document.getElementById("PrivateColorPicker").value);
    dirty = true;
  }, false);

  //Get all of the view selector radio buttons and bind an event that sets the current view to them.
  document.querySelectorAll('input[type=radio][name="views"]').forEach((radio) => {
    radio.addEventListener("change", function(){
      dirty = true;
      view = this.value;
    });
  });
  view = document.querySelector('input[name="views"]:checked').value;

  colorInputDiv = document.getElementById("ColorPickers");
  clockInputDiv = document.getElementById("ClockInputs");

  //Logic for switching between color and clock math mode
  document.getElementById("clockToggle").addEventListener('change', e => {
    clockView = e.target.checked;
    clockInputDiv.style.display = clockView ? "block" : "none";
    dirty = true;
  });

  document.getElementById("PublicClockSize").addEventListener('change', e => {
    dirty = true;
  });

  document.getElementById("PublicBase").addEventListener('change', e => {
    dirty = true;
  });

  document.getElementById("PrivateNumber").addEventListener('change', e => {
    dirty = true;
  });

  cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  cnv.style('z-index', '-1');
  
  background(color(bg_col));

  windowResized();

  otherColor = color(0,0,200);

  //Static color drawables (representing the public, and two private, colors)
  drawables.push(new RectangleVisualizer(0.4, 0.05, 0.6, 0.95, color(document.getElementById("PublicColorPicker").value), views.PUBLIC).withText("Public Color", 0.5, 0.1).withSubtitle("Public Base: %PublicBase%\nClock: %PublicClock%"));
  drawables.push(new RectangleVisualizer(0.1, 0.25, 0.4, 0.6, color(document.getElementById("PrivateColorPicker").value), views.YOURS).withText("Your Corner", 0.5, 0.4, 35).withSubtitle("Your Private Number: %PrivateNumber%"));
  drawables.push(new RectangleVisualizer(0.9, 0.4, 0.6, 0.75, otherColor, views.OTHER).withText("Arnold's Corner", 0.5, 0.6, 35).withSubtitle("Arnold's Private Number: %OtherPrivateNumber%"));

  //Public private colors
  drawables.push(new RectangleVisualizer(0.4, 0.25, 0.8, 0.5).compoundsWith([drawables[0], drawables[1]]).hasView(views.PUBLIC).withText("Your Public/Private Color", 0.5, 0.275).withSubtitle("Your PPN: %PublicBase% ^ %PrivateNumber% (clock %PublicClock%) = %YPPN%"));
  drawables.push(new RectangleVisualizer(0.6, 0.5, 0.2, 0.75).compoundsWith([drawables[0], drawables[2]]).hasView(views.PUBLIC).withText("Arnold's Public/Private Color", 0.5, 1.0 - 0.275).withSubtitle("Arnold's PPN: %PublicBase% ^ %OtherPrivateNumber% (clock %PublicClock%) = %OPPN%"));

  //Shared secret colors
  drawables.push(new RectangleVisualizer(0.2, 0.5, 0.4, 0.6).compoundsWith([drawables[1], drawables[4]]).hasView(views.YOURS).withText("Shared Secret", 0.5, 0.5).withSubtitle("%OPPN% ^ %PrivateNumber% (clock %PublicClock%) = %SharedSecret%"));
  drawables.push(new RectangleVisualizer(0.6, 0.4, 0.8, 0.5).compoundsWith([drawables[2], drawables[3]]).hasView(views.OTHER).withText("Shared Secret", 0.5, 0.6).withSubtitle("%YPPN% ^ %OtherPrivateNumber% (clock %PublicClock%) = %SharedSecret%"));

  //White blocks drawn over the public private colors that overlap the room corners when they should be hidden.
  drawables.push(new RectangleVisualizer(0.15, 0.45, 0.4, 0.6, color(bg_col)).hasView(views.YOURS).withInverse(true));
  drawables.push(new RectangleVisualizer(0.6, 0.4, 0.85, 0.55, color(bg_col)).hasView(views.OTHER).withInverse(true));

  //Corner lines for "Your View"
  drawables.push(new RectangleVisualizer(0.39, 0.6, 0.4, 0.2, color("black"), views.PUBLIC));
  drawables.push(new RectangleVisualizer(0.4, 0.6, 0.075, 0.585, color("black"), views.PUBLIC));

  //Corner lines for "Arnold's View"
  drawables.push(new RectangleVisualizer(0.6, 0.8, 0.61, 0.4, color("black"), views.PUBLIC));
  drawables.push(new RectangleVisualizer(0.6, 0.4, 0.925, 0.415, color("black"), views.PUBLIC));
}

function updateAllDrawableSubtitles(){
  var clock = parseInt(document.getElementById("PublicClockSize").value);
  var publicBase = parseInt(document.getElementById("PublicBase").value);
  var privateNumber = parseInt(document.getElementById("PrivateNumber").value);

  var yppn = Math.pow(publicBase, privateNumber) % clock;
  var oppn = Math.pow(publicBase, otherPrivateNumber) % clock;

  var secret = Math.pow(oppn, privateNumber) % clock;

  var privateNumberString = (view == views.ALL || view == views.YOURS) ? privateNumber.toString() : "?";
  var otherPrivateNumberString = (view == views.ALL || view == views.OTHER) ? otherPrivateNumber.toString() : "?";

  drawables.forEach((drawable) => {
    drawable.renderedSubtitle = drawable.subtitle.replace("%PublicBase%", publicBase.toString())
      .replace("%PublicClock%", clock.toString())
      .replace("%PrivateNumber%", privateNumberString)
      .replace("%OtherPrivateNumber%", otherPrivateNumberString)
      .replace("%YPPN%", yppn.toString())
      .replace("%OPPN%", oppn.toString())
      .replace("%SharedSecret%", secret.toString());
  })
}

//Only updates the canvas if the dirty flag is true.
function draw() {
  if(dirty){
    clear();
    update_view();
    dirty = false;
  }
}

//The actual logic to update the canvas, as to not clutter the draw() function.
function update_view(){
  updateAllDrawableSubtitles();

  drawables.forEach((drawable) => {
    drawable.draw(view, clockView);
  })
}

//The canvas should be redrawn if the screen dimensions change.
function windowResized(){
  dirty = true;

  //Fit the canvas to the given aspect ratio and center it on screen.
  let x = windowWidth > windowHeight - canvas_margin_top ? (windowHeight - canvas_margin_top) * aspect : windowWidth;
  let y = x / aspect;

  resizeCanvas(x, y);
  cnv.position((windowWidth - x) / 2, (windowHeight - y + canvas_margin_top) / 2);
}