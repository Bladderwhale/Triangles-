var check = 0;
var aa = true,bb = true,cc=true;
demo.state3 = function(){};
demo.state3.prototype = {
    btnPlay: null, btnNext: null, a: 0, b:0, c:0, ans1:null,ans2:null, btnTryAgain: null, txtTryAgain: null, boolTryAgain: false,k: 0,confusedCheck: 0,
    preload: function(){
        loadAssets();
 game.stage.backgroundColor = '#000000';
    },
    create: function(){
        game.stage.backgroundColor = '#ffffff';
        console.log('state3');
        addChangeStateEventListers();
        fixedGUI(this);
        addTexts(this);
        this.headingTexts.text = "Isosceles Triangles";
        fixedGUI3i();
        dotAttributes(this);
        addBtnRadio(this);
        addTickCross(this);
        isoscelesTriangleAns2(this);
        addLightImage1i();
        
          highlighter(this);
        this.highlight.alpha =0;
        this.highlight.position.setTo(505,140);
        this.highlight.scale.setTo(0.95,0.5);
        
        this.home.events.onInputDown.add(function(){
        n = 0; this.n=0; a =0;b=0;c=0; this.a=0; this.b =0; this.c=0;confusedCheck =0; this.confusedCheck=0;
        this.boolTryAgain = false;
        k =0;this.k=0;check=0;this.check=0;
        game.state.start('state1');
       
    },this);
        var firstTrianglePoints = [550-50, 550,400-50 ,350 ];
        var firstTriDraw = game.add.graphics(0,0);
        firstTriDraw.beginFill(0xe0ffff);
        firstTriDraw.lineStyle(2,0x000000,1);
        firstTriDraw.moveTo(250-50,550);
        for (var i = 0; i < firstTrianglePoints.length; i++) {
            firstTriDraw.lineTo(firstTrianglePoints[i], firstTrianglePoints[i+1]); 
            i++;
        }
        firstTriDraw.endFill(); 

        var secondTrianglePoints = [800, 550, 970, 350];
        var secondTriDraw = game.add.graphics(0,0);
        secondTriDraw.beginFill(0x7FBF7F);
        secondTriDraw.moveTo(615,550);
        secondTriDraw.lineStyle(2,0x000000,1);
        for (var i = 0; i < secondTrianglePoints.length; i++) {
            secondTriDraw.lineTo(secondTrianglePoints[i], secondTrianglePoints[i+1]);
            i++;
        }
        secondTriDraw.endFill();
        
        var thirdTrianglePoints = [1150+50,550, 1087+50,350];
        var thirdTriDraw = game.add.graphics(0,0);
        thirdTriDraw.beginFill(0xFFFF66);
        thirdTriDraw.moveTo(1025+50, 550);
        thirdTriDraw.lineStyle(2,0x000000,1);
            for (var i = 0; i<thirdTrianglePoints.length; i++) {
            thirdTriDraw.lineTo(thirdTrianglePoints[i], thirdTrianglePoints[i+1] );
            i++;
        }
        thirdTriDraw.endFill();
        
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
        
        

        for (var i = 0; i < 13; i++){
            this.texts[i] = game.add.text(i*10,i*10, "1");
        }
        this.texts[0].position.setTo(320,140);
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
        this.texts[2].setStyle({ fill: '#008000'});
        
        boxTryAgainRotation(this);
        this.texts[2].addChild(this.drawGraphics);
        
        this.texts[3].position.setTo(200-50, 425);
        this.texts[3].text = "7.2 cm";
        
        this.texts[4].position.setTo(500-50, 425);
        this.texts[4].text = "7.2 cm";
        
        this.texts[5].position.setTo(355-50, 562);
        this.texts[5].text = "9.4 cm";
        
        this.texts[6].position.setTo(680, 425);
        this.texts[6].text = "8.2 cm";
        
        this.texts[7].position.setTo(880, 470);
        this.texts[7].text = "7.2 cm";
        
        this.texts[8].position.setTo(680, 562);
        this.texts[8].text = "3.4 cm";
        
        this.texts[9].position.setTo(965+50,425);
        this.texts[9].text = "5.3 cm";
        
        this.texts[10].position.setTo(1135+50,425);
        this.texts[10].text = "5.3 cm";
        
        this.texts[11].position.setTo(1050+50,562);
        this.texts[11].text = "2.4 cm";
        
        this.texts[12].position.setTo(1060,805);
        this.texts[12].text = "Check";
        this.texts[12].alpha = 0.3;
        
        this.btnRadio1.position.setTo(373-50,610);
        this.btnRadio2.position.setTo(700,610);
        this.btnRadio3.position.setTo(1075+50,610);
        
        this.tick1.position.setTo(373-50,610);
        this.tick1.anchor.setTo(0.25,0.25);
        this.tick1.alpha = 0;
        
        this.tick2.position.setTo(1075+50,610);
        this.tick2.anchor.setTo(0.25,0.25);
        this.tick2.alpha = 0;
        
        this.cross1.position.setTo(700,610);
        this.cross1.anchor.setTo(0.19,0.19);
        this.cross1.alpha = 0;
        this.cross2.alpha=0;
        
        /*this.ans3 = game.add.sprite(0,0,"ans1");
        this.ans3.scale.setTo(0.35,0.35);
        this.ans3.position.setTo(180,610);
        this.ans3.alpha = 0;
        this.ans1 = game.add.sprite(0,0,"ans2");
        this.ans1.scale.setTo(0.35,0.35);
        this.ans1.position.setTo(600,625);
        this.ans1.alpha = 0;
        this.ans2 = game.add.sprite(0,0,"ans3");
        this.ans2.scale.setTo(0.35,0.35);
        this.ans2.position.setTo(180,625);
        this.ans2.alpha = 0;*/
        
        
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
        
        
   
     
      
        
        
        this.btnPlay.events.onInputDown.add(function(){if (check>=2 && a == 1 && c ==1){  this.highlight.alpha =1;this.tick1.alpha = 1; this.tick2.alpha = 1; this.btnPlay.visible = false; this.btnNext.visible = true; this.texts[12].position.setTo(1055,805); this.texts[12].text = "Continue"; this.texts[12].alpha = 1; this.texts[3].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[4].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[10].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[9].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.pinkbox4.alpha = 1; this.isoAns4.alpha = 1;} else if (check >=2 && b ==1 && a == 1){ this.highlight.alpha =1;this.confusedCheck++;this.boolTryAgain = true;this.cross1.alpha = 1; this.tick1.alpha = 1; this.tick2.alpha = 0; this.btnPlay.visible = false; this.btnNext.visible = true; this.texts[12].position.setTo(1055,805); this.texts[12].text = "Continue"; this.texts[12].alpha = 1;this.texts[3].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[4].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[10].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[9].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.pinkbox3.alpha = 1; this.isoAns3.alpha = 1;this.pinkbox2.alpha = 1; this.isoAns2.alpha=1;}else if (check >=2 && b ==1 && c == 1){ this.highlight.alpha =1;this.pinkbox3.alpha = 1; this.isoAns3.alpha = 1;this.pinkbox2a.alpha = 1; this.isoAns2a.alpha = 1;this.confusedCheck++;this.boolTryAgain = true;this.cross1.alpha = 1; this.tick1.alpha = 0; this.tick2.alpha = 1; this.btnPlay.visible = false; this.btnNext.visible = true; this.texts[12].position.setTo(1055,805); this.texts[12].text = "Continue"; this.texts[12].alpha = 1;this.texts[3].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[4].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[10].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[9].setStyle({backgroundColor: 'rgba(255,255,0,1)'});}},this);
        
        this.btnNext.events.onInputDown.add(function(){ aa =true, bb = true, cc=true; n = 0; this.n=0; a =0;b=0;c=0; this.a=0; this.b =0; this.c=0;confusedCheck =0; this.confusedCheck=0;
        this.boolTryAgain = false;
        k =0;this.k=0;check=0;this.check=0;game.state.start('state4');},this);
        
         //Creating the try again button
        this.btnTryAgain = game.add.button(0,0, 'btn2');
        this.btnTryAgain.frame = 0;
        this.btnTryAgain.position.setTo(1035, 800);
        this.btnTryAgain.scale.setTo(0.8,0.5);
        this.btnTryAgain.visible = false;
        this.txtTryAgain = game.add.text(1150,815,"Try Again");
        this.txtTryAgain.alpha = 0;
        this.txtTryAgain.position.setTo(1050, 805);
        this.boolTryAgain = false;
        this.btnTryAgain.events.onInputDown.add(function(){
            aa =true, bb = true, cc=true;
            this.pinkbox3.alpha = 0; this.isoAns3.alpha = 0;this.pinkbox2.alpha = 0; this.isoAns2.alpha=0;this.pinkbox2a.alpha = 0; this.isoAns2a.alpha = 0;this.boolTryAgain = false;this.tick2.alpha = 0;
            this.tick1.alpha = 0;
            this.tick2.alpha = 0;                                               
            this.cross1.alpha = 0;
            this.btnRadio1.loadTexture('btnradio',0);
            this.btnRadio2.loadTexture('btnradio',0);
            this.btnRadio3.loadTexture('btnradio',0);
            check = 0;this.k++;this.btnNext.visible = false;this.texts[12].position.setTo(1060,805);
            this.texts[12].text = "Check"; this.btnPlay.visible = true;a = 0; b = 0; c = 0; }, this);
        
        //Layering after tweening
        this.ans4 = game.add.sprite(0,0,"ans1");
        this.ans4.scale.setTo(0.35,0.35);
        this.ans4.position.setTo(90,605);
        this.ans4.alpha = 0;
        
      
           tickTween = this.game.add.tween(this.tick1).to({alpha:1},1000,Phaser.Easing.Linear.None);
            tickTween2 = this.game.add.tween(this.tick2).to({alpha:1},1500,Phaser.Easing.Linear.None);
        tickTween3 = this.game.add.tween(this.pinkbox2i).to({alpha:1, alpha:1},1500,Phaser.Easing.Linear.None);
         tickTween4 = this.game.add.tween(this.isoAns2i).to({alpha:1, alpha:1},1500,Phaser.Easing.Linear.None);
         tickTween5 = this.game.add.tween(this.pinkbox2ai).to({alpha:1, alpha:1},1500,Phaser.Easing.Linear.None);
         tickTween6 = this.game.add.tween(this.isoAns2ai).to({alpha:1, alpha:1},1500,Phaser.Easing.Linear.None);
            
     this.dot.alpha =0;
    },
    update: function(){
  
        
        console.log(check)
        //console.log(this.dot.x + " y: " + this.dot.y);
       // console.log(check);
         //Try again function
        if (this.boolTryAgain == true) {
            if (this.k < 1) {
            this.btnTryAgain.visible = true;
            this.txtTryAgain.alpha = 1;
            n = 4;}
        }
        else if (this.boolTryAgain == false) {
            this.btnTryAgain.visible = false;
            this.txtTryAgain.alpha = 0;
            this.btnPlay.frame = 1;
            this.texts[12].alpha = 0.3;
            if (this.k == 2){this.tick1.alpha = 1; this.tick2.alpha = 1; this.btnPlay.visible = false; this.btnNext.visible = true; this.texts[12].position.setTo(1055,805); this.texts[12].text = "Continue"; this.texts[12].alpha = 1; this.texts[3].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[4].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[10].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.texts[9].setStyle({backgroundColor: 'rgba(255,255,0,1)'});this.ans1.alpha = 0;this.ans2.alpha = 1;this.ans2.position.setTo(500,625);
                            }
          
                
            }
        //console.log("what is the value of a: " + a + "what is the value of b: " + b + "what is the value of c:" + c);
        if(this.confusedCheck == 2 && b == 1 && c ==1) {
            tickTween.start();
            tickTween3.start();
            tickTween4.start();
        }
        if (this.confusedCheck == 2 && b ==1 && a==1){
            tickTween2.start();
            tickTween5.start();
            tickTween6.start();
          
        }
            //console.log("What is the value of k" + this.k);
        
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