const views = {
  PUBLIC: "PUBLIC",
  YOURS: "YOURS",
  OTHER: "OTHER",
  ALL: "ALL"
};

//Background color for the canvas
const bg_col = "white";

//Offsets the canvas down by this much. Creates a margin with the UI on the top of the screen.
const canvas_margin_top = 120;

function fLerp(a, b, t) {
  return (1 - t) * a + t * b;
}