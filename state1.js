var sp1 = 0;
var sp2 = 0;
var sp3 = 0;
demo.state1 = function() {}
demo.state1.prototype = { 
    preload: function(){
        loadAssets();
         game.stage.backgroundColor = '#000000';
    },
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        console.log("state1");
        addChangeStateEventListers();
        //Board
        var board = game.add.sprite(game.world.centerX,game.world.centerY,'board');
        board.scale.setTo(1.5,1.5);
        board.anchor.setTo(0.5,0.5);
        
        var height = -250;
        //Buttons using spritesheet
        var btnStart = [];
        for (var i = 0; i < 3 ; i++) {
            btnStart[i] = game.add.button(i*10,i*10,'btn');
        }
        btnStart[0].frame = 0;
        btnStart[0].position.x =  game.world.centerX - 350;
        btnStart[0].position.y = game.world.centerY + height + 350;
        btnStart[0].anchor.setTo(0.5,0.5);
        btnStart[0].scale.setTo(1.2,1.2);
        
        btnStart[1].frame = 0;
        btnStart[1].position.x =  game.world.centerX;
        btnStart[1].position.y = game.world.centerY + height + 350;
        btnStart[1].anchor.setTo(0.5,0.5);
        btnStart[1].scale.setTo(1.2,1.2);
        
        btnStart[2].frame = 0;
        btnStart[2].position.x =  game.world.centerX + 350;
        btnStart[2].position.y = game.world.centerY + height + 350;
        btnStart[2].anchor.setTo(0.5,0.5);
        btnStart[2].scale.setTo(1.2,1.2);
        
        btnStart[0].events.onInputDown.add(function(){game.state.start('state2')
                                             },this);
        
        btnStart[1].events.onInputDown.add(function(){game.state.start('state7')
                                             },this);
        btnStart[2].events.onInputDown.add(function(){game.state.start('state12')},this);
        
        //Texts
        addTexts(this);
        textsElements = ["Triangles", "There are different types of triangles. \n Select one type and find out its properties.", "Isosceles\nTriangles", "Equilateral\nTriangles", "Right-Angled \n Triangles"];
    
        var height = -250;
        for (var i = 0; i < 5; i++) {
            this.texts[i] = game.add.text(i*100,i*100, textsElements[i]); };
        
        this.texts[0].position.x = game.world.centerX;
        this.texts[0].position.y = game.world.centerY - height - 500;
        this.texts[0].anchor.setTo(0.5,0.5);
        this.texts[0].fontSize = 50;
        
        this.texts[1].align = 'center';
        this.texts[1].position.x = game.world.centerX;
        this.texts[1].position.y = game.world.centerY - height - 350;
        this.texts[1].anchor.setTo(0.5,0.5);
        this.texts[1].fontSize = 30;
        this.texts[1].fontWeight = 'normal';
        
        this.texts[2].align = 'center';
        this.texts[2].position.x = game.world.centerX - 350;
        this.texts[2].position.y = game.world.centerY + height + 350;
        this.texts[2].anchor.setTo(0.5,0.5);
        
        this.texts[3].align = 'center';
        this.texts[3].position.x = game.world.centerX;
        this.texts[3].position.y = game.world.centerY + height + 350;
        this.texts[3].anchor.setTo(0.5,0.5);
        
        this.texts[4].align = 'center';
        this.texts[4].position.x = game.world.centerX + 350;
        this.texts[4].position.y = game.world.centerY + height + 350;
        this.texts[4].anchor.setTo(0.5,0.5);
        
        dotAttributes(this);
       
        if (sp1 == 1) {
        var dads = game.add.sprite(130,667,'sp1');
        dads.scale.setTo(0.45,0.4)
        dads.anchor.setTo(0.2,0.2);
        btnStart[0].alpha = 0.5;
        this.texts[2].alpha= 0.45;
        this.asd1 =game.add.text(210,720,"Each has two equal sides \nand two equal angles.");
         this.asd1.fontWeight = 'normal';}
       
        
        if (sp2 == 1) {
        var dads1 = game.add.sprite(480,670,'sp2');
        dads1.scale.setTo(0.5,0.4)
        dads1.anchor.setTo(0.2,0.2);
        btnStart[1].alpha = 0.5;
        this.texts[3].alpha = 0.45; 
        dads1.alpha = 1;
        this.asd2 = game.add.text(580,700,"Each has three equal sides \nand three equal angles. \nEach angle is 60\xB0.");
        this.asd2.fontWeight = 'normal';}
     
  
         if (sp3 == 1) {
        var dads3 = game.add.sprite(900,670,'sp3');
        dads3.scale.setTo(0.4,0.4)
        dads3.anchor.setTo(0.2,0.2);
        btnStart[2].alpha = 0.5;
        this.texts[4].alpha = 0.45; 
        dads3.alpha = 1;
        this.asd3 = game.add.text(990,735,"Each has a 90\xB0 angle.");
              this.asd3.fontWeight = 'normal';
         }
     this.dot.alpha =0;
    },
    
    update: function(){
        console.log("X: "+this.dot.x , "Y: " + this.dot.y);
        
    }
};
