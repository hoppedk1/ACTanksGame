var canvas = document.getElementById("GameScene");
var ctx = canvas.getContext("2d");

class Walls {

    constructor(Xpos,Ypos,Width,Height,Colour,Direction){

        this.Xpos = Xpos;
        this.Ypos = Ypos;
        this.Width = Width;
        this.Height = Height;
        this.Colour = Colour;
        this.Direction = Direction
    }

    DrawWall(){
        ctx.beginPath();
        ctx.rect(this.Xpos, this.Ypos, this.Width, this.Height);
        ctx.fillStyle = this.Colour;
        ctx.fill();
        ctx.closePath();

    }
}


var Wall1 = new Walls(0,25,50,2,"Black","Vandret")
var Wall2 = new Walls(50,25,2,25,"Black","Lodret")
var Wall3 = new Walls(50,50,50,2,"Black","Vandret")
var Wall4 = new Walls(50,75,50,2,"Black","Vandret")
var Wall5 = new Walls(100,75,50,2,"Black","Vandret")
var Wall6 = new Walls(100,0,2,25,"Black","Lodret")
var Wall7 = new Walls(100,25,50,2,"Black","Vandret")
var Wall8 = new Walls(150,25,50,2,"Black","Vandret")
var Wall9 = new Walls(250,125,2,25,"Black","Lodret")
var Wall10 = new Walls(250,25,2,75,"Black","Lodret")
var Wall11 = new Walls(150,50,50,2,"Black","Vandret")
var Wall12 = new Walls(150,125,100,2,"Black","Vandret")
var Wall13 = new Walls(50,100,2,25,"Black","Lodret")
var Wall14 = new Walls(50,125,50,2,"Black","Vandret")
var Wall15 = new Walls(200,50,2,50,"Black","Lodret")

//Bane border
var Wall16 = new Walls(0,-2,300,2,"Black","Vandret")
var Wall17 = new Walls(300,0,2,150,"Black","Lodret")
var Wall18 = new Walls(-2,0,2,150,"Black","Lodret")
var Wall19 = new Walls(0,150,300,2,"Black","Vandret")




var WallsArr = [Wall1,Wall2,Wall3,Wall4,Wall5,Wall6,Wall7,Wall8,Wall9,Wall10,Wall11,Wall12,Wall13,Wall14,Wall15,Wall16,Wall17,Wall18,Wall19];