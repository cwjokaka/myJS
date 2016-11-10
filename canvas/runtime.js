(function(window){
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');

  context.fillStyle='#FF0000';

  var bird = new Bird(100,150);


  window.setInterval(function () {
      bird.move();
      draw(context);
  }, 20);

  // window.setTimeout(function(){
  //   block1.setSpeed(2)
  //   //delete block.speed;
  // }, 2000);
  //重绘
  function draw(context){
    context.clearRect(0, 0, 500, 500);
    context.fillRect(bird.x,bird.y,50,50);
    // context.fillRect(block2.x,block2.y,50,50);
  }

  document.onclick = function(){
    bird.jump();
  };

})(window);
