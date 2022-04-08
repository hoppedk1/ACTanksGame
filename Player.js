//https://sebhastian.com/javascript-rotate-images/ Link til hjælp med rotation
//https://stackoverflow.com/questions/3793397/html5-canvas-drawimage-with-at-an-angle mere hjælp


class Player{ // Dannelsen af selveste player tanksne, hvilket vi vil gøre brug af til enhver tank

    constructor(
    PlayerXPosition,PlayerYPosition, PlayerWidth,PlayerHeight,PlayerColour, //Player builder
    MoveUp,MoveDown,MoveRight,MoveLeft,UpKey,DownKey,RightKey,LeftKey, PlayerAngle, // PLayer movement
    ShootKey, AliveChecker //Player shooting
    )
        {
        this.PlayerXPosition = PlayerXPosition;
        this.PlayerYPosition = PlayerYPosition;
        this.PlayerWidth = PlayerWidth;
        this.PlayerHeight = PlayerHeight;
        this.PlayerColour = PlayerColour;
        this.MoveUp = MoveUp;
        this.MoveDown = MoveDown;
        this.MoveRight = MoveRight;
        this.MoveLeft = MoveLeft;
        this.UpKey = UpKey;
        this.DownKey = DownKey;
        this.RightKey = RightKey;
        this.LeftKey = LeftKey;
        this.PlayerAngle = PlayerAngle;
        this.ShootKey = ShootKey;
        this.AliveChecker = AliveChecker;
    }

    /*DrawPlayer(){
        var c = document.getElementById("GameScene")
        var ctx = c.getContext("2d");
        var PlayerImage = document.getElementById(this.PlayerColour);
        //ctx.drawImage(PlayerImage, this.PlayerXPosition, this.PlayerYPosition, this.PlayerWidth, this.PlayerHeight);
    }*/
    
    KeyPressed(Buttonclicked,PlayerNumber){

        if (Buttonclicked.key === PlayerNumber.UpKey){
            PlayerNumber.MoveUp = true
        }
        if (Buttonclicked.key === PlayerNumber.DownKey){
            PlayerNumber.MoveDown = true
        }
        if (Buttonclicked.key === PlayerNumber.RightKey){
            PlayerNumber.MoveRight = true
        }
        if (Buttonclicked.key === PlayerNumber.LeftKey){
            PlayerNumber.MoveLeft = true
        }
        if (Buttonclicked.key === PlayerNumber.ShootKey){
            debugger
            PlayerNumber.Shoot(PlayerNumber)
        } 
    }

    KeyReleased(ButtonReleased,PlayerNumber){
        if (ButtonReleased.key === PlayerNumber.UpKey){
            PlayerNumber.MoveUp = false
        }
        if (ButtonReleased.key === PlayerNumber.DownKey){
            PlayerNumber.MoveDown = false
        }
        if (ButtonReleased.key === PlayerNumber.RightKey){
            PlayerNumber.MoveRight = false
        }
        if (ButtonReleased.key === PlayerNumber.LeftKey){
            PlayerNumber.MoveLeft = false
        }
    }

    Movement(PlayerNr){

        if(PlayerNr.MoveUp){
            if (PlayerNr.PlayerYPosition-2){ //-4
                PlayerNr.PlayerYPosition-=2
            }
            else PlayerNr.MoveUp = false
        }
        if(PlayerNr.MoveDown){
            if (PlayerNr.PlayerYPosition+2){ //131
                PlayerNr.PlayerYPosition+=2
            }
            else PlayerNr.MoveDown = false
        }
        if(PlayerNr.MoveRight){
            if (PlayerNr.PlayerXPosition+2){ //287
                PlayerNr.PlayerAngle-=4
            }
            else PlayerNr.MoveRight = false
        }
        if(PlayerNr.MoveLeft){
            if (PlayerNr.PlayerXPosition-2){ //-3
                PlayerNr.PlayerAngle+=4
            }
            else PlayerNr.MoveLeft = false
        }
    }
    rotateAndPaintImage ( context, image, angleInRad,PlayerNrTeller ) {
        var Radians = Math.PI/180; 
        context.translate( PlayerNrTeller.PlayerXPosition, PlayerNrTeller.PlayerYPosition );
        context.rotate( angleInRad*Radians );
        context.drawImage( image,PlayerNrTeller.PlayerXPosition, PlayerNrTeller.PlayerYPosition, PlayerNrTeller.PlayerWidth, PlayerNrTeller.PlayerHeight);
        context.rotate( -angleInRad*Radians );
        context.translate(-PlayerNrTeller.PlayerXPosition, -PlayerNrTeller.PlayerYPosition );
      }

    Shoot(PlayerNumber){
        if (PlayerNumber === Player1){
            Player1Bullet.BulletCreator(PlayerNumber,Player1.PlayerXPosition, Player1.PlayerYPosition,Player1.PlayerWidth)
        }
        if (PlayerNumber === Player2){
            Player2Bullet.BulletCreator(PlayerNumber,Player2.PlayerXPosition, Player2.PlayerYPosition,Player1.PlayerWidth)
        }
    }

    PlayerRespawner(NrofPLayer){
        setTimeout(() => {
            NrofPLayer.AliveChecker = 1;

        }, 2000);
    }
}

var Player1 = new Player(0,0,16,24,'Player1',false,false,false,false,'w','s','d','a',0,'v',1)
var Player2 = new Player(0,100,16,24,'Player2',false,false,false,false,'ArrowUp','ArrowDown','ArrowRight','ArrowLeft',0,'m',1)

document.addEventListener('keydown',function(event){
    Player1.KeyPressed(event,Player1)
    Player2.KeyPressed(event,Player2)
});
document.addEventListener('keyup',function(event){
    Player1.KeyReleased(event,Player1)
    Player2.KeyReleased(event,Player2)
});


