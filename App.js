class Player{

    constructor(PlayerXPosition,PlayerYPosition, PlayerWidth,PlayerHeight,MovementSpeed,PlayerColour){

        this.PlayerXPosition = PlayerXPosition;
        this.PlayerYPosition = PlayerYPosition;
        this.PlayerWidth = PlayerWidth;
        this.PlayerHeight = PlayerHeight;
        this.MovementSpeed = MovementSpeed;
        this.PlayerColour = PlayerColour;


    }

    /*PlayerMovement(){

    }*/

    DrawPlayer(){
        var c = document.getElementById("GameScene")
        var ctx = c.getContext("2d");

        ctx.fillRect(this.PlayerXPosition, this.PlayerYPosition, this.PlayerWidth, this.PlayerHeight);
        ctx.fillStyle = this.PlayerColour;
        ctx.fill(); 


    }

}


var Player1 = new Player(300,400,500,500,0,"Blue")

window.onload = function () {
    setInterval(Gamedrawer, 1000/60);
};

function Gamedrawer(){
    var c = document.getElementById("GameScene")
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 10000, 10000);

    Player1.DrawPlayer()

}




console.log("Hoppe er kæmpe homo hvis den her besked ikke skrives")