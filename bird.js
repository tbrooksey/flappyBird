
function Bird() {
    this.y = height / 2;
    this.x = 64;
  this.index=0
    this.gravity = 0.7;
    this.lift = -12;
    this.velocity = 0;
  
    this.show = function() {
      if(frameCount%10==0){
        this.index++
      }
      image(birdImages[this.index%3], this.x, this.y);
    };
  
    this.up = function() {
      this.velocity += this.lift;
    };
  
    this.update = function() {
      this.velocity += this.gravity;
      this.velocity *= 0.9;
      this.y += this.velocity;
  
      if (this.y > height) {
        this.y = height;
        this.velocity = 0;
      }
  
      if (this.y < 0) {
        this.y = 0;
        this.velocity = 0;
      }
    };
  }
  