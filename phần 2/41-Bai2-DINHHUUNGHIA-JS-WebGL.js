// Vertex shader program - Vị trí + size
var VSHADER_SOURCE = 
  'void main() {\n' +
  '  gl_Position = vec4(0.95, 0.95, 0.0, 1.0);\n' + // Góc trên bên phải
  '  gl_PointSize = 10.0;\n' +               
  '}\n';

// Fragment shader program
var FSHADER_SOURCE =
  'void main() {\n' +
  '  gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);\n' + // Màu vàng
  '}\n';

function main() {
  // Khai báo canvas
  var canvas = document.getElementById('webgl');

  // Get the rendering context for WebGL
  var gl = getWebGLContext(canvas);

  // Initialize shaders
  if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
    console.log('Failed to intialize shaders.');
    return;
  }

  // Xóa màu nền - Trắng
  gl.clearColor(0.0, 0.0, 0.0, 1.0);

  // Clear <canvas>
  gl.clear(gl.COLOR_BUFFER_BIT);

  // Vẽ
  gl.drawArrays(gl.POINTS, 0, 1);
}
