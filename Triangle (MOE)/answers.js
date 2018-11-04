//All the answers 

function isoscelesTriangleAns(state) {
    state.pinkbox = game.add.graphics(0,0);
    state.pinkbox.beginFill(0xF2C2B5, 1);
    state.pinkbox.lineStyle(1, 0x000000,1);
    state.pinkbox.drawRect(840,723, 275, 140);
    state.pinkbox.alpha = 1;
    state.isoAns1 = game.add.text(849,728, "Correct. \nAn isosceles triangle \nhas two equal sides. ")
    state.isoAns1.fontWeight = 'normal';
    state.isoAns1.align = 'left';
    state.pinkbox.endFill();
    
    state.isoAns1.alpha = 0;
    state.pinkbox.alpha = 0;
};