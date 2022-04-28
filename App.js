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
    c1 = document.getElementById("Player1")
    var ctx1 = c1.getContext("2d");
    c2 = document.getElementById("Player2")
    var ctx2 = c2.getContext("2d");
    ctx.clearRect(0, 0, 10000, 10000);

    if (Player1.AliveChecker == true){
        Player1.rotateAndPaintImage(ctx1,BlueTankPicture,Player1 )
        Player1.Movement(Player1)
    }
    if (Player2.AliveChecker == 1){
        Player2.rotateAndPaintImage(ctx2,RedTankPicture,Player2)
        Player2.Movement(Player2)
    }
    if (Player1Bullet.BulletStatus == 1){
        Player1Bullet.BulletMovement()
        Player1Bullet.BulletSpawner()
        Player1Bullet.HitChecker()
        Player1Bullet.BulletTimer(Player1Bullet)
    }
    if (Player2Bullet.BulletStatus == 1){
        Player2Bullet.BulletMovement()
        Player2Bullet.BulletSpawner()
        Player2Bullet.HitChecker()
        Player2Bullet.BulletTimer(Player2Bullet)
    }
}
