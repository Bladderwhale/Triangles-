demo.state9 = function(){};
demo.state9.prototype = {
    btnPlay: null, btnNext: null, a: 0, b:0, c:0, ans1:null,ans2:null, 
    preload: function(){
        loadAssets();

    },
    create: function(){
        game.stage.backgroundColor = '#ffffff';
        console.log('state9');
        addChangeStateEventListers();
        fixedGUI(this);
        
        this.headingTexts.text = "Equilaterial Triangles";
        fixedGUI3();
        dotAttributes(this);
        addBtnRadio(this);
        addTickCross(this);
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
        
        addTexts(this);

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
        this.texts[3].text = "4 cm";
        
        this.texts[4].position.setTo(373, 346);
        this.texts[4].text = "4 cm";
        
        this.texts[5].position.setTo(373, 496);
        this.texts[5].text = "4 cm";
        
        this.texts[6].position.setTo(571, 475);
        this.texts[6].text = "5 cm";
        
        this.texts[7].position.setTo(768, 475);
        this.texts[7].text = "5 cm";
        
        this.texts[8].position.setTo(675, 553);
        this.texts[8].text = "6 cm";
        
        this.texts[9].position.setTo(1050,510);
        this.texts[9].text = "3 cm";
        
        this.texts[10].position.setTo(1050,330);
        this.texts[10].text = "3 cm";
        
        this.texts[11].position.setTo(1190,414);
        this.texts[11].text = "3 cm";
        
        this.texts[12].position.setTo(1175,755);
        this.texts[12].text = "Check";
        this.texts[12].alpha = 0.3;
        
        h1 = new Phaser.Point(300,355); //top
        h2 = new Phaser.Point(300,555); //base
        h3 = new Phaser.Point(500,555); //right
        
        
        
        var firstTrianglePoints = [288, 531,500 ,436 ];
        var firstTriDraw = game.add.graphics(0,0);
        firstTriDraw.beginFill(0xe0ffff);
        firstTriDraw.lineStyle(2,0x000000,1);
        firstTriDraw.moveTo(288,341);
        for (var i = 0; i < firstTrianglePoints.length; i++) {
            firstTriDraw.lineTo(firstTrianglePoints[i], firstTrianglePoints[i+1]); 
            i++;
        }
        firstTriDraw.endFill(); 

        var secondTrianglePoints = [820, 550, 707, 450];
        var secondTriDraw = game.add.graphics(0,0);
        secondTriDraw.beginFill(0x7FBF7F);
        secondTriDraw.moveTo(595,550);
        secondTriDraw.lineStyle(2,0x000000,1);
        for (var i = 0; i < secondTrianglePoints.length; i++) {
            secondTriDraw.lineTo(secondTrianglePoints[i], secondTrianglePoints[i+1]);
            i++;
        }
        secondTriDraw.endFill();
        
        var thirdTrianglePoints = [1178,334, 1178,530];
        var thirdTriDraw = game.add.graphics(0,0);
        thirdTriDraw.beginFill(0xFFFF66);
        thirdTriDraw.moveTo(997, 440);
        thirdTriDraw.lineStyle(2,0x000000,1);
            for (var i = 0; i<thirdTrianglePoints.length; i++) {
            thirdTriDraw.lineTo(thirdTrianglePoints[i], thirdTrianglePoints[i+1] );
            i++;
        }
        thirdTriDraw.endFill();
        
     
        
        this.btnRadio1.position.setTo(373,610);
        this.btnRadio2.position.setTo(700,610);
        this.btnRadio3.position.setTo(1075,610);
        
        this.tick1.position.setTo(373,610);
        this.tick1.anchor.setTo(0.25,0.25);
        this.tick1.alpha = 0;
        
        this.tick2.position.setTo(1075,610);
        this.tick2.anchor.setTo(0.25,0.25);
        this.tick2.alpha = 0;
        
        this.cross1.position.setTo(700,610);
        this.cross1.anchor.setTo(0.19,0.19);
        this.cross1.alpha = 0;
        this.cross2.alpha=0;
        
        this.ans1 = game.add.sprite(0,0,"ans2");
        this.ans1.scale.setTo(0.35,0.35);
        this.ans1.position.setTo(600,625);
        this.ans1.alpha = 0;
        this.ans2 = game.add.sprite(0,0,"ans3");
        this.ans2.scale.setTo(0.35,0.35);
        this.ans2.position.setTo(180,625);
        this.ans2.alpha = 0;
        
        
        this.btnRadio1.events.onInputDown.add(function(){if (check <2){this.btnRadio1.loadTexture("btnradiochecked",0); check++; a = 1}},this);
        this.btnRadio2.events.onInputDown.add(function(){if (check <2){this.btnRadio2.loadTexture("btnradiochecked",0); check++; b = 1}},this);
        this.btnRadio3.events.onInputDown.add(function(){if (check <2){this.btnRadio3.loadTexture("btnradiochecked",0); check++; c = 1}},this);
        
        this.btnPlay.events.onInputDown.add(function(){if (check>=2 && a == 1 && c ==1){this.tick1.alpha = 1; this.tick2.alpha = 1; this.btnPlay.visible = false; this.btnNext.visible = true; this.texts[12].position.setTo(1158,755); this.texts[12].text = "Continue"; this.texts[12].alpha = 1; this.texts[3].setStyle({backgroundColor: 'rgba(255,255,0)'});this.texts[4].setStyle({backgroundColor: 'rgba(255,255,0)'});this.texts[10].setStyle({backgroundColor: 'rgba(255,255,0)'});this.texts[9].setStyle({backgroundColor: 'rgba(255,255,0)'});this.ans1.alpha = 0;this.ans2.alpha = 1;this.ans2.position.setTo(500,625);} else if (check >=2 && b ==1 && c == 1){this.cross1.alpha = 1; this.tick1.alpha = 1; this.tick2.alpha = 0; this.btnPlay.visible = false; this.btnNext.visible = true; this.texts[12].position.setTo(1158,755); this.texts[12].text = "Continue"; this.texts[12].alpha = 1;this.texts[3].setStyle({backgroundColor: 'rgba(255,255,0)'});this.texts[4].setStyle({backgroundColor: 'rgba(255,255,0)'});this.texts[10].setStyle({backgroundColor: 'rgba(255,255,0)'});this.texts[9].setStyle({backgroundColor: 'rgba(255,255,0)'});this.ans1.alpha = 1;this.ans2.alpha = 1;}},this);
        
        this.btnNext.events.onInputDown.add(function(){check =0; a=0; b=0; c=0;game.state.start('state10');},this);
        
        
    },
    update: function(){
        console.log(this.dot.x + " y: " + this.dot.y);
       // console.log(check);
        
        if (check >= 2) {
            this.btnPlay.frame = 0;
            this.texts[12].alpha = 1;
            }
        
        
        

        
        
     
        
    },
};