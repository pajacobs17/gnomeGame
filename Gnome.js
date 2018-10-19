function gnome(src){
          //generate random numbers to position gnome
          var posH = randNum(canvas.clientHeight);
          var posW = randNum(canvas.clientWidth);
          //create gnome
          //86 and 135 are the width and height of the gnome picture
          var aGnome = new Sprite(game, src, 86, 135);
          aGnome.setSpeed(0);
          aGnome.setPosition(posW, posH);
          return aGnome;
        }