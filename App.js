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


function Score(color, x, y,text) {
    var c = document.getElementById("ScorePlate")
    var ctx = c.getContext("2d");

        ctx.font = '20px Arial';
        ctx.fillStyle = color;
        ctx.fillText(text, x, y);
    }
window.onload = function () { // Her bliver der lopped ignnem imens selveste spillet kører, hvor vi blandt andet sætte fps
    setInterval(Gamedrawer, 1000/60); // Her har vi delen af koden hvor fps'en på spillet og hermed funktionen "Gamedrawer" til at køre med 60 fps
};

function Gamedrawer(){
    var c = document.getElementById("ScorePlate")
    var ctx = c.getContext("2d");

    ctx.clearRect(0, 0, 10000, 10000);
    Score('Blue',25,40,"Player 1 Score:  " + Player1.Score)
    Score('Red',25,120,"Player 2 Score:  " + Player2.Score)

    var c = document.getElementById("GameScene")
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 10000, 10000);
        var Radians = Math.PI/180;  
            var j = 0;
            for (j = 0; j < WallsArr.length; j++){
                WallsArr[j].DrawWall();

            }

            if (Player1.AliveChecker == 1){
                Player1.Movement(Player1)


                ctx.translate( Player1.PlayerXPosition + Player1.PlayerWidth/2, Player1.PlayerYPosition + Player1.PlayerHeight/2 );
                ctx.rotate(Player1.PlayerAngle * Radians );
                ctx.translate(-(Player1.PlayerXPosition + Player1.PlayerWidth/2), -(Player1.PlayerYPosition + Player1.PlayerHeight/2) );
                
                ctx.drawImage( BlueTankPicture,Player1.PlayerXPosition, Player1.PlayerYPosition, Player1.PlayerWidth, Player1.PlayerHeight);
                
                ctx.translate( Player1.PlayerXPosition + Player1.PlayerWidth/2, Player1.PlayerYPosition + Player1.PlayerHeight/2 );
                ctx.rotate(-Player1.PlayerAngle * Radians );
                ctx.translate(-(Player1.PlayerXPosition + Player1.PlayerWidth/2), -(Player1.PlayerYPosition + Player1.PlayerHeight/2) );
            }

            if (Player2.AliveChecker == 1 ){
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
        Player1Bullet.BulletMovement(Player1Bullet)
        Player1Bullet.BulletSpawner()
        Player1Bullet.HitChecker()
        Player1Bullet.BulletTimer(Player1Bullet)
    }
    if (Player2Bullet.BulletStatus == 1){
        Player2Bullet.BulletMovement(Player2Bullet)
        Player2Bullet.BulletSpawner()
        Player2Bullet.HitChecker()
        Player2Bullet.BulletTimer(Player2Bullet)
        
    }
    
    /*var TankFrontXPos = Player1.PlayerXPosition+(Player1.PlayerWidth/2)+Math.sin(+Player1.PlayerAngle*Radians)*(Player1.PlayerHeight/2)
    var TankFrontYPos = Player1.PlayerYPosition+(Player1.PlayerHeight/2)-Math.cos(+Player1.PlayerAngle*Radians)*(Player1.PlayerHeight/2)
    ctx.FillStyle = 'Red'
    ctx.fillRect(0,TankFrontYPos,5,5)
    ctx.fillRect(TankFrontXPos,0,5,5)*/

    /*
    var TankBackXPos = Player1.PlayerXPosition+(Player1.PlayerWidth/2)+Math.sin(+Player1.PlayerAngle*Radians)*(-Player1.PlayerHeight/2)
    var TankBackYPos = Player1.PlayerYPosition+(Player1.PlayerHeight/2)+Math.cos(+Player1.PlayerAngle*Radians)*(Player1.PlayerHeight/2)
    ctx.FillStyle = 'Red'
    ctx.fillRect(0,TankBackYPos,5,5)
    ctx.fillRect(TankBackXPos,0,5,5)
    */

    /*
    var Radians = Math.PI/180; 

    var TankCentrumXPos1 = Player1.PlayerXPosition+(Player1.PlayerWidth/2)
    var TankCentrumYPos1 = Player1.PlayerYPosition+(Player1.PlayerHeight/2)
    ctx.fillStyle = 'Green'
    ctx.fillRect(TankCentrumXPos1,TankCentrumYPos1,3,3)

    ctx.fillStyle = 'Red'
    ctx.fillRect(
    
        Player1.PlayerXPosition+(Player1.PlayerWidth/2)+Math.sin(+Player1.PlayerAngle*Radians)*(Player1.PlayerHeight/2),
        Player1.PlayerYPosition+(Player1.PlayerHeight/2)-Math.cos(+Player1.PlayerAngle*Radians)*(Player1.PlayerHeight/2),
        3,3)
        */

    /*ctx.fillStyle = 'Red'
    ctx.fillRect(0,0,300,150)*/

    //ctx.fillRect(0,Player1.PlayerYPosition+(Player1.PlayerHeight/2)-Math.cos(+Player1.PlayerAngle*Radians)*(Player1.PlayerHeight/2),5,5)
    //ctx.fillRect(Player1.PlayerXPosition+(Player1.PlayerWidth/2)+Math.sin(+Player1.PlayerAngle*Radians)*(Player1.PlayerHeight/2),0,5,5)


    // Collision with wall tester
    var Radians = Math.PI/180; 

    /*ctx.fillStyle = 'Red'
    ctx.fillRect(   Player1.PlayerXPosition,
                    Player1.PlayerYPosition+(Player1.PlayerHeight/2)-Math.cos(+Player1.PlayerAngle*Radians)*(Player1.PlayerHeight/2)*0.7,
                    
                    2,2)

    ctx.fillStyle = 'yellow'
    ctx.fillRect(   Player1.PlayerXPosition+Player1.PlayerWidth,
                    Player1.PlayerYPosition+(Player1.PlayerHeight/2)-Math.cos(+Player1.PlayerAngle*Radians)*(Player1.PlayerHeight/2)*0.7,
                    
                    2,2)

    ctx.fillStyle = 'Green'
    ctx.fillRect(   Player1.PlayerXPosition,
                    Player1.PlayerYPosition+(Player1.PlayerHeight/2)+Math.cos(+Player1.PlayerAngle*Radians)*(Player1.PlayerHeight/2)*0.7,
                    
                    2,2)

    ctx.fillStyle = 'Black'
    ctx.fillRect(   Player1.PlayerXPosition+Player1.PlayerWidth,
                    Player1.PlayerYPosition+(Player1.PlayerHeight/2)+Math.cos(+Player1.PlayerAngle*Radians)*(Player1.PlayerHeight/2)*0.7,
                    
                    2,2)

    ctx.fillStyle = 'Cyan'
    ctx.fillRect(   Player1.PlayerXPosition+(Player1.PlayerWidth/2)+Math.sin(+Player1.PlayerAngle*Radians)*(Player1.PlayerHeight/2),
                    Player1.PlayerYPosition,
                    
                    3,3)
    ctx.fillStyle = 'Orange'
    ctx.fillRect(   Player1.PlayerXPosition+(Player1.PlayerWidth/2)+Math.sin(+Player1.PlayerAngle*Radians)*(Player1.PlayerHeight/2),
                    Player1.PlayerYPosition,
                    
                    2,2)*/


    //ctx.fillStyle = 'Red'
    //ctx.fillRect(   Player1.PlayerXPosition+(Player1.PlayerWidth/2)+Math.sin(+Player1.PlayerAngle*Radians)*(Player1.PlayerHeight/2),
    //                Player1.PlayerYPosition+(Player1.PlayerHeight/2)-Math.cos(+Player1.PlayerAngle*Radians)*(Player1.PlayerHeight/2)*0.7,
    //                
    //                2,2)

    ctx.fillStyle = 'Red'
    ctx.fillRect(   Player1.PlayerXPosition+Math.sin(+Player1.PlayerAngle*Radians)*(Player1.PlayerHeight/2),
                    Player1.PlayerYPosition,
                    
                    2,2)


    /*ctx.fillStyle = 'yellow'
    ctx.fillRect(   Player1.PlayerXPosition+Player1.PlayerWidth,
                    Player1.PlayerYPosition+(Player1.PlayerHeight/2)-Math.cos(+Player1.PlayerAngle*Radians)*(Player1.PlayerHeight/2)*0.7,
                    
                    2,2)

    ctx.fillStyle = 'Green'
    ctx.fillRect(   Player1.PlayerXPosition,
                    Player1.PlayerYPosition+(Player1.PlayerHeight/2)+Math.cos(+Player1.PlayerAngle*Radians)*(Player1.PlayerHeight/2)*0.7,
                    
                    2,2)

    ctx.fillStyle = 'Black'
    ctx.fillRect(   Player1.PlayerXPosition+Player1.PlayerWidth,
                    Player1.PlayerYPosition+(Player1.PlayerHeight/2)+Math.cos(+Player1.PlayerAngle*Radians)*(Player1.PlayerHeight/2)*0.7,
                    
                    2,2)

    ctx.fillStyle = 'Cyan'
    ctx.fillRect(   Player1.PlayerXPosition+(Player1.PlayerWidth/2)+Math.sin(+Player1.PlayerAngle*Radians)*(Player1.PlayerHeight/2)*0.5,
                    Player1.PlayerYPosition,
                    
                    3,3)
    ctx.fillStyle = 'Orange'
    ctx.fillRect(   Player1.PlayerXPosition+(Player1.PlayerWidth/2)+Math.sin(+Player1.PlayerAngle*Radians)*(Player1.PlayerHeight/2),
                    Player1.PlayerYPosition,
                    
                    2,2)*/
}
