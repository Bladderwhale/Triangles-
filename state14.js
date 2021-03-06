demo.state14 = function(){};
demo.state14.prototype = {
    btnPlay: null, btnNext: null, a: 0, b:0, c:0, ans1:null,ans2:null,n1:0, btnTryAgain: null, txtTryAgain: null, boolTryAgain: false,k: 0,confusedCheck: 0,box:0,
    preload: function(){
        loadAssets();
        game.stage.backgroundColor = '#000000';

    },
    create: function(){
        game.stage.backgroundColor = '#ffffff';
        console.log('state13');
        addChangeStateEventListers();
        fixedGUI(this);
        
        
        this.headingTexts.text = "Right-Angled Triangles";
        fixedGUI3i();
        dotAttributes(this);
        addBtnRadio(this);
        addTickCross(this);
        rightangleAns(this);
        addLightImage1i();
        highlighter(this);
        this.highlight.position.setTo(510,140);
        this.home.events.onInputDown.add(function(){
        n = 0; this.n=0; a =0;b=0;c=0; this.a=0; this.b =0; this.c=0;confusedCheck =0; this.confusedCheck=0;
        this.boolTryAgain = false;
        k =0;this.k=0;check=0;this.check=0;
        game.state.start('state1');
       
    },this);
        //child object attached to the parent object 
        emptyobj = game.add.sprite(738, 548, undefined);
        graphics = game.add.graphics(0,0);
        graphics.lineStyle(2, 0xFF3300);
        this.box = graphics.drawRect(0,0,20,20);
        emptyobj.addChild(this.box);
        emptyobj.angle = -135
        
        

        var firstTrianglePoints = [370, 555,420 ,290 ];
        var firstTriDraw = game.add.graphics(0,0);
        firstTriDraw.beginFill(0xe0ffff,0.4);
        firstTriDraw.lineStyle(2,0x000000,1);
        firstTriDraw.moveTo(150,400);
        for (var i = 0; i < firstTrianglePoints.length; i++) {
            firstTriDraw.lineTo(firstTrianglePoints[i], firstTrianglePoints[i+1]); 
            i++;
        }
        firstTriDraw.endFill(); 

        var secondTrianglePoints = [738, 548, 960, 335];
        var secondTriDraw = game.add.graphics(0,0);
        secondTriDraw.beginFill(0x7FBF7F,0.4);
        secondTriDraw.moveTo(530,335);
        secondTriDraw.lineStyle(2,0x000000,1);
        for (var i = 0; i < secondTrianglePoints.length; i++) {
            secondTriDraw.lineTo(secondTrianglePoints[i], secondTrianglePoints[i+1]);
            i++;
        }
        secondTriDraw.endFill();
        
        var thirdTrianglePoints = [1250,550, 1100,350];
        var thirdTriDraw = game.add.graphics(0,0);
        thirdTriDraw.beginFill(0xFFFF66,0.4);
        thirdTriDraw.moveTo(950, 520);
        thirdTriDraw.lineStyle(2,0x000000,1);
            for (var i = 0; i<thirdTrianglePoints.length; i++) {
            thirdTriDraw.lineTo(thirdTrianglePoints[i], thirdTrianglePoints[i+1] );
            i++;
        }
        thirdTriDraw.endFill();
        
        var alx13 = new forState11(150,400,370,555,420,290);
        alx13.init();
        starttAngle1 = Math.PI + Math.PI/2 + Math.PI/2 - alx13.dotProductA/2.8;
        starttAngle2 = Math.PI + Math.PI/2 - alx13.dotProductA/1;
        starttAngle3 = Math.PI/2 + Math.PI/2.6 - alx13.dotProductC;
        
        var alx14 =new forState11(530,335,738,548,960,335);
        alx14.init();
        starttAngle4 = Math.PI+Math.PI/2+Math.PI/2
        
        starttAngle6 = Math.PI/2 + Math.PI/2 - alx14.dotProductB/2;
        
        var alx15 =new forState11(950, 520, 1250, 550, 1100, 350);
        alx15.init();
        starttAngle7 = Math.PI + Math.PI/2 + Math.PI/2.7- alx15.dotProductA/2;
        starttAngle8 = Math.PI+0.1;
        starttAngle9 = Math.PI/2 - alx15.dotProductC/2.3;
        
        graphics1 = game.add.graphics(0,0);
        graphics1.lineStyle(2, 0xFF3300);
        graphics1.arc(150,400,50,starttAngle1,starttAngle1+alx13.dotProductA,false);
      
        graphics1.arc(370,555,50,starttAngle2,starttAngle2+alx13.dotProductB,false);
        graphics1.arc(420,290,50,starttAngle3,starttAngle3+alx13.dotProductC,false);
        graphics1.arc(530,335, 50, starttAngle4, starttAngle4 + alx14.dotProductA,false);
        graphics1.arc(960, 335, 50, starttAngle6, starttAngle6 + alx14.dotProductC,false);
        
        
     
       // graphics1.arc(785.5, 550, 50, starttAngle5, starttAngle5 + alx14.dotProductB,false);
     //   graphics1.arc(600, 437.5, 50, starttAngle6, starttAngle6 + alx14.dotProductC,false);
        graphics1.arc(950, 520, 50, starttAngle7, starttAngle7 + alx15.dotProductA, false);
        graphics1.arc( 1250, 550, 50, starttAngle8, starttAngle8 + alx15.dotProductB,false);
        graphics1.arc(1100, 350, 50, starttAngle9, starttAngle9 + alx15.dotProductC,false);
        
        this.btnPlay = game.add.button(0,0,"btn2");
        this.btnPlay.frame = 1;
        this.btnPlay.position.setTo(1035, 800);
        this.btnPlay.scale.setTo(0.7,0.5);
        this.btnPlay.inputEnabled = true;
        
        this.btnNext = game.add.button(0,0,"btn2");
        this.btnNext.frame = 0;
        this.btnNext.position.setTo(1035, 800);
        this.btnNext.scale.setTo(0.8,0.5);
        this.btnNext.visible = false;
        
        addTexts(this);
        for (var i = 0; i < 13; i++){
            this.texts[i] = game.add.text(i*10,i*10, "1");
        }
        this.texts[0].position.setTo(325,140);
        this.texts[0].text = "If a triangle has a 90\xB0 angle, it is a right-angled triangle."
        this.texts[0].lineSpacing = 30;
        this.texts[0].fontWeight = 'normal';
        
        this.texts[1].position.setTo(270,240);
        this.texts[1].text = "Which one of these triangles is right-angled?"
        this.texts[1].lineSpacing = 30;
        this.texts[1].fontWeight = 'normal';
        
        this.texts[2].position.setTo(130,255);
        this.texts[2].text = "Try this..."
        this.texts[2].angle = -10;
        this.texts[2].setStyle({ fill: '#0000FF'});
        
        boxTryAgainRotation(this);
        this.texts[2].addChild(this.drawGraphics);
        
        this.texts[3].position.setTo(210, 399);
        this.texts[3].text = "63\xB0";
        
        this.texts[4].position.setTo(349, 334);
        this.texts[4].text = "63\xB0";
        
        this.texts[5].position.setTo(330, 480);
        this.texts[5].text = "54\xB0";
        
        this.texts[6].position.setTo(583, 347);
        this.texts[6].text = "45\xB0";
        
        this.texts[7].position.setTo(847+15, 349);
        this.texts[7].text = "45\xB0";
        
        this.texts[8].position.setTo(719, 484);
        this.texts[8].text = "";
        
        this.texts[9].position.setTo(1076,405);
        this.texts[9].text = "78\xB0";
        
        this.texts[10].position.setTo(1010-10,495-15);
        this.texts[10].text = "60\xB0";
        
        this.texts[11].position.setTo(1165,500);
        this.texts[11].text = "42\xB0";
        
        this.texts[12].position.setTo(1060,805);
        this.texts[12].text = "Check";
        this.texts[12].alpha = 0.3;
        
        this.btnRadio1.position.setTo(720,610);
        this.btnRadio2.position.setTo(373,610);
        this.btnRadio3.position.setTo(1075,610);
        
        this.tick1.position.setTo(720,610);
        this.tick1.anchor.setTo(0.25,0.25);
        this.tick1.alpha = 0;
        this.tick2.alpha=0;
        this.cross1.position.setTo(373,610);
        this.cross1.anchor.setTo(0.19,0.19);
        this.cross1.alpha = 0;
        
        this.cross2.position.setTo(1075,610);
        this.cross2.anchor.setTo(0.25,0.25);
        this.cross2.alpha = 0;
        
        this.dot.alpha =0;
       
     
        
        
        this.btnRadio1.events.onInputDown.add(function(){if (check <2){this.btnRadio1.loadTexture("btnradiochecked",0); this.n1 = 1; this.a = 1;}},this);
                this.btnRadio2.events.onInputDown.add(function(){if (check <2){this.btnRadio2.loadTexture("btnradiochecked",0); this.n1 = 2; this.b = 1;}},this);
        this.btnRadio3.events.onInputDown.add(function(){if (check <2){this.btnRadio3.loadTexture("btnradiochecked",0); this.n1 = 3; this.c = 1;}},this);
        
        this.btnPlay.events.onInputDown.add(function()
                                            {
            if(this.n1 == 1){
                this.tick1.alpha = 1;
                this.btnNext.visible = true;
                this.texts[12].text = "Continue";
                this.texts[12].position.setTo(1055,805);
                  this.pinkbox8c.alpha =1;
                this.isoAns8c.alpha =1;
                    this.highlight.alpha = 1;
                
                
                 this.box = graphics.drawRect(0,0,20,20);
            linegraphics = game.add.graphics(0,0);
             linegraphics.lineStyle(4, 0xFF3300,1);
              linegraphics.moveTo(751,532);
              linegraphics.lineTo(737,520);
                linegraphics.moveTo(723,533);
          linegraphics.lineTo(737,521);
            this.btnNext2.visible = true;
                this.txtLayer.visible = true;
                
            }
            if(this.n1 == 2) {
                this.cross1.alpha = 1;
                this.texts[12].alpha = 0.3;
              
                this.btnPlay.frame = 1;
                this.btnPlay.alpha = 1;
                this.boolTryAgain = true;
                this.confusedCheck++;
                this.pinkbox8b.alpha =1;
                this.isoAns8b.alpha =1;
                    this.highlight.alpha = 1;
                
                
                 this.box = graphics.drawRect(0,0,20,20);
            linegraphics = game.add.graphics(0,0);
             linegraphics.lineStyle(4, 0xFF3300,1);
              linegraphics.moveTo(751,532);
              linegraphics.lineTo(737,520);
                linegraphics.moveTo(723,533);
          linegraphics.lineTo(737,521);
            }
            if(this.n1 == 3) {
                this.cross2.alpha = 1;
                this.texts[12].alpha = 0.3;
            
                this.btnPlay.frame = 1;
                this.btnPlay.alpha = 1;
                this.boolTryAgain = true;
                this.confusedCheck++;
                this.pinkbox8a.alpha =1;
                this.isoAns8a.alpha =1;
                    this.highlight.alpha = 1;
                
                
                 this.box = graphics.drawRect(0,0,20,20);
            linegraphics = game.add.graphics(0,0);
             linegraphics.lineStyle(4, 0xFF3300,1);
              linegraphics.moveTo(751,532);
              linegraphics.lineTo(737,520);
                linegraphics.moveTo(723,533);
          linegraphics.lineTo(737,521);
                
                
            }
               },this);
        
        this.btnNext.events.onInputDown.add(function(){ n = 0; this.n=0; a =0;b=0;c=0; this.a=0; this.b =0; this.c=0;confusedCheck =0; this.confusedCheck=0;
        this.boolTryAgain = false;this.n1=0;
        k =0;this.k=0;check=0;this.check=0;game.state.start('state1');sp3 =1;},this);
        
         //Creating the try again button
        this.btnTryAgain = game.add.button(0,0, 'btn2');
        this.btnTryAgain.frame = 0;
        this.btnTryAgain.position.setTo(1035, 800);
        this.btnTryAgain.scale.setTo(0.785,0.5);
        this.btnTryAgain.visible = false;
        this.txtTryAgain = game.add.text(1150,815,"Try Again");
        this.txtTryAgain.alpha = 0;
        this.txtTryAgain.position.setTo(1050, 805);
        this.boolTryAgain = false;
        this.btnTryAgain.events.onInputDown.add(function(){this.boolTryAgain = false;this.tick2.alpha = 0;
            this.tick1.alpha = 0;
            this.tick2.alpha = 0;                                               
            this.btnRadio1.loadTexture('btnradio',0);
            this.btnRadio2.loadTexture('btnradio',0);
            this.btnRadio3.loadTexture('btnradio',0);
            check = 0;this.k++;this.btnNext.visible = false;this.texts[12].position.setTo(1060,805);
            this.texts[12].text = "Check"; this.btnPlay.visible = true;a = 0; b = 0; c = 0; this.ans3.alpha=0;}, this);
        
       tickTween = this.game.add.tween(this.tick1).to({alpha:1},1000,Phaser.Easing.Linear.None);
          
       tickTween2 = this.game.add.tween(this.pinkbox8c).to({alpha:1},1000,Phaser.Easing.Linear.None);
          
       tickTween3 = this.game.add.tween(this.isoAns8c).to({alpha:1},1000,Phaser.Easing.Linear.None);
        
        //Another laying
        this.btnNext2 = game.add.button(0,0,"btn2");
        this.btnNext2.frame = 0;
        this.btnNext2.position.setTo(1030, 795);
        this.btnNext2.scale.setTo(1.2,1.2);
        this.btnNext2.visible = false;
        this.btnNext2.inputEnabled = true;
        this.txtLayer = game.add.text(1102-40, 815, "Another Type \n of Triangle");
        this.txtLayer.visible = false;
        this.btnNext2.events.onInputDown.add(function(){n = 0; this.n=0; a =0;b=0;c=0; this.a=0; this.b =0; this.c=0;confusedCheck =0; this.confusedCheck=0;
        this.boolTryAgain = false;
        k =0;this.k=0;check=0;this.check=0;game.state.start('state1'); sp3 =1;},this);
        
          tickTween4 = this.game.add.tween(this.btnNext2).to({visible:true},0,Phaser.Easing.Linear.None);
          tickTween5 = this.game.add.tween(this.txtLayer).to({visible:true},0,Phaser.Easing.Linear.None);
        //end
    },
    update: function(){
        console.log("what is the value of check: " + check);
        console.log("a: " + a + "b: " + b + "c " + c);
          //Try again function
        if (this.boolTryAgain == true) {
            if (this.k < 1) {
            this.btnTryAgain.visible = true;
            this.txtTryAgain.alpha = 1;
                    this.highlight.alpha = 1;
            }
            this.n1 = 4;
        }
        else if (this.boolTryAgain == false) {
            this.btnTryAgain.visible = false;
            this.txtTryAgain.alpha = 0;
            
            if (this.k == 2){this.tick1.alpha = 1; this.tick2.alpha = 1; this.btnPlay.visible = false; this.btnNext.visible = true; this.texts[12].position.setTo(1055,805); this.texts[12].text = "Continue"; this.texts[12].alpha = 1; this.texts[3].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[4].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[10].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[9].setStyle({backgroundColor: 'rgba(255,255,0,1)'});
                            }
          
                
            }
        console.log("what is the value of n: " + n);
        if (this.confusedCheck == 2) {
            tickTween.start();
            tickTween2.start();
            tickTween3.start();
             graphics.lineStyle(3, 0xFF3300);
        this.box = graphics.drawRect(0,0,20,20);
            linegraphics = game.add.graphics(0,0);
             linegraphics.lineStyle(4, 0xFF3300,1);
              linegraphics.moveTo(751,532);
              linegraphics.lineTo(737,520);
                linegraphics.moveTo(723,533);
          linegraphics.lineTo(737,521);
            //linegraphics.moveTo(737,520);
           // linegraphics.lineTo(724,507);
                this.btnNext.visible = true;
                this.texts[12].text = "Continue";
                this.texts[12].position.setTo(1055,805);
            this.texts[12].alpha = 1;
             //   this.ans2.alpha = 1;
             tickTween4.start();
            tickTween5.start();

        }
            
            
        console.log(this.dot.x + " y: " + this.dot.y);
       // console.log(check);
        
        
            
            
            
        
        switch(this.n1) {
            case 1:
                this.btnRadio2.loadTexture("btnradio",0);
                this.btnRadio3.loadTexture("btnradio",0);
                
                
                this.btnPlay.frame = 0;
                this.texts[12].alpha = 1;
                break;
            case 2: 
                
                this.btnRadio1.loadTexture("btnradio",0);
                this.btnRadio3.loadTexture("btnradio", 0);
                
                this.btnPlay.frame = 0;
                this.texts[12].alpha = 1;
             
                break;
            case 3:
               
                this.btnRadio1.loadTexture("btnradio", 0);
                this.btnRadio2.loadTexture("btnradio", 0);
                
                this.btnPlay.frame = 0;
                this.texts[12].alpha = 1;
            
                
                break;
            case 4:
                this.btnRadio1.loadTexture("btnradio",0);
                this.btnRadio2.loadTexture("btnradio",0);
                this.btnRadio3.loadTexture("btnradio",0);
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
        console.log(this.a);
    },
};