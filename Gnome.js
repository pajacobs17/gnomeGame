//gnome class
function Gnome(src){
  //generate random numbers to position Gnome
  var posH = randNum(canvas.clientHeight);
  var posW = randNum(canvas.clientWidth);

  //create Gnome
  //86 and 135 are the width and height of the Gnome picture
  var aGnome = new Sprite(game, src, 40, 80);
  aGnome.setSpeed(0);
  aGnome.setPosition(posW, posH);

  return aGnome;
}