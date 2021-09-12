function main() {  
  // Lấy id emxxample
  var canvas = document.getElementById('example');  

  // Khai báo vẽ 2D
  var ctx = canvas.getContext('2d');

  // Vẽ hình vuông 
  ctx.fillStyle = 'rgba(0, 0, 255, 1.0)'; // Set color to blue
  ctx.fillRect(120, 10, 150, 100);        // Fill a rectangle with the color
}
