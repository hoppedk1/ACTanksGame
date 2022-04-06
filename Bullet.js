 
class Bullet{

    constructor(
        BulletXPosition,BulletYPosition, BulletWidth,BulletHeight,BulletID,//Bullet builder
        BulletYSpeed,BulletXSpeed, BulletStatus, BulletCount // bullet movement
    )
    {
        this.BulletXPosition = BulletXPosition;
        this.BulletYPosition = BulletYPosition;
        this.BulletWidth = BulletWidth;
        this.BulletHeight = BulletHeight;
        this.BulletID = BulletID;
        this.BulletYSpeed = BulletYSpeed;
        this.BulletXSpeed = BulletXSpeed;
        this.BulletStatus = BulletStatus;
        this.BulletCount = BulletCount;
    }

    BulletSpawner(){
        var c = document.getElementById("GameScene")
        var ctx = c.getContext("2d");
        ctx.fillRect(this.BulletXPosition+this.BulletXSpeed, this.BulletYPosition+this.BulletYSpeed, this.BulletWidth, this.BulletHeight);
    }
}

function BulletCreator(PlayerNRChecker){
    if (PlayerNRChecker === Player1){
        console.log("Du grim")
        var Player1Bullet = new Bullet(PlayerNRChecker.PlayerXPosition,PlayerNRChecker.PlayerYPosition,40,40,1,0,0,0,0)
        this.BulletStatus = 1
    }
    if (PlayerNRChecker === Player2){
    }
}