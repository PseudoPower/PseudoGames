var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var xa = -Math.sqrt(3)/2;
var xb = -1/2;

var ya = Math.sqrt(3)/2;
var yb = -1/2;

/*
var xa = -1;
var xb = -1;

var ya = 1;
var yb = 0;
*/

/*
var xa = -1/2;
var xb = -1/2;

var ya = 1/2;
var yb = -1/2;
*/

function drawPolygon(x0, y0, ps, p, n, color) {
  ctx.beginPath();
  ctx.moveTo(x0, y0);
  var j = 2 * p;
  for(i = 0; i < n; ++i) {
    ctx.lineTo(ps[j], ps[j+1]);
    j += 2;
    j %= ps.length;
  }
  ctx.fillStyle = color;
  ctx.fill();
  
}

function drawTriangle(x0, y0, x1, y1, x2, y2, color) {
  ctx.beginPath();
  ctx.moveTo(x0, y0);
  ctx.lineTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x0, y0, x1, y1, color) {
  ctx.beginPath();
  ctx.moveTo(x0, y0);
  ctx.lineTo(x1, y1);
  ctx.strokeStyle = color;
  ctx.stroke();
}

function drawCube(x, y, h) {
  var len = 50;
  nx = canvas.width / 2 + (x * xa + y * ya) * len;
  ny = canvas.height / 2 - (x * xb + y * yb) * len;
  x = nx;
  y = ny;
  var ps = [x - ya * len, y + yb * len,
            x, y - len,
            x - xa * len, y + xb * len,
            x + ya * len, y - yb * len,
            x, y + len,
            x + xa * len, y - xb * len];
  if(h[0] && h[1]) {
    drawPolygon(x, y, ps, 0, 3, "#EFEFEF");
  } else {
    if(h[0]) drawTriangle(x, y, ps[0], ps[1], ps[2], ps[3], "#EFEFEF");
    if(h[1]) drawTriangle(x, y, ps[2], ps[3], ps[4], ps[5], "#EFEFEF");
  }
  if(h[2] && h[3]) {
    drawPolygon(x, y, ps, 2, 3, "#AFAFAF");
  } else {
    if(h[2]) drawTriangle(x, y, ps[4], ps[5], ps[6], ps[7], "#AFAFAF");
    if(h[3]) drawTriangle(x, y, ps[6], ps[7], ps[8], ps[9], "#AFAFAF");
  }
  if(h[4] && h[5]) {
    drawPolygon(x, y, ps, 4, 3, "#5F5F5F");
  } else {
    if(h[4]) drawTriangle(x, y, ps[8], ps[9], ps[10], ps[11], "#5F5F5F");
    if(h[5]) drawTriangle(x, y, ps[10], ps[11], ps[0], ps[1], "#5F5F5F");
  }
  
  for(i = 0; i < 6; i++) {
    if(h[i]) {
      drawLine(ps[i*2], ps[i*2+1], ps[(i*2+2)%12], ps[(i*2+3)%12], "#000000");
    }
  }
  
  if(h[0] || h[5]) drawLine(x, y, ps[0], ps[1], "#000000");
  if(h[1] || h[2]) drawLine(x, y, ps[4], ps[5], "#000000");
  if(h[3] || h[4]) drawLine(x, y, ps[8], ps[9], "#000000");
  
}

window.onresize = function () {
  ctx.canvas.width  = Math.min(800, window.innerWidth);
  ctx.canvas.height = Math.min(600, window.innerHeight);
  draw();
};

function draw() {

  drawCube(-4, -4, [1,1,1,1,0,0]);

  drawCube(-3, -4, [1,1,1,1,0,0]);
  drawCube(-2, -4, [1,1,1,1,0,0]);
  drawCube(-1, -4, [1,1,1,1,0,0]);

  drawCube(0, -4, [1,1,0,0,1,1]);

  drawCube(0, -3, [1,1,0,0,1,1]);
  drawCube(0, -2, [1,1,0,0,1,1]);
  drawCube(0, -1, [1,1,0,0,1,1]);

  drawCube(0, 0, [0,0,1,1,1,1]);

  drawCube(-1, -1, [0,0,1,1,1,1]);
  drawCube(-2, -2, [0,0,1,1,1,1]);
  drawCube(-3, -3, [0,0,1,1,1,0]);

  //drawCube(0, 0, [1,1,1,1,1,1]);
}

