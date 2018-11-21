var alx;
var startingAngle2;
var startingAngle3;
var height;
demo.state12 = function(){};
demo.state12.prototype = {rectLength:0,rectLength2:0, btnTryAgain: null, txtTryAgain: null, boolTryAgain: false,k: 0,
    preload: function(){
        loadAssets();
        game.stage.backgroundColor = '#000000';
    },
    create: function(){
        game.stage.backgroundColor = '#ffffff';
        console.log("state12");
        addChangeStateEventListers();
        fixedGUI(this);
        this.headingTexts.text = "Right-Angled Triangles";
        fixedGUI2();
        addBtnRadio(this);
        addTickCross(this);
        forIsoEquTriangle(this);
        rightangleAns(this);
       
        linegraphics = game.add.graphics(0,0);
        this.home.events.onInputDown.add(function(){
        n = 0; this.n=0; a =0;b=0;c=0; this.a=0; this.b =0; this.c=0;confusedCheck =0; this.confusedCheck=0;
        this.boolTryAgain = false;
        k =0;this.k=0;check=0;this.check=0;
        game.state.start('state1');
       
    },this);
      
          
          this.cross1.position.setTo(310,722.5);
        this.cross1.anchor.setTo(0.15,0.15);
        this.cross1.alpha = 0;
        this.cross2.position.setTo(310,774.5);
        this.cross2.anchor.setTo(0.15,0.15);
        this.cross2.alpha = 0;
        this.tick1.position.setTo(310, 823.5);
        this.tick1.anchor.setTo(0.255,0.2555);
        this.tick1.alpha = 0;
        this.tick2.alpha = 0;
        
       
        
       
        this.btnRadio1.position.setTo(310, 722.5);
        this.btnRadio1.alpha = 0;
        this.btnRadio2.position.setTo(310, 823.5);
        this.btnRadio2.alpha = 0;
        this.btnRadio3.position.setTo(310, 774.5);
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
            if (n==1){this.boolTryAgain = true;this.cross1.alpha = 1; this.texts[2].setStyle({backgroundColor: 'rgba(255, 255, 0,1)'}); this.btnStart.frame = 1;   this.texts[10].alpha = 0.3; a+=1;}
            if (n==2){this.tick1.alpha = 1; c+=1; this.texts[2].setStyle({backgroundColor: 'rgba(255, 255, 0,1)'});}
            if (n==3){this.boolTryAgain = true;this.cross2.alpha = 1; this.texts[2].setStyle({backgroundColor: 'rgba(255, 255, 0,1)'});this.btnStart.frame = 1;  this.texts[10].alpha = 0.3; b+=1;}
        }
                                             ,this);
        
        
        this.btnNext = game.add.button(0,0, 'btn2');
        this.btnNext.frame = 0;
        this.btnNext.position.setTo(1150, 815);
        this.btnNext.scale.setTo(0.8,0.5);
        this.btnNext.visible = false;
        this.btnNext.events.onInputDown.add(function(){ n = 0; this.n=0; a =0;b=0;c=0; this.a=0; this.b =0; this.c=0;confusedCheck =0; this.confusedCheck=0;
        this.boolTryAgain = false;
        k =0;this.k=0;check=0;this.check=0;
            game.state.start('state13');touchCheck = false;
        },this)
        
        
        /*this.fakeHandle1.events.onInputOver.add(function(){
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
        
          addTexts(this);
         for (var i = 0; i < 11; i++){
            this.texts[i] = game.add.text(i*100,i*100, "6");
        }
        this.texts[0].text = "Try this...";
        this.texts[0].position.setTo(140, 150);
        this.texts[0].setStyle({ fill: '#008000'});
        this.texts[0].angle = -10;
        dotAttributes(this);
        this.dot.alpha =0;
        boxTryAgainRotation(this);
        this.texts[0].addChild(this.drawGraphics);
        
        this.texts[1].text = "Drag any one of the red points to change the size of the right-angled triangle.\nObserve how the angles change.";
        this.texts[1].position.setTo(300, 125);
        this.texts[1].align = 'left';
        this.texts[1].fontWeight = 'normal';
       
        this.texts[2].position.setTo(this.dot1.x+70,this.dot1.y-50);
        this.texts[2].setText("90\xB0");
        
        this.texts[3].position.setTo(this.dot3.x+10, this.dot3.y+50);
        this.texts[3].text = "56\xB0";
        
        this.texts[4].position.setTo(this.dot2.x+65, this.dot2.y-40);
        this.texts[4].text = "34\xB0";
        
        
        this.texts[5].position.setTo(240,670);
        this.texts[5].text = "No matter how the size of the right-angled triangle changes, _________________."
        this.texts[5].alpha = 0;
        this.texts[5].fontWeight = 'normal';
        
        this.texts[6].position.setTo(350,720);
        this.texts[6].text = "all three angles are equal";
        this.texts[6].alpha = 0;
        this.texts[6].fontWeight ='normal';
        
        this.texts[7].position.setTo(350,770);
        this.texts[7].text = "only two angles are always equal";
        this.texts[7].alpha = 0;
        this.texts[7].fontWeight ='normal';
        
        this.texts[8].position.setTo(350,820);
        this.texts[8].text = "one angle is always 90\xB0";
        this.texts[8].alpha = 0;
        this.texts[8].fontWeight ='normal';
        
        this.texts[9].position.setTo(1285,555);
        this.texts[9].text = "Done";
        this.texts[9].alpha = 0.3;
        
        this.texts[10].text = "Check";
        this.texts[10].position.setTo(1175,820);
        this.texts[10].alpha = 0;
        
        this.dot1.position.setTo(this.dot3.x, this.dot2.y);
        this.dot2.position.setTo(this.dot1.x+200, this.dot1.y);
        this.dot3.position.setTo(this.dot1.x, this.dot1.y-200);
        polygon = new Phaser.Polygon();
        
       // this.rectLength = (this.dot1.x - this.dot2.x)/10; //-20
       // this.rectLength2 = (this.dot1.y - this.dot3.y)/10; //20
        
        
        
        graphics = game.add.graphics(0,0);
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
       
        
         tickTween3 = this.game.add.tween(this.pinkbox6).to({alpha:1},1000,Phaser.Easing.Linear.None);
        tickTween4 = this.game.add.tween(this.isoAns6).to({alpha:1},1500,Phaser.Easing.Linear.None);
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
    },
    update: function(){
          if (this.fakeHandle1.input.pointerOver()) {
           this.fakeHandle1.input.useHandCursor = true;
       }
        if (this.fakeHandle2.input.pointerOver()) {
           this.fakeHandle2.input.useHandCursor = true;
       }
        if (this.fakeHandle3.input.pointerOver()) {
           this.fakeHandle3.input.useHandCursor = true;
       }
        
       // console.log("what is the bool of the handcursor: " + this.hand1.input.useHandCursor);
        console.log("what is tick tween: " +tickTween);
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
            if (a == 1 && b == 1){
            this.btnRadio1.loadTexture('btnradio',0);
            this.btnRadio2.loadTexture('btnradiochecked',0);
            this.btnRadio3.loadTexture('btnradio',0);
            this.texts[10].alpha = 1;
            this.texts[10].text = "Continue";
            this.texts[10].position.x = 1170;
            tickTween.start();
       
                tickTween3.start();
            tickTween4.start();
            this.btnNext.visible = true;
            
            
         /*   linegraphics.beginFill(0x000000);
            linegraphics.lineStyle(7, '#FF3300', 1);
            linegraphics.moveTo(this.dot1.x,this.dot1.y);
            linegraphics.lineTo(this.dot3.x,this.dot3.y);
            linegraphics.moveTo(this.dot2.x,this.dot2.y);
            linegraphics.lineTo(this.dot3.x,this.dot3.y);
            linegraphics.endFill();*/
            }
       console.log("What is this x: " + this.dot.x + " y: " + this.dot.y);
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
        
         alx = new forState12(this.dot1, this.dot2, this.dot3);
         alx.init();
        
        startingAngle1 = Math.PI+Math.PI/2;
        
        startingAngle2 = Math.PI;
        
        startingAngle3 =  Math.PI/2 - alx.dotProductC;
        
        polygon.setTo([new Phaser.Point(this.dot1.x, this.dot1.y), new Phaser.Point(this.dot2.x, this.dot2.y),new Phaser.Point(this.dot3.x, this.dot3.y)]);
        graphics1.destroy();
        graphics.destroy();
        graphics = game.add.graphics(0,0);
        graphics.beginFill(0xACD9E2, 0.4);
         graphics.lineStyle(2, 0x000000,1);
        graphics.drawPolygon(polygon.points);
        graphics.beginFill(2, 0xFF3300);
       // graphics.drawRect(this.dot1.x-this.rectLength,this.dot1.y+this.rectLength, this.rectLength, this.rectLength2);
        graphics1 = game.add.graphics(0,0);
        graphics1.lineStyle(2, 0xFF3300);
        graphics1.arc(this.dot1.x,this.dot1.y,30,startingAngle1,startingAngle1+alx.dotProductA,false);
        graphics1.arc(this.dot2.x, this.dot2.y, 50,startingAngle2,startingAngle2+alx.dotProductB ,false );
        graphics1.arc(this.dot3.x, this.dot3.y, 50, startingAngle3, startingAngle3+alx.dotProductC, false);
        
    /*   if (game.input.activePointer.isDown) {
            this.dot1.position.setTo(this.dot3.x, this.dot2.y);
            this.dot2.position.setTo(this.dot1.x+200, this.dot1.y);
            this.dot3.position.setTo(this.dot1.x, this.dot1.y-200);}*/
        
        this.gradient = (this.dot3.y - this.dot2.y) / (this.dot3.x - this.dot2.x)
        this.dot3.y = (this.gradient * (this.dot3.x - this.dot2.x))+this.dot2.y; 
        console.log(this.gradient);
        lineLength = new Phaser.Line();
        lineLength.fromSprite(this.dot1,this.dot2,false);
      // console.log(lineLength.length);
        lineLength2 = new Phaser.Line();
        lineLength2.fromSprite(this.dot1,this.dot3,false);
       // console.log(lineLength2.length);
        //handle1 pull left
       if (lineLength.length <= 282&& this.fakeHandle1.x < this.dot1.x && this.fakeHandle1.input.isDragged) {
           this.dot1.x--
           this.dot3.y--;
           this.dot3.x = this.dot1.x;
           this.texts[2].position.setTo(this.dot1.x+20,this.dot1.y-50);
           this.texts[3].position.setTo(this.dot3.x+10, this.dot3.y+50);
           this.texts[4].position.setTo(this.dot2.x-85, this.dot2.y-40);
           touchCheck = true;
       }
        if (lineLength.length >= 165 &&this.fakeHandle1.x > this.dot1.x && this.fakeHandle1.input.isDragged) {
           this.dot1.x++;
           this.dot3.y++;
           this.dot3.x = this.dot1.x;
            this.texts[2].position.setTo(this.dot1.x+20,this.dot1.y-50);
            this.texts[3].position.setTo(this.dot3.x+10, this.dot3.y+50);
            this.texts[4].position.setTo(this.dot2.x-85, this.dot2.y-40);
            touchCheck = true;
       }
        //handle3 pull left
        if (lineLength.length <= 282&& this.fakeHandle3.x < this.dot3.x && this.fakeHandle3.input.isDragged) {
           this.dot1.x--
           this.dot3.y--;
           this.dot3.x = this.dot1.x;
            this.texts[2].position.setTo(this.dot1.x+20,this.dot1.y-50);
            this.texts[3].position.setTo(this.dot3.x+10, this.dot3.y+50);
            this.texts[4].position.setTo(this.dot2.x-85, this.dot2.y-40);
            touchCheck = true;
       }
        if (lineLength.length >= 165 &&this.fakeHandle3.x > this.dot3.x && this.fakeHandle3.input.isDragged) {
           this.dot1.x++;
           this.dot3.y++;
           this.dot3.x = this.dot1.x;
            this.texts[2].position.setTo(this.dot1.x+20,this.dot1.y-50);
            this.texts[3].position.setTo(this.dot3.x+10, this.dot3.y+50);
            this.texts[4].position.setTo(this.dot2.x-85, this.dot2.y-40);
            touchCheck = true;
       }
        //handle2 pull down
        if (lineLength2.length <=300&& this.fakeHandle2.y > this.dot2.y && this.fakeHandle2.input.isDragged) {
           this.dot2.y++;
            this.dot2.x++;
            this.dot1.y = this.dot2.y;
            this.texts[2].position.setTo(this.dot1.x+20,this.dot1.y-50);
            this.texts[3].position.setTo(this.dot3.x+10, this.dot3.y+50);
            this.texts[4].position.setTo(this.dot2.x-85, this.dot2.y-40);
            touchCheck = true;
          
       }
        if (lineLength2.length >=190&& this.fakeHandle2.y <= this.dot2.y && this.fakeHandle2.input.isDragged) {
           this.dot2.y--;
            this.dot2.x--;
            this.dot1.y = this.dot2.y;
            this.texts[2].position.setTo(this.dot1.x+20,this.dot1.y-50);
            this.texts[3].position.setTo(this.dot3.x+10, this.dot3.y+50);
            this.texts[4].position.setTo(this.dot2.x-85, this.dot2.y-40);
            touchCheck = true;
          
       }
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
                       /* linegraphics.beginFill(0x000000);
                        linegraphics.lineStyle(7, '#FF3300', 1);
                        linegraphics.moveTo(this.dot1.x,this.dot1.y);
                        linegraphics.lineTo(this.dot3.x,this.dot3.y);
                        linegraphics.moveTo(this.dot2.x,this.dot2.y);
                        linegraphics.lineTo(this.dot3.x,this.dot3.y);
                        linegraphics.endFill();*/
                        
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
                     /*   linegraphics.beginFill(0x000000);
                        linegraphics.lineStyle(7, '#FF3300', 1);
                        linegraphics.moveTo(this.dot1.x,this.dot1.y);
                        linegraphics.lineTo(this.dot3.x,this.dot3.y);
                        linegraphics.moveTo(this.dot2.x,this.dot2.y);
                        linegraphics.lineTo(this.dot3.x,this.dot3.y);
                        linegraphics.endFill();*/
                        
                    }
                    break;
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
            this.pinkbox6.alpha =1;
            this.isoAns6.alpha =1;
            
          /*  linegraphics.beginFill(0x000000);
            linegraphics.lineStyle(7, '#FF3300', 1);
            linegraphics.moveTo(this.dot1.x,this.dot1.y);
            linegraphics.lineTo(this.dot3.x,this.dot3.y);
            linegraphics.moveTo(this.dot2.x,this.dot2.y);
            linegraphics.lineTo(this.dot3.x,this.dot3.y);
            linegraphics.endFill();*/
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
        
    }
};