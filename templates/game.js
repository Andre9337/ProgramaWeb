const canvas = document.getElementById('canvas')
console.log(canvas)
if (canvas) {
  const ctx = canvas.getContext('2d');

  const canvasWidth = 1024;
  const canvasHeight = 576;

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  function animate() {
    window.requestAnimationFrame(animate);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  }

  animate();
} else {
  console.error('Elemento canvas não encontrado.');
}
