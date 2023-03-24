import { STAGE_WIDTH, STAGE_HEIGHT, FRAME_RATE, ASSET_MANIFEST } from "./Constants";
import { AssetManager } from "./AssetManager";

import { randomMe } from "./Toolkit";

export class Buttons{
    // game object variables
// ...

//secret numbers for the game

public FirstNum:number;
public SecondNum:number;
public ThirdNum:number;

//other variables for the game...

public stage:createjs.StageGL;
public canvas:HTMLCanvasElement;
public assetManager:AssetManager;

//game objects

public background:createjs.Sprite;

//the buttons
public ButtonsA1:createjs.Sprite;
public ButtonsA2:createjs.Sprite;
public ButtonsA3:createjs.Sprite;
public ButtonsA4:createjs.Sprite;
public ButtonsA5:createjs.Sprite;
public ButtonsA6:createjs.Sprite;
public ButtonsA7:createjs.Sprite;
public ButtonsA8:createjs.Sprite;
public ButtonsA9:createjs.Sprite;
public ButtonsA10:createjs.Sprite;

public ButtonsB1:createjs.Sprite;
public ButtonsB2:createjs.Sprite;
public ButtonsB3:createjs.Sprite;
public ButtonsB4:createjs.Sprite;
public ButtonsB5:createjs.Sprite;
public ButtonsB6:createjs.Sprite;
public ButtonsB7:createjs.Sprite;
public ButtonsB8:createjs.Sprite;
public ButtonsB9:createjs.Sprite;
public ButtonsB10:createjs.Sprite;

public ButtonsC1:createjs.Sprite;
public ButtonsC2:createjs.Sprite;
public ButtonsC3:createjs.Sprite;
public ButtonsC4:createjs.Sprite;
public ButtonsC5:createjs.Sprite;
public ButtonsC6:createjs.Sprite;
public ButtonsC7:createjs.Sprite;
public ButtonsC8:createjs.Sprite;
public ButtonsC9:createjs.Sprite;
public ButtonsC10:createjs.Sprite;

public Anumber:number;
public Bnumber:number;
public Cnumber:number;

public SelectButtonsA1:createjs.Sprite;
public SelectButtonsA2:createjs.Sprite;
public SelectButtonsA3:createjs.Sprite;
public SelectButtonsA4:createjs.Sprite;
public SelectButtonsA5:createjs.Sprite;
public SelectButtonsA6:createjs.Sprite;
public SelectButtonsA7:createjs.Sprite;
public SelectButtonsA8:createjs.Sprite;
public SelectButtonsA9:createjs.Sprite;
public SelectButtonsA10:createjs.Sprite;

public SelectButtonsB1:createjs.Sprite;
public SelectButtonsB2:createjs.Sprite;
public SelectButtonsB3:createjs.Sprite;
public SelectButtonsB4:createjs.Sprite;
public SelectButtonsB5:createjs.Sprite;
public SelectButtonsB6:createjs.Sprite;
public SelectButtonsB7:createjs.Sprite;
public SelectButtonsB8:createjs.Sprite;
public SelectButtonsB9:createjs.Sprite;
public SelectButtonsB10:createjs.Sprite;

public SelectButtonsC1:createjs.Sprite;
public SelectButtonsC2:createjs.Sprite;
public SelectButtonsC3:createjs.Sprite;
public SelectButtonsC4:createjs.Sprite;
public SelectButtonsC5:createjs.Sprite;
public SelectButtonsC6:createjs.Sprite;
public SelectButtonsC7:createjs.Sprite;
public SelectButtonsC8:createjs.Sprite;
public SelectButtonsC9:createjs.Sprite;
public SelectButtonsC10:createjs.Sprite;


public Alerts1:createjs.Sprite;
public Alerts2:createjs.Sprite;
public Alerts3:createjs.Sprite;

public winA:boolean;
public winB:boolean;
public winC:boolean;

public Victory:createjs.Sprite;

//let VictoryNoise:createjs.Sound;


constructor(stage:createjs.StageGL, assetManager:AssetManager){
    this.stage=stage;

    this.assetManager=assetManager;
}


public winCheck():void{
    if (this.winA==true&&this.winB==true&&this.winC==true){
        
        createjs.Sound.play("VictoryNoise");

        console.log("WIN!!");
        this.Victory=this.assetManager.getSprite("Victory","Victory",225,470);
        this.stage.addChild(this.Victory);
        
        this.Victory.on("mousedown",this.Reset, this);

    }

}

public Reset():void{
    //when the game resets the numbers

    this.Anumber=null;
    this.Bnumber=null;
    this.Cnumber=null;

    this.stage.removeChild(this.Alerts1);
    this.stage.removeChild(this.Alerts2);
    this.stage.removeChild(this.Alerts3);
    this.stage.removeChild(this.Victory);


    this.winA=false;

    this.winB=false;

    this.winC=false;

    this.FirstNum = randomMe(1,10);

    console.log("First number is "+ this.FirstNum);

    this.SecondNum = randomMe(1,10);

    console.log("Second number is "+ this.SecondNum);

    this.ThirdNum = randomMe(1,10);

    console.log("Third number is "+ this.ThirdNum);


    
    this.Alerts1=this.assetManager.getSprite("Alerts","Pico3",0,450);
    this.Alerts1.scaleX=0.5;
    this.Alerts1.scaleY=0.5;
    this.stage.addChild(this.Alerts1);
    
    this.Alerts2=this.assetManager.getSprite("Alerts","Pico3",175,450);
    this.Alerts2.scaleX=0.5;
    this.Alerts2.scaleY=0.5;
    this.stage.addChild(this.Alerts2);
    
    this.Alerts3=this.assetManager.getSprite("Alerts","Pico3",350,450);
    this.Alerts3.scaleX=0.5;
    this.Alerts3.scaleY=0.5;
    this.stage.addChild(this.Alerts3);
    
    this.resetRowA();
    this.resetRowB();
    this.resetRowC();
}

public numCheckA():void{

    if (this.Anumber==this.FirstNum){
        //console.log("1");
        this.Alerts1.gotoAndStop("Pico2");

        createjs.Sound.play("Fermi");
        this.winA=true;
    }
    
    else if (this.Anumber==this.SecondNum){
        //console.log("2");
        this.Alerts1.gotoAndStop("Pico1");

        createjs.Sound.play("Pico")

        this.winA=false;
    }
    
    else if (this.Anumber==this.ThirdNum){
        //console.log("2");
        this.Alerts1.gotoAndStop("Pico1");

        createjs.Sound.play("Pico")

        this.winA=false;
    }

    else if (this.Anumber!=this.FirstNum&&this.Anumber!=this.SecondNum) {
        //console.log("3");
        this.Alerts1.gotoAndStop("Pico3");

        createjs.Sound.play("Bagel")

        this.winA=false;
    }

    this.winCheck();
}

public numCheckB():void{

    if (this.Bnumber==this.SecondNum){
        //console.log("1");
        this.Alerts2.gotoAndStop("Pico2");

        createjs.Sound.play("Fermi");

        this.winB=true;
    }
    
    else if (this.Bnumber==this.FirstNum){
        //console.log("2");
        this.Alerts2.gotoAndStop("Pico1");

        createjs.Sound.play("Pico")

        this.winB=false;
    }
    
    else if (this.Bnumber==this.ThirdNum){
        
        this.Alerts2.gotoAndStop("Pico1");

        createjs.Sound.play("Pico")

        this.winB=false;
    }

    else {
        //console.log("3");
        this.Alerts2.gotoAndStop("Pico3");

        createjs.Sound.play("Bagel")

        this.winB=false;
    }

    this.winCheck();
}

public numCheckC(){

    if (this.Cnumber==this.ThirdNum){
        //console.log("1");
        this.Alerts3.gotoAndStop("Pico2");

        createjs.Sound.play("Fermi");

        this.winC=true;
    }
    
    else if (this.Cnumber==this.SecondNum){
        //console.log("2");
        this.Alerts3.gotoAndStop("Pico1");

        createjs.Sound.play("Pico")
        this.winC=false;
    }
    
    else if (this.Cnumber==this.FirstNum){
        
        this.Alerts3.gotoAndStop("Pico1");

        createjs.Sound.play("Pico")

        this.winC=false;
    }

    else {
        //console.log("3");
        this.Alerts3.gotoAndStop("Pico3");
        
        createjs.Sound.play("Bagel")

        this.winC=false;
    }

    this.winCheck();
}

public A1press(){

    this.Anumber=1;

    this.resetRowA();

    this.stage.removeChild(this.ButtonsA1);

    this.SelectButtonsA1=this.assetManager.getSprite("SelectButtons","SelectButton1",20,300);
    this.SelectButtonsA1.scaleX=0.1;
    this.SelectButtonsA1.scaleY=0.1;
    this.stage.addChild(this.SelectButtonsA1);
}


public A2press(){
    
    this.Anumber=2;

    this.resetRowA();

    this.stage.removeChild(this.ButtonsA2);

    this.SelectButtonsA2=this.assetManager.getSprite("SelectButtons","SelectButton2",70,300);
    this.SelectButtonsA2.scaleX=0.1;
    this.SelectButtonsA2.scaleY=0.1;
    this.stage.addChild(this.SelectButtonsA2);
}


public A3press(){

    this.Anumber=3;

    this.resetRowA();

    this.stage.removeChild(this.ButtonsA3);

    this.SelectButtonsA3=this.assetManager.getSprite("SelectButtons","SelectButton3",120,300);
    this.SelectButtonsA3.scaleX=0.1;
    this.SelectButtonsA3.scaleY=0.1;
    this.stage.addChild(this.SelectButtonsA3);
}


public A4press(){

    this.Anumber=4;

    this.resetRowA();

    this.stage.removeChild(this.ButtonsA4);

    this.SelectButtonsA4=this.assetManager.getSprite("SelectButtons","SelectButton4",170,300);
    this.SelectButtonsA4.scaleX=0.1;
    this.SelectButtonsA4.scaleY=0.1;
    this.stage.addChild(this.SelectButtonsA4);
}


public A5press(){

    this.Anumber=5;

    this.resetRowA();

    this.stage.removeChild(this.ButtonsA5);

    this.SelectButtonsA5=this.assetManager.getSprite("SelectButtons","SelectButton5",220,300);
    this.SelectButtonsA5.scaleX=0.1;
    this.SelectButtonsA5.scaleY=0.1;
    this.stage.addChild(this.SelectButtonsA5);
}


public A6press(){

    this.Anumber=6;

    this.resetRowA();

    this.stage.removeChild(this.ButtonsA6);

    this.SelectButtonsA6=this.assetManager.getSprite("SelectButtons","SelectButton6",270,300);
    this.SelectButtonsA6.scaleX=0.1;
    this.SelectButtonsA6.scaleY=0.1;
    this.stage.addChild(this.SelectButtonsA6);
}


public A7press(){

    this.Anumber=7;

    this.resetRowA();

    this.stage.removeChild(this.ButtonsA7);

    this.SelectButtonsA7=this.assetManager.getSprite("SelectButtons","SelectButton7",320,300);
    this.SelectButtonsA7.scaleX=0.1;
    this.SelectButtonsA7.scaleY=0.1;
    this.stage.addChild(this.SelectButtonsA7);
}


public A8press(){

    this.Anumber=8;

    this.resetRowA();

    this.stage.removeChild(this.ButtonsA8);

    this.SelectButtonsA8=this.assetManager.getSprite("SelectButtons","SelectButton8",370,300);
    this.SelectButtonsA8.scaleX=0.1;
    this.SelectButtonsA8.scaleY=0.1;
    this.stage.addChild(this.SelectButtonsA8);
}


public A9press(){

    this.Anumber=9;

    this.resetRowA();

    this.stage.removeChild(this.ButtonsA9);

    this.SelectButtonsA9=this.assetManager.getSprite("SelectButtons","SelectButton9",420,300);
    this.SelectButtonsA9.scaleX=0.1;
    this.SelectButtonsA9.scaleY=0.1;
    this.stage.addChild(this.SelectButtonsA9);
}


public A10press(){

    this.Anumber=10;

    this.resetRowA();

    this.stage.removeChild(this.ButtonsA10);

    this.SelectButtonsA10=this.assetManager.getSprite("SelectButtons","SelectButton10",470,300);
    this.SelectButtonsA10.scaleX=0.1;
    this.SelectButtonsA10.scaleY=0.1;
    this.stage.addChild(this.SelectButtonsA10);
}


public B1press(){

    this.Bnumber=1;

    this.resetRowB();

    this.stage.removeChild(this.ButtonsB1);

    this.SelectButtonsB1=this.assetManager.getSprite("SelectButtons","SelectButton1",20,350);
    this.SelectButtonsB1.scaleX=0.1;
    this.SelectButtonsB1.scaleY=0.1;
    this.stage.addChild(this.SelectButtonsB1);
}


public B2press(){

    this.Bnumber=2;

    this.resetRowB();

    this.stage.removeChild(this.ButtonsB2);

    this.SelectButtonsB2=this.assetManager.getSprite("SelectButtons","SelectButton2",70,350);
    this.SelectButtonsB2.scaleX=0.1;
    this.SelectButtonsB2.scaleY=0.1;
    this.stage.addChild(this.SelectButtonsB2);
}


public B3press(){

    this.Bnumber=3;

    this.resetRowB();

    this.stage.removeChild(this.ButtonsB3);

    this.SelectButtonsB3=this.assetManager.getSprite("SelectButtons","SelectButton3",120,350);
    this.SelectButtonsB3.scaleX=0.1;
    this.SelectButtonsB3.scaleY=0.1;
    this.stage.addChild(this.SelectButtonsB3);
}


public B4press(){

    this.Bnumber=4;

    this.resetRowB();

    this.stage.removeChild(this.ButtonsB4);

    this.SelectButtonsB4=this.assetManager.getSprite("SelectButtons","SelectButton4",170,350);
    this.SelectButtonsB4.scaleX=0.1;
    this.SelectButtonsB4.scaleY=0.1;
    this.stage.addChild(this.SelectButtonsB4);
}


public B5press(){

    this.Bnumber=5;

    this.resetRowB();

    this.stage.removeChild(this.ButtonsB5);

    this.SelectButtonsB5=this.assetManager.getSprite("SelectButtons","SelectButton5",220,350);
    this.SelectButtonsB5.scaleX=0.1;
    this.SelectButtonsB5.scaleY=0.1;
    this.stage.addChild(this.SelectButtonsB5);
}


public B6press(){

    this.Bnumber=6;

    this.resetRowB();

    this.stage.removeChild(this.ButtonsB6);

    this.SelectButtonsB6=this.assetManager.getSprite("SelectButtons","SelectButton6",270,350);
    this.SelectButtonsB6.scaleX=0.1;
    this.SelectButtonsB6.scaleY=0.1;
    this.stage.addChild(this.SelectButtonsB6);
}


public B7press(){

    this.Bnumber=7;

    this.resetRowB();

    this.stage.removeChild(this.ButtonsB7);

    this.SelectButtonsB7=this.assetManager.getSprite("SelectButtons","SelectButton7",320,350);
    this.SelectButtonsB7.scaleX=0.1;
    this.SelectButtonsB7.scaleY=0.1;
    this.stage.addChild(this.SelectButtonsB7);
}


public B8press(){

    this.Bnumber=8;

    this.resetRowB();

    this.stage.removeChild(this.ButtonsB8);

    this.SelectButtonsB8=this.assetManager.getSprite("SelectButtons","SelectButton8",370,350);
    this.SelectButtonsB8.scaleX=0.1;
    this.SelectButtonsB8.scaleY=0.1;
    this.stage.addChild(this.SelectButtonsB8);
}


public B9press(){

    this.Bnumber=9;

    this.resetRowB();

    this.stage.removeChild(this.ButtonsB9);

    this.SelectButtonsB9=this.assetManager.getSprite("SelectButtons","SelectButton9",420,350);
    this.SelectButtonsB9.scaleX=0.1;
    this.SelectButtonsB9.scaleY=0.1;
    this.stage.addChild(this.SelectButtonsB9);
}


public B10press(){

    this.Bnumber=10;

    this.resetRowB();

    this.stage.removeChild(this.ButtonsB10);

    this.SelectButtonsB10=this.assetManager.getSprite("SelectButtons","SelectButton10",470,350);
    this.SelectButtonsB10.scaleX=0.1;
    this.SelectButtonsB10.scaleY=0.1;
    this.stage.addChild(this.SelectButtonsB10);
}


public C1press(){

    this.Cnumber=1;

    this.resetRowC();

    this.stage.removeChild(this.ButtonsC1);

    this.SelectButtonsC1=this.assetManager.getSprite("SelectButtons","SelectButton1",20,400);
    this.SelectButtonsC1.scaleX=0.1;
    this.SelectButtonsC1.scaleY=0.1;
    this.stage.addChild(this.SelectButtonsC1);
}


public C2press(){

    this.Cnumber=2;

    this.resetRowC();

    this.stage.removeChild(this.ButtonsC2);

    this.SelectButtonsC2=this.assetManager.getSprite("SelectButtons","SelectButton2",70,400);
    this.SelectButtonsC2.scaleX=0.1;
    this.SelectButtonsC2.scaleY=0.1;
    this.stage.addChild(this.SelectButtonsC2);
}


public C3press(){

    this.Cnumber=3;

    this.resetRowC();

    this.stage.removeChild(this.ButtonsC3);

    this.SelectButtonsC3=this.assetManager.getSprite("SelectButtons","SelectButton3",120,400);
    this.SelectButtonsC3.scaleX=0.1;
    this.SelectButtonsC3.scaleY=0.1;
    this.stage.addChild(this.SelectButtonsC3);
}


public C4press(){

    this.Cnumber=4;

    this.resetRowC();

    this.stage.removeChild(this.ButtonsC4);

    this.SelectButtonsC4=this.assetManager.getSprite("SelectButtons","SelectButton4",170,400);
    this.SelectButtonsC4.scaleX=0.1;
    this.SelectButtonsC4.scaleY=0.1;
    this.stage.addChild(this.SelectButtonsC4);
}


public C5press(){

    this.Cnumber=5;

    this.resetRowC();

    this.stage.removeChild(this.ButtonsC5);

    this.SelectButtonsC5=this.assetManager.getSprite("SelectButtons","SelectButton5",220,400);
    this.SelectButtonsC5.scaleX=0.1;
    this.SelectButtonsC5.scaleY=0.1;
    this.stage.addChild(this.SelectButtonsC5);
}


public C6press(){

    this.Cnumber=6;

    this.resetRowC();

    this.stage.removeChild(this.ButtonsC6);

    this.SelectButtonsC6=this.assetManager.getSprite("SelectButtons","SelectButton6",270,400);
    this.SelectButtonsC6.scaleX=0.1;
    this.SelectButtonsC6.scaleY=0.1;
    this.stage.addChild(this.SelectButtonsC6);
}


public C7press(){

    this.Cnumber=7;

    this.resetRowC();

    this.stage.removeChild(this.ButtonsC7);

    this.SelectButtonsC7=this.assetManager.getSprite("SelectButtons","SelectButton7",320,400);
    this.SelectButtonsC7.scaleX=0.1;
    this.SelectButtonsC7.scaleY=0.1;
    this.stage.addChild(this.SelectButtonsC7);
}


public C8press(){

    this.Cnumber=8;

    this.resetRowC();

    this.stage.removeChild(this.ButtonsC8);

    this.SelectButtonsC8=this.assetManager.getSprite("SelectButtons","SelectButton8",370,400);
    this.SelectButtonsC8.scaleX=0.1;
    this.SelectButtonsC8.scaleY=0.1;
    this.stage.addChild(this.SelectButtonsC8);
}


public C9press(){

    this.Cnumber=9;

    this.resetRowC();

    this.stage.removeChild(this.ButtonsC9);

    this.SelectButtonsC9=this.assetManager.getSprite("SelectButtons","SelectButton9",420,400);
    this.SelectButtonsC9.scaleX=0.1;
    this.SelectButtonsC9.scaleY=0.1;
    this.stage.addChild(this.SelectButtonsC9);
}


public C10press(){

    this.Cnumber=10;

    this.resetRowC();

    this.stage.removeChild(this.ButtonsC10);

    this.SelectButtonsC10=this.assetManager.getSprite("SelectButtons","SelectButton10",470,400);
    this.SelectButtonsC10.scaleX=0.1;
    this.SelectButtonsC10.scaleY=0.1;
    this.stage.addChild(this.SelectButtonsC10);
}


public resetRowA(){

    this.numCheckA();

    this.ButtonsA1=this.assetManager.getSprite("Buttons","Buttons1",20,300);
    this.ButtonsA1.scaleX=0.1;
    this.ButtonsA1.scaleY=0.1;
    this.stage.addChild(this.ButtonsA1);

    this.ButtonsA2=this.assetManager.getSprite("Buttons","Buttons2",70,300);
    this.ButtonsA2.scaleX=0.1;
    this.ButtonsA2.scaleY=0.1;
    this.stage.addChild(this.ButtonsA2);

    this.ButtonsA3=this.assetManager.getSprite("Buttons","Buttons3",120,300);
    this.ButtonsA3.scaleX=0.1;
    this.ButtonsA3.scaleY=0.1;
    this.stage.addChild(this.ButtonsA3);

    this.ButtonsA4=this.assetManager.getSprite("Buttons","Buttons4",170,300);
    this.ButtonsA4.scaleX=0.1;
    this.ButtonsA4.scaleY=0.1;
    this.stage.addChild(this.ButtonsA4);

    this.ButtonsA5=this.assetManager.getSprite("Buttons","Buttons5",220,300);
    this.ButtonsA5.scaleX=0.1;
    this.ButtonsA5.scaleY=0.1;
    this.stage.addChild(this.ButtonsA5);

    this.ButtonsA6=this.assetManager.getSprite("Buttons","Buttons6",270,300);
    this.ButtonsA6.scaleX=0.1;
    this.ButtonsA6.scaleY=0.1;
    this.stage.addChild(this.ButtonsA6);

    this.ButtonsA7=this.assetManager.getSprite("Buttons","Buttons7",320,300);
    this.ButtonsA7.scaleX=0.1;
    this.ButtonsA7.scaleY=0.1;
    this.stage.addChild(this.ButtonsA7);

    this.ButtonsA8=this.assetManager.getSprite("Buttons","Buttons8",370,300);
    this.ButtonsA8.scaleX=0.1;
    this.ButtonsA8.scaleY=0.1;
    this.stage.addChild(this.ButtonsA8);

    this.ButtonsA9=this.assetManager.getSprite("Buttons","Buttons9",420,300);
    this.ButtonsA9.scaleX=0.1;
    this.ButtonsA9.scaleY=0.1;
    this.stage.addChild(this.ButtonsA9);

    this.ButtonsA10=this.assetManager.getSprite("Buttons","Buttons10",470,300);
    this.ButtonsA10.scaleX=0.1;
    this.ButtonsA10.scaleY=0.1;
    this.stage.addChild(this.ButtonsA10);
}

public resetRowB(){

    this.numCheckB();

    this.ButtonsB1=this.assetManager.getSprite("Buttons","Buttons1",20,350);
    this.ButtonsB1.scaleX=0.1;
    this.ButtonsB1.scaleY=0.1;
    this.stage.addChild(this.ButtonsB1);

    this.ButtonsB2=this.assetManager.getSprite("Buttons","Buttons2",70,350);
    this.ButtonsB2.scaleX=0.1;
    this.ButtonsB2.scaleY=0.1;
    this.stage.addChild(this.ButtonsB2);

    this.ButtonsB3=this.assetManager.getSprite("Buttons","Buttons3",120,350);
    this.ButtonsB3.scaleX=0.1;
    this.ButtonsB3.scaleY=0.1;
    this.stage.addChild(this.ButtonsB3);

    this.ButtonsB4=this.assetManager.getSprite("Buttons","Buttons4",170,350);
    this.ButtonsB4.scaleX=0.1;
    this.ButtonsB4.scaleY=0.1;
    this.stage.addChild(this.ButtonsB4);

    this.ButtonsB5=this.assetManager.getSprite("Buttons","Buttons5",220,350);
    this.ButtonsB5.scaleX=0.1;
    this.ButtonsB5.scaleY=0.1;
    this.stage.addChild(this.ButtonsB5);

    this.ButtonsB6=this.assetManager.getSprite("Buttons","Buttons6",270,350);
    this.ButtonsB6.scaleX=0.1;
    this.ButtonsB6.scaleY=0.1;
    this.stage.addChild(this.ButtonsB6);

    this.ButtonsB7=this.assetManager.getSprite("Buttons","Buttons7",320,350);
    this.ButtonsB7.scaleX=0.1;
    this.ButtonsB7.scaleY=0.1;
    this.stage.addChild(this.ButtonsB7);

    this.ButtonsB8=this.assetManager.getSprite("Buttons","Buttons8",370,350);
    this.ButtonsB8.scaleX=0.1;
    this.ButtonsB8.scaleY=0.1;
    this.stage.addChild(this.ButtonsB8);

    this.ButtonsB9=this.assetManager.getSprite("Buttons","Buttons9",420,350);
    this.ButtonsB9.scaleX=0.1;
    this.ButtonsB9.scaleY=0.1;
    this.stage.addChild(this.ButtonsB9);

    this.ButtonsB10=this.assetManager.getSprite("Buttons","Buttons10",470,350);
    this.ButtonsB10.scaleX=0.1;
    this.ButtonsB10.scaleY=0.1;
    this.stage.addChild(this.ButtonsB10);
}

public resetRowC(){

    this.numCheckC();

    this.ButtonsC1=this.assetManager.getSprite("Buttons","Buttons1",20,400);
    this.ButtonsC1.scaleX=0.1;
    this.ButtonsC1.scaleY=0.1;
    this.stage.addChild(this.ButtonsC1);

    this.ButtonsC2=this.assetManager.getSprite("Buttons","Buttons2",70,400);
    this.ButtonsC2.scaleX=0.1;
    this.ButtonsC2.scaleY=0.1;
    this.stage.addChild(this.ButtonsC2);

    this.ButtonsC3=this.assetManager.getSprite("Buttons","Buttons3",120,400);
    this.ButtonsC3.scaleX=0.1;
    this.ButtonsC3.scaleY=0.1;
    this.stage.addChild(this.ButtonsC3);

    this.ButtonsC4=this.assetManager.getSprite("Buttons","Buttons4",170,400);
    this.ButtonsC4.scaleX=0.1;
    this.ButtonsC4.scaleY=0.1;
    this.stage.addChild(this.ButtonsC4);

    this.ButtonsC5=this.assetManager.getSprite("Buttons","Buttons5",220,400);
    this.ButtonsC5.scaleX=0.1;
    this.ButtonsC5.scaleY=0.1;
    this.stage.addChild(this.ButtonsC5);

    this.ButtonsC6=this.assetManager.getSprite("Buttons","Buttons6",270,400);
    this.ButtonsC6.scaleX=0.1;
    this.ButtonsC6.scaleY=0.1;
    this.stage.addChild(this.ButtonsC6);

    this.ButtonsC7=this.assetManager.getSprite("Buttons","Buttons7",320,400);
    this.ButtonsC7.scaleX=0.1;
    this.ButtonsC7.scaleY=0.1;
    this.stage.addChild(this.ButtonsC7);

    this.ButtonsC8=this.assetManager.getSprite("Buttons","Buttons8",370,400);
    this.ButtonsC8.scaleX=0.1;
    this.ButtonsC8.scaleY=0.1;
    this.stage.addChild(this.ButtonsC8);

    this.ButtonsC9=this.assetManager.getSprite("Buttons","Buttons9",420,400);
    this.ButtonsC9.scaleX=0.1;
    this.ButtonsC9.scaleY=0.1;
    this.stage.addChild(this.ButtonsC9);

    this.ButtonsC10=this.assetManager.getSprite("Buttons","Buttons10",470,400);
    this.ButtonsC10.scaleX=0.1;
    this.ButtonsC10.scaleY=0.1;
    this.stage.addChild(this.ButtonsC10);
}
}