//All the answers 

function isoscelesTriangleAns(state) {
    state.pinkbox = game.add.graphics(0,0);
    state.pinkbox.beginFill(0xF2C2B5, 1);
    state.pinkbox.lineStyle(1, 0x000000,1);
    state.pinkbox.drawRect(840,723, 275, 140);
    state.pinkbox.alpha = 1;
    state.isoAns1 = game.add.text(849,728, "Correct. \nAn isosceles triangle \nhas two equal sides. ");
   // state.isoAns1.addfontWeight = ('bold',0);
    state.isoAns1.addFontWeight('bold',0);
    state.isoAns1.addFontWeight('normal',8);
   // state.isoAns1.fontWeight = 'normal';
    state.isoAns1.align = 'left';
    state.pinkbox.endFill();
    
    state.isoAns1.alpha = 0;
    state.pinkbox.alpha = 0;
};

function isoscelesTriangleAns2(state) {
    state.pinkbox2 = game.add.graphics(0,0);
    state.pinkbox2.beginFill(0xF2C2B5, 1);
    state.pinkbox2.lineStyle(1, 0x000000,1);
    state.pinkbox2.drawRect(150,649, 380,80);
    state.pinkbox2.alpha = 1;
    state.isoAns2 = game.add.text(150,649, "Correct. This is an isosceles\ntriangle. It has two equal sides. ");
    state.isoAns2.fontWeight = 'normal';
    state.isoAns2.align = 'left';
    state.isoAns2.addFontWeight('bold',0);
    state.isoAns2.addFontWeight('normal',9);
    state.pinkbox2.endFill();
    
    state.isoAns2.alpha = 0;
    state.pinkbox2.alpha = 0;
    
    state.pinkbox2a = game.add.graphics(0,0);
    state.pinkbox2a.beginFill(0xF2C2B5, 1);
    state.pinkbox2a.lineStyle(1, 0x000000,1);
    state.pinkbox2a.drawRect(960,649, 380,80);
    state.pinkbox2a.alpha = 1;
    state.isoAns2a = game.add.text(960,649, "Correct. This is an isosceles\ntriangle. It has two equal sides. ");
    state.isoAns2a.fontWeight = 'normal';
    state.isoAns2a.align = 'left';
    state.isoAns2a.addFontWeight('bold',0);
    state.isoAns2a.addFontWeight('normal',9);
    state.pinkbox2a.endFill();
    
    state.isoAns2a.alpha = 0;
    state.pinkbox2a.alpha = 0;
    
    state.pinkbox3 = game.add.graphics(0,0);
    state.pinkbox3.beginFill(0xF2C2B5, 1);
    state.pinkbox3.lineStyle(1, 0x000000,1);
    state.pinkbox3.drawRect(550,649,390,80);
    state.pinkbox3.alpha = 1;
    state.isoAns3 = game.add.text(550,649, "Incorrect. All three sides of this \ntriangle are different.");
    state.isoAns3.fontWeight = 'normal';
    state.isoAns3.align = 'left';
    state.pinkbox3.endFill();
    state.isoAns3.addFontWeight('bold',0);
    state.isoAns3.addFontWeight('normal',10);
    state.isoAns3.alpha = 0;
    state.pinkbox3.alpha = 0;
    
    state.pinkbox4 = game.add.graphics(0,0);
    state.pinkbox4.beginFill(0xF2C2B5,1);
    state.pinkbox4.lineStyle(1, 0x000000,1);
    state.pinkbox4.drawRect(550,649,450,80);
    state.pinkbox4.alpha = 1;
    state.isoAns4 = game.add.text(550,649, "Correct. They are isosceles triangles.\nEach triangle has two equal sides");
    state.isoAns4.fontWeight = 'normal';
    state.isoAns4.align = 'left';
     state.isoAns4.addFontWeight('bold',0);
    state.isoAns4.addFontWeight('normal',8);
    state.pinkbox4.endFill();
    
    state.isoAns4.alpha = 0;
    state.pinkbox4.alpha = 0;
};

