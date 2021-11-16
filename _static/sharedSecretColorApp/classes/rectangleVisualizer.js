//A helper class that draws a rectangle defined by a compound color.
//It is stored as relative points on the screen (0.0 - 1.0). It draws a bounding box
//containing points (x, y) and (x2, y2).
class RectangleVisualizer{
  constructor(x, y, x2, y2, baseColor, assigned_view = views.PUBLIC){
    this.color = new CompoundColor(baseColor);
    this.x = x;
    this.y = y;
    this.x2 = x2;
    this.y2 = y2;
    this.pv = assigned_view;
    this.t = "";
    this.tx = 0.5;
    this.ty = 0.5;
    this.ts = 50;
    this.subtitle = "";
    this.renderedSubtitle = "";
    this.subtitleSize = 75;
    this.drawInverse = false;
  }

  //Draws the rectangle onto the screen.
  draw(view, drawSubtitle = true, subtitleOverride = ""){
    var should_draw = false;

    if(this.drawInverse){
      should_draw = (view != this.pv && view != views.ALL);
    }else{
      should_draw = (this.pv == views.PUBLIC || view == this.pv || view == views.ALL);
    }

    if(!should_draw){
      return;
    }

    let xOrigin = this.u * width;
    let yOrigin = this.v * height;

    noStroke();

    let col = this.color.readRGB();

    fill(col);
    rect(this.x * width, this.y * height, (this.x2 - this.x) * width, (this.y2 - this.y) * height);

    if(this.t != ""){
      textAlign(CENTER);
      textSize(width / this.ts);

      //Convert the color to greyscale, then set the text color according to the brightness.
      let brightness = red(col) * 0.25 + green(col) * 0.5 + blue(col) * 0.25;
      if(brightness >= 255/2.0){
        fill(0);
      }else{
        fill(255);
      }

      var textPosX = fLerp(this.x, this.x2, this.tx) * width;
      var textPosY = fLerp(this.y, this.y2, this.ty) * height;
      text(this.t, textPosX, textPosY);

      var sub = subtitleOverride != "" ? subtitleOverride : this.renderedSubtitle;
      if(sub != "" && drawSubtitle){
        textSize(width / this.subtitleSize);
        text(sub, textPosX, textPosY + (width * 1.2) / this.subtitleSize);
      }
    }

    //reset fill color and stroke
    fill(255);
    stroke(0);
  }

  //Sets it's compound color to combine with that of other RectangleVisualizers
  compoundsWith(rectangles){
    rectangles.forEach((rect) => {
      this.color.addCompoundColor(rect.color);
    })

    return this;
  }

  hasView(assigned_view){
    this.pv = assigned_view;

    return this;
  }

  withText(text, pointx, pointy, sizeOfText = 50){
    this.t = text;
    this.tx = pointx;
    this.ty = pointy;
    this.ts = sizeOfText;
    return this;
  }

  withSubtitle(sub, size = 75){
    this.subtitle = sub;
    this.renderedSubtitle = sub;
    this.subtitleSize = size;
    return this;
  }

  withInverse(inverse){
    this.drawInverse = inverse;
    return this;
  }
}