var total = 0;
var demo = {}; //Empty object
demo.state0 = function(){}; //Make the property a global function.
demo.state0.prototype = { //Add in 3 property as a function in the demo.state0
    init: function()
    {
        console.log(1500, 1000, game)
        scalingCanvasWindow(1500, 1000, this);
    },
    preload: function(){
        loadAssets();
    },
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        console.log('state0');
        addChangeStateEventListers(); //Local - First step@
        //windowScaling();
        
        //Creation of timer
        timer = game.time.create(false);
        timer.loop(2000, updateCounter, this);
        timer.start();

        video = game.add.video('intro');
        video.addToWorld(game.world.centerX, game.world.centerY, 0.5, 0.5, 2, 2);
        video.play(true);
        
        //Add video after loadedAssets();
        video = game.add.video('intro');
        video.addToWorld(game.world.centerX, game.world.centerY, 0.5, 0.5, 2, 2);
        video.play(false);
        
        //Add credits after loadedAssets();
        credits = game.add.sprite(game.world.centerX,game.world.centerY, 'credits');
        credits.anchor.x = 0.5;
        credits.anchor.y = 0.5;
        credits.scale.x = 2;
        credits.scale.y = 2;
        credits.alpha = 0; 
       
        
    },
    update: function(){
        //console.log("total: " + total);
        
        if (total > 1) {
            credits.alpha = 1;
        }
        if (total > 2) {
            game.state.start('state1');
        }
    }
};

                       
function updateCounter() {
    total++;
}