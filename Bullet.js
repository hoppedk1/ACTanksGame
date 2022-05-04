 
class Bullet{
    
    constructor(
        BulletXPosition,BulletYPosition, BulletWidth,BulletHeight,//Bullet builder
        BulletStatus, BulletCount, BulletLifeTIme,BulletXSpeed, BulletYSpeed, BulletAngle // bullet movement
    )
    {
        this.BulletXPosition = BulletXPosition;
        this.BulletYPosition = BulletYPosition;
        this.BulletWidth = BulletWidth;
        this.BulletHeight = BulletHeight;
        this.BulletStatus = BulletStatus;
        this.BulletCount = BulletCount;
        this.BulletLifeTIme = BulletLifeTIme;
        this.BulletXSpeed = BulletXSpeed;
        this.BulletYSpeed = BulletYSpeed;
        this.BulletAngle = BulletAngle;
    }

    BulletCreator(PlayerNRChecker){
        var Radians = Math.PI/180

        if (PlayerNRChecker === Player1){
            if (Player1Bullet.BulletStatus == 0){
                Player1Bullet.BulletStatus = 1
                Player1Bullet.BulletXPosition = Player1.PlayerXPosition+(Player1.PlayerWidth/2)+Math.sin(+Player1.PlayerAngle*Radians)*(Player1.PlayerHeight/2)
                Player1Bullet.BulletYPosition = Player1.PlayerYPosition+(Player1.PlayerHeight/2)-Math.cos(+Player1.PlayerAngle*Radians)*(Player1.PlayerHeight/2)
                Player1Bullet.BulletAngle = Player1.PlayerAngle
                Player1Bullet.BulletXSpeed = 2*Math.sin(Player1Bullet.BulletAngle*Radians)
                Player1Bullet.BulletYSpeed = 2*Math.cos(Player1Bullet.BulletAngle*Radians)


            }
        }
        if (PlayerNRChecker === Player2){
            if (Player2Bullet.BulletStatus == 0){
                Player2Bullet.BulletStatus = 1
                Player2Bullet.BulletXPosition = Player2.PlayerXPosition+(Player2.PlayerWidth/2)+Math.sin(+Player2.PlayerAngle*Radians)*(Player2.PlayerHeight/2)
                Player2Bullet.BulletYPosition = Player2.PlayerYPosition+(Player2.PlayerHeight/2)-Math.cos(+Player2.PlayerAngle*Radians)*(Player2.PlayerHeight/2)
                Player2Bullet.BulletAngle = Player2.PlayerAngle
                Player2Bullet.BulletXSpeed = 2*Math.sin(Player2Bullet.BulletAngle*Radians)
                Player2Bullet.BulletYSpeed = 2*Math.cos(Player2Bullet.BulletAngle*Radians)

            }  
        }
    }

    BulletSpawner(){
        var c = document.getElementById("GameScene")
        var ctx = c.getContext("2d");
        ctx.fillRect(this.BulletXPosition, this.BulletYPosition, this.BulletWidth, this.BulletHeight);
        
    }

    BulletMovement(BulletNr){

        BulletNr.BulletXPosition += BulletNr.BulletXSpeed
        BulletNr.BulletYPosition -= BulletNr.BulletYSpeed

        if (BulletNr.BulletYPosition <= 0){
            BulletNr.BulletYSpeed*=-1
        }

        if (BulletNr.BulletYPosition >= 150){
            BulletNr.BulletYSpeed*=-1
        }

        if (BulletNr.BulletXPosition <= 0){
            BulletNr.BulletXSpeed*=-1
        }
        if (BulletNr.BulletXPosition >= 300){
            BulletNr.BulletXSpeed*=-1
        }



        
        
    }

    BulletTimer(BulletNr){

        if (BulletNr.BulletLifeTIme < 100){
            BulletNr.BulletLifeTIme++
        } 
        if (BulletNr.BulletLifeTIme == 100){
            BulletNr.BulletStatus = 0
            BulletNr.BulletLifeTIme = 0
        } 
    }

    HitChecker(){

        if (this.BulletYPosition > Player1.PlayerYPosition && this.BulletYPosition < Player1.PlayerYPosition+Player1.PlayerHeight &&
            this.BulletXPosition > Player1.PlayerXPosition && this.BulletXPosition < Player1.PlayerXPosition+Player1.PlayerWidth && this.BulletLifeTIme > 2
            ){
            Player1.AliveChecker = 0;
            Player2.Score++;
            this.BulletStatus = 0;
            Player1.PlayerRespawner(Player1)
            this.BulletLifeTIme = 0
        }
        if (this.BulletYPosition > Player2.PlayerYPosition && this.BulletYPosition < Player2.PlayerYPosition+Player2.PlayerHeight &&
            this.BulletXPosition > Player2.PlayerXPosition && this.BulletXPosition < Player2.PlayerXPosition+Player2.PlayerWidth && this.BulletLifeTIme > 2
            ){
            Player2.AliveChecker = 0;
            Player1.Score++;
            this.BulletStatus = 0;
            Player2.PlayerRespawner(Player2)
            this.BulletLifeTIme = 0

        }
    }
}



var Player1Bullet = new Bullet(0,0,2,2,0,0,0,-1,0)
var Player2Bullet = new Bullet(0,0,2,2,0,0,0,-1,0)
