demo.state14 = function(){};
demo.state14.prototype = {
    btnPlay: null, btnNext: null, a: 0, b:0, c:0, ans1:null,ans2:null,n1:0, 
    preload: function(){
        loadAssets();

    },
    create: function(){
        game.stage.backgroundColor = '#ffffff';
        console.log('state13');
        addChangeStateEventListers();
        fixedGUI(this);
        addTexts(this);
        this.headingTexts.text = "Isosceles Triangles";
        fixedGUI3();
        dotAttributes(this);
        addBtnRadio(this);
        addTickCross(this);
        
        

        var firstTrianglePoints = [360, 325+250,350+150 ,325 ];
        var firstTriDraw = game.add.graphics(0,0);
        firstTriDraw.beginFill(0xe0ffff);
        firstTriDraw.lineStyle(2,0x000000,1);
        firstTriDraw.moveTo(150,400);
        for (var i = 0; i < firstTrianglePoints.length; i++) {
            firstTriDraw.lineTo(firstTrianglePoints[i], firstTrianglePoints[i+1]); 
            i++;
        }
        firstTriDraw.endFill(); 

        var secondTrianglePoints = [738, 548, 960, 335];
        var secondTriDraw = game.add.graphics(0,0);
        secondTriDraw.beginFill(0x7FBF7F);
        secondTriDraw.moveTo(530,335);
        secondTriDraw.lineStyle(2,0x000000,1);
        for (var i = 0; i < secondTrianglePoints.length; i++) {
            secondTriDraw.lineTo(secondTrianglePoints[i], secondTrianglePoints[i+1]);
            i++;
        }
        secondTriDraw.endFill();
        
        var thirdTrianglePoints = [1200,550, 1087,325];
        var thirdTriDraw = game.add.graphics(0,0);
        thirdTriDraw.beginFill(0xFFFF66);
        thirdTriDraw.moveTo(950, 520);
        thirdTriDraw.lineStyle(2,0x000000,1);
            for (var i = 0; i<thirdTrianglePoints.length; i++) {
            thirdTriDraw.lineTo(thirdTrianglePoints[i], thirdTrianglePoints[i+1] );
            i++;
        }
        thirdTriDraw.endFill();
        
        var alx13 = new forState11(150,400,360,325+250,350+150,325);
        alx13.init();
        starttAngle1 = Math.PI + Math.PI/2 + Math.PI/2 - alx13.dotProductA/3.3;
        starttAngle2 = Math.PI + Math.PI/2 - alx13.dotProductA/1;
        starttAngle3 = Math.PI/2 + Math.PI/2.2 - alx13.dotProductC;
        
        var alx14 =new forState11(530,335,738,548,960,335);
        alx14.init();
        starttAngle4 = Math.PI+Math.PI/2+Math.PI/2
        
        starttAngle6 = Math.PI/2 + Math.PI/2 - alx14.dotProductB/2;
        
        var alx15 =new forState11(950, 520, 1200, 550, 1087, 325);
        alx15.init();
        starttAngle7 = Math.PI + Math.PI/2 + Math.PI/2.4- alx15.dotProductA/2;
        starttAngle8 = Math.PI+0.1;
        starttAngle9 = Math.PI/2 - alx15.dotProductC/2.3;
        
        graphics1 = game.add.graphics(0,0);
        graphics1.lineStyle(1,0x000000,1);
        graphics1.arc(150,400,50,starttAngle1,starttAngle1+alx13.dotProductA,false);
      
        graphics1.arc(360,325+250,50,starttAngle2,starttAngle2+alx13.dotProductB,false);
        graphics1.arc(350+150,325,50,starttAngle3,starttAngle3+alx13.dotProductC,false);
        graphics1.arc(530,335, 50, starttAngle4, starttAngle4 + alx14.dotProductA,false);
        graphics1.arc(960, 335, 50, starttAngle6, starttAngle6 + alx14.dotProductC,false);
        //Understanding pivot point. 
        emptyobj = game.add.sprite(738, 548, undefined);
        graphics = game.add.graphics(0,0);
        graphics.lineStyle(1,0x000000,1);
        var box = graphics.drawRect(0,0,20,20);
        emptyobj.addChild(box);
        emptyobj.angle = -135
        
     
       // graphics1.arc(785.5, 550, 50, starttAngle5, starttAngle5 + alx14.dotProductB,false);
     //   graphics1.arc(600, 437.5, 50, starttAngle6, starttAngle6 + alx14.dotProductC,false);
        graphics1.arc(950, 520, 50, starttAngle7, starttAngle7 + alx15.dotProductA, false);
        graphics1.arc(1200, 550, 50, starttAngle8, starttAngle8 + alx15.dotProductB,false);
        graphics1.arc(1087, 325, 30, starttAngle9, starttAngle9 + alx15.dotProductC,false);
        
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
        

        for (var i = 0; i < 14; i++){
            this.texts[i] = game.add.text(i*10,i*10, "1");
        }
        this.texts[0].position.setTo(210,140);
        this.texts[0].text = "If a triangle has a right angle , it is a right-angled triangle."
        this.texts[0].lineSpacing = 30;
        this.texts[0].fontWeight = 'normal';
        
        this.texts[1].position.setTo(270,240);
        this.texts[1].text = "Which two of these triangles are right-angled?"
        this.texts[1].lineSpacing = 30;
        this.texts[1].fontWeight = 'normal';
        
        this.texts[2].position.setTo(130,255);
        this.texts[2].text = "Try this..."
        this.texts[2].lineSpacing = 30;
        this.texts[2].angle = -10;
        this.texts[2].setStyle({ fill: '#008000'});
        
        this.texts[3].position.setTo(210, 399);
        this.texts[3].text = "90\xB0";
        
        this.texts[4].position.setTo(414, 351);
        this.texts[4].text = "61\xB0";
        
        this.texts[5].position.setTo(355, 486);
        this.texts[5].text = "29\xB0";
        
        this.texts[6].position.setTo(583, 347);
        this.texts[6].text = "45\xB0";
        
        this.texts[7].position.setTo(847, 349);
        this.texts[7].text = "45\xB0";
        
        this.texts[8].position.setTo(719, 484);
        this.texts[8].text = "90\xB0";
        
        this.texts[9].position.setTo(1063,370);
        this.texts[9].text = "78\xB0";
        
        this.texts[10].position.setTo(1010,495);
        this.texts[10].text = "60\xB0";
        
        this.texts[11].position.setTo(1104,504);
        this.texts[11].text = "42\xB0";
        
        this.texts[12].position.setTo(1060,805);
        this.texts[12].text = "Check";
        this.texts[12].alpha = 0.3;
        
        this.btnRadio1.position.setTo(373,610);
        this.btnRadio2.position.setTo(700,610);
        this.btnRadio3.position.setTo(1075,610);
        
        this.tick1.position.setTo(373,610);
        this.tick1.anchor.setTo(0.25,0.25);
        this.tick1.alpha = 0;
        
        this.cross1.position.setTo(700,610);
        this.cross1.anchor.setTo(0.19,0.19);
        this.cross1.alpha = 0;
        
        this.cross2.position.setTo(1075,610);
        this.cross2.anchor.setTo(0.25,0.25);
        this.cross2.alpha = 0;
       
        
        this.ans1 = game.add.sprite(0,0,"ans2");
        this.ans1.scale.setTo(0.35,0.35);
        this.ans1.position.setTo(600,625);
        this.ans1.alpha = 0;
        this.ans2 = game.add.sprite(0,0,"ans3");
        this.ans2.scale.setTo(0.35,0.35);
        this.ans2.position.setTo(180,625);
        this.ans2.alpha = 0;
        
        
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
                this.ans2.alpha = 1;
                this.a = 1;
                
            }
            if(this.n1 == 2) {
                this.cross1.alpha = 1;
                this.texts[12].alpha = 0.3;
                this.ans1.position.setTo(700,625)
                this.ans1.alpha = 1;
                this.btnPlay.frame = 1;
                this.btnPlay.alpha = 1;
            }
            if(this.n1 == 3) {
                this.cross2.alpha = 1;
                this.texts[12].alpha = 0.3;
                this.ans1.position.setTo(700,625)
                this.ans1.alpha = 1;
                this.btnPlay.frame = 1;
                this.btnPlay.alpha = 1;
            }
               },this);
        
        this.btnNext.events.onInputDown.add(function(){check =0; this.a=0; this.b=0; this.c=0;game.state.start('state14');},this);
        
        
    },
    update: function(){
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
                if (this.a == 1) {
                this.btnRadio1.loadTexture("btnradiochecked",0);
                this.btnRadio2.loadTexture("btnradio",0);
                this.btnRadio3.loadTexture("btnradio",0);
                }
                break;
            case 3:
               
                this.btnRadio1.loadTexture("btnradio", 0);
                this.btnRadio2.loadTexture("btnradio", 0);
                
                this.btnPlay.frame = 0;
                this.texts[12].alpha = 1;
                if (this.a == 1) {
                this.btnRadio1.loadTexture("btnradiochecked",0);
                this.btnRadio2.loadTexture("btnradio",0);
                this.btnRadio3.loadTexture("btnradio",0);
                }
                
                break;
               
        }
        console.log(this.a);
    },
};