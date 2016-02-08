function createDrawArray(dir) {
  ret = [1,1,1,1,1,1];
  if(dir[0]) ret[0] = ret[1] = 0;
  if(dir[1]) ret[2] = ret[3] = 0;
  if(dir[2]) ret[4] = ret[5] = 0;
} 

function Cube(x, y, dir) {
  this.x = x;
  this.y = y;
  this.dir = dir;
  this.drawArr = createDrawArray(dir);
}

Cube.prototype.draw = function() {
  drawCube(this.x, this.y, this.drawArr);
} 