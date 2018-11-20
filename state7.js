
demo.state7 = function(){};
demo.state7.prototype = {
    x2: 800, y2: 385, x3: 650, y3: 385, x4:750,y4:515, btnPlay: null, btnStart: null, btnNext: null, n:0, ans1:null, top:null,left:null,right:null,down:null,btnTryAgain: null, txtTryAgain: null, boolTryAgain: false,k: 0,b:0,
    preload:function(){
        loadAssets();
         game.stage.backgroundColor = '#000000';
    },
    create:function(){
        game.stage.backgroundColor = '#ffffff';
        console.log("state7");
        addChangeStateEventListers();
        addTexts(this);
        fixedGUI(this);
        this.headingTexts.text = "Equilateral Triangles";
        fixedGUI4i(this);
        addBtnRadio(this);
        addTickCross(this);
        equilateralTrianglesAns(this);
        
        this.k=0;
        this.cross1.position.setTo(310,768);
        this.cross1.anchor.setTo(0.15,0.15);
        this.cross1.alpha = 0;
        this.cross2.position.setTo(310,823.5);
        this.cross2.anchor.setTo(0.15,0.15);
        this.cross2.alpha = 0;
        this.tick1.position.setTo(310, 722.5);
        this.tick1.anchor.setTo(0.255,0.2555);
        this.tick1.alpha = 0;
        this.tick2.alpha = 0;
        
       
        this.btnRadio1.position.setTo(310, 774.5);
        this.btnRadio1.alpha = 0;
        this.btnRadio2.position.setTo(310, 722.5);
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
                                                      this.btnRadio3.alpha = 1;this.btnPlay.alpha = 0;
                                                                            this.texts[9].visible = false;
                                                                                this.texts[10].alpha = 0.3;
                                                                               this.btnStart.visible = true;}},this);
        this.btnRadio1.events.onInputDown.add(function(){this.btnRadio1.loadTexture('btnradiochecked',0); this.btnStart.frame = 0; n =1; this.texts[10].alpha = 1;},this);
        this.btnRadio2.events.onInputDown.add(function(){this.btnRadio2.loadTexture('btnradiochecked',0); this.btnStart.frame = 0; n =2; this.texts[10].alpha = 1;},this);
        this.btnRadio3.events.onInputDown.add(function(){this.btnRadio3.loadTexture('btnradiochecked',0); this.btnStart.frame = 0; n =3; this.texts[10].alpha = 1;},this);
        
        this.btnStart = game.add.button(0,0, 'btn2');
        this.btnStart.frame = 1;
        this.btnStart.position.setTo(1150, 815);
        this.btnStart.scale.setTo(0.7,0.5);
        this.btnStart.visible = false;
        
        this.btnStart.events.onInputDown.add(function(){
            if (n==1){this.boolTryAgain = true;this.cross1.alpha = 1; this.texts[2].setStyle({backgroundColor: 'rgba(255, 255, 0,1)'});this.texts[3].setStyle({backgroundColor: 'rgba(255, 255, 0,1)'});this.texts[4].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.btnStart.frame = 1;   this.texts[10].alpha = 0.3; a+=1;}
            if (n==2){this.tick1.alpha = 1;this.texts[2].setStyle({backgroundColor: 'rgba(255, 255, 0,1)'});this.texts[3].setStyle({backgroundColor: 'rgba(255, 255, 0,1)'});this.texts[4].setStyle({backgroundColor: 'rgba(255,255,0,1)'}); c+=1;}
            if (n==3){this.boolTryAgain = true;this.cross2.alpha = 1; this.texts[2].setStyle({backgroundColor: 'rgba(255, 255, 0,1)'});this.texts[3].setStyle({backgroundColor: 'rgba(255, 255, 0,1)'}); this.texts[4].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.btnStart.frame = 1;  this.texts[10].alpha = 0.3; this.b=1;}
        }
                                             ,this);
        
        
        this.btnNext = game.add.button(0,0, 'btn2');
        this.btnNext.frame = 0;
        this.btnNext.position.setTo(1150, 815);
        this.btnNext.scale.setTo(0.8,0.5);
        this.btnNext.visible = false;
        this.btnNext.events.onInputDown.add(function(){ aa =true, bb = true, cc=true; n = 0; this.n=0; a =0;b=0;c=0; this.a=0; this.b =0; this.c=0;confusedCheck =0; this.confusedCheck=0;
        k =0;this.k=0;check=0;this.check=0;
            game.state.start('state8');touchCheck = false;
        },this)
        
        forIsoEquTriangle(this);
        this.dot1.position.setTo(600,500);
        this.dot2.position.setTo(900,500);
        this.dot3.position.setTo(750,300);
        
        for (var i = 0; i < 11; i++){6
            this.texts[i] = game.add.text(i*100,i*100, "6");
        }
        this.texts[0].text = "Try this...";
        this.texts[0].position.setTo(140, 150);
        this.texts[0].setStyle({ fill: '#008000'});
         this.texts[0].angle = -10;
        dotAttributes(this);
        
        boxTryAgainRotation(this);
        this.texts[0].addChild(this.drawGraphics);
        
        this.texts[1].text = "Drag any one of the red points to change the size of the equilateral triangle.\nObserve how the lengths of the sides change.";
        this.texts[1].position.setTo(300, 125);
        this.texts[1].align = 'left';
        this.texts[1].fontWeight = 'normal';
       
        this.texts[2].position.setTo(this.dot3.x+85,this.dot3.y+50);
        this.texts[2].setText("5.0 cm");
        
        this.texts[3].position.setTo(this.dot3.x-170, this.dot3.y+50);
        this.texts[3].text = "5.0 cm";
        
        this.texts[4].position.setTo(this.x4, this.y4);
        this.texts[4].text = "5.0 cm";
        this.texts[4].anchor.x = 0.5;
        
        this.texts[5].position.setTo(240,670);
        this.texts[5].text = "No matter how the size of the equilateral triangle changes, the lengths of _________________."
        this.texts[5].alpha = 0;
        this.texts[5].fontWeight = 'normal';
        
        this.texts[6].position.setTo(350,720);
        this.texts[6].text = "all three sides are always equal";
        this.texts[6].alpha = 0;
        this.texts[6].fontWeight = 'normal';
        
        this.texts[7].position.setTo(350,770);
        this.texts[7].text = "only two sides are always equal";
        this.texts[7].alpha = 0;
        this.texts[7].fontWeight = 'normal';
        
        this.texts[8].position.setTo(350,820);
        this.texts[8].text = "all three sides are always different";
        this.texts[8].alpha = 0;
        this.texts[8].fontWeight = 'normal';
        
        this.texts[9].position.setTo(1285,555);
        this.texts[9].text = "Done";
        this.texts[9].alpha = 0.3;
        
        this.texts[10].text = "Check";
        this.texts[10].position.setTo(1175,820);
        this.texts[10].alpha = 0;
        
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
        
       /* this.fakeHandle1.events.onInputOver.add(function(){
            this.game.canvas.style.cursor = "move";
          //  sprite.input.useHandCursor = true;
        }, this);
        
        this.fakeHandle1.events.onInputOut.add(function(){
        this.game.canvas.style.cursor = "default";
        }, this);*/
        
        this.fakeHandle1.alpha =0;
        this.fakeHandle2.alpha =0;
        this.fakeHandle3.alpha =0;
        
        /*this.fakeHandle2.events.onInputOver.add(function(){
            this.game.canvas.style.cursor = "move";
          //  sprite.input.useHandCursor = true;
        }, this);
        
        this.fakeHandle2.events.onInputOut.add(function(){
        this.game.canvas.style.cursor = "default";
        }, this);
        
        this.fakeHandle3.events.onInputOver.add(function(){
            this.game.canvas.style.cursor = "move";
          //  sprite.input.useHandCursor = true;
        }, this);
        
        this.fakeHandle3.events.onInputOut.add(function(){
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
        tickTween2 = this.game.add.tween(this.pinkbox1).to({alpha:1},1000,Phaser.Easing.Linear.None);
         tickTween3 = this.game.add.tween(this.isoAns1).to({alpha:1},1000,Phaser.Easing.Linear.None);

         this.dot.alpha =0;
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
        console.log("what is the value of k: "+ this.k)
          //Try again function
        if (this.boolTryAgain == true) {
            if (this.k < 1){
            this.btnTryAgain.visible = true;
            this.txtTryAgain.alpha = 1;
            n = 4;
            }
        }
        else if (this.boolTryAgain == false) {
            
            this.btnTryAgain.visible = false;
            this.txtTryAgain.alpha = 0;}
            
          /*  if (this.k == 2){
                 this.btnRadio1.loadTexture('btnradio',0);
            this.btnRadio2.loadTexture('btnradiochecked',0);
            this.btnRadio3.loadTexture('btnradio',0);
            this.texts[10].alpha=1;
            this.texts[10].text = "Continue";
            this.texts[10].position.x = 1170;
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
        
        //another layer
            if (a == 1 && this.b == 1){
            this.btnRadio1.loadTexture('btnradio',0);
            this.btnRadio2.loadTexture('btnradiochecked',0);
            this.btnRadio3.loadTexture('btnradio',0);
            this.texts[10].alpha = 1;
            this.texts[10].text = "Continue";
            this.texts[10].position.x = 1170;
            tickTween.start();
            tickTween2.start();
            tickTween3.start();
            this.btnNext.visible = true;
            
            linegraphics.beginFill(0x000000);
            linegraphics.lineStyle(3, 0xFFFF00, 1);
            linegraphics.moveTo(this.dot1.x,this.dot1.y);
            linegraphics.lineTo(this.dot3.x,this.dot3.y);
            linegraphics.moveTo(this.dot2.x,this.dot2.y);
            linegraphics.lineTo(this.dot3.x,this.dot3.y);
            linegraphics.endFill();}
        
        console.log("What is the value of a: " + a + "what is the value of b: "+ this.b);
        console.log("X: " + this.dot.x + "Y: "+ this.dot.y);
        console.log(this.dot2.x - this.dot1.x);
        polygon.setTo([new Phaser.Point(this.dot1.x, this.dot1.y), new Phaser.Point(this.dot2.x, this.dot2.y),new Phaser.Point(this.dot3.x, this.dot3.y)])
        graphics.destroy();
        graphics = game.add.graphics(0,0);;
        graphics.beginFill(0xACD9E2, 1);
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
        
        this.line = new Phaser.Line(this.dot3.x,this.dot3.y, this.dot1.x, this.dot1.y); //Left Length
        this.line2 = new Phaser.Line(this.dot3.x,this.dot3.y, this.dot2.x, this.dot2.y); //Right Length
        this.line3 = new Phaser.Line(this.dot1.x,this.dot1.y, this.dot2.x, this.dot2.y); 
        this.line.fromSprite(this.dot1,this.dot3,false);
        this.line2.fromSprite(this.dot2,this.dot3,false);
        this.line3.fromSprite(this.dot1,this.dot2,false);
        
        console.log("Dot1.x: " +this.dot1.x + "Dot1.y: "+ this.dot1.y);
        console.log("Dot2.x: " +this.dot2.x + "Dot2.y: "+ this.dot2.y);
        //console.log("Dot3.x: " +this.dot3.x + "Dot3.y: "+ this.dot3.y);
        console.log("Left Length:" + this.line.length);
        console.log("Bottom Length: " + this.line3.length);

        center = new Phaser.Point.add(this.dot1, this.dot2);
        console.log("what is the  center1: " + center)
        center = center.divide(2,2);
        console.log("what is the new center: " + center)
        length = (new Phaser.Point.subtract(this.dot1,this.dot2)).getMagnitude();
        
        var b = (length * length) - (length/2)*(length/2);//python  pythagoras
         b = -(Math.sqrt(b));

        this.dot3.position = new Phaser.Point(center.x,center.y+b);
        //this.dot3.position = new Phaser.Point.add(0,b);
        
        //b = length.multiply(length)
      //  b = new Phaser.Point.multiply(length, length, 1);
       // b.multiply(length);
      //  b = new Phaser.Point.multiply(length, length);
     //   b = new Phaser.Point.divide(length, length);
        //b = new Phaser.Point.divide(length/2);
        
        console.log("What is the center" + center.x);
        console.log("What is the length between dot1 and dot2: " + length);
        console.log('What is b: ' + b);
         console.log("Dot3.x: " +this.dot3.x + "Dot3.y: "+ this.dot3.y)
       
        //Handle1 - pull left
        if (this.line.length <= 320&&this.fakeHandle1.x < this.dot1.x &&  this.fakeHandle1.input.isDragged) {
            this.dot1.x-= 1.15;
            this.texts[2].position.setTo(this.dot3.x+70,this.dot3.y+50);
            this.texts[2].setText(((Math.round( this.line.length* 10 ) / 100)-17).toFixed(1) + " cm");
            this.texts[3].position.setTo(this.dot3.x-150, this.dot3.y+50);
            this.texts[3].setText(((Math.round( this.line.length* 10 ) / 100)-17).toFixed(1) + " cm");
            this.texts[4].position.setTo(this.dot3.x, this.y4);
            this.texts[4].setText(((Math.round( this.line.length* 10 ) / 100)-17).toFixed(1) + " cm");
           // this.texts[2].setText(sidelines);
            
        
            
           // this.texts[3].setText(sidelines);
        
        
            
            touchCheck = true;
            
        }
        
        //Handle1 - pull right
        if (this.line.length >= 202&&this.fakeHandle1.x > this.dot1.x && this.fakeHandle1.input.isDragged) {
            this.dot1.x+=1.15;
           
            
            this.texts[2].position.setTo(this.dot3.x+70,this.dot3.y+50);
            this.texts[2].setText(((Math.round( this.line.length* 10 ) / 100)-17).toFixed(1) + " cm");
            this.texts[3].position.setTo(this.dot3.x-150, this.dot3.y+50);
            this.texts[3].setText(((Math.round( this.line.length* 10 ) / 100)-17).toFixed(1) + " cm");
            this.texts[4].position.setTo(this.dot3.x, this.y4);
            this.texts[4].setText(((Math.round( this.line.length* 10 ) / 100)-17).toFixed(1) + " cm");
            
            
         
        }
        
        //Handle2 - pull right
        if (this.line.length <= 320&&this.fakeHandle2.x > this.dot2.x && this.fakeHandle2.input.isDragged) {
            this.dot2.x+=1.15;
            this.dot3.y-=1;
            this.dot3.x+=0.5;
    
            this.texts[2].position.setTo(this.dot3.x+70,this.dot3.y+50);
            this.texts[2].setText(((Math.round( this.line.length* 10 ) / 100)-17).toFixed(1) + " cm");
            this.texts[3].position.setTo(this.dot3.x-150, this.dot3.y+50);
            this.texts[3].setText(((Math.round( this.line.length* 10 ) / 100)-17).toFixed(1) + " cm");
            this.texts[4].position.setTo(this.dot3.x, this.y4);
            this.texts[4].setText(((Math.round( this.line.length* 10 ) / 100)-17).toFixed(1) + " cm");
            
            touchCheck = true
            
            
        }
        //Handle2 - pull left
        if (this.line.length >= 202&&this.fakeHandle2.x < this.dot2.x && this.fakeHandle2.input.isDragged) {
            this.dot2.x-=1.15;
          
            
            this.texts[2].position.setTo(this.dot3.x+70,this.dot3.y+50);
            this.texts[2].setText(((Math.round( this.line.length* 10 ) / 100)-17).toFixed(1) + " cm");
            this.texts[3].position.setTo(this.dot3.x-150, this.dot3.y+50);
            this.texts[3].setText(((Math.round( this.line.length* 10 ) / 100)-17).toFixed(1) + " cm");
            this.texts[4].position.setTo(this.dot3.x, this.y4);
            this.texts[4].setText(((Math.round( this.line.length* 10 ) / 100)-17).toFixed(1) + " cm");
            
            touchCheck = true
        }
        //Handle3 - pull right
        if (this.line.length <= 320&& this.fakeHandle3.x > this.dot3.x && this.fakeHandle3.y < this.dot3.y &&this.fakeHandle3.input.isDragged) {
            this.dot2.x+=1.15;
            this.dot3.y-=1;
            this.dot3.x+=0.5;
            
            this.texts[2].position.setTo(this.dot3.x+70,this.dot3.y+50);
            this.texts[2].setText(((Math.round( this.line.length* 10 ) / 100)-17).toFixed(1) + " cm");
            this.texts[3].position.setTo(this.dot3.x-150, this.dot3.y+50);
            this.texts[3].setText(((Math.round( this.line.length* 10 ) / 100)-17).toFixed(1) + " cm");
            this.texts[4].position.setTo(this.dot3.x, this.y4);
          //  this.texts[4].setText(((Math.round( this.line.length* 10 ) / 100)-15).toFixed(2) + "cm");
            
            touchCheck = true
            
        }
        //Handle3 - pull left
        if (this.line.length <= 320&&this.fakeHandle3.x < this.dot3.x && this.fakeHandle3.y < this.dot3.y &&this.fakeHandle3.input.isDragged) {
            this.dot1.x-=1.15;
            ;
            
            this.texts[2].position.setTo(this.dot3.x+70,this.dot3.y+50);
            this.texts[2].setText(((Math.round( this.line.length* 10 ) / 100)-17).toFixed(1) + " cm");
            this.texts[3].position.setTo(this.dot3.x-150, this.dot3.y+50);
            this.texts[3].setText(((Math.round( this.line.length* 10 ) / 100)-17).toFixed(1) + " cm");
            this.texts[4].position.setTo(this.dot3.x, this.y4);
            this.texts[4].setText(((Math.round( this.line.length* 10 ) / 100)-17).toFixed(1) + " cm");
            
            touchCheck = true
            
        }
        //Handle3 - pull right down
        if (this.line.length >= 201&&this.fakeHandle3.x < this.dot3.x && this.fakeHandle3.y > this.dot3.y+0.8 &&this.fakeHandle3.input.isDragged) {
            this.dot2.x-=1.15;
          
            
            this.texts[2].position.setTo(this.dot3.x+70,this.dot3.y+50);
            this.texts[2].setText(((Math.round( this.line.length* 10 ) / 100)-17).toFixed(1) + " cm");
            this.texts[3].position.setTo(this.dot3.x-150, this.dot3.y+50);
            this.texts[3].setText(((Math.round( this.line.length* 10 ) / 100)-17).toFixed(1) + " cm");
            this.texts[4].position.setTo(this.dot3.x, this.y4);
            this.texts[4].setText(((Math.round( this.line.length* 10 ) / 100)-17).toFixed(1) + " cm");
            touchCheck = true
            
        }
        //Handle3 - pull left down
        if (this.line.length >= 201 &&this.fakeHandle3.x > this.dot3.x && this.fakeHandle3.y > this.dot3.y+0.8 &&this.fakeHandle3.input.isDragged) {
            this.dot1.x+=1.15;
           
            
            this.texts[2].position.setTo(this.dot3.x+70,this.dot3.y+50);
            this.texts[2].setText(((Math.round( this.line.length* 10 ) / 100)-17).toFixed(1) + " cm");
            this.texts[3].position.setTo(this.dot3.x-150, this.dot3.y+50);
            this.texts[3].setText(((Math.round( this.line.length* 10 ) / 100)-17).toFixed(1) + " cm");
            this.texts[4].position.setTo(this.dot3.x, this.y4);
            this.texts[4].setText(((Math.round( this.line.length* 10 ) / 100)-17).toFixed(1) + " cm");
            touchCheck = true
        }
        
        
        
        
        
    
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
                        this.btnRadio1.loadTexture('btnradiochecked',0);
                        linegraphics.beginFill(0x000000);
                        linegraphics.lineStyle(7, '#FF3300', 1);
                        linegraphics.moveTo(this.dot1.x,this.dot1.y);
                        linegraphics.lineTo(this.dot3.x,this.dot3.y);
                        linegraphics.moveTo(this.dot2.x,this.dot2.y);
                        linegraphics.lineTo(this.dot3.x,this.dot3.y);
                        linegraphics.moveTo(this.dot1.x,this.dot1.y);
                        linegraphics.lineTo(this.dot2.x,this.dot2.y);
                        linegraphics.endFill();
                        
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
                      
                    }
                    else if (b==1)
                    {
                        this.btnRadio3.loadTexture('btnradiochecked',0);  
                        linegraphics.beginFill(0x000000);
                        linegraphics.lineStyle(7, '#FF3300', 1);
                        linegraphics.moveTo(this.dot1.x,this.dot1.y);
                        linegraphics.lineTo(this.dot3.x,this.dot3.y);
                        linegraphics.moveTo(this.dot2.x,this.dot2.y);
                        linegraphics.lineTo(this.dot3.x,this.dot3.y);
                        linegraphics.moveTo(this.dot1.x,this.dot1.y);
                        linegraphics.lineTo(this.dot2.x,this.dot2.y);
                        
                        linegraphics.endFill();
                        
                    }
                    break;
                    
                case 4: 
                    this.btnRadio1.loadTexture('btnradio',0);
                    this.btnRadio2.loadTexture('btnradio',0);
                    this.btnRadio3.loadTexture('btnradio',0);
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
            this.texts[10].position.x = 1170;
            this.btnNext.visible = true;
            this.pinkbox1.alpha =1;
            this.isoAns1.alpha = 1;
            
            linegraphics.beginFill(0x000000);
            linegraphics.lineStyle(7, '#FF3300', 1);
            linegraphics.moveTo(this.dot1.x,this.dot1.y);
            linegraphics.lineTo(this.dot3.x,this.dot3.y);
            linegraphics.moveTo(this.dot2.x,this.dot2.y);
            linegraphics.lineTo(this.dot3.x,this.dot3.y);
            linegraphics.moveTo(this.dot1.x,this.dot1.y);
            linegraphics.lineTo(this.dot2.x,this.dot2.y);
            linegraphics.endFill();
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
        console.log("Is this true/false: " + activation2);
    },
    render: function() {
     /*   game.debug.body(sprite1);
        game.debug.body(sprite2);
        game.debug.body(sprite3);
        game.debug.body(this.dot3); */
    },
    
    collisionHandler: function(obj1, obj2) 
    {
        console.log("collide")
     //   game.stage.backgroundColor = '#992d2d';
        this.fakeHandle3.input.isDragged = false;
        this.dot3.y++;
    },
    collisionHandler2: function(obj1,obj2) {
        console.log("collide")
     //   game.stage.backgroundColor = '#992d2d';
        this.fakeHandle2.input.isDragged = false;
        this.dot2.x--;
        
        
    },
    collisionHandler1: function(obj1,obj2) {
        console.log("collide")
     //   game.stage.backgroundColor = '#992d2d';
        this.fakeHandle1.input.isDragged = false;
        this.dot1.x++;
        
        this.texts[2].position.setTo(this.x2+=0.5,this.y2+=0.7);
        this.texts[3].position.setTo(this.x3+=0.7, this.y3+=0.7);
        this.texts[4].position.setTo(this.x4+=0.5, this.y4);
    }
};
