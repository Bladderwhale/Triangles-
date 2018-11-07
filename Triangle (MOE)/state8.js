demo.state8 = function(){};
demo.state8.prototype = {  btnPlay: null, btnNext: null, a: 0, b:0, c:0, ans1:null,ans2:null, btnTryAgain: null, txtTryAgain: null, boolTryAgain: false,k: 0, confusedCheck:0,
    preload: function(){
        loadAssets();
        game.stage.backgroundColor = '#000000';
    },
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        console.log('state8');
        addChangeStateEventListers(); 
        addBtnRadio(this);
        addTickCross(this);
        fixedGUI(this);
        fixedGUI3();
        dotAttributes(this);
        this.headingTexts.text = "Equilateral Triangles";
        addTexts(this);
        equilateralTrianglesAns(this);
        this.btnPlay = game.add.button(0,0,"btn2");
        this.btnPlay.frame = 1;
        this.btnPlay.position.setTo(1140, 750);
        this.btnPlay.scale.setTo(0.8,0.5);
        this.btnPlay.inputEnabled = true;
        
        this.btnNext = game.add.button(0,0,"btn2");
        this.btnNext.frame = 0;
        this.btnNext.position.setTo(1140, 750);
        this.btnNext.scale.setTo(0.8,0.5);
        this.btnNext.visible = false;
        
           for (var i = 0; i < 14; i++){
            this.texts[i] = game.add.text(i*10,i*10, "1");
        }
        this.texts[0].position.setTo(210,140);
        this.texts[0].text = "If a triangle has three equal sides, it is an equilaterial triangle."
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
        
        this.texts[12].position.setTo(1175,755);
        this.texts[12].text = "Check";
        this.texts[12].alpha = 0.3;
        
        var firstTrianglePoints = [252,548,511,548];
        var firstTriangleDraw = game.add.graphics(0,0); 
        firstTriangleDraw.beginFill(0x003366);
        firstTriangleDraw.lineStyle(2, 0x000000,1);
        firstTriangleDraw.moveTo(381,335);
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
        
        this.btnRadio1.position.setTo(378,610);
        this.btnRadio2.position.setTo(750,610);
        this.btnRadio3.position.setTo(1175,610);
        
       
        
        this.tick1.position.setTo(378,610);
        this.tick1.anchor.setTo(0.25,0.25);
        this.tick1.alpha = 0;
        
        this.tick2.position.setTo(750,610);
        this.tick2.anchor.setTo(0.25,0.25);
        this.tick2.alpha = 0;
        
        this.cross1.position.setTo(1180,610);
        this.cross1.anchor.setTo(0.19,0.19);
        this.cross1.alpha = 0;
        this.cross2.alpha=0;
        
        
        
             this.btnRadio1.events.onInputDown.add(function(){if (check <2){this.btnRadio1.loadTexture("btnradiochecked",0); check++; a = 1}},this);
        this.btnRadio2.events.onInputDown.add(function(){if (check <2){this.btnRadio2.loadTexture("btnradiochecked",0); check++; b = 1}},this);
        this.btnRadio3.events.onInputDown.add(function(){if (check <2){this.btnRadio3.loadTexture("btnradiochecked",0); check++; c = 1}},this);
        
        this.btnPlay.events.onInputDown.add(function(){if (check>=2 && a == 1 && b ==1){this.pinkbox3c.alpha = 1; this.isoAns3c.alpha = 1;this.tick1.alpha = 1; this.tick2.alpha = 1; this.btnPlay.visible = false; this.btnNext.visible = true; this.texts[12].alpha = 1;this.texts[12].position.setTo(1160,755); this.texts[12].text = "Continue"; this.texts[3].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[4].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[6].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[7].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[3].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[8].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[9].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[5].setStyle({backgroundColor: 'rgba(255,255,0,1)'});} else if (check >=2 && c ==1 && b == 1){this.pinkbox3a.alpha = 1; this.isoAns3a.alpha =1;this.pinkbox2.alpha = 1;this.isoAns2.alpha = 1;this.confusedCheck++;this.boolTryAgain = true;this.cross1.alpha = 1; this.tick1.alpha = 0; this.tick2.alpha = 1; this.btnPlay.visible = false; this.btnNext.visible = true;this.texts[12].alpha = 1; this.texts[12].position.setTo(1160,755); this.texts[12].text = "Continue";this.texts[3].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[4].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[6].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[7].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[3].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[8].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[9].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[5].setStyle({backgroundColor: 'rgba(255,255,0,1)'});} else if (check >=2 && c ==1 && a == 1){this.pinkbox3.alpha = 1; this.isoAns3.alpha =1;this.pinkbox2.alpha = 1;this.isoAns2.alpha = 1;this.confusedCheck++;this.boolTryAgain = true;this.cross1.alpha = 1; this.tick1.alpha = 1; this.tick2.alpha = 0; this.btnPlay.visible = false; this.btnNext.visible = true;this.texts[12].alpha = 1; this.texts[12].position.setTo(1160,755); this.texts[12].text = "Continue";this.texts[3].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[4].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[6].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[7].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[3].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[8].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[9].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[5].setStyle({backgroundColor: 'rgba(255,255,0,1)'});}},this);
        
        this.btnNext.events.onInputDown.add(function(){check =0;a=0;b=0;c=0;game.state.start('state9');},this);
        
          //Creating the try again button
        this.btnTryAgain = game.add.button(0,0, 'btn2');
        this.btnTryAgain.frame = 0;
        this.btnTryAgain.position.setTo(1140, 750);
        this.btnTryAgain.scale.setTo(0.8,0.5);
        this.btnTryAgain.visible = false;
        this.txtTryAgain = game.add.text(1150,815,"Try Again");
        this.txtTryAgain.alpha = 0;
        this.txtTryAgain.position.setTo(1155, 755);
        this.boolTryAgain = false;
        this.btnTryAgain.events.onInputDown.add(function(){this.boolTryAgain = false;this.tick2.alpha = 0;
            this.tick1.alpha = 0;
            this.tick2.alpha = 0;                                               
            this.cross1.alpha = 0;
            this.btnRadio1.loadTexture('btnradio',0);
            this.btnRadio2.loadTexture('btnradio',0);
            this.btnRadio3.loadTexture('btnradio',0);
            check = 0;this.k++;this.btnNext.visible = false;this.texts[12].position.setTo(1170, 755);
            this.texts[12].text = "Check"; this.btnPlay.visible = true;  a=0; b=0;c=0;this.pinkbox2.alpha = 0;this.isoAns2.alpha = 0;this.pinkbox3.alpha = 0; this.isoAns3.alpha =0;this.pinkbox3a.alpha = 0; this.isoAns3a.alpha =0;}, this);
        
        
         tickTween = this.game.add.tween(this.tick1).to({alpha:1},1000,Phaser.Easing.Linear.None);
         tickTween2 = this.game.add.tween(this.tick2).to({alpha:1},1000,Phaser.Easing.Linear.None);
        tickTween3 = this.game.add.tween(this.pinkbox3).to({alpha:1},1000,Phaser.Easing.Linear.None);
         tickTween4 = this.game.add.tween(this.isoAns3).to({alpha:1},1000,Phaser.Easing.Linear.None);
        tickTween5 = this.game.add.tween(this.pinkbox3a).to({alpha:1},1000,Phaser.Easing.Linear.None);
         tickTween6 = this.game.add.tween(this.isoAns3a).to({alpha:1},1000,Phaser.Easing.Linear.None);
         tickTween7 = this.game.add.tween(this.tick1).to({alpha:1},1000,Phaser.Easing.Linear.None);
         tickTween8 = this.game.add.tween(this.tick2).to({alpha:1},1000,Phaser.Easing.Linear.None);
        
        
    },
    update: function(){
        console.log("The value of x is: " + this.dot.x + " Y: " + this.dot.y);
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
        
        if (this.confusedCheck == 2 && c ==1 && b == 1) {
            tickTween.start();
            tickTween3.start();
            tickTween4.start();
        }
        if (this.confusedCheck == 2 && c ==1 && a == 1) {
            tickTween2.start();
            tickTween5.start();
            tickTween6.start();
        }
     
        
        console.log("what is value of a: " + a + " what is value of b: " + b + " what is the value of c: " + c);
        console.log("what is value of k: "+ this.k + "what is the value of confusedcheck: " + this.confusedCheck);
        if (check >= 2) {
            this.btnPlay.frame = 0;
            this.texts[12].alpha = 1;
            }
    }
    
};