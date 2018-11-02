function addChangeStateEventListers() { 
    //Global Function (All scripts can access to it)
    addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0); 
    //Second step@
    addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
    addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
    addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
    addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
    addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
    addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
    addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
    addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
    addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);
    addKeyCallback(Phaser.Keyboard.NUMPAD_0, changeState, 10);
    addKeyCallback(Phaser.Keyboard.NUMPAD_1, changeState, 11);
    addKeyCallback(Phaser.Keyboard.NUMPAD_2, changeState, 12);
    addKeyCallback(Phaser.Keyboard.NUMPAD_3, changeState, 13);
    addKeyCallback(Phaser.Keyboard.NUMPAD_4, changeState, 14);
};

function changeState(i ,stateNum) { //Global Function (All scripts can access to it) //Forth step@
    console.log(i); //Callback function -(Carries information of what happened)
    console.log(stateNum);
    game.state.start('state' + stateNum);
};

function addKeyCallback (key, fn , args) { //Global Function (All scripts can access to it) //Third step@
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args); //Event listener //Events - Occurance, Listener - parameters/arguments inside the events. 
};

//function windowScaling(){
//   game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; //Scale the size automatically  
//  //   game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT; 
//    game.scale.pageAlignHorizontally = true;
//    game.scale.pageAlignVertically = true;
//    game.scale.setMaximum();
//    
//    
//};

function loadAssets(){
    game.load.video('intro', 'assets/intro.mp4');
    game.load.image('credits', 'assets/credits.png');
    game.load.image('dot', 'assets/dots.png');
    game.load.image('board', 'assets/board.png');
    game.load.image('home', 'assets/home.png');
    game.load.image('btnradio', 'assets/btnradio.png');
    game.load.image('btnradiochecked', 'assets/btnradiochecked.png');
    game.load.spritesheet('btn', 'assets/btn.png', 191,92,2 );
    game.load.spritesheet('btn2', 'assets/btn2.png', 191,92,2)
    game.load.image('tick', 'assets/tick.png');
    game.load.image('cross', 'assets/cross.png');
    game.load.image('ans1', 'assets/ans1.png');
    game.load.image('ans2', 'assets/ans2.png');
    game.load.image('ans3', 'assets/ans3.png');
    game.load.image('ans4', 'assets/ans4.png');
    game.load.image('arc','assets/arc.png');
    game.load.image('ans5', 'assets/ans5.jpg');
    game.load.image('ans6', 'assets/ans6.jpg');
    game.load.image('ans7', 'assets/ans7.png');
    game.load.image('sp1', 'assets/speechbubble1.png');
    game.load.image('ans8', 'assets/ans8.png');
    game.load.image('ans9', 'assets/ans9.png');
    game.load.image('ans10', 'assets/ans10.png');
};

function addTexts(state){
    state.texts = [];
};

function dotAttributes(state){
    state.dot = game.add.sprite(0,0,'dot');
    state.dot.inputEnabled = true;
    state.dot.input.enableDrag(true);
    state.dot.scale.x = 0.1;
    state.dot.scale.y = 0.1;
};

function fixedGUI(state){
    var rectangle = game.add.graphics(0,0)
    rectangle.beginFill(0xFFD27F, 1);
    rectangle.drawRect(0,0,game.world.width,game.world.height/25);
    rectangle.endFill();
    
    var home = game.add.sprite(game.world.centerX+700, game.world.centerY-500, "home");
    home.scale.setTo(0.03,0.03);
    home.inputEnabled = true;
    home.events.onInputDown.add(function(){
        game.state.start('state1');
    },this)
    
    state.headingTexts = game.add.text(game.world.centerX, game.world.centerY-477.5, "");
    state.headingTexts.anchor.setTo(0.5,0.5);
};

function fixedGUI2() {
    var roundedrectangle = game.add.graphics(0,0);
    roundedrectangle.beginFill(0xffffff,1);
    roundedrectangle.lineStyle(2,0x000000, 1);
    roundedrectangle.drawRoundedRect(50, 90, 1400, 550);
};

function fixedGUI3() {
    game.stage.backgroundColor = '#ffffff';
    var bar = game.add.graphics(0,0);3
    bar.beginFill(0x98FB98, 0.2);
    bar.lineStyle(2, 0x98FB98, 1);
    bar.drawRect(50, 90, 1200, 125);
    bar.endFill();
}
function fixedGUI4(state) {
    state.roundedrectangle = game.add.graphics(0,0);
    state.roundedrectangle.beginFill(0xffffff,1);
    state.roundedrectangle.lineStyle(2,0x000000, 1);
    state.roundedrectangle.drawRoundedRect(50, 80, 1400, 540);
}

function forIsoEquTriangle(state) {
    state.dot1 = game.add.sprite(700, 500, 'dot');
    state.dot2 = game.add.sprite(800, 500, 'dot');
    state.dot3 = game.add.sprite(750, 300, 'dot');
    state.dot1.scale.setTo(0.1,0.1);
    state.dot2.scale.setTo(0.1,0.1);
    state.dot3.scale.setTo(0.1,0.1);
    state.dot1.anchor.setTo(0.5,0.5);
    state.dot2.anchor.setTo(0.5,0.5);
    state.dot3.anchor.setTo(0.5,0.5);
    
    state.fakeHandle1 = game.add.sprite(650, 500, 'dot');
    state.fakeHandle2 = game.add.sprite(850, 500, 'dot');
    state.fakeHandle3 = game.add.sprite(750, 400, 'dot');
    state.fakeHandle1.scale.setTo(0.1,0.1);
    state.fakeHandle2.scale.setTo(0.1,0.1);
    state.fakeHandle3.scale.setTo(0.1,0.1);
    state.fakeHandle1.anchor.setTo(0.5,0.5);
    state.fakeHandle2.anchor.setTo(0.5,0.5);
    state.fakeHandle3.anchor.setTo(0.5,0.5);
    state.fakeHandle1.inputEnabled = true;
    state.fakeHandle2.inputEnabled = true;
    state.fakeHandle3.inputEnabled = true;
    state.fakeHandle1.input.enableDrag(true);
    state.fakeHandle2.input.enableDrag(true);
    state.fakeHandle3.input.enableDrag(true);
};

function addBtnRadio(state){
    state.btnRadio1 = game.add.sprite(10,10, "btnradio");
    state.btnRadio2 = game.add.sprite(0,0, "btnradio");
    state.btnRadio3 = game.add.sprite(0,0, "btnradio");
    state.btnRadio1.scale.setTo(0.30,0.30);
    state.btnRadio2.scale.setTo(0.30,0.30);
    state.btnRadio3.scale.setTo(0.30,0.30);
    state.btnRadio1.inputEnabled = true;
    state.btnRadio2.inputEnabled = true;
    state.btnRadio3.inputEnabled = true;
    
  
    
};

function addTickCross(state) {
    state.tick1 = game.add.sprite(0,0,'tick');
    state.tick2 = game.add.sprite(0,0,'tick');
    state.cross1 = game.add.sprite(0,0,'cross');
    state.cross2 = game.add.sprite(0,0,'cross');
    
    state.tick1.scale.setTo(0.4,0.4);
    state.tick2.scale.setTo(0.4,0.4);
    state.cross1.scale.setTo(0.5,0.5);
    state.cross2.scale.setTo(0.5,0.5);
    
};

Math.asd = function(radians) {
  return radians * 180 / Math.PI;
};

/*function asd(radians) {
   return Math.(radians * 180 / Math.PI); 
}*/

function newDot(state) {
    state.newDot = [];
}

function forState11(valueAx, valueAy, valueBx, valueBy, valueCx, valueCy) {
    this.valueA = new Phaser.Point(valueAx, valueAy);
    this.valueB = new Phaser.Point(valueBx, valueBy);
    this.valueC = new Phaser.Point(valueCx, valueCy);
    this.valueAB = new Phaser.Point.subtract(this.valueA, this.valueB);
    this.valueAC = new Phaser.Point.subtract(this.valueA, this.valueC);
    this.valueBA = new Phaser.Point.subtract(this.valueB, this.valueA);
    this.valueBC = new Phaser.Point.subtract(this.valueB, this.valueC);
    this.valueCA = new Phaser.Point.subtract(this.valueC, this.valueA);
    this.valueCB = new Phaser.Point.subtract(this.valueC, this.valueB);
    this.valueAB.normalize();
    this.valueAC.normalize();
    this.valueBA.normalize();
    this.valueBC.normalize();
    this.valueCA.normalize();
    this.valueCB.normalize();
    this.dotProductA = 0;
    this.dotProductB = 0;
    this.dotProductC = 0;
    
    this.init = function()
    {
        this.dotProductA = this.valueAB.dot(this.valueAC);
        this.dotProductB = this.valueBA.dot(this.valueBC);
        this.dotProductC = this.valueCA.dot(this.valueCB);
        this.dotProductA = Math.acos(this.dotProductA);
        this.dotProductB = Math.acos(this.dotProductB);
        this.dotProductC = Math.acos(this.dotProductC);
    }
    
}
function forState12(valueA, valueB, valueC) {
    this.valueAB = new Phaser.Point.subtract(valueA, valueB);
    this.valueAC = new Phaser.Point.subtract(valueA, valueC);
    this.valueBA = new Phaser.Point.subtract(valueB, valueA);
    this.valueBC = new Phaser.Point.subtract(valueB, valueC);
    this.valueCA = new Phaser.Point.subtract(valueC, valueA);
    this.valueCB = new Phaser.Point.subtract(valueC, valueB);
    this.valueAB.normalize();
    this.valueAC.normalize();
    this.valueBA.normalize();
    this.valueBC.normalize();
    this.valueCA.normalize();
    this.valueCB.normalize();
    this.dotProductA = 0;
    this.dotProductB = 0;
    this.dotProductC = 0;
    
    this.init = function()
    {
        this.dotProductA = this.valueAB.dot(this.valueAC);
        this.dotProductB = this.valueBA.dot(this.valueBC);
        this.dotProductC = this.valueCA.dot(this.valueCB);
        this.dotProductA = Math.acos(this.dotProductA);
        this.dotProductB = Math.acos(this.dotProductB);
        this.dotProductC = Math.acos(this.dotProductC);
    }
    
}


