function Bird(x,y){
  this.x = x;
  this.y = y;
}

Bird.prototype = {
  gravity : 0.25,
  speed_y : 0,
  setSpeedY : function(speed_y){
    this.speed_y = speed_y;
  },
  move : function(){
    this.y += this.speed_y;
    this.speed_y += this.gravity;
  },
  jump : function(){
    this.speed_y = -5;
  }
};

// //继承
// function BlockYellow(x,y){
//   Block.call(this,x,y);
// }
// BlockYellow.prototype = Block.prototype;
