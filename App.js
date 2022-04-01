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

    constructor(PlayerXPosition,PlayerYPosition, PlayerWidth,PlayerHeight,PlayerColour,YSpeed,XSpeed){

        this.PlayerXPosition = PlayerXPosition;
        this.PlayerYPosition = PlayerYPosition;
        this.PlayerWidth = PlayerWidth;
        this.PlayerHeight = PlayerHeight;
        this.PlayerColour = PlayerColour;
        this.YSpeed = YSpeed;
        this.XSpeed = XSpeed;





    }
    PlayerSpeed(){

        //Player 1 movement
        if(IsKeyPressed(87)) {
            Player1.YSpeed-=2
        }
        if(IsKeyPressed(83)) {
            Player1.YSpeed+=2

        }

        if(IsKeyPressed(65)) {
            Player1.XSpeed-=2
        }

        if(IsKeyPressed(68)) {
            Player1.XSpeed+=2
        }
        //Player 2 movement
        if(IsKeyPressed(38)) {
            Player2.YSpeed-=5
        }
        if(IsKeyPressed(40)) {
            Player2.YSpeed+=5

        }

        if(IsKeyPressed(37)) {
            Player2.XSpeed-=5
        }

        if(IsKeyPressed(39)) {
            Player2.XSpeed+=5
        }
/*
        //Player 3 movement
        if(IsKeyPressed(85)) {
            Player3.YSpeed-=5
        }
        if(IsKeyPressed(74)) {
            Player3.YSpeed+=5

        }

        if(IsKeyPressed(72)) {
            Player3.XSpeed-=5
        }

        if(IsKeyPressed(75)) {
            Player3.XSpeed+=5
        }

        //Player 4 movement
        if(IsKeyPressed(104)) {
            Player4.YSpeed-=5
        }
        if(IsKeyPressed(101)) {
            Player4.YSpeed+=5

        }

        if(IsKeyPressed(100)) {
            Player4.XSpeed-=5
        }

        if(IsKeyPressed(102)) {
            Player4.XSpeed+=5
        }
        */
    }


    DrawPlayer(){
        var c = document.getElementById("GameScene")
        var ctx = c.getContext("2d");

        ctx.drawImage(this.PlayerColour, this.PlayerXPosition+this.XSpeed, this.PlayerYPosition+this.YSpeed, this.PlayerWidth, this.PlayerHeight);
    }
}

var Player1 = new Player(0,0,20,30,BlueTankPicture,0,0)
var Player2 = new Player(0,100,20,30,RedTankPicture,0,0)
//var Player3 = new Player(50,50,20,30,GreenTankPicture,0,0)
//var Player4 = new Player(0,50,20,30,YellowTankPicture,0,0)
//var Player5 = new Player(0,200,20,30,LGBTTank,0,0)

window.onload = function () { // Her bliver der lopped ignnem imens selveste spillet kører, hvor vi blandt andet sætte fps
    setInterval(Gamedrawer, 1000/60); // Her har vi delen af koden hvor fps'en på spillet og hermed funktionen "Gamedrawer" til at køre med 60 fps
};

function Gamedrawer(){
    var c = document.getElementById("GameScene")
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 10000, 10000);

    Player1.DrawPlayer()
    Player2.DrawPlayer()
    //Player3.DrawPlayer()
    //Player4.DrawPlayer()
    //Player5.DrawPlayer()

}
var PlayerList = [Player1, Player2]


var PressedKeys = [];

function IsKeyPressed(Key){
    debugger
    for (i = 0; i < PressedKeys.length;i++){
        if (Key == PressedKeys[i]){
            return true
        }
    }
    return false;
        
}


document.addEventListener('keydown', function(event){
    PressedKeys.push(event.keyCode);

    Player1.PlayerSpeed(event.keyCode)

});

document.addEventListener('keyup', function(event){
    PressedKeys.splice(0,50,0)
});



/*    document.addEventListener('keydown', function(event) {

        Player1.PlayerSpeed(PlayerList[0],event.keyCode)
        Player2.PlayerSpeed(PlayerList[1],event.keyCode)
        Player3.PlayerSpeed(PlayerList[2],event.keyCode)
        Player4.PlayerSpeed(PlayerList[3],event.keyCode)
        
        
        
    });*/


