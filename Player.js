/*let Player1MoveUp = false
let Player1MoveDown = false
let Player1MoveRight = false
let Player1MoveLeft = false

let Player2MoveUp = false
let Player2MoveDown = false
let Player2MoveRight = false
let Player2MoveLeft = false*/

class Player{ // Dannelsen af selveste player tanksne, hvilket vi vil gøre brug af til enhver tank

    constructor(PlayerXPosition,PlayerYPosition, PlayerWidth,PlayerHeight,PlayerColour,YSpeed,XSpeed,MoveUp,MoveDown,MoveRight,MoveLeft,UpKey,DownKey,RightKey,LeftKey){

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
        this.LeftKey = LeftKey
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
            PlayerNr.PlayerYPosition-=2
        }

        if(PlayerNr.MoveDown){
            PlayerNr.PlayerYPosition+=2

        }

        if(PlayerNr.MoveRight){
            PlayerNr.PlayerXPosition+=2

        }
        
        if(PlayerNr.MoveLeft){
            PlayerNr.PlayerXPosition-=2

        }

    };



    DrawPlayer(){
        var c = document.getElementById("GameScene")
        var ctx = c.getContext("2d");

        ctx.drawImage(this.PlayerColour, this.PlayerXPosition+this.XSpeed, this.PlayerYPosition+this.YSpeed, this.PlayerWidth, this.PlayerHeight);
    }
}

var Player1 = new Player(0,0,20,30,BlueTankPicture,0,0,false,false,false,false,'w','s','d','a')
var Player2 = new Player(0,100,20,30,RedTankPicture,0,0,false,false,false,false,'ArrowUp','ArrowDown','ArrowRight','ArrowLeft')







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













