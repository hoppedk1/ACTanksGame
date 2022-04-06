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





window.onload = function () { // Her bliver der lopped ignnem imens selveste spillet kører, hvor vi blandt andet sætte fps
    setInterval(Gamedrawer, 1000/60); // Her har vi delen af koden hvor fps'en på spillet og hermed funktionen "Gamedrawer" til at køre med 60 fps
};

function Gamedrawer(){
    var c = document.getElementById("GameScene")
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 10000, 10000);

    Player1.DrawPlayer()
    Player2.DrawPlayer()
    Player1.Movement(Player1)
    Player2.Movement(Player2)
    //Player1Bullet.BulletSpawner()

}













































/*

PlayerSpeed(){

        //Player 1 movement
        if(IsKeyPressed(87)) {
            Player1.YSpeed-=2.5
        }
        if(IsKeyPressed(83)) {
            Player1.YSpeed+=2.5

        }

        if(IsKeyPressed(65)) {
            Player1.XSpeed-=2.5
        }

        if(IsKeyPressed(68)) {
            Player1.XSpeed+=2.5
        }
        //Player 2 movement
        if(IsKeyPressed(38)) {
            Player2.YSpeed-=2.5
        }
        if(IsKeyPressed(40)) {
            Player2.YSpeed+=2.5

        }

        if(IsKeyPressed(37)) {
            Player2.XSpeed-=2.5
        }

        if(IsKeyPressed(39)) {
            Player2.XSpeed+=2.5
        }

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

*/