 
class Bullet{
    
    constructor(
        BulletXPosition,BulletYPosition, BulletWidth,BulletHeight,//Bullet builder
        BulletStatus, BulletCount, BulletLifeTIme,BulletSpeed // bullet movement
    )
    {
        this.BulletXPosition = BulletXPosition;
        this.BulletYPosition = BulletYPosition;
        this.BulletWidth = BulletWidth;
        this.BulletHeight = BulletHeight;
        this.BulletStatus = BulletStatus;
        this.BulletCount = BulletCount;
        this.BulletLifeTIme = BulletLifeTIme;
        this.BulletSpeed = BulletSpeed;
    }

    BulletCreator(PlayerNRChecker,XSpawnPoint,YSpawnPoint,CannonCenterValue){

        if (PlayerNRChecker === Player1){
            if (Player1Bullet.BulletStatus == 0){
                Player1Bullet.BulletStatus = 1
                Player1Bullet.BulletXPosition = XSpawnPoint+(CannonCenterValue/2)-1
                Player1Bullet.BulletYPosition = YSpawnPoint
                Player1Bullet.BulletSpeed = -1
            }
        }
        if (PlayerNRChecker === Player2){
            if (Player2Bullet.BulletStatus == 0){
                Player2Bullet.BulletStatus = 1
                Player2Bullet.BulletXPosition = XSpawnPoint+(CannonCenterValue/2)-1
                Player2Bullet.BulletYPosition = YSpawnPoint
                Player2Bullet.BulletSpeed = -1
            }  
        }
    }

    BulletSpawner(){
        var c = document.getElementById("GameScene")
        var ctx = c.getContext("2d");
        ctx.fillRect(this.BulletXPosition, this.BulletYPosition, this.BulletWidth, this.BulletHeight);
    }

    BulletMovement(){
        var Radians = Math.PI/180; 

        /*this.BulletYPosition+=this.BulletSpeed

        if (this.BulletYPosition+this.BulletSpeed < 0){
            this.BulletSpeed*= -1
        }
        if (this.BulletYPosition+this.BulletSpeed > 150){
            this.BulletSpeed*= -1
        }*/


        Player1Bullet.BulletXPosition += 2*Math.sin(Player1.PlayerAngle*Radians)
        Player1Bullet.BulletYPosition += 2*Math.cos(Player1.PlayerAngle*Radians)
    }

    BulletTimer(BulletNr){

        if (BulletNr.BulletLifeTIme < 1000){
            BulletNr.BulletLifeTIme++
        } 
        if (BulletNr.BulletLifeTIme == 1000){
            BulletNr.BulletStatus = 0
            BulletNr.BulletLifeTIme = 0
        } 
    }

    HitChecker(){

        if (this.BulletYPosition > Player1.PlayerYPosition && this.BulletYPosition < Player1.PlayerYPosition+Player1.PlayerHeight &&
            this.BulletXPosition > Player1.PlayerXPosition && this.BulletXPosition < Player1.PlayerXPosition+Player1.PlayerWidth
            ){
            Player1.AliveChecker = 0;
            this.BulletStatus = 0;
            Player1.PlayerRespawner(Player1)
            this.BulletLifeTIme = 0
        }
        if (this.BulletYPosition > Player2.PlayerYPosition && this.BulletYPosition < Player2.PlayerYPosition+Player2.PlayerHeight &&
            this.BulletXPosition > Player2.PlayerXPosition && this.BulletXPosition < Player2.PlayerXPosition+Player2.PlayerWidth
            ){
            Player2.AliveChecker = 0;
            this.BulletStatus = 0;
            Player2.PlayerRespawner(Player2)
            this.BulletLifeTIme = 0

        }
    }
}



var Player1Bullet = new Bullet(0,0,2,2,0,0,0,-1)
var Player2Bullet = new Bullet(0,0,2,2,0,0,0,-1)
