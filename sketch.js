function setup() {
    createCanvas(600,600);
    background("violet");
  }
  
  function draw() {
    
    fill("pink")
    stroke("white")
    
    //console.log(mouseIsPressed)
    
    if(mouseIsPressed) {
      
      rect(mouseX, mouseY, 20, 35)
    }
  }