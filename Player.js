
class Player{ // Dannelsen af selveste player tanksne, hvilket vi vil gøre brug af til enhver tank

    constructor(
        PlayerXPosition,PlayerYPosition, PlayerWidth,PlayerHeight,PlayerColour, //Player builder
        YSpeed,XSpeed,MoveUp,MoveDown,MoveRight,MoveLeft,UpKey,DownKey,RightKey,LeftKey, // PLayer movement
        ShootKey //Player shooting
        ){

        this.PlayerXPosition = PlayerXPosition;
        this.PlayerYPosition = PlayerYPosition;
        this.PlayerWidth = PlayerWidth;
        this.PlayerHeight = PlayerHeight;
        this.PlayerColour = PlayerColour;
        this.YSpeed = YSpeed;
        this.XSpeed = XSpeed;
        this.MoveUp = MoveUp;
        this.MoveDown = MoveDown;
        this.MoveRight = MoveRight;
        this.MoveLeft = MoveLeft;
        this.UpKey = UpKey;
        this.DownKey = DownKey;
        this.RightKey = RightKey;
        this.LeftKey = LeftKey;
        this.ShootKey = ShootKey;
    }

    DrawPlayer(){
        var c = document.getElementById("GameScene")
        var ctx = c.getContext("2d");

        ctx.drawImage(this.PlayerColour, this.PlayerXPosition+this.XSpeed, this.PlayerYPosition+this.YSpeed, this.PlayerWidth, this.PlayerHeight);
    }
    
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
            if (PlayerNr.PlayerYPosition-2 >= -4){
                PlayerNr.PlayerYPosition-=2
            }
            else PlayerNr.MoveUp = false
        }
        if(PlayerNr.MoveDown){
            if (PlayerNr.PlayerYPosition+2 <= 131){
                PlayerNr.PlayerYPosition+=2
            }
            else PlayerNr.MoveDown = false
        }
        if(PlayerNr.MoveRight){
            if (PlayerNr.PlayerXPosition+2 <= 287){
                PlayerNr.PlayerXPosition+=2
            }
            else PlayerNr.MoveRight = false
        }
        if(PlayerNr.MoveLeft){
            if (PlayerNr.PlayerXPosition-2 >= -3){
                PlayerNr.PlayerXPosition-=2
            }
            else PlayerNr.MoveLeft = false
        }
    }

    Shoot(PlayerNumber){
        BulletCreator(PlayerNumber)
        
    }


}

var Player1 = new Player(0,0,16,24,BlueTankPicture,0,0,false,false,false,false,'w','s','d','a','v')
var Player2 = new Player(0,100,16,24,RedTankPicture,0,0,false,false,false,false,'ArrowUp','ArrowDown','ArrowRight','ArrowLeft','m')







document.addEventListener('keydown',function(event){
    Player1.KeyPressed(event,Player1)
    Player2.KeyPressed(event,Player2)

});
document.addEventListener('keyup',function(event){
    Player1.KeyReleased(event,Player1)
    Player2.KeyReleased(event,Player2)

});
/*document.addEventListener('keydown',Player2.KeyPressed(2));
document.addEventListener('keyup',Player2.KeyReleased(2));*/













