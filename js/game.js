class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
          play(){
        
             form.hide();
             Player.getPlayerInfo();
             var counter=1;
            if(allPlayers!=undefined){
           console.log(allPlayers);
            image(back_img, 0, 0, 1000, 800);
                var x =100;
                var y=200;
                var index =0;
                drawSprites();
                 for(var plr in allPlayers){
                    if(counter===3){
                        break;
                    }
                    counter++;
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y= 500;
                     console.log("==>"+ players[0]);
                     console.log("==>"+ players[1]);
                     players[index-1].x=x;
                     players[index-1].y=y;
                       
                     if(index === player.index){
                        //players[index -1].shapeColor="red";
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);

                         
                     }
                    
                     
                 
                 }
                
            }
                 

         
            
             if (frameCount % 20 === 0) {
                     fruits = createSprite(random(100, 1000), 0, 100, 100);
                     fruits.velocityY = 6;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: fruits.addImage("fruit1",fruit1_img);
                         break;
                         case 2: fruits.addImage("fruit1", fruit2_img);
                         break;
                         case 3: fruits.addImage("fruit1", fruit3_img);
                         break;
                         case 4: fruits.addImage("fruit1", fruit4_img);
                         break;
                         case 5: fruits.addImage("fruit1", fruit5_img);
                         break;
                     }
                     fruitGroup.add(fruits);
                     
                 }

                 if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance +=10
                    player.update();
                   

                    console.log("RIGHT_ARROW");
                }
            if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance = player.distance -10;
                    player.update();
                }
                  // Get a database reference to our posts
                  var ref = database.ref("/");
                  // Attach an asynchronous callback to read the data at our posts reference
                  ref.on("value", function(data) {
                  console.log(data.val());
                   });
                 // if (player.index !== null) {
                    
                 // }
                

         
         
        
         
     
    }

    end(){
       console.log("Game Ended");
    }
}