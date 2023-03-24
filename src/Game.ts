// createjs typescript definition for TypeScript
/// <reference path="./../node_modules/@types/createjs/index.d.ts" />

// importing createjs framework
import "createjs";
// importing game constants
import { STAGE_WIDTH, STAGE_HEIGHT, FRAME_RATE, ASSET_MANIFEST } from "./Constants";
import { AssetManager } from "./AssetManager";
import { randomMe } from "./Toolkit";



// game setup variables
let stage:createjs.StageGL;
let canvas:HTMLCanvasElement;
let assetManager:AssetManager;

// game object variables
// ...

//secret numbers for the game

let FirstNum:number;
let SecondNum:number;
let ThirdNum:number;

//other variables for the game...


//game objects

let background:createjs.Sprite;

let ButtonsA1:createjs.Sprite;
let ButtonsA2:createjs.Sprite;
let ButtonsA3:createjs.Sprite;
let ButtonsA4:createjs.Sprite;
let ButtonsA5:createjs.Sprite;
let ButtonsA6:createjs.Sprite;
let ButtonsA7:createjs.Sprite;
let ButtonsA8:createjs.Sprite;
let ButtonsA9:createjs.Sprite;
let ButtonsA10:createjs.Sprite;

let ButtonsB1:createjs.Sprite;
let ButtonsB2:createjs.Sprite;
let ButtonsB3:createjs.Sprite;
let ButtonsB4:createjs.Sprite;
let ButtonsB5:createjs.Sprite;
let ButtonsB6:createjs.Sprite;
let ButtonsB7:createjs.Sprite;
let ButtonsB8:createjs.Sprite;
let ButtonsB9:createjs.Sprite;
let ButtonsB10:createjs.Sprite;

let ButtonsC1:createjs.Sprite;
let ButtonsC2:createjs.Sprite;
let ButtonsC3:createjs.Sprite;
let ButtonsC4:createjs.Sprite;
let ButtonsC5:createjs.Sprite;
let ButtonsC6:createjs.Sprite;
let ButtonsC7:createjs.Sprite;
let ButtonsC8:createjs.Sprite;
let ButtonsC9:createjs.Sprite;
let ButtonsC10:createjs.Sprite;

let Anumber:number;
let Bnumber:number;
let Cnumber:number;

let SelectButtonsA1:createjs.Sprite;
let SelectButtonsA2:createjs.Sprite;
let SelectButtonsA3:createjs.Sprite;
let SelectButtonsA4:createjs.Sprite;
let SelectButtonsA5:createjs.Sprite;
let SelectButtonsA6:createjs.Sprite;
let SelectButtonsA7:createjs.Sprite;
let SelectButtonsA8:createjs.Sprite;
let SelectButtonsA9:createjs.Sprite;
let SelectButtonsA10:createjs.Sprite;

let SelectButtonsB1:createjs.Sprite;
let SelectButtonsB2:createjs.Sprite;
let SelectButtonsB3:createjs.Sprite;
let SelectButtonsB4:createjs.Sprite;
let SelectButtonsB5:createjs.Sprite;
let SelectButtonsB6:createjs.Sprite;
let SelectButtonsB7:createjs.Sprite;
let SelectButtonsB8:createjs.Sprite;
let SelectButtonsB9:createjs.Sprite;
let SelectButtonsB10:createjs.Sprite;

let SelectButtonsC1:createjs.Sprite;
let SelectButtonsC2:createjs.Sprite;
let SelectButtonsC3:createjs.Sprite;
let SelectButtonsC4:createjs.Sprite;
let SelectButtonsC5:createjs.Sprite;
let SelectButtonsC6:createjs.Sprite;
let SelectButtonsC7:createjs.Sprite;
let SelectButtonsC8:createjs.Sprite;
let SelectButtonsC9:createjs.Sprite;
let SelectButtonsC10:createjs.Sprite;


let Alerts1:createjs.Sprite;
let Alerts2:createjs.Sprite;
let Alerts3:createjs.Sprite;

let winA:boolean;
let winB:boolean;
let winC:boolean;

let Victory:createjs.Sprite;

//let VictoryNoise:createjs.Sound;

function winCheck(){
    if (winA==true&&winB==true&&winC==true){
        
        createjs.Sound.play("VictoryNoise");

        console.log("WIN!!");
        Victory=assetManager.getSprite("Victory","Victory",225,470);
        stage.addChild(Victory);
        
        Victory.on("mousedown",Reset);

    }

}

function Reset(){
    //when the game resets the numbers

    Anumber=null;
    Bnumber=null;
    Cnumber=null;

    stage.removeChild(Alerts1);
    stage.removeChild(Alerts2);
    stage.removeChild(Alerts3);
    stage.removeChild(Victory);


    winA=false;

    winB=false;

    winC=false;

    FirstNum = randomMe(1,10);

    console.log("First number is "+ FirstNum);

    SecondNum = randomMe(1,10);

    console.log("Second number is "+ SecondNum);

    ThirdNum = randomMe(1,10);

    console.log("Third number is "+ ThirdNum);


    
    Alerts1=assetManager.getSprite("Alerts","Pico3",0,450);
    Alerts1.scaleX=0.5;
    Alerts1.scaleY=0.5;
    stage.addChild(Alerts1);
    
    Alerts2=assetManager.getSprite("Alerts","Pico3",175,450);
    Alerts2.scaleX=0.5;
    Alerts2.scaleY=0.5;
    stage.addChild(Alerts2);
    
    Alerts3=assetManager.getSprite("Alerts","Pico3",350,450);
    Alerts3.scaleX=0.5;
    Alerts3.scaleY=0.5;
    stage.addChild(Alerts3);
    
    resetRowA();
    resetRowB();
    resetRowC();
}

function numCheckA(){

    if (Anumber==FirstNum){
        //console.log("1");
        Alerts1.gotoAndStop("Pico2");

        createjs.Sound.play("Fermi");
        winA=true;
    }
    
    else if (Anumber==SecondNum){
        //console.log("2");
        Alerts1.gotoAndStop("Pico1");

        createjs.Sound.play("Pico")

        winA=false;
    }
    
    else if (Anumber==ThirdNum){
        //console.log("2");
        Alerts1.gotoAndStop("Pico1");

        createjs.Sound.play("Pico")

        winA=false;
    }

    else if (Anumber!=FirstNum&&Anumber!=SecondNum) {
        //console.log("3");
        Alerts1.gotoAndStop("Pico3");

        createjs.Sound.play("Bagel")

        winA=false;
    }

    winCheck();
}

function numCheckB(){

    if (Bnumber==SecondNum){
        //console.log("1");
        Alerts2.gotoAndStop("Pico2");

        createjs.Sound.play("Fermi");

        winB=true;
    }
    
    else if (Bnumber==FirstNum){
        //console.log("2");
        Alerts2.gotoAndStop("Pico1");

        createjs.Sound.play("Pico")

        winB=false;
    }
    
    else if (Bnumber==ThirdNum){
        
        Alerts2.gotoAndStop("Pico1");

        createjs.Sound.play("Pico")

        winB=false;
    }

    else {
        //console.log("3");
        Alerts2.gotoAndStop("Pico3");

        createjs.Sound.play("Bagel")

        winB=false;
    }

    winCheck();
}

function numCheckC(){

    if (Cnumber==ThirdNum){
        //console.log("1");
        Alerts3.gotoAndStop("Pico2");

        createjs.Sound.play("Fermi");

        winC=true;
    }
    
    else if (Cnumber==SecondNum){
        //console.log("2");
        Alerts3.gotoAndStop("Pico1");

        createjs.Sound.play("Pico")
        winC=false;
    }
    
    else if (Cnumber==FirstNum){
        
        Alerts3.gotoAndStop("Pico1");

        createjs.Sound.play("Pico")

        winC=false;
    }

    else {
        //console.log("3");
        Alerts3.gotoAndStop("Pico3");
        
        createjs.Sound.play("Bagel")

        winC=false;
    }

    winCheck();
}

function A1press(){

    Anumber=1;

    resetRowA();

    stage.removeChild(ButtonsA1);

    SelectButtonsA1=assetManager.getSprite("SelectButtons","SelectButton1",20,300);
    SelectButtonsA1.scaleX=0.1;
    SelectButtonsA1.scaleY=0.1;
    stage.addChild(SelectButtonsA1);
}


function A2press(){
    
    Anumber=2;

    resetRowA();

    stage.removeChild(ButtonsA2);

    SelectButtonsA2=assetManager.getSprite("SelectButtons","SelectButton2",70,300);
    SelectButtonsA2.scaleX=0.1;
    SelectButtonsA2.scaleY=0.1;
    stage.addChild(SelectButtonsA2);
}


function A3press(){

    Anumber=3;

    resetRowA();

    stage.removeChild(ButtonsA3);

    SelectButtonsA3=assetManager.getSprite("SelectButtons","SelectButton3",120,300);
    SelectButtonsA3.scaleX=0.1;
    SelectButtonsA3.scaleY=0.1;
    stage.addChild(SelectButtonsA3);
}


function A4press(){

    Anumber=4;

    resetRowA();

    stage.removeChild(ButtonsA4);

    SelectButtonsA4=assetManager.getSprite("SelectButtons","SelectButton4",170,300);
    SelectButtonsA4.scaleX=0.1;
    SelectButtonsA4.scaleY=0.1;
    stage.addChild(SelectButtonsA4);
}


function A5press(){

    Anumber=5;

    resetRowA();

    stage.removeChild(ButtonsA5);

    SelectButtonsA5=assetManager.getSprite("SelectButtons","SelectButton5",220,300);
    SelectButtonsA5.scaleX=0.1;
    SelectButtonsA5.scaleY=0.1;
    stage.addChild(SelectButtonsA5);
}


function A6press(){

    Anumber=6;

    resetRowA();

    stage.removeChild(ButtonsA6);

    SelectButtonsA6=assetManager.getSprite("SelectButtons","SelectButton6",270,300);
    SelectButtonsA6.scaleX=0.1;
    SelectButtonsA6.scaleY=0.1;
    stage.addChild(SelectButtonsA6);
}


function A7press(){

    Anumber=7;

    resetRowA();

    stage.removeChild(ButtonsA7);

    SelectButtonsA7=assetManager.getSprite("SelectButtons","SelectButton7",320,300);
    SelectButtonsA7.scaleX=0.1;
    SelectButtonsA7.scaleY=0.1;
    stage.addChild(SelectButtonsA7);
}


function A8press(){

    Anumber=8;

    resetRowA();

    stage.removeChild(ButtonsA8);

    SelectButtonsA8=assetManager.getSprite("SelectButtons","SelectButton8",370,300);
    SelectButtonsA8.scaleX=0.1;
    SelectButtonsA8.scaleY=0.1;
    stage.addChild(SelectButtonsA8);
}


function A9press(){

    Anumber=9;

    resetRowA();

    stage.removeChild(ButtonsA9);

    SelectButtonsA9=assetManager.getSprite("SelectButtons","SelectButton9",420,300);
    SelectButtonsA9.scaleX=0.1;
    SelectButtonsA9.scaleY=0.1;
    stage.addChild(SelectButtonsA9);
}


function A10press(){

    Anumber=10;

    resetRowA();

    stage.removeChild(ButtonsA10);

    SelectButtonsA10=assetManager.getSprite("SelectButtons","SelectButton10",470,300);
    SelectButtonsA10.scaleX=0.1;
    SelectButtonsA10.scaleY=0.1;
    stage.addChild(SelectButtonsA10);
}


function B1press(){

    Bnumber=1;

    resetRowB();

    stage.removeChild(ButtonsB1);

    SelectButtonsB1=assetManager.getSprite("SelectButtons","SelectButton1",20,350);
    SelectButtonsB1.scaleX=0.1;
    SelectButtonsB1.scaleY=0.1;
    stage.addChild(SelectButtonsB1);
}


function B2press(){

    Bnumber=2;

    resetRowB();

    stage.removeChild(ButtonsB2);

    SelectButtonsB2=assetManager.getSprite("SelectButtons","SelectButton2",70,350);
    SelectButtonsB2.scaleX=0.1;
    SelectButtonsB2.scaleY=0.1;
    stage.addChild(SelectButtonsB2);
}


function B3press(){

    Bnumber=3;

    resetRowB();

    stage.removeChild(ButtonsB3);

    SelectButtonsB3=assetManager.getSprite("SelectButtons","SelectButton3",120,350);
    SelectButtonsB3.scaleX=0.1;
    SelectButtonsB3.scaleY=0.1;
    stage.addChild(SelectButtonsB3);
}


function B4press(){

    Bnumber=4;

    resetRowB();

    stage.removeChild(ButtonsB4);

    SelectButtonsB4=assetManager.getSprite("SelectButtons","SelectButton4",170,350);
    SelectButtonsB4.scaleX=0.1;
    SelectButtonsB4.scaleY=0.1;
    stage.addChild(SelectButtonsB4);
}


function B5press(){

    Bnumber=5;

    resetRowB();

    stage.removeChild(ButtonsB5);

    SelectButtonsB5=assetManager.getSprite("SelectButtons","SelectButton5",220,350);
    SelectButtonsB5.scaleX=0.1;
    SelectButtonsB5.scaleY=0.1;
    stage.addChild(SelectButtonsB5);
}


function B6press(){

    Bnumber=6;

    resetRowB();

    stage.removeChild(ButtonsB6);

    SelectButtonsB6=assetManager.getSprite("SelectButtons","SelectButton6",270,350);
    SelectButtonsB6.scaleX=0.1;
    SelectButtonsB6.scaleY=0.1;
    stage.addChild(SelectButtonsB6);
}


function B7press(){

    Bnumber=7;

    resetRowB();

    stage.removeChild(ButtonsB7);

    SelectButtonsB7=assetManager.getSprite("SelectButtons","SelectButton7",320,350);
    SelectButtonsB7.scaleX=0.1;
    SelectButtonsB7.scaleY=0.1;
    stage.addChild(SelectButtonsB7);
}


function B8press(){

    Bnumber=8;

    resetRowB();

    stage.removeChild(ButtonsB8);

    SelectButtonsB8=assetManager.getSprite("SelectButtons","SelectButton8",370,350);
    SelectButtonsB8.scaleX=0.1;
    SelectButtonsB8.scaleY=0.1;
    stage.addChild(SelectButtonsB8);
}


function B9press(){

    Bnumber=9;

    resetRowB();

    stage.removeChild(ButtonsB9);

    SelectButtonsB9=assetManager.getSprite("SelectButtons","SelectButton9",420,350);
    SelectButtonsB9.scaleX=0.1;
    SelectButtonsB9.scaleY=0.1;
    stage.addChild(SelectButtonsB9);
}


function B10press(){

    Bnumber=10;

    resetRowB();

    stage.removeChild(ButtonsB10);

    SelectButtonsB10=assetManager.getSprite("SelectButtons","SelectButton10",470,350);
    SelectButtonsB10.scaleX=0.1;
    SelectButtonsB10.scaleY=0.1;
    stage.addChild(SelectButtonsB10);
}


function C1press(){

    Cnumber=1;

    resetRowC();

    stage.removeChild(ButtonsC1);

    SelectButtonsC1=assetManager.getSprite("SelectButtons","SelectButton1",20,400);
    SelectButtonsC1.scaleX=0.1;
    SelectButtonsC1.scaleY=0.1;
    stage.addChild(SelectButtonsC1);
}


function C2press(){

    Cnumber=2;

    resetRowC();

    stage.removeChild(ButtonsC2);

    SelectButtonsC2=assetManager.getSprite("SelectButtons","SelectButton2",70,400);
    SelectButtonsC2.scaleX=0.1;
    SelectButtonsC2.scaleY=0.1;
    stage.addChild(SelectButtonsC2);
}


function C3press(){

    Cnumber=3;

    resetRowC();

    stage.removeChild(ButtonsC3);

    SelectButtonsC3=assetManager.getSprite("SelectButtons","SelectButton3",120,400);
    SelectButtonsC3.scaleX=0.1;
    SelectButtonsC3.scaleY=0.1;
    stage.addChild(SelectButtonsC3);
}


function C4press(){

    Cnumber=4;

    resetRowC();

    stage.removeChild(ButtonsC4);

    SelectButtonsC4=assetManager.getSprite("SelectButtons","SelectButton4",170,400);
    SelectButtonsC4.scaleX=0.1;
    SelectButtonsC4.scaleY=0.1;
    stage.addChild(SelectButtonsC4);
}


function C5press(){

    Cnumber=5;

    resetRowC();

    stage.removeChild(ButtonsC5);

    SelectButtonsC5=assetManager.getSprite("SelectButtons","SelectButton5",220,400);
    SelectButtonsC5.scaleX=0.1;
    SelectButtonsC5.scaleY=0.1;
    stage.addChild(SelectButtonsC5);
}


function C6press(){

    Cnumber=6;

    resetRowC();

    stage.removeChild(ButtonsC6);

    SelectButtonsC6=assetManager.getSprite("SelectButtons","SelectButton6",270,400);
    SelectButtonsC6.scaleX=0.1;
    SelectButtonsC6.scaleY=0.1;
    stage.addChild(SelectButtonsC6);
}


function C7press(){

    Cnumber=7;

    resetRowC();

    stage.removeChild(ButtonsC7);

    SelectButtonsC7=assetManager.getSprite("SelectButtons","SelectButton7",320,400);
    SelectButtonsC7.scaleX=0.1;
    SelectButtonsC7.scaleY=0.1;
    stage.addChild(SelectButtonsC7);
}


function C8press(){

    Cnumber=8;

    resetRowC();

    stage.removeChild(ButtonsC8);

    SelectButtonsC8=assetManager.getSprite("SelectButtons","SelectButton8",370,400);
    SelectButtonsC8.scaleX=0.1;
    SelectButtonsC8.scaleY=0.1;
    stage.addChild(SelectButtonsC8);
}


function C9press(){

    Cnumber=9;

    resetRowC();

    stage.removeChild(ButtonsC9);

    SelectButtonsC9=assetManager.getSprite("SelectButtons","SelectButton9",420,400);
    SelectButtonsC9.scaleX=0.1;
    SelectButtonsC9.scaleY=0.1;
    stage.addChild(SelectButtonsC9);
}


function C10press(){

    Cnumber=10;

    resetRowC();

    stage.removeChild(ButtonsC10);

    SelectButtonsC10=assetManager.getSprite("SelectButtons","SelectButton10",470,400);
    SelectButtonsC10.scaleX=0.1;
    SelectButtonsC10.scaleY=0.1;
    stage.addChild(SelectButtonsC10);
}


function resetRowA(){

    numCheckA();

    ButtonsA1=assetManager.getSprite("Buttons","Buttons1",20,300);
    ButtonsA1.scaleX=0.1;
    ButtonsA1.scaleY=0.1;
    stage.addChild(ButtonsA1);

    ButtonsA2=assetManager.getSprite("Buttons","Buttons2",70,300);
    ButtonsA2.scaleX=0.1;
    ButtonsA2.scaleY=0.1;
    stage.addChild(ButtonsA2);

    ButtonsA3=assetManager.getSprite("Buttons","Buttons3",120,300);
    ButtonsA3.scaleX=0.1;
    ButtonsA3.scaleY=0.1;
    stage.addChild(ButtonsA3);

    ButtonsA4=assetManager.getSprite("Buttons","Buttons4",170,300);
    ButtonsA4.scaleX=0.1;
    ButtonsA4.scaleY=0.1;
    stage.addChild(ButtonsA4);

    ButtonsA5=assetManager.getSprite("Buttons","Buttons5",220,300);
    ButtonsA5.scaleX=0.1;
    ButtonsA5.scaleY=0.1;
    stage.addChild(ButtonsA5);

    ButtonsA6=assetManager.getSprite("Buttons","Buttons6",270,300);
    ButtonsA6.scaleX=0.1;
    ButtonsA6.scaleY=0.1;
    stage.addChild(ButtonsA6);

    ButtonsA7=assetManager.getSprite("Buttons","Buttons7",320,300);
    ButtonsA7.scaleX=0.1;
    ButtonsA7.scaleY=0.1;
    stage.addChild(ButtonsA7);

    ButtonsA8=assetManager.getSprite("Buttons","Buttons8",370,300);
    ButtonsA8.scaleX=0.1;
    ButtonsA8.scaleY=0.1;
    stage.addChild(ButtonsA8);

    ButtonsA9=assetManager.getSprite("Buttons","Buttons9",420,300);
    ButtonsA9.scaleX=0.1;
    ButtonsA9.scaleY=0.1;
    stage.addChild(ButtonsA9);

    ButtonsA10=assetManager.getSprite("Buttons","Buttons10",470,300);
    ButtonsA10.scaleX=0.1;
    ButtonsA10.scaleY=0.1;
    stage.addChild(ButtonsA10);
}

function resetRowB(){

    numCheckB();

    ButtonsB1=assetManager.getSprite("Buttons","Buttons1",20,350);
    ButtonsB1.scaleX=0.1;
    ButtonsB1.scaleY=0.1;
    stage.addChild(ButtonsB1);

    ButtonsB2=assetManager.getSprite("Buttons","Buttons2",70,350);
    ButtonsB2.scaleX=0.1;
    ButtonsB2.scaleY=0.1;
    stage.addChild(ButtonsB2);

    ButtonsB3=assetManager.getSprite("Buttons","Buttons3",120,350);
    ButtonsB3.scaleX=0.1;
    ButtonsB3.scaleY=0.1;
    stage.addChild(ButtonsB3);

    ButtonsB4=assetManager.getSprite("Buttons","Buttons4",170,350);
    ButtonsB4.scaleX=0.1;
    ButtonsB4.scaleY=0.1;
    stage.addChild(ButtonsB4);

    ButtonsB5=assetManager.getSprite("Buttons","Buttons5",220,350);
    ButtonsB5.scaleX=0.1;
    ButtonsB5.scaleY=0.1;
    stage.addChild(ButtonsB5);

    ButtonsB6=assetManager.getSprite("Buttons","Buttons6",270,350);
    ButtonsB6.scaleX=0.1;
    ButtonsB6.scaleY=0.1;
    stage.addChild(ButtonsB6);

    ButtonsB7=assetManager.getSprite("Buttons","Buttons7",320,350);
    ButtonsB7.scaleX=0.1;
    ButtonsB7.scaleY=0.1;
    stage.addChild(ButtonsB7);

    ButtonsB8=assetManager.getSprite("Buttons","Buttons8",370,350);
    ButtonsB8.scaleX=0.1;
    ButtonsB8.scaleY=0.1;
    stage.addChild(ButtonsB8);

    ButtonsB9=assetManager.getSprite("Buttons","Buttons9",420,350);
    ButtonsB9.scaleX=0.1;
    ButtonsB9.scaleY=0.1;
    stage.addChild(ButtonsB9);

    ButtonsB10=assetManager.getSprite("Buttons","Buttons10",470,350);
    ButtonsB10.scaleX=0.1;
    ButtonsB10.scaleY=0.1;
    stage.addChild(ButtonsB10);
}

function resetRowC(){

    numCheckC();

    ButtonsC1=assetManager.getSprite("Buttons","Buttons1",20,400);
    ButtonsC1.scaleX=0.1;
    ButtonsC1.scaleY=0.1;
    stage.addChild(ButtonsC1);

    ButtonsC2=assetManager.getSprite("Buttons","Buttons2",70,400);
    ButtonsC2.scaleX=0.1;
    ButtonsC2.scaleY=0.1;
    stage.addChild(ButtonsC2);

    ButtonsC3=assetManager.getSprite("Buttons","Buttons3",120,400);
    ButtonsC3.scaleX=0.1;
    ButtonsC3.scaleY=0.1;
    stage.addChild(ButtonsC3);

    ButtonsC4=assetManager.getSprite("Buttons","Buttons4",170,400);
    ButtonsC4.scaleX=0.1;
    ButtonsC4.scaleY=0.1;
    stage.addChild(ButtonsC4);

    ButtonsC5=assetManager.getSprite("Buttons","Buttons5",220,400);
    ButtonsC5.scaleX=0.1;
    ButtonsC5.scaleY=0.1;
    stage.addChild(ButtonsC5);

    ButtonsC6=assetManager.getSprite("Buttons","Buttons6",270,400);
    ButtonsC6.scaleX=0.1;
    ButtonsC6.scaleY=0.1;
    stage.addChild(ButtonsC6);

    ButtonsC7=assetManager.getSprite("Buttons","Buttons7",320,400);
    ButtonsC7.scaleX=0.1;
    ButtonsC7.scaleY=0.1;
    stage.addChild(ButtonsC7);

    ButtonsC8=assetManager.getSprite("Buttons","Buttons8",370,400);
    ButtonsC8.scaleX=0.1;
    ButtonsC8.scaleY=0.1;
    stage.addChild(ButtonsC8);

    ButtonsC9=assetManager.getSprite("Buttons","Buttons9",420,400);
    ButtonsC9.scaleX=0.1;
    ButtonsC9.scaleY=0.1;
    stage.addChild(ButtonsC9);

    ButtonsC10=assetManager.getSprite("Buttons","Buttons10",470,400);
    ButtonsC10.scaleX=0.1;
    ButtonsC10.scaleY=0.1;
    stage.addChild(ButtonsC10);
}

// --------------------------------------------------- event handler
function onReady(e:createjs.Event):void {
    console.log(">> all assets loaded – ready to add sprites to game");

    
    // construct game objects here
    // ...
    
    background=assetManager.getSprite("background","WallPaper");
    stage.addChild(background);
    
    Reset();

    ButtonsA1.on("mousedown",A1press);
    ButtonsA2.on("mousedown",A2press);
    ButtonsA3.on("mousedown",A3press);
    ButtonsA4.on("mousedown",A4press);
    ButtonsA5.on("mousedown",A5press);
    ButtonsA6.on("mousedown",A6press);
    ButtonsA7.on("mousedown",A7press);
    ButtonsA8.on("mousedown",A8press);
    ButtonsA9.on("mousedown",A9press);
    ButtonsA10.on("mousedown",A10press);

    ButtonsB1.on("mousedown",B1press);
    ButtonsB2.on("mousedown",B2press);
    ButtonsB3.on("mousedown",B3press);
    ButtonsB4.on("mousedown",B4press);
    ButtonsB5.on("mousedown",B5press);
    ButtonsB6.on("mousedown",B6press);
    ButtonsB7.on("mousedown",B7press);
    ButtonsB8.on("mousedown",B8press);
    ButtonsB9.on("mousedown",B9press);
    ButtonsB10.on("mousedown",B10press);

    ButtonsC1.on("mousedown",C1press);
    ButtonsC2.on("mousedown",C2press);
    ButtonsC3.on("mousedown",C3press);
    ButtonsC4.on("mousedown",C4press);
    ButtonsC5.on("mousedown",C5press);
    ButtonsC6.on("mousedown",C6press);
    ButtonsC7.on("mousedown",C7press);
    ButtonsC8.on("mousedown",C8press);
    ButtonsC9.on("mousedown",C9press);
    ButtonsC10.on("mousedown",C10press);


    // startup the ticker
    createjs.Ticker.framerate = FRAME_RATE;
    createjs.Ticker.on("tick", onTick);        
    console.log(">> game ready");
}

function onTick(e:createjs.Event) {
    // displaying frames per second - comment this out when game is published
    document.getElementById("fps").innerHTML = String(createjs.Ticker.getMeasuredFPS());

    // this is your game loop!
    // ...

    // update the stage
    stage.update();
}

// --------------------------------------------------- main method
function main():void {
    console.log(">> game initialization");
    // get reference to canvas
    canvas = <HTMLCanvasElement> document.getElementById("game-canvas");
    // set canvas width and height - this will be the stage size
    canvas.width = STAGE_WIDTH;
    canvas.height = STAGE_HEIGHT;    

    // create stage object
    stage = new createjs.StageGL(canvas, { antialias: true });

    // AssetManager setup
    assetManager = new AssetManager(stage);
    stage.on("allAssetsLoaded", onReady, null, true);
    // load the assets
    assetManager.loadAssets(ASSET_MANIFEST);
}

main();