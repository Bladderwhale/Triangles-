
var graphics1;
var polygon;
var n = 0, a = 0; b = 0; c = 0;
demo.state5 = function(){};
demo.state5.prototype = {
    x2: 800, y2: 385, x3: 650, y3: 385, x4:750,y4:515, btnPlay: null, btnStart: null, btnNext: null, n:0, ans1:null, top:null,left:null,right:null,down:null,btnTryAgain: null, txtTryAgain: null, boolTryAgain: false,k: 0,
    preload:function(){
        loadAssets();
        game.stage.backgroundColor = '#000000';
    },
    create:function(){
        game.stage.backgroundColor = '#ffffff';
        console.log("state5");
        addChangeStateEventListers();
        addBtnRadio(this);
        addTexts(this);
        fixedGUI(this);
        this.headingTexts.text = "Isosceles Triangles";
        fixedGUI4i(this);
        addTickCross(this);
        forIsoEquTriangle(this);
        isoscelesTriangleAns(this);
        
     /*   this.fakeHandle3.events.onInputOver.add(function(){
            this.game.canvas.style.cursor = "move";
          //  sprite.input.useHandCursor = true;
        }, this);
        
        this.fakeHandle3.events.onInputOut.add(function(){
        this.game.canvas.style.cursor = "default";
        }, this);*/
        
        this.fakeHandle3.alpha =0;
        this.fakeHandle2.alpha =0;
        this.fakeHandle1.alpha =0;
        this.dot1.alpha = 0;
        this.dot2.alpha = 0;
        
        
        
        this.cross1.position.setTo(310,722.5);
        this.cross1.anchor.setTo(0.15,0.15);
        this.cross1.alpha = 0;
        this.cross2.position.setTo(310,823.5);
        this.cross2.anchor.setTo(0.15,0.15);
        this.cross2.alpha = 0;
        this.tick1.position.setTo(310, 774.5);
        this.tick1.anchor.setTo(0.255,0.2555);
        this.tick1.alpha = 0;
        this.tick2.alpha = 0;
        
       
        
     
        this.btnRadio1.position.setTo(310, 722.5);
        this.btnRadio1.alpha = 0;
        this.btnRadio2.position.setTo(310, 774.5);
        this.btnRadio2.alpha = 0;
        this.btnRadio3.position.setTo(310, 823.5);
        this.btnRadio3.alpha = 0;
        
        this.btnPlay = game.add.button(0,0,'btn2');
        this.btnPlay.frame = 1;
        this.btnPlay.position.setTo(1250, 550);
        this.btnPlay.scale.setTo(0.7,0.5);
        
        this.btnPlay.events.onInputDown.add(function(){if (touchCheck == true) {this.texts[5].alpha = 1; 
                                                      this.texts[6].alpha = 1;
                                                      this.texts[7].alpha = 1;
                                                      this.texts[8].alpha = 1;
                                                      this.btnRadio1.alpha = 1;
                                                      this.btnRadio2.alpha = 1;
                                                      this.btnRadio3.alpha = 1;this.btnPlay.alpha = 0; this.texts[9].visible = false;
                                                                            this.texts[9].alpha = 0;
                                                                                this.texts[10].alpha = 1;
                                                                               this.btnStart.visible = true;}},this);
        this.btnRadio1.events.onInputDown.add(function(){this.btnRadio1.loadTexture('btnradiochecked',0); this.btnStart.frame = 0; n =1;},this);
        this.btnRadio2.events.onInputDown.add(function(){this.btnRadio2.loadTexture('btnradiochecked',0); this.btnStart.frame = 0; n =2;},this);
        this.btnRadio3.events.onInputDown.add(function(){this.btnRadio3.loadTexture('btnradiochecked',0); this.btnStart.frame = 0; n =3;},this);
        
        this.btnStart = game.add.button(0,0, 'btn2');
        this.btnStart.frame = 1;
        this.btnStart.position.setTo(1150, 815);
        this.btnStart.scale.setTo(0.7,0.5);
        this.btnStart.visible = false;
        
        this.btnStart.events.onInputDown.add(function(){
            if (n==1){this.boolTryAgain = true;this.cross1.alpha = 1; this.texts[2].setStyle({backgroundColor: 'rgba(255, 255, 0,1)'});this.texts[3].setStyle({backgroundColor: 'rgba(255, 255, 0,1)'});this.texts[11].setStyle({backgroundColor: 'rgba(255,255,0,1)'}); this.texts[12].setStyle({backgroundColor: 'rgba(255,255,0,1)'}); this.btnStart.frame = 1; a+=1;}
            if (n==2){this.tick1.alpha = 1; c+=1;this.texts[2].setStyle({backgroundColor: 'rgba(255, 255, 0,1)'});this.texts[3].setStyle({backgroundColor: 'rgba(255, 255, 0,1)'});this.texts[11].setStyle({backgroundColor: 'rgba(255,255,0,1)'}); this.texts[12].setStyle({backgroundColor: 'rgba(255,255,0,1)'});}
            if (n==3){this.boolTryAgain = true;this.cross2.alpha = 1; this.texts[2].setStyle({backgroundColor: 'rgba(255, 255, 0,1)'});this.texts[3].setStyle({backgroundColor: 'rgba(255, 255, 0)'});this.texts[11].setStyle({backgroundColor: 'rgba(255,255,0,1)'}); this.texts[12].setStyle({backgroundColor: 'rgba(255,255,0,1)'}); this.btnStart.frame = 1; b+=1;}
        }
                                             ,this);
        
        
        this.btnNext = game.add.button(0,0, 'btn2');
        this.btnNext.frame = 0;
        this.btnNext.position.setTo(1150, 815);
        this.btnNext.scale.setTo(0.7,0.5);
        this.btnNext.visible = false;
        this.btnNext.events.onInputDown.add(function(){check =0;a =0; b=0; c=0;
            game.state.start('state6');
            touchCheck = false;
        },this)
        
        this.txtHeading = game.add.text(140,60,"There is another property for an isosceles triangle.");
        this.txtHeading.fontWeight = 'normal';
        for (var i = 0; i < 14; i++){
            this.texts[i] = game.add.text(i*100,i*100, "6");
        }
        this.texts[0].text = "Try this";
        this.texts[0].position.setTo(140, 140);
        this.texts[0].setStyle({ fill: '#008000'});
        dotAttributes(this);
        
        drawGraphicsLength = 100;
         boxTryAgainRotation(this);
        this.texts[0].addChild(this.drawGraphics);
        
        
        this.texts[1].text = "Drag the red point to change the height of the triangle.\nObserve how the length of the sides and the angles change.";
        this.texts[1].position.setTo(300, 125);
        this.texts[1].align = 'left';
        this.texts[1].fontWeight = 'normal';
        
       
        this.texts[2].position.setTo(this.x2+50,this.y2);
        this.texts[2].setText("3.0 m");
        
        this.texts[3].position.setTo(this.x3-90, this.y3);
        this.texts[3].text = "3.0 m";
        
        this.texts[4].position.setTo(this.x4, this.y4);
        this.texts[4].text = "5.0 m";
        this.texts[4].anchor.x = 0.5;
        
        this.texts[5].position.setTo(240,640);
        this.texts[5].text = "No matter how the size of the isosceles triangle changes \ntwo sides are always equal and _________________."
        this.texts[5].alpha = 0;
        this.texts[5].align = 'left';
        this.texts[5].fontWeight = 'normal';
        
        this.texts[6].position.setTo(350,720);
        this.texts[6].text = "all three angles are always equal";
        this.texts[6].alpha = 0;
        this.texts[6].fontWeight = 'normal';
        
        this.texts[7].position.setTo(350,770);
        this.texts[7].text = "two angles are always equal";
        this.texts[7].alpha = 0;
        this.texts[7].fontWeight = 'normal';
        
        this.texts[8].position.setTo(350,820);
        this.texts[8].text = "all three angles are always different";
        this.texts[8].alpha = 0;
        this.texts[8].fontWeight = 'normal';
        
        this.texts[9].position.setTo(1285,555);
        this.texts[9].text = "Done";
        this.texts[9].alpha = 0.3;
        
        this.texts[10].text = "Check";
        this.texts[10].position.setTo(1175,820);
        this.texts[10].alpha = 0;
        
        this.texts[11].text = "55";
        this.texts[11].position.setTo(this.dot2.x-10,this.dot2.y-50);
        
        this.texts[12].text = "55";
        this.texts[12].position.setTo(this.dot1.x-25,this.dot1.y-50);
        
        this.texts[13].text = "70";
        this.texts[13].position.setTo(this.dot3.x-15, this.dot3.y+70);
        
        
        graphics = game.add.graphics(0,0);;
        polygon = new Phaser.Polygon();
        //graphics.lineStyle(1, '#000000', 1);
        linegraphics = game.add.graphics(0,0);
        
        
      
       
        
        //height of a triangle
        console.log(this.dot2.y - this.dot3.y);
        this.height = this.dot2.y - this.dot3.y;
        
        //length
        console.log(this.dot2.x - this.dot1.x);
        this.length = this.dot2.x - this.dot1.x;
        
     /*   this.fakeHandle1.events.onInputOver.add(function(){
            this.game.canvas.style.cursor = "move";
          //  sprite.input.useHandCursor = true;
        }, this);
        
        this.fakeHandle1.events.onInputOut.add(function(){
        this.game.canvas.style.cursor = "default";
        }, this);*/
        
        //physics
        sprite3 = game.add.sprite(0,0,"");
        this.game.physics.enable(sprite3, Phaser.Physics.ARCADE);
        sprite3.body.setSize(1400, 100, 50, 90);
        sprite3.body.immovable = true;
        this.game.physics.enable(this.dot3, Phaser.Physics.ARCADE);
        //this.dot3.body.velocity.y = -100;
        
        sprite1 = game.add.sprite(0,0,"");
        this.game.physics.enable(sprite1, Phaser.Physics.ARCADE);
        sprite1.body.setSize(450, 550, 50, 90);
        sprite1.body.immovable = true;
        this.game.physics.enable(this.dot1, Phaser.Physics.ARCADE);
        
        sprite2 = game.add.sprite(0,0,"");
        this.game.physics.enable(sprite2, Phaser.Physics.ARCADE);
        sprite2.body.setSize(450, 550, 1000, 90);
        sprite2.body.immovable = true;
        this.game.physics.enable(this.dot2, Phaser.Physics.ARCADE);
        //end of creation of physics
        this.fakeHandle2.inputEnabled = false;
        this.fakeHandle1.inputEnabled = false;
        
        this.dot1.position.setTo(600, 500);
        this.dot2.position.setTo(900, 500);
        this.dot3.position.setTo(750, 300);
        graphics1 = game.add.graphics(0,0);

        //Creating the try again button
        this.btnTryAgain = game.add.button(0,0, 'btn2');
        this.btnTryAgain.frame = 0;
        this.btnTryAgain.position.setTo(1150, 815);
        this.btnTryAgain.scale.setTo(0.785,0.5);
        this.btnTryAgain.visible = false;
        this.txtTryAgain = game.add.text(1150,815,"Try Again");
        this.txtTryAgain.alpha = 0;
        this.txtTryAgain.position.setTo(1165, 822);
        this.boolTryAgain = false;
        this.btnTryAgain.events.onInputDown.add(function(){this.boolTryAgain = false;this.k++;}, this); 
        
        tickTween = this.game.add.tween(this.tick1).to({alpha:1},1000,Phaser.Easing.Linear.None);
         tickTween2 = this.game.add.tween(this.pinkbox1bi).to({alpha:1},1000,Phaser.Easing.Linear.None);
         tickTween3 = this.game.add.tween(this.isoAns1bi).to({alpha:1},1000,Phaser.Easing.Linear.None);
       
    },
    update:function(){
         if (this.fakeHandle1.input.pointerOver()) {
           this.fakeHandle1.input.useHandCursor = true;
       }
        if (this.fakeHandle2.input.pointerOver()) {
           this.fakeHandle2.input.useHandCursor = true;
       }
        if (this.fakeHandle3.input.pointerOver()) {
           this.fakeHandle3.input.useHandCursor = true;
       }
        if (this.boolTryAgain == true) {
            if  (this.k < 1) {
            this.btnTryAgain.visible = true;
            this.txtTryAgain.alpha = 1;
            n = 4;}
        }
        else if (this.boolTryAgain == false) {
            this.btnTryAgain.visible = false;
            this.txtTryAgain.alpha = 0;
            
           /* if (this.k == 2){
                 this.btnRadio1.loadTexture('btnradio',0);
            this.btnRadio2.loadTexture('btnradiochecked',0);
            this.btnRadio3.loadTexture('btnradio',0);
            this.texts[10].alpha=1;
            this.texts[10].text = "Continue";
            this.texts[10].position.x = 1160;
            this.tick1.alpha = 1;
            this.btnNext.visible = true;
            this.ans1.alpha = 1;
            
            linegraphics.beginFill(0x000000);
            linegraphics.lineStyle(7, '#FF3300', 1);
            linegraphics.moveTo(this.dot1.x,this.dot1.y);
            linegraphics.lineTo(this.dot3.x,this.dot3.y);
            linegraphics.moveTo(this.dot2.x,this.dot2.y);
            linegraphics.lineTo(this.dot3.x,this.dot3.y);
            linegraphics.endFill();
            }*/
            
        }
         //another layer
            if (a == 1 && b == 1){
            this.btnRadio1.loadTexture('btnradio',0);
            this.btnRadio2.loadTexture('btnradiochecked',0);
            this.btnRadio3.loadTexture('btnradio',0);
            this.texts[10].alpha=1;
            this.texts[10].text = "Continue";
            this.texts[10].position.x = 1160;
            tickTween.start();
            tickTween2.start();
            tickTween3.start();
            this.btnNext.visible = true;
            
            
         }
        
        console.log("X: " + this.dot.x + "Y: "+ this.dot.y);
        console.log(this.dot2.x - this.dot1.x);
        polygon.setTo([new Phaser.Point(this.dot1.x, this.dot1.y), new Phaser.Point(this.dot2.x, this.dot2.y),new Phaser.Point(this.dot3.x, this.dot3.y)])
        graphics.destroy();
        graphics = game.add.graphics(0,0);;
        graphics.beginFill(0xACD9E2, 0.3);
        graphics.lineStyle(2, '#FF3300', 1);
        graphics.drawPolygon(polygon.points);
        graphics.endFill();
        if (this.fakeHandle3.input.isDragged == false) {
            this.fakeHandle3.y = this.dot3.y; 
            this.fakeHandle3.x = this.dot3.x;
        }
        if (this.fakeHandle2.input.isDragged == false) {
            this.fakeHandle2.y = this.dot2.y; 
            this.fakeHandle2.x = this.dot2.x;
        }
         if (this.fakeHandle1.input.isDragged == false) {
            this.fakeHandle1.y = this.dot1.y; 
            this.fakeHandle1.x = this.dot1.x;
        }
        //finding the length of the line
        this.line = new Phaser.Line(this.dot3.x,this.dot3.y, this.dot1.x, this.dot1.y); //Left Length
        this.line2 = new Phaser.Line(this.dot3.x,this.dot3.y, this.dot2.x, this.dot2.y); //Right Length
        this.line3 = new Phaser.Line(this.dot1.x,this.dot1.y, this.dot2.x, this.dot2.y); 
        this.line.fromSprite(this.dot1,this.dot3,false); //update the length with game sprite 
        this.line2.fromSprite(this.dot2,this.dot3,false);
        this.line3.fromSprite(this.dot1,this.dot2,false);
        
        
        
        console.log("Dot1.x: " +this.dot1.x + "Dot1.y: "+ this.dot1.y);
        console.log("Dot2.x: " +this.dot2.x + "Dot2.y: "+ this.dot2.y);
        console.log("Dot3.x: " +this.dot3.x + "Dot3.y: "+ this.dot3.y);
        console.log("Left Length:" + this.line.length);
       
        //Finding the angle 
        /*this.newLine = new Phaser.Point(this.dot3.x,this.dot3.y); //Left
        this.newLine2 = new Phaser.Point(this.dot1.x, this.dot1.y); //Left
        this.newFinal= new Phaser.Point.subtract(this.newLine, this.newLine2);
        
        console.log(this.newFinal);*/
        graphics1.destroy();
        graphics1 = game.add.graphics(0,0);
        this.newLine = new Phaser.Point.subtract(this.dot3, this.dot1); //top
        console.log(this.newLine);
        
        this.newLine2 = new Phaser.Point.subtract(this.dot3, this.dot2); //top
        console.log(this.newLine2);
        
        this.newLine3 = new Phaser.Point.subtract(this.dot1, this.dot2); //left
        this.newLine4 = new Phaser.Point.subtract(this.dot1, this.dot3); //left
        
        this.newLine3.normalize();
        this.newLine4.normalize();
        
        this.final2 = this.newLine4.dot(this.newLine3);
        this.final2 = Math.acos(this.final2);
        
        var startAngle2 = (Math.PI/2 + Math.PI + Math.PI/2-this.final2);
        graphics1.lineStyle(2, 0xFF3300);
        graphics1.arc(this.dot1.x, this.dot1.y,70,startAngle2, startAngle2+this.final2,false);
        console.log("LeftAngle: " +Math.asd(this.final2));
        
        this.newLine5 = new Phaser.Point.subtract(this.dot2, this.dot3);//Right
        this.newLine6 = new Phaser.Point.subtract(this.dot2, this.dot1);//Right
        
        this.newLine5.normalize();
        this.newLine6.normalize();
        
        this.final3 = this.newLine5.dot(this.newLine6);
        this.final3 = Math.acos(this.final3);
        var startAngle3 = Math.PI 
        graphics1.lineStyle(2, 0xFF3300);
        graphics1.arc(this.dot2.x,this.dot2.y,70, startAngle3, startAngle3+this.final3, false);
        console.log("Right Angle: " + Math.asd(this.final3));
        
        //https://phaser.io/docs/2.3.0/Phaser.Point.html
        this.newLine.normalize();
        this.newLine2.normalize();
        
        this.final = this.newLine2.dot(this.newLine);
        console.log(this.final);
        this.final = Math.acos(this.final);
        
        graphics1.lineStyle(2, 0xFF3300);
        var startAngle = (Math.PI/2-this.final/2);
        graphics1.arc(this.dot3.x, this.dot3.y, 70, startAngle, startAngle+ this.final, false);
        graphics1.endFill();
        console.log("Top Angle: "+ Math.asd(this.final) );
        this.resize = true;
        if (this.line.length >= 200) {
            this.resize = true;
            
        }
        else {
            this.resize = false;
            
            this.dot3.y-= 0.5;
        
           /* this.dot1.x = 615;
            this.dot1.y = 500;
            this.dot2.x = 715;
            this.dot2.x = 500;
            this.dot3.x = 670;
            this.dot3.y = 305;*/
            
        }
        
        //physics
        // this.game.physics.arcade.overlap(sprite1, this.dot3, this.collisionHandler, null, this);
       var hasCollision3 = this.game.physics.arcade.overlap(sprite3, this.dot3 , this.collisionHandler, null, this )
       if(!hasCollision3)
           {
              // game.stage.backgroundColor = '#000000';
               
           }
        var hasCollision2 = this.game.physics.arcade.overlap(sprite2, this.dot2 , this.collisionHandler2, null, this )
       if(!hasCollision2)
           {
             //  game.stage.backgroundColor = '#000000';
               
           }
        var hasCollision1 = this.game.physics.arcade.overlap(sprite1, this.dot1, this.collisionHandler1, null, this) 
        if(!hasCollision1) {
           // game.stage.backgroundColor = '#000000';
        }
        var finaldegrees = Math.asd(this.final)
        var finaldegrees1 = Math.asd(this.final2)
        //Handle3 - pull up
        if (this.fakeHandle3.y < this.dot3.y &&this.fakeHandle3.input.isDragged) {
            
            this.dot3.y-=0.5;
          
            
            this.texts[2].position.setTo(this.dot3.x+80,this.dot3.y+50);
            this.texts[2].setText(((Math.round( this.line.length* 10 ) / 100)-17).toFixed(1) + " m");
            this.texts[3].position.setTo(this.dot3.x-150, this.dot3.y+50);
            this.texts[3].setText(((Math.round( this.line.length* 10 ) / 100)-17).toFixed(1) + " m");
            this.texts[4].position.setTo(this.dot3.x, this.y4);
            this.texts[4].setText(((Math.round( this.line.length* 10 ) / 100)-15).toFixed(1) + " m");
            
            this.texts[13].position.setTo(this.dot3.x-15, this.dot3.y+70);
            
            this.texts[13].text = finaldegrees.toFixed(0) + "\xB0";;
            this.texts[12].text = finaldegrees1.toFixed(0) + "\xB0";;
            this.texts[11].text = finaldegrees1.toFixed(0)+ "\xB0";;
            touchCheck = true;
            
        }
        //Handle3 - pull down
        if ( this.fakeHandle3.y >= this.dot3.y &&this.fakeHandle3.input.isDragged) {
       
            this.dot3.y+=0.5;
          
            
            this.texts[2].position.setTo(this.dot3.x+80,this.dot3.y+50);
            this.texts[2].setText(((Math.round( this.line.length* 10 ) / 100)-17).toFixed(1) + " m");
            this.texts[3].position.setTo(this.dot3.x-150, this.dot3.y+50);
            this.texts[3].setText(((Math.round( this.line.length* 10 ) / 100)-17).toFixed(1) + " m");
            this.texts[4].position.setTo(this.dot3.x, this.y4);
            this.texts[4].setText(((Math.round( this.line.length* 10 ) / 100)-15).toFixed(1) + " m");
            
            this.texts[13].position.setTo(this.dot3.x-15, this.dot3.y+70);
            this.texts[13].text = finaldegrees.toFixed(0) + "\xB0";
            this.texts[12].text = finaldegrees1.toFixed(0) + "\xB0";;
            this.texts[11].text = finaldegrees1.toFixed(0) + "\xB0";;
            touchCheck = true
            
          
            
            
            
        }
        //Handle3 - pull right down
      /*  if (this.line.length >= 201&&this.fakeHandle3.x < this.dot3.x && this.fakeHandle3.y > this.dot3.y+0.5 &&this.fakeHandle3.input.isDragged) {
            this.dot2.x--;
            this.dot3.y+=0.5;
            this.dot3.x-=0.5;
            
            this.texts[2].position.setTo(this.dot3.x+60,this.dot3.y+50);
            this.texts[2].setText(((Math.round( this.line.length* 10 ) / 100)-17).toFixed(2) + "cm");
            this.texts[3].position.setTo(this.dot3.x-130, this.dot3.y+50);
            this.texts[3].setText(((Math.round( this.line.length* 10 ) / 100)-17).toFixed(2) + "cm");
            this.texts[4].position.setTo(this.dot3.x, this.y4);
            this.texts[4].setText(((Math.round( this.line.length* 10 ) / 100)-15).toFixed(2) + "cm");
            
        }
        //Handle3 - pull left down
        if (this.line.length >= 201 &&this.fakeHandle3.x > this.dot3.x && this.fakeHandle3.y > this.dot3.y+0.5 &&this.fakeHandle3.input.isDragged) {
            this.dot1.x++;
            this.dot3.y+=0.5;
            this.dot3.x+=0.5;
            
            this.texts[2].position.setTo(this.dot3.x+60,this.dot3.y+50);
            this.texts[2].setText(((Math.round( this.line.length* 10 ) / 100)-17).toFixed(2) + "cm");
            this.texts[3].position.setTo(this.dot3.x-130, this.dot3.y+50);
            this.texts[3].setText(((Math.round( this.line.length* 10 ) / 100)-17).toFixed(2) + "cm");
            this.texts[4].position.setTo(this.dot3.x, this.y4);
            this.texts[4].setText(((Math.round( this.line.length* 10 ) / 100)-15).toFixed(2) + "cm");
            
        }*/
        
        
        
        
        
        
        
    
        //end
        
        
        
        if (touchCheck == true) {
            this.btnPlay.frame = 0;
            this.texts[9].alpha = 1;
        }
        //Switchstatement
        linegraphics.destroy();
        linegraphics = game.add.graphics(0,0);
        if (c != 1) {
            switch(n) 
            {
                case 1:
                    this.btnRadio2.loadTexture('btnradio',0);
                    this.btnRadio3.loadTexture('btnradio',0);
                    if (a==1)
                    {
                       
                        
                    } 
                    else if (b==1)
                    {
                        this.btnRadio3.loadTexture('btnradiochecked',0);  
                    }
                    break;
                case 2:
                    this.btnRadio1.loadTexture('btnradio',0);
                    this.btnRadio3.loadTexture('btnradio',0);
                    if (a==1)
                    {
                        this.btnRadio1.loadTexture('btnradiochecked',0);
                    }
                    if (b==1)
                    {
                        this.btnRadio3.loadTexture('btnradiochecked',0);    
                    }
                    break;
                case 3:
                    this.btnRadio1.loadTexture('btnradio',0);
                    this.btnRadio2.loadTexture('btnradio',0);   
                    if (a==1)
                    {
                        this.btnRadio1.loadTexture('btnradiochecked',0);
                        this.btnRadio1.loadTexture('btnradiochecked',0);
                      
                    }
                    else if (b==1)
                    {
                        
                        
                    }
                    break;
                case 4:
                    this.btnRadio1.loadTexture('btnradio', 0);
                    this.btnRadio2.loadTexture('btnradio', 0);
                    this.btnRadio3.loadTexture('btnradio', 0);
                default: 
                    break;
            }
        }
        else 
        {
            this.btnRadio1.loadTexture('btnradio',0);
            this.btnRadio2.loadTexture('btnradiochecked',0);
            this.btnRadio3.loadTexture('btnradio',0);
            this.texts[10].text = "Continue";
            this.texts[10].position.x = 1160;
            this.btnNext.visible = true;
            this.pinkbox1b.alpha = 1;
            this.isoAns1b.alpha = 1;

            
         
        }
          if (this.btnRadio1.input.pointerOver()) {
           this.btnRadio1.input.useHandCursor = true;
       }
        if (this.btnRadio2.input.pointerOver()) {
           this.btnRadio2.input.useHandCursor = true;
       }
        if (this.btnRadio3.input.pointerOver()) {
           this.btnRadio3.input.useHandCursor = true;
       }
    },
    render: function() {
        /*game.debug.body(sprite1);
        game.debug.body(sprite2);
        game.debug.body(sprite3);
        game.debug.body(this.dot3);*/
    },
    
    collisionHandler: function(obj1, obj2) 
    {
        console.log("collide")
        game.stage.backgroundColor = '#992d2d';
        this.fakeHandle3.input.isDragged = false;
        this.dot3.y++;
    },
    collisionHandler2: function(obj1,obj2) {
        console.log("collide")
        game.stage.backgroundColor = '#992d2d';
        this.fakeHandle2.input.isDragged = false;
        
        
    },
    collisionHandler1: function(obj1,obj2) {
        console.log("collide")
        game.stage.backgroundColor = '#992d2d';
        this.fakeHandle1.input.isDragged = false;
        this.dot1.x++;
        
        this.texts[2].position.setTo(this.x2+=0.5,this.y2+=0.7);
        this.texts[3].position.setTo(this.x3+=0.7, this.y3+=0.7);
        this.texts[4].position.setTo(this.x4+=0.5, this.y4);
    }
};
