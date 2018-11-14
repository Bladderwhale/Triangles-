demo.state9 = function(){};
demo.state9.prototype = {
    btnPlay: null, btnNext: null, a: 0, b:0, c:0, ans1:null,ans2:null, btnTryAgain: null, txtTryAgain: null, boolTryAgain: false,k: 0,confusedCheck: 0,
    preload: function(){
        loadAssets();
        game.stage.backgroundColor = '#000000';

    },
    create: function(){
        game.stage.backgroundColor = '#ffffff';
        console.log('state9');
        addChangeStateEventListers();
        fixedGUI(this);
        
        this.headingTexts.text = "Equilateral Triangles";
        fixedGUI3i();
        dotAttributes(this);
        addBtnRadio(this);
        addTickCross(this);
        equilateralTrianglesAns(this);
        addLightImage1i();
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
        
            highlighter(this);
        this.highlight.alpha =0;
        this.highlight.position.setTo(490,140);
        this.highlight.scale.setTo(1.01,0.5);
        
        addTexts(this);

        for (var i = 0; i < 13; i++){
            this.texts[i] = game.add.text(i*10,i*10, "1");
        }
        this.texts[0].position.setTo(300,140);
        this.texts[0].text = "If a triangle has three equal sides, it is an equilateral triangle."
        this.texts[0].lineSpacing = 30;
        this.texts[0].fontWeight = 'normal';
        
        this.texts[1].position.setTo(270,250);
        this.texts[1].text = "Which two of these triangles are equilateral?"
        this.texts[1].lineSpacing = 30;
        this.texts[1].fontWeight = 'normal';
        
        this.texts[2].position.setTo(130,265);
        this.texts[2].text = "Try this..."
       // this.texts[2].lineSpacing = 30;
        this.texts[2].angle = -10;
        this.texts[2].setStyle({ fill: '#0000FF'});
        
          boxTryAgainRotation(this);
        this.texts[2].addChild(this.drawGraphics);
        
        this.texts[3].position.setTo(200, 425);
        this.texts[3].text = "4 cm";
        
        this.texts[4].position.setTo(373, 346);
        this.texts[4].text = "4 cm";
        
        this.texts[5].position.setTo(373, 496);
        this.texts[5].text = "4 cm";
        
        this.texts[6].position.setTo(599+20, 450);
        this.texts[6].text = "5 cm";
        
        this.texts[7].position.setTo(795+20, 450);
        this.texts[7].text = "5 cm";
        
        this.texts[8].position.setTo(695+20, 553);
        this.texts[8].text = "6 cm";
        
        this.texts[9].position.setTo(1050,510);
        this.texts[9].text = "3 cm";
        
        this.texts[10].position.setTo(1050,330);
        this.texts[10].text = "3 cm";
        
        this.texts[11].position.setTo(1190,414);
        this.texts[11].text = "3 cm";
        
        this.texts[12].position.setTo(1175,805);
        this.texts[12].text = "Check";
        this.texts[12].alpha = 0.3;
        
        h1 = new Phaser.Point(300,355); //top
        h2 = new Phaser.Point(300,555); //base
        h3 = new Phaser.Point(500,555); //right
        
        
             this.dotA =game.add.sprite(288,341,undefined);
        this.dotB = game.add.sprite(288,531,undefined);
        this.dotC = game.add.sprite(0,0,undefined);
         center = new Phaser.Point.add(this.dotA ,this.dotB);
        center = center.divide(2,2);
        length = new Phaser.Point.subtract(this.dotA, this.dotB).getMagnitude();
         bbbb = (length * length) - (length/2 * length/2);
        bbbb = (Math.sqrt(bbbb));
        this.dotC.position = new Phaser.Point(center.x+bbbb, center.y);
        
        this.dotD =game.add.sprite(1178,334,undefined);
        this.dotE = game.add.sprite(1178,530,undefined);
        this.dotF = game.add.sprite(0,0,undefined);
         center1 = new Phaser.Point.add(this.dotD ,this.dotE);
        center1 = center1.divide(2,2);
        length1 = new Phaser.Point.subtract(this.dotD, this.dotE).getMagnitude();
         bbbb1 = (length1 * length1) - (length1/2 * length1/2);
        bbbb1 = (Math.sqrt(bbbb1));
        this.dotF.position = new Phaser.Point(center1.x-bbbb1, center1.y);
        
        
        var firstTrianglePoints = [288, 531,this.dotC.x ,this.dotC.y ];
        var firstTriDraw = game.add.graphics(0,0);
        firstTriDraw.beginFill(0xe0ffff);
        firstTriDraw.lineStyle(2,0x000000,1);
        firstTriDraw.moveTo(288,341);
        for (var i = 0; i < firstTrianglePoints.length; i++) {
            firstTriDraw.lineTo(firstTrianglePoints[i], firstTrianglePoints[i+1]); 
            i++;
        }
        firstTriDraw.endFill(); 

        var secondTrianglePoints = [840+20, 550, 727+20, 380];
        var secondTriDraw = game.add.graphics(0,0);
        secondTriDraw.beginFill(0x7FBF7F);
        secondTriDraw.moveTo(615+20,550);
        secondTriDraw.lineStyle(2,0x000000,1);
        for (var i = 0; i < secondTrianglePoints.length; i++) {
            secondTriDraw.lineTo(secondTrianglePoints[i], secondTrianglePoints[i+1]);
            i++;
        }
        secondTriDraw.endFill();
        
        var thirdTrianglePoints = [1178,334, 1178,530];
        var thirdTriDraw = game.add.graphics(0,0);
        thirdTriDraw.beginFill(0xFFFF66);
        thirdTriDraw.moveTo(this.dotF.position.x, this.dotF.position.y);
        thirdTriDraw.lineStyle(2,0x000000,1);
            for (var i = 0; i<thirdTrianglePoints.length; i++) {
            thirdTriDraw.lineTo(thirdTrianglePoints[i], thirdTrianglePoints[i+1] );
            i++;
        }
        thirdTriDraw.endFill();
        
     
        
        this.btnRadio1.position.setTo(373,610);
        this.btnRadio2.position.setTo(700+25,610);
        this.btnRadio3.position.setTo(1075,610);
        
        this.tick1.position.setTo(373,610);
        this.tick1.anchor.setTo(0.25,0.25);
        this.tick1.alpha = 0;
        
        this.tick2.position.setTo(1075,610);
        this.tick2.anchor.setTo(0.25,0.25);
        this.tick2.alpha = 0;
        
        this.cross1.position.setTo(700+25,610);
        this.cross1.anchor.setTo(0.19,0.19);
        this.cross1.alpha = 0;
        this.cross2.alpha=0;
    
        
        
        this.btnRadio1.events.onInputDown.add(function(){if (check <2){this.btnRadio1.loadTexture("btnradiochecked",0); check++; a = 1}},this);
        this.btnRadio2.events.onInputDown.add(function(){if (check <2){this.btnRadio2.loadTexture("btnradiochecked",0); check++; b = 1}},this);
        this.btnRadio3.events.onInputDown.add(function(){if (check <2){this.btnRadio3.loadTexture("btnradiochecked",0); check++; c = 1}},this);
        
        this.btnPlay.events.onInputDown.add(function(){if (check>=2 && a == 1 && c ==1){  this.highlight.alpha=1;this.pinkbox4c.alpha =1; this.isoAns4c.alpha =1;this.tick1.alpha = 1; this.tick2.alpha = 1; this.btnPlay.visible = false; this.btnNext.visible = true; this.texts[12].position.setTo(1160,805); this.texts[12].text = "Continue"; this.texts[12].alpha = 1; this.texts[3].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[4].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[5].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[11].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[10].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[9].setStyle({backgroundColor: 'rgba(255,255,0,1)'});} else if (check >=2 && b ==1 && c == 1){ this.highlight.alpha=1;this.pinkbox4a.alpha =1;this.isoAns4a.alpha=1;this.pinkbox4.alpha = 1;this.isoAns4.alpha =1;this.confusedCheck++;this.boolTryAgain = true; this.k++;this.cross1.alpha = 1; this.tick1.alpha = 0; this.tick2.alpha = 1; this.btnPlay.visible = false; this.btnNext.visible = true; this.texts[12].position.setTo(1160,805); this.texts[12].text = "Continue"; this.texts[12].alpha = 1;this.texts[3].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[4].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[5].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[11].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[10].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[9].setStyle({backgroundColor: 'rgba(255,255,0,1)'});}else if (check >=2 && a ==1 && b == 1){ this.highlight.alpha=1; this.highlight.alpha =1;this.pinkbox4b.alpha =1;this.isoAns4b.alpha=1;this.pinkbox4.alpha = 1;this.isoAns4.alpha =1;this.confusedCheck++;this.boolTryAgain = true; this.k++;this.cross1.alpha = 1; this.tick1.alpha = 1; this.tick2.alpha = 0; this.btnPlay.visible = false; this.btnNext.visible = true; this.texts[12].position.setTo(1160,805); this.texts[12].text = "Continue"; this.texts[12].alpha = 1;this.texts[3].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[4].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[5].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[11].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[10].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[9].setStyle({backgroundColor: 'rgba(255,255,0,1)'});}},this);
        
        this.btnNext.events.onInputDown.add(function(){n = 0; this.n=0; a =0;b=0;c=0; this.a=0; this.b =0; this.c=0;confusedCheck =0; k=0; this.k=0;this.confusedCheck=0; check =0; this.check = 0;game.state.start('state10');},this);
        
        //Creating the try again button
        this.btnTryAgain = game.add.button(0,0, 'btn2');
        this.btnTryAgain.frame = 0;
        this.btnTryAgain.position.setTo(1140, 800);
        this.btnTryAgain.scale.setTo(0.785,0.5);
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
            check = 0;this.k++;this.btnNext.visible = false;this.texts[12].position.setTo(1175,805);
            this.texts[12].text = "Check"; this.btnPlay.visible = true;a = 0; b = 0; c = 0;this.pinkbox4.alpha = 0;this.isoAns4.alpha =0; this.isoAns4a.alpha =0; this.pinkbox4a.alpha =0;this.isoAns4b.alpha =0; this.pinkbox4b.alpha =0;}, this);
        
        tickTween = this.game.add.tween(this.tick1).to({alpha:1},1000,Phaser.Easing.Linear.None);
            tickTween2 = this.game.add.tween(this.tick2).to({alpha:1},1500,Phaser.Easing.Linear.None);
                tickTween3 = this.game.add.tween(this.pinkbox4a).to({alpha:1},1000,Phaser.Easing.Linear.None);
            tickTween4 = this.game.add.tween(this.isoAns4a).to({alpha:1},1500,Phaser.Easing.Linear.None);
                tickTween5 = this.game.add.tween(this.pinkbox4b).to({alpha:1},1000,Phaser.Easing.Linear.None);
            tickTween6 = this.game.add.tween(this.isoAns4b).to({alpha:1},1500,Phaser.Easing.Linear.None);
    },
    update: function(){
        console.log(this.dot.x + " y: " + this.dot.y);
       // console.log(check);
           if (this.boolTryAgain == true) {
            if (this.k < 2) {
            this.btnTryAgain.visible = true;
            this.txtTryAgain.alpha = 1;
            n = 4;}
        }
        else if (this.boolTryAgain == false) {
            this.btnTryAgain.visible = false;
            this.txtTryAgain.alpha = 0;
              this.btnPlay.frame = 1;
            this.texts[12].alpha = 0.3;
            if (this.k == 3){this.tick1.alpha = 1; this.tick2.alpha = 1; this.btnPlay.visible = false; this.btnNext.visible = true; this.texts[12].position.setTo(1055,805); this.texts[12].text = "Continue"; this.texts[12].alpha = 1; this.texts[3].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[4].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[10].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[9].setStyle({backgroundColor: 'rgba(255,255,0,1)'});
                            }
        }
         if(this.confusedCheck == 2 && b == 1 && c ==1) {
            tickTween.start();
            tickTween5.start();
            tickTween6.start();
            //tickTween2.start();
            //tickTween3.start();
        }
        if (this.confusedCheck == 2 && b ==1 && a==1){
            tickTween2.start();
            tickTween3.start();
            tickTween4.start();
          
        }
        console.log("what is the value of a: "+ a + " what is the value of b: "+ b + " what is the value of c: " + c); 
        console.log("what is the value of k" + this.k);
        console.log("what is the value of confused check: " + this.confusedCheck);
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
        

        
        
     
        
    },
};