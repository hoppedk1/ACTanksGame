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

        ctx.fillRect(this.PlayerXPosition+XSpeed, this.PlayerYPosition+YSpeed, this.PlayerWidth, this.PlayerHeight);
        ctx.fillStyle = this.PlayerColour;


    }

}


var Player1 = new Player(0,0,30,30,"#FF0000")
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

