demo.state11 = function(){};
demo.state11.prototype = {
    btnPlay: null, btnNext: null, a: 0, b:0, c:0, ans1:null,ans2:null, btnTryAgain: null, txtTryAgain: null, boolTryAgain: false, k:0, confusedCheck:0,
    preload: function(){
        loadAssets();
    },
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        console.log('state11');
        addChangeStateEventListers(); 
        addBtnRadio(this);
        addTickCross(this);
        fixedGUI(this);
        fixedGUI3();
        dotAttributes(this);
        this.headingTexts.text = "Equilateral Triangles";
        addTexts(this);
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
        
           for (var i = 0; i < 14; i++){
            this.texts[i] = game.add.text(i*10,i*10, "1");
        }
        this.texts[0].position.setTo(210,140);
        this.texts[0].text = "If a triangle has two equal sides, it is an equilaterial triangle."
        this.texts[0].lineSpacing = 30;
        this.texts[0].fontWeight = 'normal';
        
        this.texts[1].position.setTo(270,240);
        this.texts[1].text = "Which two of these triangles are equilaterial?"
        this.texts[1].lineSpacing = 30;
        this.texts[1].fontWeight = 'normal';
        
        this.texts[2].position.setTo(130,255);
        this.texts[2].text = "Try this..."
        this.texts[2].lineSpacing = 30;
        this.texts[2].angle = -10;
        this.texts[2].setStyle({ fill: '#008000'});
        
        this.texts[3].position.setTo(200, 425);
        this.texts[3].text = "5.6 cm";
        
        this.texts[4].position.setTo(480, 425);
        this.texts[4].text = "5.6 cm";
        
        this.texts[5].position.setTo(355, 562);
        this.texts[5].text = "5.6 cm";
        
        this.texts[6].position.setTo(680, 425);
        this.texts[6].text = "4.15 cm";
        
        this.texts[7].position.setTo(571, 468);
        this.texts[7].text = "4.15 cm";
        
        this.texts[8].position.setTo(692, 290);
        this.texts[8].text = "4.15 cm";
        
        this.texts[9].position.setTo(819,468);
        this.texts[9].text = "4.15 cm";
        
        this.texts[10].position.setTo(993,365);
        this.texts[10].text = "5.08 cm";
        
        this.texts[11].position.setTo(1194,425);
        this.texts[11].text = "6.12 cm";
        
        this.texts[13].position.setTo(1008,540);
        this.texts[13].text = "4.23 cm";
        
        this.texts[12].position.setTo(1175,805);
        this.texts[12].text = "Check";
        this.texts[12].alpha = 0.3;
        
        h1 = new Phaser.Point(300,555); //Base
        h2 = new Phaser.Point(300,355); //Top
        h3 = new Phaser.Point(500,555); //Right
        
        h1toh2 = new Phaser.Point.subtract(h1, h2); //Base Angle  
        h1toh3 = new Phaser.Point.subtract(h1, h3);
        
        h1toh2.normalize();
        h1toh3.normalize();
    
        baseAngle = h1toh2.dot(h1toh3);
        baseAngle = Math.acos(baseAngle);
        starttAngle = Math.PI + Math.PI/2;
        
        var firstTrianglePoints = [300,355,500,555];
        var firstTriangleDraw = game.add.graphics(0,0); 
        firstTriangleDraw.beginFill(0x003366);
        firstTriangleDraw.lineStyle(2, 0x000000,1);
        firstTriangleDraw.moveTo(300,555);
        for (var i =0; i<firstTrianglePoints.length; i++){
            firstTriangleDraw.lineTo(firstTrianglePoints[i], firstTrianglePoints[i+1]);
            i++
        }
        firstTriangleDraw.endFill();
        
        var secondTrianglePoints = [738,548,874,335];
        var secondTriangleDraw = game.add.graphics(0,0); 
        secondTriangleDraw.beginFill(0xffa500);
        secondTriangleDraw.lineStyle(2, 0x000000,1);
        secondTriangleDraw.moveTo(600,335);
        for (var i =0; i<firstTrianglePoints.length; i++){
            secondTriangleDraw.lineTo(secondTrianglePoints[i], secondTrianglePoints[i+1]);
            i++
        }
        secondTriangleDraw.endFill();
        
        var thirdTrianglePoints = [1200,548,1031,480];
        var thirdTriangleDraw = game.add.graphics(0,0); 
        thirdTriangleDraw.beginFill(0xFF6A6A);
        thirdTriangleDraw.lineStyle(2, 0x000000,1);
        thirdTriangleDraw.moveTo(1160,324);
        for (var i =0; i<firstTrianglePoints.length; i++){
            thirdTriangleDraw.lineTo(thirdTrianglePoints[i], thirdTrianglePoints[i+1]);
            i++
        }
        thirdTriangleDraw.endFill();
        h1toh3length = (new Phaser.Point.subtract(h1,h3)).getMagnitude();
      
        h1toh3length = h1toh3length/10;
          console.log("what length: " + h1toh3length);
        
        h1toh2length = (new Phaser.Point.subtract(h1,h2)).getMagnitude();
         
        h1toh2length = h1toh2length/10;
       console.log("what length2: " + h1toh2length)
        
        var alx = new forState11(300,555,300,355,500,555);
        alx.init();
        
        var alx2 = new forState11(600,335,738,548,874,335)
        alx2.init();
        
        var alx3 = new forState11(1160,324,1200,548,1031,480)
        alx3.init();
        console.log(alx);
        startAnglee1 = Math.PI/2 - alx.dotProductB;
        startAnglee2 = Math.PI/2 + Math.PI/2 - alx.dotProductC/15;
        startAnglee3 = Math.PI/2 + Math.PI/2 + Math.PI/2 + Math.PI/2 - alx2.dotProductA/20;
        startAnglee4 = Math.PI/2 + Math.PI/2 + Math.PI/2 - alx2.dotProductB/2;
        startAnglee5 = Math.PI/2 + Math.PI/2 - alx2.dotProductC;
        startAnglee6 = Math.PI/2 + Math.PI/4.5- alx3.dotProductA;
        startAnglee7 = Math.PI/2 + Math.PI/2 + Math.PI/2.2 - alx3.dotProductB;
        startAnglee8 = Math.PI + Math.PI/2 + Math.PI/2 - alx3.dotProductC/1.5;
        console.log("What is angle b " + alx.dotProductA);
        graphics1 = game.add.graphics(0,0);
        graphics1.lineStyle(1,'#000000',1);
       // graphics1.arc(300,555,50,starttAngle,starttAngle+baseAngle,false);
        graphics1.drawRect(300,555-h1toh2length,h1toh2length,h1toh3length)
        graphics1.arc(300,355,50,startAnglee1,startAnglee1 + alx.dotProductB,false);
        graphics1.arc(500,555,50,startAnglee2,startAnglee2 + alx.dotProductC,false);
        graphics1.arc(600,335,50,startAnglee3,startAnglee3 + alx2.dotProductA,false);
        graphics1.arc(738,548,50,startAnglee4,startAnglee4 + alx2.dotProductB,false);
        graphics1.arc(874,335,50,startAnglee5,startAnglee5 + alx2.dotProductC,false);
        graphics1.arc(1160,324,50,startAnglee6, startAnglee6 + alx3.dotProductA, false);
        graphics1.arc(1200,548,50,startAnglee7, startAnglee7 + alx3.dotProductB,false);
        graphics1.arc(1031,480,50,startAnglee8, startAnglee8 + alx3.dotProductC, false);
        
        this.btnRadio1.position.setTo(378,610);
        this.btnRadio2.position.setTo(800,610);
        this.btnRadio3.position.setTo(1175,610);
        
       
        
        this.tick1.position.setTo(378,610);
        this.tick1.anchor.setTo(0.25,0.25);
        this.tick1.alpha = 0;
        
        this.tick2.position.setTo(800,610);
        this.tick2.anchor.setTo(0.25,0.25);
        this.tick2.alpha = 0;
        
        this.cross1.position.setTo(1180,610);
        this.cross1.anchor.setTo(0.19,0.19);
        this.cross1.alpha = 0;
        this.cross2.alpha=0;
        
        this.ans1 = game.add.sprite(0,0,"ans2");
        this.ans1.scale.setTo(0.3,0.3);
        this.ans1.position.setTo(1000,625);
        this.ans1.alpha = 0;
        this.ans2 = game.add.sprite(0,0,"ans3");
        this.ans2.scale.setTo(0.3,0.3);
        this.ans2.position.setTo(530,625);
        this.ans2.alpha = 0;
        
             this.btnRadio1.events.onInputDown.add(function(){if (check <2){this.btnRadio1.loadTexture("btnradiochecked",0); check++; a = 1}},this);
        this.btnRadio2.events.onInputDown.add(function(){if (check <2){this.btnRadio2.loadTexture("btnradiochecked",0); check++; b = 1}},this);
        this.btnRadio3.events.onInputDown.add(function(){if (check <2){this.btnRadio3.loadTexture("btnradiochecked",0); check++; c = 1}},this);
        
        this.btnPlay.events.onInputDown.add(function(){if (check>=2 && a == 1 && b ==1){this.tick1.alpha = 1; this.tick2.alpha = 1; this.btnPlay.visible = false; this.btnNext.visible = true; this.texts[12].alpha = 1;this.texts[12].position.setTo(1160,805); this.texts[12].text = "Continue"; this.texts[3].setStyle({backgroundColor: 'rgba(255,255,0)'});this.texts[4].setStyle({backgroundColor: 'rgba(255,255,0)'});this.texts[6].setStyle({backgroundColor: 'rgba(255,255,0)'});this.texts[7].setStyle({backgroundColor: 'rgba(255,255,0)'});this.texts[3].setStyle({backgroundColor: 'rgba(255,255,0)'});this.texts[8].setStyle({backgroundColor: 'rgba(255,255,0)'});this.texts[9].setStyle({backgroundColor: 'rgba(255,255,0)'});this.texts[5].setStyle({backgroundColor: 'rgba(255,255,0)'});this.ans1.alpha = 0;this.ans2.alpha = 1;} else if (check >=2 && c ==1 && b ==1){this.confusedCheck++;this.boolTryAgain = true; this.ans2.position.setTo(600,625);this.cross1.alpha = 1; this.tick1.alpha = 0; this.tick2.alpha = 1; this.btnPlay.visible = false; this.btnNext.visible = true;this.texts[12].alpha = 1; this.texts[12].position.setTo(1160,805); this.texts[12].text = "Continue";this.texts[3].setStyle({backgroundColor: 'rgba(255,255,0)'});this.texts[4].setStyle({backgroundColor: 'rgba(255,255,0)'});this.texts[6].setStyle({backgroundColor: 'rgba(255,255,0)'});this.texts[7].setStyle({backgroundColor: 'rgba(255,255,0)'});this.texts[3].setStyle({backgroundColor: 'rgba(255,255,0)'});this.texts[8].setStyle({backgroundColor: 'rgba(255,255,0)'});this.texts[9].setStyle({backgroundColor: 'rgba(255,255,0)'});this.texts[5].setStyle({backgroundColor: 'rgba(255,255,0)'});this.ans1.alpha = 1;this.ans2.alpha = 1;}else if (check >=2 && c ==1 && a ==1){this.confusedCheck++;this.boolTryAgain = true; this.ans2.position.setTo(230,625);this.cross1.alpha = 1; this.tick1.alpha = 1; this.tick2.alpha = 0; this.btnPlay.visible = false; this.btnNext.visible = true;this.texts[12].alpha = 1; this.texts[12].position.setTo(1160,805); this.texts[12].text = "Continue";this.texts[3].setStyle({backgroundColor: 'rgba(255,255,0)'});this.texts[4].setStyle({backgroundColor: 'rgba(255,255,0)'});this.texts[6].setStyle({backgroundColor: 'rgba(255,255,0)'});this.texts[7].setStyle({backgroundColor: 'rgba(255,255,0)'});this.texts[3].setStyle({backgroundColor: 'rgba(255,255,0)'});this.texts[8].setStyle({backgroundColor: 'rgba(255,255,0)'});this.texts[9].setStyle({backgroundColor: 'rgba(255,255,0)'});this.texts[5].setStyle({backgroundColor: 'rgba(255,255,0)'});this.ans1.alpha = 1;this.ans2.alpha = 1;}},this);
        
        this.btnNext.events.onInputDown.add(function(){check =0;a=0;b=0;c=0;sp2 = 1;game.state.start('state1');},this);
        
        
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
        this.btnTryAgain.events.onInputDown.add(function(){a=0; b=0;c=0;this.boolTryAgain = false;this.tick2.alpha = 0;
            this.tick1.alpha = 0;
            this.tick2.alpha = 0;                                               
            this.cross1.alpha = 0;
            this.btnRadio1.loadTexture('btnradio',0);
            this.btnRadio2.loadTexture('btnradio',0);
            this.btnRadio3.loadTexture('btnradio',0);this.ans1.alpha =0; this.ans2.alpha = 0;
            check = 0;this.k++;this.btnNext.visible = false;this.texts[12].position.setTo(1175, 805);
            this.texts[12].text = "Check"; this.btnPlay.visible = true; this.ans3.alpha = 0;}, this);
        
        tickTween = this.game.add.tween(this.tick1).to({alpha:1},1000,Phaser.Easing.Linear.None);
        tickTween2 = this.game.add.tween(this.tick2).to({alpha:1},1000,Phaser.Easing.Linear.None);
        
        
    },
    update: function(){
        console.log("what is the value of a: " + a + " what is the value of b: " + b + "what is the value of c: " + c);
        
         if (this.boolTryAgain == true) {
              if (this.k < 1 ) {
            this.btnTryAgain.visible = true;
            this.txtTryAgain.alpha = 1;
            
            n = 4;}
        }
        else if (this.boolTryAgain == false) {
            this.btnTryAgain.visible = false;
            this.txtTryAgain.alpha = 0;
             if (this.k == 2){this.tick1.alpha = 1; this.tick2.alpha = 1; this.btnPlay.visible = false; this.btnNext.visible = true; this.texts[12].position.setTo(1160, 805); this.texts[12].text = "Continue"; this.texts[12].alpha = 1; this.texts[3].setStyle({backgroundColor: 'rgba(255,255,0)'});this.texts[4].setStyle({backgroundColor: 'rgba(255,255,0)'});this.ans1.alpha = 0;this.ans2.alpha = 1;this.ans2.position.setTo(500,625);
            
            }
        }
        if (this.confusedCheck == 2 && a == 1 && c == 1) {
                tickTween2.start();
            }
        
        console.log("see this booltryagain:" + this.boolTryAgain);
        
        if (this.confusedCheck == 2 && b == 1 && c == 1) { 
                tickTween.start(); 
        }
        
       
        if (check >= 2) {
            this.btnPlay.frame = 0;
            this.texts[12].alpha = 1;
            }
    }
    
};