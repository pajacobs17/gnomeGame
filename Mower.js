function Mower(src){
	
	var Mower = new Sprite(game, src, 20, 112);
	Mower.setSpeed(0);
	Mower.setPosition(0, 0);

	Mower.checkKeys = function(){
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

	return Mower;
}