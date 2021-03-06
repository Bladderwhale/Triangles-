demo.state11 = function(){};
demo.state11.prototype = {
    btnPlay: null, btnNext: null, a: 0, b:0, c:0, ans1:null,ans2:null, btnTryAgain: null, txtTryAgain: null, boolTryAgain: false, k:0, confusedCheck:0,
    preload: function(){
        loadAssets();
        game.stage.backgroundColor = '#000000';
    },
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        console.log('state11');
        addChangeStateEventListers(); 
        addBtnRadio(this);
        addTickCross(this);
        fixedGUI(this);
        fixedGUI3i();
        dotAttributes(this);
        this.headingTexts.text = "Equilateral Triangles";
        
        equilateralTrianglesAns(this);
        addLightImage1i();
        
        highlighter(this);
        this.highlight.alpha =0;
        this.highlight.position.setTo(745,120);
        this.highlight.scale.setTo(1.15,0.5);
        
        this.home.events.onInputDown.add(function(){
        n = 0; this.n=0; a =0;b=0;c=0; this.a=0; this.b =0; this.c=0;confusedCheck =0; this.confusedCheck=0;
        this.boolTryAgain = false;
        k =0;this.k=0;check=0;this.check=0;
        game.state.start('state1');
       
    },this);
        this.btnPlay = game.add.button(0,0,"btn2");
        this.btnPlay.frame = 1;
        this.btnPlay.position.setTo(1140, 800);
        this.btnPlay.scale.setTo(0.8,0.5);
        this.btnPlay.inputEnabled = true;
        
        this.btnNext = game.add.button(0,0,"btn2");
        this.btnNext.frame = 0;
        this.btnNext.position.setTo(1140, 800);
        this.btnNext.scale.setTo(0.8,0.5);
        this.btnNext.visible = false;
      
        this.dot.alpha =1;
        
        h1 = new Phaser.Point(300,555); //Base
        h2 = new Phaser.Point(300,355); //Top
        h3 = new Phaser.Point(500,555); //Right
        
        h1toh2 = new Phaser.Point.subtract(h1, h2); //Base Angle  
        h1toh3 = new Phaser.Point.subtract(h1, h3);
        
        h1toh2.normalize();
        h1toh3.normalize();
        
              
        h1toh3length = (new Phaser.Point.subtract(h1,h3)).getMagnitude();
      
        h1toh3length = h1toh3length/10;
          console.log("what length: " + h1toh3length);
        
        h1toh2length = (new Phaser.Point.subtract(h1,h2)).getMagnitude();
         
        h1toh2length = h1toh2length/10;
        graphics1 = game.add.graphics(0,0);
         graphics1.lineStyle(2, 0xFF3300,1);
        graphics1.drawRect(300,555-h1toh2length,h1toh2length,h1toh3length);
        graphics1.endFill();
        //end
    
        baseAngle = h1toh2.dot(h1toh3);
        baseAngle = Math.acos(baseAngle);
        starttAngle = Math.PI + Math.PI/2;
        
        this.dotA =game.add.sprite(874,335,undefined);
        this.dotB = game.add.sprite(600,335,undefined);
        this.dotC = game.add.sprite(0,0,undefined);
         center = new Phaser.Point.add(this.dotA ,this.dotB);
        center = center.divide(2,2);
        length = new Phaser.Point.subtract(this.dotA, this.dotB).getMagnitude();
         bbbb = (length * length) - (length/2 * length/2);
        bbbb = (Math.sqrt(bbbb));
        this.dotC.position = new Phaser.Point(center.x, center.y+bbbb);
        
           this.dotD =game.add.sprite(1200+20,548+20,undefined);
        this.dotE = game.add.sprite(1160+20,324+20,undefined);
        this.dotF = game.add.sprite(0,0,undefined);
         center1 = new Phaser.Point.add(this.dotD ,this.dotE);
        center1 = center1.divide(2,2);
        length1 = new Phaser.Point.subtract(this.dotD, this.dotE).getMagnitude();
         bbbb1 = (length1 * length1) - (length1/2 * length1/2);
        bbbb1 = (Math.sqrt(bbbb1));
        this.dotF.position = new Phaser.Point(center1.x-bbbb1, center1.y);
        
        var firstTrianglePoints = [300,355,500,555];
        var firstTriangleDraw = game.add.graphics(0,0); 
        firstTriangleDraw.beginFill(0x003366,0.3);
        firstTriangleDraw.lineStyle(2, 0x000000,1);
        firstTriangleDraw.moveTo(300,555);
        for (var i =0; i<firstTrianglePoints.length; i++){
            firstTriangleDraw.lineTo(firstTrianglePoints[i], firstTrianglePoints[i+1]);
            i++
        }
        firstTriangleDraw.endFill();
        
        var secondTrianglePoints = [this.dotC.position.x+70,this.dotC.position.y,874-19,335];
        var secondTriangleDraw = game.add.graphics(0,0); 
        secondTriangleDraw.beginFill(0xffa500,0.5);
        secondTriangleDraw.lineStyle(2, 0x000000,1);
        secondTriangleDraw.moveTo(600+19,410);
        for (var i =0; i<firstTrianglePoints.length; i++){
            secondTriangleDraw.lineTo(secondTrianglePoints[i], secondTrianglePoints[i+1]);
            i++
        }
        secondTriangleDraw.endFill();
        
        var thirdTrianglePoints = [1200+20,548+20, this.dotF.position.x , this.dotF.position.y +30 ];
        var thirdTriangleDraw = game.add.graphics(0,0); 
        thirdTriangleDraw.beginFill(0xFF6A6A,0.5);
        thirdTriangleDraw.lineStyle(2, 0x000000,1);
        thirdTriangleDraw.moveTo(1160+20,324+20);
        for (var i =0; i<firstTrianglePoints.length; i++){
            thirdTriangleDraw.lineTo(thirdTrianglePoints[i], thirdTrianglePoints[i+1]);
            i++
        }
        thirdTriangleDraw.endFill();
        
          addTexts(this);
           for (var i = 0; i < 13; i++){
            this.texts[i] = game.add.text(i*10,i*10, "1");
        }
        this.texts[0].position.setTo(210+110,120);
        this.texts[0].text = "If a triangle has three equal sides or three equal angles,\nit is an equilateral triangle."
        this.texts[0].lineSpacing = 0;
        this.texts[0].fontWeight = 'normal';
        
        this.texts[1].position.setTo(270,240);
        this.texts[1].text = "Which two of these triangles are equilateral?"
        this.texts[1].lineSpacing = 30;
        this.texts[1].fontWeight = 'normal';
        
        this.texts[2].position.setTo(130,255);
        this.texts[2].text = "Try this..."
        //this.texts[2].lineSpacing = 30;
        this.texts[2].angle = -10;
        this.texts[2].setStyle({ fill: '#008000'});
        
        boxTryAgainRotation(this);
        this.texts[2].addChild(this.drawGraphics);
        
        this.texts[3].position.setTo(310, 410);
        this.texts[3].text = "45\xB0";
        
        this.texts[4].position.setTo(400, 518);
        this.texts[4].text = "45\xB0";
        
        this.texts[5].position.setTo(320, 506);
        this.texts[5].text = "";
        
        this.texts[6].position.setTo(675, 409);
        this.texts[6].text = "60\xB0";
        
        this.texts[7].position.setTo(776, 375);
        this.texts[7].text = "60\xB0";
        
        this.texts[8].position.setTo(770,490);
        this.texts[8].text = "60\xB0";
        
        this.texts[9].position.setTo(1085-30,451+15);
        this.texts[9].text = "60\xB0";
        
        this.texts[10].position.setTo(1120+20,372+20);
        this.texts[10].text = "60\xB0";
        
        this.texts[11].position.setTo(1130+20,483+20);
        this.texts[11].text = "60\xB0";
        
       /* this.texts[13].position.setTo(1008,540);
        this.texts[13].text = "4.23 cm";*/
        
        this.texts[12].position.setTo(1175,805);
        this.texts[12].text = "Check";
        this.texts[12].alpha = 0.3;
        
        
        
        
  
       console.log("what length2: " + h1toh2length);
        
        
        var alx = new forState11(300,555,300,355,500,555);
        alx.init();
        
        var alx2 = new forState11(600+19,410,this.dotC.position.x+70,this.dotC.position.y,874-19,335)
        alx2.init();
        
        var alx3 = new forState11(1160,324,1200,548,this.dotF.position.x,this.dotF.position.y)
        alx3.init();
        console.log(alx);
        startAnglee1 = Math.PI/2 - alx.dotProductB;
        startAnglee2 = Math.PI/2 + Math.PI/2 - alx.dotProductC/20;
        startAnglee3 = Math.PI/2 + Math.PI/2 + Math.PI/2+ Math.PI/1.8 - alx2.dotProductA/2;
        startAnglee4 = Math.PI/2 + Math.PI/2 + Math.PI/2.8 - alx2.dotProductB/2.5;
        startAnglee5 = Math.PI/2 + Math.PI/2.4 - alx2.dotProductC;
        startAnglee6 = Math.PI/2 + Math.PI/4.9- alx3.dotProductA/1.3;
        startAnglee7 = Math.PI/2 + Math.PI/2 + Math.PI/2.3 - alx3.dotProductB;
        startAnglee8 = Math.PI + Math.PI/2 + Math.PI/2 - alx3.dotProductC/3;
        console.log("What is angle b " + alx.dotProductA);
        graphics1 = game.add.graphics(0,0);
        graphics1.lineStyle(2, 0xFF3300);
       // graphics1.arc(300,555,30,starttAngle,starttAngle+baseAngle,false);
        //graphics1.drawRect(300,555-h1toh2length,h1toh2length,h1toh3length)
        graphics1.arc(300,355,50,startAnglee1,startAnglee1 + alx.dotProductB,false);
        graphics1.arc(500,555,50,startAnglee2,startAnglee2 + alx.dotProductC,false);
        graphics1.arc(600+19,410,50,startAnglee3,startAnglee3 + alx2.dotProductA,false);
      //  graphics1.arc(738-5,548,50,startAnglee4,startAnglee4 + alx2.dotProductB,false);
        graphics1.arc(this.dotC.position.x+70,this.dotC.position.y,50,startAnglee4,startAnglee4 + alx2.dotProductB,false);
        graphics1.arc(874-19,335,50,startAnglee5,startAnglee5 + alx2.dotProductC,false);
        graphics1.arc(1160+20,324+20,50,startAnglee6, startAnglee6 + alx3.dotProductA, false);
        graphics1.arc(1200+20,548+20,50,startAnglee7, startAnglee7 + alx3.dotProductB,false);
        graphics1.arc(990,474,60,startAnglee8, startAnglee8 + alx3.dotProductC-0.3, false);
        
        this.btnRadio1.position.setTo(378,610);
        this.btnRadio2.position.setTo(750,610);
        this.btnRadio3.position.setTo(1130,610);
        
       
        
        this.tick1.position.setTo(1130,610);
        this.tick1.anchor.setTo(0.25,0.25);
        this.tick1.alpha = 0;
        
        this.tick2.position.setTo(750,610);
        this.tick2.anchor.setTo(0.25,0.25);
        this.tick2.alpha = 0;
        
        this.cross1.position.setTo(378,610);
        this.cross1.anchor.setTo(0.19,0.19);
        this.cross1.alpha = 0;
        this.cross2.alpha=0;
        
        
           
        this.btnRadio1.events.onInputDown.add(function(){if (check <2 && aa == true)
            {
                this.btnRadio1.loadTexture("btnradiochecked",0); 
                check++;
                a = 1;
                aa=false;
            }
            else if (aa == false) {
                this.btnRadio1.loadTexture("btnradio",0);
                check--;
                a = 0;
                aa=true;
            }           },this);
        
        this.btnRadio2.events.onInputDown.add(function(){
            if (check <2 && bb == true)
            {
                this.btnRadio2.loadTexture("btnradiochecked",0); 
                check++;
                b = 1;
                bb=false;
            }
            else if (bb == false) {
                this.btnRadio2.loadTexture("btnradio",0);
                check--;
                b = 0;
                bb=true;
            }                                                     
                                                                      },this);
     

        this.btnRadio3.events.onInputDown.add(function(){        if (check <2 && cc == true)
            {
                this.btnRadio3.loadTexture("btnradiochecked",0); 
                check++;
                c = 1;
                cc=false;
            }
            else if (cc == false) {
                this.btnRadio3.loadTexture("btnradio",0);
                check--;
                c = 0;
                cc=true;
            }           },this);
        
        
        this.btnPlay.events.onInputDown.add(function(){if (check>=2 && a == 1 && b ==1){ this.highlight.alpha =1;this.pinkbox5c.alpha =1; this.isoAns5c.alpha=1;this.pinkbox5a.alpha=1;this.isoAns5a.alpha=1;this.confusedCheck++;this.boolTryAgain = true; this.tick2.alpha = 1; this.cross1.alpha = 1; this.btnPlay.visible = false; this.btnNext.visible = true; this.texts[12].alpha = 1;this.texts[12].position.setTo(1160,805); this.texts[12].text = "Continue"; this.texts[6].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[7].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[8].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[9].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[10].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[11].setStyle({backgroundColor: 'rgba(255,255,0,1)'});} else if (check >=2 && c ==1 && b ==1){ this.btnNext2.visible = true;
            this.txtLayer.visible = true;this.highlight.alpha =1;linegraphics = game.add.graphics(0,0);
            linegraphics.lineStyle(8,0xCD853F,1);
            linegraphics.moveTo(619,410);
            linegraphics.lineTo(this.dotC.x+70,this.dotC.y);
            linegraphics.lineTo(874-19,335);
            linegraphics.lineTo(619,410);
            linegraphics.lineStyle(8,0xCD853F,1);
            linegraphics.moveTo(1180,344);
            linegraphics.lineTo(1220,568);
            linegraphics.lineTo(this.dotF.x,this.dotF.y+30);
            linegraphics.lineTo(1180,344);
            linegraphics.endFill();this.pinkbox5.alpha =1;this.isoAns5.alpha =1;this.cross1.alpha = 0; this.tick1.alpha = 1; this.tick2.alpha = 1; this.btnPlay.visible = false; this.btnNext.visible = true;this.texts[12].alpha = 1; this.texts[12].position.setTo(1160,805); this.texts[12].text = "Continue";this.texts[6].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[7].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[8].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[9].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[10].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[11].setStyle({backgroundColor: 'rgba(255,255,0,1)'});}else if (check >=2 && c ==1 && a ==1){ this.highlight.alpha =1;this.pinkbox5c.alpha =1; this.isoAns5c.alpha=1;this.pinkbox5b.alpha =1; this.isoAns5b.alpha=1;this.confusedCheck++;this.boolTryAgain = true; this.cross1.alpha = 1; this.tick1.alpha = 1; this.tick2.alpha = 0; this.btnPlay.visible = false; this.btnNext.visible = true;this.texts[12].alpha = 1; this.texts[12].position.setTo(1160,805); this.texts[12].text = "Continue";this.texts[6].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[7].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[8].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[9].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[10].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[11].setStyle({backgroundColor: 'rgba(255,255,0,1)'});}},this);
        
        this.btnNext.events.onInputDown.add(function(){ n = 0; this.n=0; a =0;b=0;c=0; this.a=0; this.b =0; this.c=0;confusedCheck =0; this.confusedCheck=0;
        this.boolTryAgain = false;
        k =0;this.k=0;check=0;this.check=0;sp2 = 1;game.state.start('state1');},this);
        
        
         //Creating the try again button
        this.btnTryAgain = game.add.button(0,0, 'btn2');
        this.btnTryAgain.frame = 0;
        this.btnTryAgain.position.setTo(1140, 800);
        this.btnTryAgain.scale.setTo(0.8,0.5);
        this.btnTryAgain.visible = false;
        this.txtTryAgain = game.add.text(1150,815,"Try Again");
        this.txtTryAgain.alpha = 0;
        this.txtTryAgain.position.setTo(1155, 805);
        this.boolTryAgain = false;
        this.btnTryAgain.events.onInputDown.add(function(){ aa =true, bb = true, cc=true;a=0; b=0;c=0;this.boolTryAgain = false;this.tick2.alpha = 0;
            this.tick1.alpha = 0;
            this.tick2.alpha = 0;                                               
            this.cross1.alpha = 0;
            this.btnRadio1.loadTexture('btnradio',0);
            this.btnRadio2.loadTexture('btnradio',0);
            this.btnRadio3.loadTexture('btnradio',0);
            check = 0;this.k++;this.btnNext.visible = false;this.texts[12].position.setTo(1175, 805);
            this.texts[12].text = "Check"; this.btnPlay.visible = true;this.pinkbox5a.alpha=0;this.isoAns5a.alpha=0;this.pinkbox5b.alpha=0;this.isoAns5b.alpha=0;this.pinkbox5c.alpha =0; this.isoAns5c.alpha=0;}, this);
        
        tickTween = this.game.add.tween(this.tick1).to({alpha:1},1000,Phaser.Easing.Linear.None);
        tickTween2 = this.game.add.tween(this.tick2).to({alpha:1},1000,Phaser.Easing.Linear.None);
        
         tickTween3 = this.game.add.tween(this.pinkbox5a).to({alpha:1},1000,Phaser.Easing.Linear.None);
        tickTween4 = this.game.add.tween(this.isoAns5a).to({alpha:1},1000,Phaser.Easing.Linear.None);
         tickTween5 = this.game.add.tween(this.pinkbox5b).to({alpha:1},1000,Phaser.Easing.Linear.None);
        tickTween6= this.game.add.tween(this.isoAns5b).to({alpha:1},1000,Phaser.Easing.Linear.None);
        
            //Another laying
        this.btnNext2 = game.add.button(0,0,"btn2");
        this.btnNext2.frame = 0;
        this.btnNext2.position.setTo(1070, 795);
        this.btnNext2.scale.setTo(1.2,1.2);
        this.btnNext2.visible = false;
        this.btnNext2.inputEnabled = true;
        this.txtLayer = game.add.text(1102, 815, "Another Type \n of Triangle");
        this.txtLayer.visible = false;
        this.btnNext2.events.onInputDown.add(function(){ aa =true, bb = true, cc=true;n = 0; this.n=0; a =0;b=0;c=0; this.a=0; this.b =0; this.c=0;confusedCheck =0; this.confusedCheck=0;
        this.boolTryAgain = false;
        k =0;this.k=0;check=0;this.check=0;game.state.start('state1'); sp2 =1;},this);
        //end
         
        
        
    },
    update: function(){
        console.log("what is the value of x: " + this.dot.x + " y: " + this.dot.y);
        console.log("what is the value of a: " + a + " what is the value of b: " + b + "what is the value of c: " + c);
        
         if (this.boolTryAgain == true) {
              if (this.k < 1 ) {
            this.btnTryAgain.visible = true;
            this.txtTryAgain.alpha = 1;
            linegraphics = game.add.graphics(0,0);
             linegraphics.lineStyle(8,0xCD853F,1);
            linegraphics.moveTo(619,410);
            linegraphics.lineTo(this.dotC.x+70,this.dotC.y);
            linegraphics.lineTo(874-19,335);
            linegraphics.lineTo(619,410);
            linegraphics.lineStyle(8,0xCD853F,1);
            linegraphics.moveTo(1180,344);
            linegraphics.lineTo(1220,568);
            linegraphics.lineTo(this.dotF.x,this.dotF.y+30);
            linegraphics.lineTo(1180,344);
            linegraphics.endFill();
            n = 4;}
        }
        else if (this.boolTryAgain == false) {
            this.btnTryAgain.visible = false;
            this.txtTryAgain.alpha = 0;
             if (this.k == 2){this.tick1.alpha = 1; this.tick2.alpha = 1; this.btnPlay.visible = false; this.btnNext.visible = true; this.texts[12].position.setTo(1160, 805); this.texts[12].text = "Continue"; this.texts[12].alpha = 1; this.texts[3].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[4].setStyle({backgroundColor: 'rgba(255,255,0,1)'});
            
            }
        }
        if (this.confusedCheck == 2 && a == 1 && b == 1) {
                tickTween.start();
            tickTween5.start();
            tickTween6.start();
            this.btnNext2.visible = true;
            this.txtLayer.visible = true;
            }
        
        console.log("see this booltryagain:" + this.boolTryAgain);
        console.log("confusedcheck: " + this.confusedCheck);
        if (this.confusedCheck == 2 && a == 1 && c == 1) { 
                tickTween2.start(); 
              tickTween3.start();
            tickTween4.start();
             this.btnNext2.visible = true;
            this.txtLayer.visible = true;
        }
        
       
        if (check >= 2) {
            this.btnPlay.frame = 0;
            this.texts[12].alpha = 1;
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
    }
    
};