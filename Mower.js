 function mower(){
        var mower = new Sprite(game, "img/Brandy-Forward.png", 50, 112);
        mower.setSpeed(0);
        mower.setPosition(30, 60);
        mower.checkKeys = function(){
            //temporary function for testing
            if (keysDown[K_UP]){
                this.changeYby(-5);
                 this.setImage("img/Brandy-Back.png")
            }
            
            if (keysDown[K_DOWN]){
                this.changeYby(5);
                 this.setImage("img/Brandy-Forward.png")
            }
            
            if (keysDown[K_LEFT]){
               this.setImage("img/Brandy-Left.png")
                this.changeXby(-5);
            }
            
            if (keysDown[K_RIGHT]){
                this.setImage("img/Brandy-Right.png")
                this.changeXby(5);
            }
        } // end checkKeys
        return mower;
        }