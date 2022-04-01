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


class Player{ // Dannelsen af selveste player tanksne, hvilket vi vil gøre brug af til enhver tank

    constructor(PlayerXPosition,PlayerYPosition, PlayerWidth,PlayerHeight,PlayerColour){ // Her har vi vores tanks forskellige information vi vil udfylde når vi kalder den

        this.PlayerXPosition = PlayerXPosition; // Dens x placering i selveste spillet
        this.PlayerYPosition = PlayerYPosition; // Dens y placering i selveste spillet
        this.PlayerWidth = PlayerWidth; // Bredden, aka hvor lang tanken er på x aksen
        this.PlayerHeight = PlayerHeight; // højten, aka hvor lang tanken er på y aksen
        this.PlayerColour = PlayerColour; // Farven bruges her til at kalde hvilken farve, og hermed hvilket billed vi skal have over tanken




    }


    DrawPlayer(){

        var c = document.getElementById("GameScene")
        var ctx = c.getContext("2d");

        //ctx.fillRect(this.PlayerXPosition+XSpeed, this.PlayerYPosition+YSpeed, this.PlayerWidth, this.PlayerHeight);
        debugger
        ctx.drawImage(this.PlayerColour, this.PlayerXPosition+XSpeed, this.PlayerYPosition+YSpeed, this.PlayerWidth, this.PlayerHeight);


    }

}


var Player1 = new Player(0,0,20,30,BlueTankPicture) // x placering, y placering, bredde, højde og farve.
var Player2 = new Player(0,100,20,30,RedTankPicture) 
var Player3 = new Player(0,150,20,30,GreenTankPicture) 
var Player4 = new Player(0,50,20,30,YellowTankPicture)  
var Player5 = new Player(0,200,20,30,LGBTTank) 


var YSpeed = 0;
var XSpeed = 0; 


window.onload = function () { // Her bliver der lopped ignnem imens selveste spillet kører, hvor vi blandt andet sætte fps
    setInterval(Gamedrawer, 1000/60); // Her har vi delen af koden hvor fps'en på spillet og hermed funktionen "Gamedrawer" til at køre med 60 fps
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

