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

let A1num:number;
let A2num:number;
let A3num:number;
let A4num:number;
let A5num:number;
let A6num:number;
let A7num:number;
let A8num:number;
let A9num:number;
let A10num:number;


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


function Reset(){
    //when the game resets the numbers

    FirstNum = randomMe(1,10);

    SecondNum = randomMe(1,10);

    ThirdNum = randomMe(1,10);

    resetRowA();
    resetRowB();
    resetRowC();
}

function numCheck(){

}

function A1press(){

    resetRowA();
    stage.removeChild(ButtonsA1);

    SelectButtonsA1=assetManager.getSprite("SelectButtons","SelectButton1",20,300);
    SelectButtonsA1.scaleX=0.1;
    SelectButtonsA1.scaleY=0.1;
    stage.addChild(SelectButtonsA1);
}


function A2press(){
    
    resetRowA();
    stage.removeChild(ButtonsA2);

    SelectButtonsA2=assetManager.getSprite("SelectButtons","SelectButton2",70,300);
    SelectButtonsA2.scaleX=0.1;
    SelectButtonsA2.scaleY=0.1;
    stage.addChild(SelectButtonsA2);
}


function A3press(){

    resetRowA();

    stage.removeChild(ButtonsA3);

    SelectButtonsA3=assetManager.getSprite("SelectButtons","SelectButton3",120,300);
    SelectButtonsA3.scaleX=0.1;
    SelectButtonsA3.scaleY=0.1;
    stage.addChild(SelectButtonsA3);
}


function A4press(){

    resetRowA();

    stage.removeChild(ButtonsA4);

    SelectButtonsA4=assetManager.getSprite("SelectButtons","SelectButton4",170,300);
    SelectButtonsA4.scaleX=0.1;
    SelectButtonsA4.scaleY=0.1;
    stage.addChild(SelectButtonsA4);
}


function A5press(){

    resetRowA();

    stage.removeChild(ButtonsA5);

    SelectButtonsA5=assetManager.getSprite("SelectButtons","SelectButton5",220,300);
    SelectButtonsA5.scaleX=0.1;
    SelectButtonsA5.scaleY=0.1;
    stage.addChild(SelectButtonsA5);
}


function A6press(){

    resetRowA();

    stage.removeChild(ButtonsA6);

    SelectButtonsA6=assetManager.getSprite("SelectButtons","SelectButton6",270,300);
    SelectButtonsA6.scaleX=0.1;
    SelectButtonsA6.scaleY=0.1;
    stage.addChild(SelectButtonsA6);
}


function A7press(){

    resetRowA();

    stage.removeChild(ButtonsA7);

    SelectButtonsA7=assetManager.getSprite("SelectButtons","SelectButton7",320,300);
    SelectButtonsA7.scaleX=0.1;
    SelectButtonsA7.scaleY=0.1;
    stage.addChild(SelectButtonsA7);
}


function A8press(){

    resetRowA();

    stage.removeChild(ButtonsA8);

    SelectButtonsA8=assetManager.getSprite("SelectButtons","SelectButton8",370,300);
    SelectButtonsA8.scaleX=0.1;
    SelectButtonsA8.scaleY=0.1;
    stage.addChild(SelectButtonsA8);
}


function A9press(){

    resetRowA();

    stage.removeChild(ButtonsA9);

    SelectButtonsA9=assetManager.getSprite("SelectButtons","SelectButton9",420,300);
    SelectButtonsA9.scaleX=0.1;
    SelectButtonsA9.scaleY=0.1;
    stage.addChild(SelectButtonsA9);
}


function A10press(){

    resetRowA();

    stage.removeChild(ButtonsA10);

    SelectButtonsA10=assetManager.getSprite("SelectButtons","SelectButton10",470,300);
    SelectButtonsA10.scaleX=0.1;
    SelectButtonsA10.scaleY=0.1;
    stage.addChild(SelectButtonsA10);
}


function B1press(){

    resetRowB();

    stage.removeChild(ButtonsB1);

    SelectButtonsB1=assetManager.getSprite("SelectButtons","SelectButton1",20,350);
    SelectButtonsB1.scaleX=0.1;
    SelectButtonsB1.scaleY=0.1;
    stage.addChild(SelectButtonsB1);
}


function B2press(){

    resetRowB();

    stage.removeChild(ButtonsB2);

    SelectButtonsB2=assetManager.getSprite("SelectButtons","SelectButton2",70,350);
    SelectButtonsB2.scaleX=0.1;
    SelectButtonsB2.scaleY=0.1;
    stage.addChild(SelectButtonsB2);
}


function B3press(){

    resetRowB();

    stage.removeChild(ButtonsB3);

    SelectButtonsB3=assetManager.getSprite("SelectButtons","SelectButton3",120,350);
    SelectButtonsB3.scaleX=0.1;
    SelectButtonsB3.scaleY=0.1;
    stage.addChild(SelectButtonsB3);
}


function B4press(){

    resetRowB();

    stage.removeChild(ButtonsB4);

    SelectButtonsB4=assetManager.getSprite("SelectButtons","SelectButton4",170,350);
    SelectButtonsB4.scaleX=0.1;
    SelectButtonsB4.scaleY=0.1;
    stage.addChild(SelectButtonsB4);
}


function B5press(){

    resetRowB();

    stage.removeChild(ButtonsB5);

    SelectButtonsB5=assetManager.getSprite("SelectButtons","SelectButton5",220,350);
    SelectButtonsB5.scaleX=0.1;
    SelectButtonsB5.scaleY=0.1;
    stage.addChild(SelectButtonsB5);
}


function B6press(){

    resetRowB();

    stage.removeChild(ButtonsB6);

    SelectButtonsB6=assetManager.getSprite("SelectButtons","SelectButton6",270,350);
    SelectButtonsB6.scaleX=0.1;
    SelectButtonsB6.scaleY=0.1;
    stage.addChild(SelectButtonsB6);
}


function B7press(){

    resetRowB();

    stage.removeChild(ButtonsB7);

    SelectButtonsB7=assetManager.getSprite("SelectButtons","SelectButton7",320,350);
    SelectButtonsB7.scaleX=0.1;
    SelectButtonsB7.scaleY=0.1;
    stage.addChild(SelectButtonsB7);
}


function B8press(){

    resetRowB();

    stage.removeChild(ButtonsB8);

    SelectButtonsB8=assetManager.getSprite("SelectButtons","SelectButton8",370,350);
    SelectButtonsB8.scaleX=0.1;
    SelectButtonsB8.scaleY=0.1;
    stage.addChild(SelectButtonsB8);
}


function B9press(){

    resetRowB();

    stage.removeChild(ButtonsB9);

    SelectButtonsB9=assetManager.getSprite("SelectButtons","SelectButton9",420,350);
    SelectButtonsB9.scaleX=0.1;
    SelectButtonsB9.scaleY=0.1;
    stage.addChild(SelectButtonsB9);
}


function B10press(){

    resetRowB();

    stage.removeChild(ButtonsB10);

    SelectButtonsB10=assetManager.getSprite("SelectButtons","SelectButton10",470,350);
    SelectButtonsB10.scaleX=0.1;
    SelectButtonsB10.scaleY=0.1;
    stage.addChild(SelectButtonsB10);
}


function C1press(){

    resetRowC();

    stage.removeChild(ButtonsC1);

    SelectButtonsC1=assetManager.getSprite("SelectButtons","SelectButton1",20,400);
    SelectButtonsC1.scaleX=0.1;
    SelectButtonsC1.scaleY=0.1;
    stage.addChild(SelectButtonsC1);
}


function C2press(){

    resetRowC();

    stage.removeChild(ButtonsC2);

    SelectButtonsC2=assetManager.getSprite("SelectButtons","SelectButton2",70,400);
    SelectButtonsC2.scaleX=0.1;
    SelectButtonsC2.scaleY=0.1;
    stage.addChild(SelectButtonsC2);
}


function C3press(){

    resetRowC();

    stage.removeChild(ButtonsC3);

    SelectButtonsC3=assetManager.getSprite("SelectButtons","SelectButton3",120,400);
    SelectButtonsC3.scaleX=0.1;
    SelectButtonsC3.scaleY=0.1;
    stage.addChild(SelectButtonsC3);
}


function C4press(){

    resetRowC();

    stage.removeChild(ButtonsC4);

    SelectButtonsC4=assetManager.getSprite("SelectButtons","SelectButton4",170,400);
    SelectButtonsC4.scaleX=0.1;
    SelectButtonsC4.scaleY=0.1;
    stage.addChild(SelectButtonsC4);
}


function C5press(){

    resetRowC();

    stage.removeChild(ButtonsC5);

    SelectButtonsC5=assetManager.getSprite("SelectButtons","SelectButton5",220,400);
    SelectButtonsC5.scaleX=0.1;
    SelectButtonsC5.scaleY=0.1;
    stage.addChild(SelectButtonsC5);
}


function C6press(){

    resetRowC();

    stage.removeChild(ButtonsC6);

    SelectButtonsC6=assetManager.getSprite("SelectButtons","SelectButton6",270,400);
    SelectButtonsC6.scaleX=0.1;
    SelectButtonsC6.scaleY=0.1;
    stage.addChild(SelectButtonsC6);
}


function C7press(){

    resetRowC();

    stage.removeChild(ButtonsC7);

    SelectButtonsC7=assetManager.getSprite("SelectButtons","SelectButton7",320,400);
    SelectButtonsC7.scaleX=0.1;
    SelectButtonsC7.scaleY=0.1;
    stage.addChild(SelectButtonsC7);
}


function C8press(){

    resetRowC();

    stage.removeChild(ButtonsC8);

    SelectButtonsC8=assetManager.getSprite("SelectButtons","SelectButton8",370,400);
    SelectButtonsC8.scaleX=0.1;
    SelectButtonsC8.scaleY=0.1;
    stage.addChild(SelectButtonsC8);
}


function C9press(){

    resetRowC();

    stage.removeChild(ButtonsC9);

    SelectButtonsC9=assetManager.getSprite("SelectButtons","SelectButton9",420,400);
    SelectButtonsC9.scaleX=0.1;
    SelectButtonsC9.scaleY=0.1;
    stage.addChild(SelectButtonsC9);
}


function C10press(){

    resetRowC();

    stage.removeChild(ButtonsC10);

    SelectButtonsC10=assetManager.getSprite("SelectButtons","SelectButton10",470,400);
    SelectButtonsC10.scaleX=0.1;
    SelectButtonsC10.scaleY=0.1;
    stage.addChild(SelectButtonsC10);
}


function resetRowA(){
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