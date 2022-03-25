var BlueTankPicture = new Image();
BlueTankPicture.src = "BlueTank.png";

var RedTankPicture = new Image();
RedTankPicture.src = "RedTank.png";

var GreenTankPicture = new Image();
GreenTankPicture.src = "GreenTank.png";

var YellowTankPicture = new Image();
YellowTankPicture.src = "YellowTank.png";

var LGBTTank = new Image();
LGBTTank.src = "LGBTTank.png";


class Player{

    constructor(PlayerXPosition,PlayerYPosition, PlayerWidth,PlayerHeight,PlayerColour){

        this.PlayerXPosition = PlayerXPosition;
        this.PlayerYPosition = PlayerYPosition;
        this.PlayerWidth = PlayerWidth;
        this.PlayerHeight = PlayerHeight;
        this.PlayerColour = PlayerColour;




    }


    DrawPlayer(){

        var c = document.getElementById("GameScene")
        var ctx = c.getContext("2d");

        //ctx.fillRect(this.PlayerXPosition+XSpeed, this.PlayerYPosition+YSpeed, this.PlayerWidth, this.PlayerHeight);
        debugger
        ctx.drawImage(this.PlayerColour, this.PlayerXPosition+XSpeed, this.PlayerYPosition+YSpeed, this.PlayerWidth, this.PlayerHeight);


    }

}


var Player1 = new Player(0,0,20,30,BlueTankPicture)
var Player2 = new Player(0,100,20,30,RedTankPicture)
var Player3 = new Player(0,150,20,30,GreenTankPicture)
var Player4 = new Player(0,50,20,30,YellowTankPicture)
var Player5 = new Player(0,200,20,30,LGBTTank)



var YSpeed = 0;
var XSpeed = 0;


window.onload = function () {
    setInterval(Gamedrawer, 1000/60);
};

function Gamedrawer(){
    var c = document.getElementById("GameScene")
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 10000, 10000);

    Player1.DrawPlayer()
    Player2.DrawPlayer()
    Player3.DrawPlayer()
    Player4.DrawPlayer()
    Player5.DrawPlayer()

}



    document.addEventListener('keydown', function(event) {
        if(event.keyCode == 87) {
            YSpeed-=5
        }
        else if(event.keyCode == 83) {
            YSpeed+=5

        }

        else if(event.keyCode == 65) {
            XSpeed-=5
        }

        else if(event.keyCode == 68) {
            XSpeed+=5
        }
    });

