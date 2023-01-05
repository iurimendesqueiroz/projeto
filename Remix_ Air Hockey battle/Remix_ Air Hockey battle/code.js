var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var striker = createSprite(200,200,12,12);

striker.shapeColor = "white";

var border1 = createSprite(385,200,5,395);
var border2 = createSprite(200,11,395,5);
var border3 = createSprite(14,200,5,395);
var border4 = createSprite(200,389,395,5);

border1.shapeColor = "white";
border2.shapeColor = "white";
border3.shapeColor = "white";
border4.shapeColor = "white";

var secondborder1 = createSprite(200,25,395,5);
var secondborder2= createSprite(200,375,395,5);

secondborder1.shapeColor = "white";
secondborder2.shapeColor = "white";

var goal1 = createSprite(200,38,100,20);
var goal2 = createSprite(200,362,100,20);

goal1.shapeColor = "yellow";
goal2.shapeColor = "yellow";


var netline1 = createSprite(200,150,395,5);
var netline2 = createSprite(200,250,395,5);
netline1.shapeColor = "white";
netline2.shapeColor = "white";

var playerMallet = createSprite(200,345,50,10);
playerMallet.shapeColor = "black";

var computerMallet = createSprite(200,55,50,10);
computerMallet.shapeColor = "black";

var computerscore = 0;
var playerscore = 0;
var gameState = "serve";

function draw() {
  background("green");
  fill("yellow");
  text(playerscore,28,225);
  text(computerscore,28,175);
  
  if(gameState === "serve") {
  textSize(24);
  fill("yellow");
    text("pressione 'space' para serve",91,179);
  }
  if(computerscore === 5 || playerscore === 5){
   gameState = "over";
  textSize(18);
   text("fim de jogo' pressione 'r' para reiniciar",120,180);
 }  
 if(keyDown("R")){
   gameState = "serve";
   computerscore = 0;
   pontuação = 0;
 }
 
computerMallet.x = striker.x;
 
  if(keyDown("LEFT")){
    playerMallet.x = playerMallet.x-7;
  }
  if(keyDown("RIGHT")){
    playerMallet.x = playerMallet.x+7;
  }
    
for (var a = 0; a < 400; a=a+20)
{
line(a,200,a+10,200);
}

  createEdgeSprites();
  striker.bounceOff(border1);
  striker.bounceOff(border2);
  striker.bounceOff(border3);
  striker.bounceOff(border4);
  striker.bounceOff(secondborder1);
  striker.bounceOff(secondborder2);
  striker.bounceOff(computerMallet);
  striker.bounceOff(playerMallet);
  
  computerMallet.bounceOff(border1);
  computerMallet.bounceOff(border2);
  computerMallet.bounceOff(border3);
  computerMallet.bounceOff(border4);
  
  playerMallet.bounceOff(border1);
  playerMallet.bounceOff(border2);
  playerMallet.bounceOff(border3);
  playerMallet.bounceOff(border4);
  playerMallet.bounceOff(secondborder1);
  playerMallet.bounceOff(secondborder2);
  playerMallet.bounceOff(secondborder2);
  playerMallet.bounceOff(netline2);
  playerMallet.bounceOff(goal2);

  if (keyDown("space") && gameState === "serve") {
    serve();
    gameState = "play";
  }
  
  
  if(striker.isTouching(goal1)|| striker.isTouching(goal2))
  {
    if(striker.isTouching(goal1))
    {
     playerscore = playerscore+1;
    }
   
    if(striker.isTouching(goal2))
    {
      computerscore = computerscore+1;
    }
    reset();
    gameState = "serve";
  }
  
  
  drawSprites();
}


function serve() {
  striker.velocityX = 5;
  striker.velocityY = 5;
}

function reset() {
  striker.x = 200;
  striker.y = 200;
  striker.velocityX = 0;
  striker.velocityY = 0;
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
