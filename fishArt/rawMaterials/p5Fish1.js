function setup() {
    createCanvas(400, 400);
  }
  
  function diamond(centerX, centerY, width, height, bellyUpRatio = 1) {
    quad (centerX+width/2, centerY, centerX, centerY+(height/2/bellyUpRatio), centerX-width/2, centerY, centerX, centerY-height/2)
  }
  
  function draw() {  
    background(0, 0, 0, 0);
    
    colorMode(HSB);
    let mainColor = color(200, 128, 128);
    let accentColor = color(100, 128, 128);
    fill(mainColor);
    noStroke();
    
    let fishCenterX = 200;
    let fishCenterY = 200;
    let fishLength = 300;
    let fishHeightRatio = 1;
    let fishHeight = fishLength * fishHeightRatio;
    let fishBellyUpRatio = 1.3; // Weird looking
    let fishMouthSize = fishLength * 0.7;
    let fishMouthOpenRatio = 0.3;
    let fishMouthWidth = fishMouthSize;
    let fishMouthHeight = fishMouthSize * fishMouthOpenRatio;
    let fishEyeSize = 1;
    
    // Body
    diamond(fishCenterX, fishCenterY, fishLength, fishHeight, fishBellyUpRatio);
    
    // Mouth cutout
    erase();
    //fill(100, 128, 128, 0.5);
    quad(fishCenterX-fishLength/2-1, fishCenterY, fishCenterX-fishLength/2, fishCenterY-fishMouthHeight/2, fishCenterX-fishLength/2+fishMouthWidth, fishCenterY, fishCenterX-fishLength/2, fishCenterY+fishMouthHeight/2);
    noErase();
    
    // Eye
    fill(accentColor);
    diamond(fishCenterX-fishLength*0.2, fishCenterY-fishHeight*0.2, fishLength/10*fishEyeSize, fishLength/10*fishEyeSize);
    
    // Tail
    fill(mainColor);
    
    
  }