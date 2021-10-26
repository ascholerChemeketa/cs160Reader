//A color that is a mix of other colors. When read, it averages all of the colors that make it up,
//Which can be other compound colors that reference other colors, and so on.
//This makes for a more accurate "paint mixing" simulation than simply overlaying semi-transparent
//shapes.
class CompoundColor{
  //If a baseColor isn't specified, it defaults to black and will not include it's color in readRGB.
  constructor(baseColor){
    this.baseColor = color(0);
    this.useBase = false;
    this.compoundColors = [];

    if(baseColor !== undefined){
      this.baseColor = baseColor;
      this.useBase = true;
    }
  }

  //Sets the compound color array
  setCompoundColors(compoundColors){
    this.compoundColors = compoundColors;
  }

  //Adds a compound color to our compound color array.
  addCompoundColor(color){
    this.compoundColors.push(color);
  }

  //This method uses an array (the "callTree") to detect self-refrencing loops between compound colors.
  //It's fully possible for a compound color to reference itself, which would cause an infinite loop without this check!
  getFullColorList(callTree){
    let colorList = [];

    if(this.useBase){
      colorList.push(this.baseColor);
    }

    this.compoundColors.forEach((compoundColor) => {
      //If the callTree includes this compound color, it means there is a self-refrencing loop.
      //This compound color is then ignored.
      if(!callTree.includes(compoundColor)){
        colorList = colorList.concat(compoundColor.getFullColorList(callTree.concat([compoundColor])))
      }
    })

    return colorList;
  }

  //Reads the actual color of the compound color.
  readRGB(){
    let colorList = this.getFullColorList([this]);

    var r = 0, g = 0, b = 0;
    
    colorList.forEach((col) => {
      r += red(col);
      g += green(col);
      b += blue(col);
    })

    let divisor = Math.max(1, colorList.length);

    r /= divisor;
    g /= divisor;
    b /= divisor;

    return color(r, g, b);
  }
}