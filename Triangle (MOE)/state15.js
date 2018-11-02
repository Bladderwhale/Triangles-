demo.state15 = function(){};
demo.state15.prototype = {
    preload: function(){
    },
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        console.log('state15');
        addChangeStateEventListers(); 

    },
    update: function(){}
};