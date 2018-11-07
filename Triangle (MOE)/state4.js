demo.state4 = function(){};
demo.state4.prototype = {
    btnPlay: null, btnNext: null, a: 0, b:0, c:0, ans1:null,ans2:null, btnTryAgain: null, txtTryAgain: null, boolTryAgain: false,k: 0, confusedCheck:0,
    preload: function(){
        loadAssets();
         game.stage.backgroundColor = '#000000';
    },
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        console.log('state4');
        addChangeStateEventListers();
        fixedGUI(this);
        this.headingTexts.text = "Isosceles Triangle"
        fixedGUI3(this);
        dotAttributes(this);
        addBtnRadio(this);
        addTickCross(this);
        addTexts(this);
        isoscelesTriangleAns2(this);
        
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
        this.texts[0].text = "If a triangle has two equal sides, it is an isosceles triangle."
        this.texts[0].lineSpacing = 30;
        this.texts[0].fontWeight = 'normal';
        
        this.texts[1].position.setTo(270,240);
        this.texts[1].text = "Which two of these triangles are isosceles?"
        this.texts[1].lineSpacing = 30;
        this.texts[1].fontWeight = 'normal';
        
        this.texts[2].position.setTo(130,255);
        this.texts[2].text = "Try this..."
        this.texts[2].lineSpacing = 30;
        this.texts[2].angle = -10;
        this.texts[2].setStyle({fill: "#008000"});
        
        var firstTrianglePoints = [400,550,550,350];
        var firstTriangleDraw = game.add.graphics(0,0); 
        firstTriangleDraw.beginFill(0x003366);
        firstTriangleDraw.lineStyle(2, 0x000000,1);
        firstTriangleDraw.moveTo(250,350);
        for (var i =0; i<firstTrianglePoints.length; i++){
            firstTriangleDraw.lineTo(firstTrianglePoints[i], firstTrianglePoints[i+1]);
            i++
        }
        firstTriangleDraw.endFill();
        
        var secondTrianglePoints = [900,550,800,350];
        var secondTriangleDraw = game.add.graphics(0,0); 
        secondTriangleDraw.beginFill(0xffa500);
        secondTriangleDraw.lineStyle(2, 0x000000,1);
        secondTriangleDraw.moveTo(666,462);
        for (var i =0; i<firstTrianglePoints.length; i++){
            secondTriangleDraw.lineTo(secondTrianglePoints[i], secondTrianglePoints[i+1]);
            i++
        }
        secondTriangleDraw.endFill();
        
        var thirdTrianglePoints = [1042,500,1350,400];
        var thirdTriangleDraw = game.add.graphics(0,0); 
        thirdTriangleDraw.beginFill(0xFF6A6A);
        thirdTriangleDraw.lineStyle(2, 0x000000,1);
        thirdTriangleDraw.moveTo(1050,350);
        for (var i =0; i<firstTrianglePoints.length; i++){
            thirdTriangleDraw.lineTo(thirdTrianglePoints[i], thirdTrianglePoints[i+1]);
            i++
        }
        thirdTriangleDraw.endFill();
        
        this.texts[3].position.setTo(200, 425);
        this.texts[3].text = "8.7 cm";
        
        this.texts[4].position.setTo(500, 425);
        this.texts[4].text = "8.7 cm";
        
        this.texts[5].position.setTo(355, 310);
        this.texts[5].text = "9.8 cm";
        
        this.texts[6].position.setTo(716, 506);
        this.texts[6].text = "7 cm";
        
        this.texts[7].position.setTo(880, 440);
        this.texts[7].text = "7 cm";
        
        this.texts[8].position.setTo(680, 370);
        this.texts[8].text = "4 cm";
        
        this.texts[9].position.setTo(950,390);
        this.texts[9].text = "3.4 cm";
        
        this.texts[10].position.setTo(1125,325);
        this.texts[10].text = "6.0 cm";
        
        this.texts[11].position.setTo(1135,475);
        this.texts[11].text = "7.4 cm";
        
        this.texts[12].position.setTo(1175, 805);
        this.texts[12].text = "Check";
        this.texts[12].alpha = 0.3;
        
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
        
        /*this.ans1 = game.add.sprite(0,0,"ans2");
        this.ans1.scale.setTo(0.3,0.3);
        this.ans1.position.setTo(1350,700);
        this.ans1.alpha = 0;
        this.ans2 = game.add.sprite(0,0,"ans3");
        this.ans2.scale.setTo(0.3,0.3);
        this.ans2.position.setTo(400,625);
        this.ans2.alpha = 0;
        this.ans3 = game.add.sprite(0,0,"ans1");
        this.ans3.scale.setTo(0.35,0.35);
        this.ans3.alpha = 0;
        this.ans4 = game.add.sprite(600,638,"ans1");
        this.ans4.scale.setTo(0.35,0.35);
        this.ans4.alpha = 0;*/
        
        this.btnRadio1.events.onInputDown.add(function(){if (check <2){this.btnRadio1.loadTexture("btnradiochecked",0); check++; a = 1}},this);
        this.btnRadio2.events.onInputDown.add(function(){if (check <2){this.btnRadio2.loadTexture("btnradiochecked",0); check++; b = 1}},this);
        this.btnRadio3.events.onInputDown.add(function(){if (check <2){this.btnRadio3.loadTexture("btnradiochecked",0); check++; c = 1}},this);
        
        this.btnPlay.events.onInputDown.add(function(){if (check>=2 && a == 1 && b ==1){this.pinkbox4a.alpha = 1;this.isoAns4a.alpha = 1; this.tick1.alpha = 1; this.tick2.alpha = 1; this.btnPlay.visible = false; this.btnNext.visible = true; this.texts[12].alpha = 1;this.texts[12].position.setTo(1160,805); this.texts[12].text = "Continue"; this.texts[3].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[4].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[6].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[7].setStyle({backgroundColor: 'rgba(255,255,0,1)'});} else if (check >=2 && c ==1 && b == 1){this.pinkbox2b.alpha =1; this.isoAns2b.alpha = 1;this.isoAns3b.alpha = 1; this.pinkbox3b.alpha = 1;this.confusedCheck++;this.boolTryAgain = true;this.cross1.alpha = 1; this.tick1.alpha = 0; this.tick2.alpha = 1; this.btnPlay.visible = false; this.btnNext.visible = true;this.texts[12].alpha = 1; this.texts[12].position.setTo(1160,805); this.texts[12].text = "Continue";this.texts[3].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[4].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[6].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[7].setStyle({backgroundColor: 'rgba(255,255,0,1)'});}else if (check >=2 && c ==1 && a == 1){this.isoAns2bb.alpha = 1; this.pinkbox2bb.alpha = 1;this.isoAns3b.alpha = 1; this.pinkbox3b.alpha = 1;this.confusedCheck++;this.boolTryAgain = true;this.cross1.alpha = 1; this.tick1.alpha = 1; this.tick2.alpha = 0; this.btnPlay.visible = false; this.btnNext.visible = true;this.texts[12].alpha = 1; this.texts[12].position.setTo(1160,805); this.texts[12].text = "Continue";this.texts[3].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[4].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[6].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[7].setStyle({backgroundColor: 'rgba(255,255,0,1)'});}},this);
        
        this.btnNext.events.onInputDown.add(function(){check =0;a=0;b=0;c=0;game.state.start('state5');},this);
        
        
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
        this.btnTryAgain.events.onInputDown.add(function(){this.boolTryAgain = false;this.tick2.alpha = 0;
            this.tick1.alpha = 0;
            this.tick2.alpha = 0;                                               
            this.cross1.alpha = 0;
            this.btnRadio1.loadTexture('btnradio',0);
            this.btnRadio2.loadTexture('btnradio',0);
            this.btnRadio3.loadTexture('btnradio',0);
            check = 0;this.k++;this.btnNext.visible = false;this.texts[12].position.setTo(1175, 805);
            this.texts[12].text = "Check"; this.btnPlay.visible = true;  a=0; b=0;c=0; this.pinkbox3b.alpha = 0; this.isoAns3b.alpha = 0;this.pinkbox2b.alpha = 0; this.isoAns2b.alpha = 0;this.pinkbox2bb.alpha = 0; this.isoAns2bb.alpha = 0;}, this);
        
        
        
         tickTween = this.game.add.tween(this.tick2).to({alpha:1},1000,Phaser.Easing.Linear.None);
         tickTween2 = this.game.add.tween(this.tick1).to({alpha:1},1000,Phaser.Easing.Linear.None);
        tickTween3 = this.game.add.tween(this.pinkbox2b).to({alpha:1},1000,Phaser.Easing.Linear.None);
         tickTween4 = this.game.add.tween(this.isoAns2b).to({alpha:1},1000,Phaser.Easing.Linear.None);
        tickTween5 = this.game.add.tween(this.pinkbox2bb).to({alpha:1},1000,Phaser.Easing.Linear.None);
         tickTween6 = this.game.add.tween(this.isoAns2bb).to({alpha:1},1000,Phaser.Easing.Linear.None);
         
    
    },
    
  
    
    update: function(){
        console.log("X: " + this.dot.x + " Y: " + this.dot.y);
          if (this.boolTryAgain == true) {
              if (this.k < 1 ) {
            this.btnTryAgain.visible = true;
            this.txtTryAgain.alpha = 1;
            n = 4;}
        }
        else if (this.boolTryAgain == false) {
            this.btnTryAgain.visible = false;
            this.txtTryAgain.alpha = 0;
             if (this.k == 2){this.tick1.alpha = 1; this.tick2.alpha = 1; this.btnPlay.visible = false; this.btnNext.visible = true; this.texts[12].position.setTo(1160, 805); this.texts[12].text = "Continue"; this.texts[12].alpha = 1; this.texts[3].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[4].setStyle({backgroundColor: 'rgba(255,255,0,1)'});
            
            }
        }
        if (this.confusedCheck == 2 && a == 1 && c == 1) {
                tickTween.start();
                tickTween3.start();
            tickTween4.start();
               
            }
        
        console.log("see this booltryagain:" + this.boolTryAgain);
        
        if (this.confusedCheck == 2 && b == 1 && c == 1) { 
                tickTween2.start(); 
                tickTween5.start();
            tickTween6.start();
        }
        
        

        if (check >= 2) {
            this.btnPlay.frame = 0;
            this.texts[12].alpha = 1;
            }
    
    },
    
       
};