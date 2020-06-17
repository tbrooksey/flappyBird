
let bird;
let pipes = [];
let lives = 40
let collision=false
let takeLives=true

function setup() {
  createCanvas(640, 480);
  bird = new Bird();
  pipes.push(new Pipe());
  bg = loadImage("./background/background.jpg")
}

function draw() {
  clear()
  background(bg);

 pipes.forEach(pipe=>{
  pipe.show()
  pipe.update()
 })
  if(takeLives==true){
    for (let pipe of pipes) {
      if (pipe.hits(bird)) {
       lives-=1
       takeLives=false
break;
      }  
    }
  }
  collision=false
  pipes.forEach((pipe,i)=>{
      if(pipe.hits(bird)){
        collision=true
      }
    if (pipe.offscreen()) {
      pipes.splice(i, 1);
    }
  })

  if(!collision){
    takeLives=true
  }
 
/* if(livesVal){
  lives-=1
  livesVal=false
  
} */
console.log(lives)

  

  bird.update();
  bird.show();

  if (frameCount % 75 == 0) {
    pipes.push(new Pipe());
  }
}

function keyPressed() {
  if (key == ' ') {
    bird.up();
    //console.log("SPACE");
  }
}
