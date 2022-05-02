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

        var Radians = Math.PI/180; 

            if (Player1.AliveChecker = 1){
                Player1.Movement(Player1)


                ctx.translate( Player1.PlayerXPosition + Player1.PlayerWidth/2, Player1.PlayerYPosition + Player1.PlayerHeight/2 );
                ctx.rotate(Player1.PlayerAngle * Radians );
                ctx.translate(-(Player1.PlayerXPosition + Player1.PlayerWidth/2), -(Player1.PlayerYPosition + Player1.PlayerHeight/2) );
                
                ctx.drawImage( BlueTankPicture,Player1.PlayerXPosition, Player1.PlayerYPosition, Player1.PlayerWidth, Player1.PlayerHeight);
                
                ctx.translate( Player1.PlayerXPosition + Player1.PlayerWidth/2, Player1.PlayerYPosition + Player1.PlayerHeight/2 );
                ctx.rotate(-Player1.PlayerAngle * Radians );
                ctx.translate(-(Player1.PlayerXPosition + Player1.PlayerWidth/2), -(Player1.PlayerYPosition + Player1.PlayerHeight/2) );
            }

            if (Player2.AliveChecker = 1 ){
                Player2.Movement(Player2)
                ctx.translate( Player2.PlayerXPosition + Player2.PlayerWidth/2, Player2.PlayerYPosition + Player2.PlayerHeight/2 );
                ctx.rotate(Player2.PlayerAngle * Radians );
                ctx.translate(-(Player2.PlayerXPosition + Player2.PlayerWidth/2), -(Player2.PlayerYPosition + Player2.PlayerHeight/2) );
                
                ctx.drawImage( RedTankPicture,Player2.PlayerXPosition, Player2.PlayerYPosition, Player2.PlayerWidth, Player2.PlayerHeight);
               
                ctx.translate( Player2.PlayerXPosition + Player2.PlayerWidth/2, Player2.PlayerYPosition + Player2.PlayerHeight/2 );
                ctx.rotate(-Player2.PlayerAngle * Radians );
                ctx.translate(-(Player2.PlayerXPosition + Player2.PlayerWidth/2), -(Player2.PlayerYPosition + Player2.PlayerHeight/2) );
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
