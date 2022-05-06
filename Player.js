//https://sebhastian.com/javascript-rotate-images/ Link til hjælp med rotation
//https://stackoverflow.com/questions/3793397/html5-canvas-drawimage-with-at-an-angle mere hjælp

//https://stackoverflow.com/questions/11450178/draw-a-canvas-into-another-canvas-not-working Canvas tegning
//https://www.w3schools.com/jsref/dom_obj_canvas.asp

class Player{ // Dannelsen af selveste player tanksne, hvilket vi vil gøre brug af til enhver tank

    constructor(
    PlayerXPosition,PlayerYPosition, PlayerWidth,PlayerHeight,PlayerColour, //Player builder
    MoveUp,MoveDown,MoveRight,MoveLeft,UpKey,DownKey,RightKey,LeftKey, PlayerAngle,PlayerYSpeed, PlayerXSpeed, // PLayer movement
    ShootKey, AliveChecker,Score, //Player shooting
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
        this.PlayerYSpeed = PlayerYSpeed;
        this.PlayerXSpeed = PlayerXSpeed;
        this.Score = Score;
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
        if (Buttonclicked.key === PlayerNumber.ShootKey && PlayerNumber.AliveChecker == 1){
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
            var Radians = Math.PI/180; 
            for (var j = 0; j < WallsArr.length; j++){
                if (Player1.PlayerYPosition+(Player1.PlayerHeight/2)-Math.cos(+Player1.PlayerAngle*Radians)*(Player1.PlayerHeight/2)*0.8 > WallsArr[j].Ypos &&
                    Player1.PlayerYPosition+(Player1.PlayerHeight/2)-Math.cos(+Player1.PlayerAngle*Radians)*(Player1.PlayerHeight/2)*0.8 < WallsArr[j].Ypos+WallsArr[j].Height &&
                    Player1.PlayerXPosition >= WallsArr[j].Xpos &&
                    Player1.PlayerXPosition <= WallsArr[j].Xpos+WallsArr[j].Width &&
                    
                    Player1.PlayerYPosition+(Player1.PlayerHeight/2)-Math.cos(+Player1.PlayerAngle*Radians)*(Player1.PlayerHeight/2)*0.8 > WallsArr[j].Ypos &&
                    Player1.PlayerYPosition+(Player1.PlayerHeight/2)-Math.cos(+Player1.PlayerAngle*Radians)*(Player1.PlayerHeight/2)*0.8 < WallsArr[j].Ypos+WallsArr[j].Height &&
                    Player1.PlayerXPosition+Player1.PlayerWidth >= WallsArr[j].Xpos &&
                    Player1.PlayerXPosition+Player1.PlayerWidth <= WallsArr[j].Xpos+WallsArr[j].Width
                    
                    
                    )
                    
                    
                    {
                    
                    return PlayerNr.MoveUp = false
                }
            }
/*
            if (PlayerNr.PlayerYPosition+(PlayerNr.PlayerHeight/2)-Math.cos(+PlayerNr.PlayerAngle*Radians)*(PlayerNr.PlayerHeight/2) <= 0){
                return PlayerNr.MoveUp = false
            }
    
            if (PlayerNr.PlayerYPosition+(PlayerNr.PlayerHeight/2)-Math.cos(+PlayerNr.PlayerAngle*Radians)*(PlayerNr.PlayerHeight/2) >= 150){
                return PlayerNr.MoveUp = false
            }
    
            if (PlayerNr.PlayerXPosition+(PlayerNr.PlayerWidth/2)+Math.sin(+PlayerNr.PlayerAngle*Radians)*(PlayerNr.PlayerHeight/2) <= 0){
                return PlayerNr.MoveUp = false
            }
            if (PlayerNr.PlayerXPosition+(PlayerNr.PlayerWidth/2)+Math.sin(+PlayerNr.PlayerAngle*Radians)*(PlayerNr.PlayerHeight/2) >= 300){
                return PlayerNr.MoveUp = false
            }
*/
            PlayerNr.PlayerYSpeed = 2*Math.cos(-PlayerNr.PlayerAngle*Radians)*0.8
            PlayerNr.PlayerXSpeed = 2*Math.sin(-PlayerNr.PlayerAngle*Radians)*0.8
            
            PlayerNr.PlayerXPosition -= PlayerNr.PlayerXSpeed
            PlayerNr.PlayerYPosition -= PlayerNr.PlayerYSpeed

            


            


        }
        if(PlayerNr.MoveDown){
            var Radians = Math.PI/180; 
            for (var j = 0; j < WallsArr.length; j++){
                if (PlayerNr.PlayerYPosition+(PlayerNr.PlayerHeight/2)+Math.cos(+PlayerNr.PlayerAngle*Radians)*(PlayerNr.PlayerHeight/2) > WallsArr[j].Ypos &&
                    PlayerNr.PlayerYPosition+(PlayerNr.PlayerHeight/2)+Math.cos(+PlayerNr.PlayerAngle*Radians)*(PlayerNr.PlayerHeight/2) < WallsArr[j].Ypos+WallsArr[j].Height &&
                    PlayerNr.PlayerXPosition+(PlayerNr.PlayerWidth/2)+Math.sin(+PlayerNr.PlayerAngle*Radians)*(-PlayerNr.PlayerHeight/2) >= WallsArr[j].Xpos &&
                    PlayerNr.PlayerXPosition+(PlayerNr.PlayerWidth/2)+Math.sin(+PlayerNr.PlayerAngle*Radians)*(-PlayerNr.PlayerHeight/2) <= WallsArr[j].Xpos+WallsArr[j].Width){
                    
                    return PlayerNr.KeyDown = false // 06-05 Hoppe, Sagde PlayerNr.KeyDown = false, hvilket ikke resettede din movement, hvilket gjorde tanken Fransk.
                    
                }
            }

/*
            if (PlayerNr.PlayerYPosition+(PlayerNr.PlayerHeight/2)+Math.cos(+PlayerNr.PlayerAngle*Radians)*(PlayerNr.PlayerHeight/2) <= 0){
                return PlayerNr.MoveDown = false
            }
    
            if (PlayerNr.PlayerYPosition+(PlayerNr.PlayerHeight/2)+Math.cos(+PlayerNr.PlayerAngle*Radians)*(PlayerNr.PlayerHeight/2) >= 150){
                return PlayerNr.MoveDown = false
            }
    
            if (PlayerNr.PlayerXPosition+(PlayerNr.PlayerWidth/2)+Math.sin(+PlayerNr.PlayerAngle*Radians)*(-PlayerNr.PlayerHeight/2) <= 0){
                return PlayerNr.MoveDown = false
            }
            if (PlayerNr.PlayerXPosition+(PlayerNr.PlayerWidth/2)+Math.sin(+PlayerNr.PlayerAngle*Radians)*(-PlayerNr.PlayerHeight/2) >= 300){
                return PlayerNr.MoveDown = false
            }*/
            
            
            PlayerNr.PlayerYSpeed = 2*Math.cos(PlayerNr.PlayerAngle*Radians)*0.8
            PlayerNr.PlayerXSpeed = 2*Math.sin(PlayerNr.PlayerAngle*Radians)*0.8

            PlayerNr.PlayerXPosition -= PlayerNr.PlayerXSpeed
            PlayerNr.PlayerYPosition += PlayerNr.PlayerYSpeed


        }
        if(PlayerNr.MoveRight){
            if (PlayerNr.PlayerAngle == 360 || PlayerNr.PlayerAngle == -360){
                PlayerNr.PlayerAngle = 0

            }

            
            PlayerNr.PlayerAngle+=3

        }
        if(PlayerNr.MoveLeft){

            if (PlayerNr.PlayerAngle == 360 || PlayerNr.PlayerAngle == -360){
                PlayerNr.PlayerAngle = 0

            }
            PlayerNr.PlayerAngle-=3

        }
    }

    Shoot(PlayerNumber){
        if (PlayerNumber === Player1){
            Player1Bullet.BulletCreator(PlayerNumber)
        }
        if (PlayerNumber === Player2){
            Player2Bullet.BulletCreator(PlayerNumber)
        }
    }

    PlayerRespawner(NrofPLayer){
        setTimeout(() => {
            NrofPLayer.AliveChecker = 1;
            NrofPLayer.PlayerXPosition = Math.random()*280
            NrofPLayer.PlayerYPosition = Math.random()*130

        }, 2000);
    }
}

var Player1 = new Player(5,0,16,24,'Player1',false,false,false,false,'w','s','d','a',0,0,0,'v',1,0)
var Player2 = new Player(5,100,16,24,'Player2',false,false,false,false,'ArrowUp','ArrowDown','ArrowRight','ArrowLeft',0,0,0,'m',1,0)

document.addEventListener('keydown',function(event){
    Player1.KeyPressed(event,Player1)
    Player2.KeyPressed(event,Player2)
});
document.addEventListener('keyup',function(event){
    Player1.KeyReleased(event,Player1)
    Player2.KeyReleased(event,Player2)
});


