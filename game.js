
let bird;
let pipes = [];
let lives = 3
let collision=false
let takeLives=true
let points = 0
let imgPipeBottom;
let imgPipeTop;
let imgEnd;
let birdImages=[]

function setup() {
  createCanvas(640, 480);
  bird = new Bird();
  pipes.push(new Pipe());
  bg = loadImage("./background/background.jpg")
  imgPipeBottom = loadImage("./pipes/volcano.png")
  imgPipeTop = loadImage("./pipes/bolt.png")
  
  imgEnd = loadImage("./gameOver/gameOver.png")
  
  for (let i = 1; i <4  ; i++) {
    birdImages.push( loadImage("./player/bird" + i + ".png"))
   }
}

function draw() {
  clear()
  background(bg);
  document.getElementById("lives").innerHTML=lives
  document.getElementById("points").innerHTML=points


 pipes.forEach(pipe=>{
  pipe.show()
  pipe.update()
 })
  if(takeLives==true){
    for (let pipe of pipes) {
      if (pipe.hits(bird)) {
       lives-=1
       points-=1
       takeLives=false
       console.log(frameCount)

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
    points+=1
    pipes.push(new Pipe());
  }
  if (lives <= 0) {
image(imgEnd, 0, 0)

    noLoop()

  }
}

function keyPressed() {
  if (key == ' ') {
    bird.up();
    //console.log("SPACE");
  }
  if (keyCode===32&&lives <= 0) {
    window.location.reload()
  }
}
