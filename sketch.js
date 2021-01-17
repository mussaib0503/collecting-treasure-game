var sword;
var fruitGroup,fruit1,fruit2,fruit3,fruit4;
 var score=0;   
 var monster,monsterImage;   
 var gameOverImage;   
 var enemyGroup;
var gameOverImage;
var PLAY=1;
var END=0;
var gameState=1;
var knifeSound;
var gameOverSound;
function preload(){
swordImage=loadImage("sword.png");  
fruit1=loadImage("fruit1.png");
fruit2=loadImage("fruit2.png");  
fruit3=loadImage("fruit3.png");  
 fruit4=loadImage("fruit4.png");
 monsterImage=loadImage("alien2.png");
 gameOverImage=loadImage("gameover.png");
 knifeSound=loadSound("knifeSwooshSound.mp3");
 gameOverSound=loadSound("gameover.mp3") ;
}
function setup(){
 createCanvas(500,400) ;
 sword=createSprite(40,200,20,20); 
sword.addImage(swordImage);
 
sword.scale=0.5;
fruitGroup=createGroup();
enemyGroup=createGroup();  
score=0;

}
function draw(){
background(200);
if(gameState===PLAY) {
 if(World.frameCount%80===0){
 fruit=createSprite(400,200,20,20) ;
 fruit.scale=0.2;
 r=Math.round (random(1,4));
 if(r==1){
 fruit.addImage(fruit1);  
 } else if(r==2){
  fruit.addImage(fruit2) ;
 } else if(r==3){
  fruit.addImage(fruit3); 
 } else {
  fruit.addImage(fruit4);
 } 
 fruit.y=Math.round(random(50,340)); 
 fruit.velocityX=-7; 
 fruit.setLifetime=100;
 fruitGroup.add(fruit); 
 fruit.velocityX=-(8+(score/10));
 }  
  
   
  if(World.frameCount%200===0){
monster=createSprite(350,200,20,20) ;
 monster.addImage(monsterImage) ;
  monster.y=Math.round(random(100,300));
 monster.velocityX=-8;
 monster.setLifetime=50;
enemyGroup.add(monster);
 monster.velocityX=-(8+(score/10));  
}
 
 
   sword.y=World.mouseY;
  sword.x=World.mouseX; 
    if(fruitGroup.isTouching(sword)){
 fruitGroup.destroyEach();
 score=score+2;
 knifeSound.play();    
} 
 drawSprites();
  text("Score: "+ score, 445,60);
  textSize=50;    
} 
 


 if(enemyGroup.isTouching(sword)){
sword.addImage(gameOverImage);
 sword.x=200;
    sword.y=200;
score=0;    
gameOverSound.play() ;   
 }  


}  
  
  
  