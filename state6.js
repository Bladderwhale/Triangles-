demo.state6 = function(){};
demo.state6.prototype = {
    btnPlay: null, btnNext: null, a: 0, b:0, c:0, ans1:null,ans2:null,btnTryAgain: null, txtTryAgain: null, boolTryAgain: false,k: 0,confusedCheck:0,
    preload: function(){
        loadAssets();
         game.stage.backgroundColor = '#000000';
    },
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        console.log('state6');
        addChangeStateEventListers(); 
        fixedGUI(this);
        this.headingTexts.text = "Isosceles Triangle"
        fixedGUI3i(this);
        dotAttributes(this);
        addBtnRadio(this)
        addTickCross(this);
        
        
        newDot(this);
        isoscelesTriangleAns2(this);
        addLightImage1i();
        var arr1x = [373,159,425];
        var arr2y = [350,470,592];
        for (var i =0; i<arr1x.length; i++) {
            this.newDot[i] = game.add.sprite(arr1x[i],arr2y[i],"");
            this.newDot[i].alpha =0;
        }
        
        var newDot2 =[];
        var arr1x2 = [601-20,908-20,908-20];
        var arr2y2 = [505,597,410];
        for (var i = 0; i<3; i++){
            newDot2[i] = game.add.sprite(arr1x2[i],arr2y2[i],"");
            newDot2[i].alpha = 0;
        }
        
        var newDot3 = [];
        var arr1x3 = [1012, 1150, 1380];
        var arr2y3 = [449, 572, 380];
        for (var i = 0; i<3; i++) {
            newDot3[i] = game.add.sprite(arr1x3[i], arr2y3[i], "");
            newDot3[i].alpha = 0;
        }
        this.btnPlay = game.add.button(0,0,"btn2");
        this.btnPlay.frame = 1;
        this.btnPlay.position.setTo(1108, 870);
        this.btnPlay.scale.setTo(0.7,0.5);
        this.btnPlay.inputEnabled = true;
        
        this.btnNext = game.add.button(0,0,"btn2");
        this.btnNext.frame = 0;
        this.btnNext.position.setTo(1102, 870);
        this.btnNext.scale.setTo(0.8,0.5);
        this.btnNext.visible = false;
        
        var firstTrianglePoints = [this.newDot[1].x,this.newDot[1].y,this.newDot[2].x,this.newDot[2].y];
        var firstTriangleDraw = game.add.graphics(0,0); 
        firstTriangleDraw.beginFill(0x6666FF,0.3);
        firstTriangleDraw.lineStyle(2, 0x000000,1);
        firstTriangleDraw.moveTo(this.newDot[0].x,this.newDot[0].y);
        for (var i =0; i<firstTrianglePoints.length; i++){
            firstTriangleDraw.lineTo(firstTrianglePoints[i], firstTrianglePoints[i+1]);
            i++
        }
        firstTriangleDraw.endFill();
        
        var secondTrianglePoints = [newDot2[1].x,newDot2[1].y,newDot2[2].x,newDot2[2].y];
        var secondTriangleDraw = game.add.graphics(0,0); 
        secondTriangleDraw.beginFill(0xffa500,0.5);
        secondTriangleDraw.lineStyle(2, 0x000000,1);
        secondTriangleDraw.moveTo(newDot2[0].x,newDot2[0].y);
        for (var i =0; i<firstTrianglePoints.length; i++){
            secondTriangleDraw.lineTo(secondTrianglePoints[i], secondTrianglePoints[i+1]);
            i++
        }
        secondTriangleDraw.endFill();
        
        var thirdTrianglePoints = [newDot3[1].x,newDot3[1].y,newDot3[2].x,newDot3[2].y];
        var thirdTriangleDraw = game.add.graphics(0,0); 
        thirdTriangleDraw.beginFill(0xffff00,0.5);
        thirdTriangleDraw.lineStyle(2, 0x000000,1);
        thirdTriangleDraw.moveTo(newDot3[0].x,newDot3[0].y);
        for (var i =0; i<firstTrianglePoints.length; i++){
            thirdTriangleDraw.lineTo(thirdTrianglePoints[i], thirdTrianglePoints[i+1]);
            i++
        }
        thirdTriangleDraw.endFill();
        
        //Draw 3 new angles for the first triangle points
        newLine1 = new Phaser.Point.subtract(this.newDot[0], this.newDot[1]);
        newLine2 = new Phaser.Point.subtract(this.newDot[0], this.newDot[2]);
        newLine3 = new Phaser.Point.subtract(this.newDot[1], this.newDot[2]);
        newLine4 = new Phaser.Point.subtract(this.newDot[1], this.newDot[0]);
        newLine5 = new Phaser.Point.subtract(this.newDot[2], this.newDot[0]);
        newLine6 = new Phaser.Point.subtract(this.newDot[2], this.newDot[1]);
        
        newLine1.normalize();
        newLine2.normalize();
        newLine3.normalize();
        newLine4.normalize();
        newLine5.normalize();
        newLine6.normalize();
        
        newFinal = newLine1.dot(newLine2);
        newFinal = Math.acos(newFinal);
        startAngle = (Math.PI/2)- (newFinal/5.5);
        
        newFinal2 = newLine3.dot(newLine4); 
        newFinal2 = Math.acos(newFinal2);
        startAngle2 = (Math.PI/2+Math.PI+Math.PI/2-newFinal2/2);
        
        newFinal3 = newLine5.dot(newLine6);
        newFinal3 = Math.acos(newFinal3);
        startAngle3 = (Math.PI+Math.PI/2-newFinal3-0.2);
        
        //Draw 3 new angles for the second triangle point
        newLine7 = new Phaser.Point.subtract(newDot2[0], newDot2[1]);
        newLine8 = new Phaser.Point.subtract(newDot2[0], newDot2[2]);
        newLine9 = new Phaser.Point.subtract(newDot2[1], newDot2[0]);
        newLine10 = new Phaser.Point.subtract(newDot2[1], newDot2[2]);
        newLine11 = new Phaser.Point.subtract(newDot2[2], newDot2[1]);
        newLine12 = new Phaser.Point.subtract(newDot2[2], newDot2[0]);
        
        newLine7.normalize();
        newLine8.normalize();
        newLine9.normalize();
        newLine10.normalize();
        newLine11.normalize();
        newLine12.normalize();
        
        new1Final = newLine7.dot(newLine8);
        new1Final = Math.acos(new1Final);
        start1Angle = Math.PI/2+ Math.PI +Math.PI/2-new1Final/2;
        
        new2Final = newLine9.dot(newLine10);
        new2Final = Math.acos(new2Final);
        start2Angle = Math.PI + Math.PI/2 - new2Final;
        
        new3Final = newLine10.dot(newLine11);
        new3Final = Math.acos(new3Final);
        start3Angle = Math.PI/2;
        
        //Third Dot Product for the third triangle
        newLine13 = new Phaser.Point.subtract(newDot3[0], newDot3[1]);
        newLine14 = new Phaser.Point.subtract(newDot3[0], newDot3[2]);
        newLine15 = new Phaser.Point.subtract(newDot3[1], newDot3[2]); 
        newLine16 = new Phaser.Point.subtract(newDot3[1], newDot3[0]);
        newLine17 = new Phaser.Point.subtract(newDot3[2], newDot3[0]);
        newLine18 = new Phaser.Point.subtract(newDot3[2], newDot3[1]);
        
        newLine13.normalize(); 
        newLine14.normalize(); 
        newLine15.normalize();
        newLine16.normalize();
        newLine17.normalize();
        newLine18.normalize();
        
        newFinal11 = newLine14.dot(newLine13);
        newFinal11 = Math.acos(newFinal11); 
        startAngle11 = Math.PI + Math.PI/2+ Math.PI/2 - newFinal11/3.8;
        
        newFinal22 = newLine15.dot(newLine16);
        newFinal22 = Math.acos(newFinal22);
        startAngle22 = Math.PI+  Math.PI/2-newFinal22/2;
        
        newFinal33 = newLine17.dot(newLine18);
        newFinal33 = Math.acos(newFinal33);
        startAngle33 = Math.PI/2 + Math.PI/2.25 - newFinal33;
        
        graphics1 = game.add.graphics(0,0);
       // graphics1.beginFill('#EEE8AA');
        graphics1.lineStyle(2, 0xDE1C24,1);
        graphics1.arc(373,350,50, startAngle,startAngle+newFinal,false);
        graphics1.arc(this.newDot[1].x,this.newDot[1].y,50, startAngle2,startAngle2+newFinal2,false);
        graphics1.arc(this.newDot[2].x,this.newDot[2].y,50, startAngle3,startAngle3+newFinal3,false);
        //2nd triangle
        graphics1.arc(newDot2[0].x,newDot2[0].y,50,start1Angle,start1Angle+new1Final,false);
        graphics1.arc(newDot2[1].x,newDot2[1].y,50,start2Angle,start2Angle+new2Final,false);
        graphics1.arc(newDot2[2].x,newDot2[2].y,50,start3Angle,start3Angle+new2Final,false);
        //3rd triangle 
        graphics1.arc(newDot3[0].x,newDot3[0].y,50,startAngle11, startAngle11 +newFinal11,false);
        graphics1.arc(newDot3[1].x,newDot3[1].y,50,startAngle22, startAngle22+newFinal22,false);
        graphics1.arc(newDot3[2].x,newDot3[2].y,70,startAngle33, startAngle33+newFinal33,false);
        
        
    
        addTexts(this);
        for (var i = 0; i < 13; i++){
            this.texts[i] = game.add.text(i*10,i*10, "1");
        }
        this.texts[0].position.setTo(340,120);
        this.texts[0].text = "If a triangle has two equal sides or two equal angles,\nit is an isosceles triangle."
        
        this.texts[0].fontWeight = 'normal';
        
        this.texts[1].position.setTo(270,240);
        this.texts[1].text = "Which two of these triangles are isosceles?"
        this.texts[1].lineSpacing = 30;
        this.texts[1].fontWeight = 'normal';
        
        this.texts[2].position.setTo(130,255);
        this.texts[2].text = "Try this..."
        this.texts[2].lineSpacing = 30;
        this.texts[2].angle = -10;
        this.texts[2].setStyle({ fill: "#008000"});
        
        drawGraphicsLength = 130;
         boxTryAgainRotation(this);
        this.texts[2].addChild(this.drawGraphics);
        
        this.texts[3].position.setTo(325, 409);
        this.texts[3].text = "50\xB0";
        
        this.texts[4].position.setTo(230, 451);
        this.texts[4].text = "50\xB0";
        
        this.texts[5].position.setTo(351, 520);
        this.texts[5].text = "80\xB0";
        
        this.texts[6].position.setTo(825, 455);
        this.texts[6].text = "68\xB0";
        
        this.texts[7].position.setTo(820, 522);
        this.texts[7].text = "68\xB0";
        
        this.texts[8].position.setTo(680, 490);
        this.texts[8].text = "44\xB0";
        
        this.texts[9].position.setTo(1075,450);
        this.texts[9].text = "32\xB0";
        
        this.texts[10].position.setTo(1265,415);
        this.texts[10].text = "22\xB0";
        
        this.texts[11].position.setTo(1135,490);
        this.texts[11].text = "126\xB0";
        
        this.texts[12].position.setTo(1130, 875);
        this.texts[12].text = "Check"
        this.texts[12].alpha = 0.3;
        
      
        
        this.btnRadio1.position.setTo(378,660);
        this.btnRadio2.position.setTo(800,660);
        this.btnRadio3.position.setTo(1175,660);
        
        this.tick1.position.setTo(378,660);
        this.tick1.anchor.setTo(0.25,0.25);
        this.tick1.alpha = 0;
        
        this.tick2.position.setTo(800,660);
        this.tick2.anchor.setTo(0.25,0.25);
        this.tick2.alpha = 0;
        
        this.cross1.position.setTo(1180,660);
        this.cross1.anchor.setTo(0.19,0.19);
        this.cross1.alpha = 0;
        this.cross2.alpha=0;
        
       
        
        this.btnRadio1.events.onInputDown.add(function(){if (check <2){this.btnRadio1.loadTexture("btnradiochecked",0); check++; a = 1}},this);
        this.btnRadio2.events.onInputDown.add(function(){if (check <2){this.btnRadio2.loadTexture("btnradiochecked",0); check++; b = 1}},this);
        this.btnRadio3.events.onInputDown.add(function(){if (check <2){this.btnRadio3.loadTexture("btnradiochecked",0); check++; c = 1}},this);
        
        this.btnPlay.events.onInputDown.add(function(){if (check>=2 && a == 1 && b ==1){tickTween7.start();tickTween8.start();this.tick1.alpha = 1; this.tick2.alpha = 1; this.btnPlay.visible = false; this.btnNext.visible = true; this.texts[12].position.setTo(1120,875); this.texts[12].text = "Continue"; this.texts[3].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[4].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[6].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[7].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.ans1.alpha = 0;this.ans3.alpha = 1;} else if (check >=2 && c ==1 && b ==1){ this.pinkbox2dd.alpha = 1; this.isoAns2dd.alpha = 1;this.pinkbox3c.alpha=1;this.isoAns3c.alpha =1;  this.confusedCheck++;this.boolTryAgain = true;this.cross1.alpha = 1; this.tick1.alpha = 0; this.tick2.alpha = 1; this.btnPlay.visible = false; this.btnNext.visible = true; this.texts[12].position.setTo(1120,875); this.texts[12].text = "Continue";this.texts[3].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[4].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[6].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[7].setStyle({backgroundColor: 'rgba(255,255,0,1)'});}else if (check >=2 && c ==1 && a ==1){ this.pinkbox2d.alpha = 1; this.isoAns2d.alpha = 1;this.pinkbox3c.alpha=1;this.isoAns3c.alpha =1;  this.confusedCheck++;this.boolTryAgain = true;this.cross1.alpha = 1; this.tick1.alpha = 1; this.tick2.alpha = 0; this.btnPlay.visible = false; this.btnNext.visible = true; this.texts[12].position.setTo(1120,875); this.texts[12].text = "Continue";this.texts[3].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[4].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[6].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[7].setStyle({backgroundColor: 'rgba(255,255,0,1)'});}},this);
        this.btnNext.events.onInputDown.add(function(){check =0;a=0;b=0;c=0;game.state.start('state1'); sp1 =1;},this);
        
        
        
    
        
        
        
          //Creating the try again button
        this.btnTryAgain = game.add.button(0,0, 'btn2');
        this.btnTryAgain.frame = 0;
        this.btnTryAgain.position.setTo(1100, 870);
        this.btnTryAgain.scale.setTo(0.8,0.5);
        this.btnTryAgain.visible = false;
        this.txtTryAgain = game.add.text(1165,820,"Try Again");
        this.txtTryAgain.alpha = 0;
        this.txtTryAgain.position.setTo(1115, 875);
        this.boolTryAgain = false;
        this.btnTryAgain.events.onInputDown.add(function(){this.boolTryAgain = false;this.tick2.alpha = 0;
            this.tick1.alpha = 0;
            this.tick2.alpha = 0;                                               
            this.cross1.alpha = 0;
            this.btnRadio1.loadTexture('btnradio',0);
            this.btnRadio2.loadTexture('btnradio',0);
            this.btnRadio3.loadTexture('btnradio',0);
             this.pinkbox3c.alpha=0;this.isoAns3c.alpha =0;                                   this.pinkbox2d.alpha=0;this.isoAns2d.alpha = 0;   
            this.pinkbox2dd.alpha=0;this.isoAns2dd.alpha = 0;  
            check = 0;this.k++;this.btnNext.visible = false;this.texts[12].position.setTo(1135,875);
            this.texts[12].text = "Check"; this.btnPlay.visible = true;a = 0; b = 0; c = 0;}, this);
        
        
        
        //this.o = Math.atan2(159-373,470-350);
        //this.p = Math.atan2(550-159,615-470);
        //var graphics = game.add.graphics(0, 0);

        // graphics.lineStyle(2, 0xffd900, 1);
    
        //graphics.beginFill(0xFF3300, 1);
        //graphics.lineStyle(8, 0xFF3300);
        // graphics.arc(1050, 350, 30, game.math.degToRad(-86.947117485423248695),  game.math.degToRad(90), false);
        //graphics.arc(373, 350, -50, this.o,  this.p, true); //game.math.degToRad(90)
        
       tickTween = this.game.add.tween(this.tick2).to({alpha:1},1000,Phaser.Easing.Linear.None);
         tickTween2 = this.game.add.tween(this.tick1).to({alpha:1},1000,Phaser.Easing.Linear.None);
        
        tickTween3 = this.game.add.tween(this.pinkbox2d).to({alpha:1},1000,Phaser.Easing.Linear.None);
         tickTween4 = this.game.add.tween(this.isoAns2d).to({alpha:1},1000,Phaser.Easing.Linear.None);
        
          tickTween5 = this.game.add.tween(this.pinkbox2dd).to({alpha:1},1000,Phaser.Easing.Linear.None);
         tickTween6 = this.game.add.tween(this.isoAns2dd).to({alpha:1},1000,Phaser.Easing.Linear.None);
        tickTween7 = this.game.add.tween(this.pinkbox2ddd).to({alpha:1},1000,Phaser.Easing.Linear.None);
         tickTween8 = this.game.add.tween(this.isoAns2ddd).to({alpha:1},1000,Phaser.Easing.Linear.None);
        
     
        
         
    },
    update: function(){
        console.log("X: " + this.dot.x + "Y: " + this.dot.y);
         if (this.boolTryAgain == true) {
             if (this.k<1){
            this.btnTryAgain.visible = true;
            this.txtTryAgain.alpha = 1;
            n = 4;}
        }
        else if (this.boolTryAgain == false) {
            this.btnTryAgain.visible = false;
            this.txtTryAgain.alpha = 0;
            if (this.k == 2){this.tick1.alpha = 1; this.tick2.alpha = 1; this.btnPlay.visible = false; this.btnNext.visible = true; this.texts[12].position.setTo(1122,875); this.texts[12].text = "Continue"; this.texts[12].alpha = 1; this.texts[3].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[4].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.ans1.alpha = 0;this.ans3.alpha = 1;this.ans2.position.setTo(400,725);
                
            }
        }
            
           if (this.confusedCheck == 2 && a == 1 && c == 1) {
                tickTween.start();
               tickTween5.start();
               tickTween6.start();
            }
        
        console.log("see this booltryagain:" + this.boolTryAgain);
        
        if (this.confusedCheck == 2 && b == 1 && c == 1) { 
                tickTween2.start(); 
                tickTween3.start();
                tickTween4.start();
        }
        
        
        console.log("what is value of this confusedCheck: " + this.confusedCheck);
        
        
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