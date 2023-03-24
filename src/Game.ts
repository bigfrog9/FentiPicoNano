// createjs typescript definition for TypeScript
/// <reference path="./../node_modules/@types/createjs/index.d.ts" />

// importing createjs framework
import "createjs";
// importing game constants
import { STAGE_WIDTH, STAGE_HEIGHT, FRAME_RATE, ASSET_MANIFEST } from "./Constants";
import { AssetManager } from "./AssetManager";
import { randomMe } from "./Toolkit";

import { Buttons } from "./Buttons";


// game setup variables
let stage:createjs.StageGL;
let canvas:HTMLCanvasElement;
let assetManager:AssetManager;

// game object variables
// ...


//game objects

let background:createjs.Sprite;
let buttons:Buttons;

// --------------------------------------------------- event handler
function onReady(e:createjs.Event):void {
    console.log(">> all assets loaded – ready to add sprites to game");

    buttons=new Buttons(stage,assetManager);
    
    // construct game objects here
    // ...
    
    background=assetManager.getSprite("background","WallPaper");
    stage.addChild(background);
    
    buttons.Reset();

    buttons.ButtonsA1.on("mousedown",buttons.A1press, buttons);
    buttons.ButtonsA2.on("mousedown",buttons.A2press,buttons);
    buttons.ButtonsA3.on("mousedown",buttons.A3press,buttons);
    buttons.ButtonsA4.on("mousedown",buttons.A4press,buttons);
    buttons.ButtonsA5.on("mousedown",buttons.A5press,buttons);
    buttons.ButtonsA6.on("mousedown",buttons.A6press,buttons);
    buttons.ButtonsA7.on("mousedown",buttons.A7press,buttons);
    buttons.ButtonsA8.on("mousedown",buttons.A8press,buttons);
    buttons.ButtonsA9.on("mousedown",buttons.A9press,buttons);
    buttons.ButtonsA10.on("mousedown",buttons.A10press,buttons);

    buttons.ButtonsB1.on("mousedown",buttons.B1press,buttons);
    buttons.ButtonsB2.on("mousedown",buttons.B2press,buttons);
    buttons.ButtonsB3.on("mousedown",buttons.B3press,buttons);
    buttons.ButtonsB4.on("mousedown",buttons.B4press,buttons);
    buttons.ButtonsB5.on("mousedown",buttons.B5press,buttons);
    buttons.ButtonsB6.on("mousedown",buttons.B6press,buttons);
    buttons.ButtonsB7.on("mousedown",buttons.B7press,buttons);
    buttons.ButtonsB8.on("mousedown",buttons.B8press,buttons);
    buttons.ButtonsB9.on("mousedown",buttons.B9press,buttons);
    buttons.ButtonsB10.on("mousedown",buttons.B10press,buttons);

    buttons.ButtonsC1.on("mousedown",buttons.C1press,buttons);
    buttons.ButtonsC2.on("mousedown",buttons.C2press,buttons);
    buttons.ButtonsC3.on("mousedown",buttons.C3press,buttons);
    buttons.ButtonsC4.on("mousedown",buttons.C4press,buttons);
    buttons.ButtonsC5.on("mousedown",buttons.C5press,buttons);
    buttons.ButtonsC6.on("mousedown",buttons.C6press,buttons);
    buttons.ButtonsC7.on("mousedown",buttons.C7press,buttons);
    buttons.ButtonsC8.on("mousedown",buttons.C8press,buttons);
    buttons.ButtonsC9.on("mousedown",buttons.C9press,buttons);
    buttons.ButtonsC10.on("mousedown",buttons.C10press,buttons);


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