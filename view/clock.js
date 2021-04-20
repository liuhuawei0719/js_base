//为了让requestAnimFrame兼容所有的浏览器，耽误了大量的时间，两小时。本人用的最新的谷歌浏览器，气，这个优点很多相比定时器
window.requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function(callback) {
          window.setTimeout(callback, 6000 / 60);
      };
})();

function draw() {
  var canvas = document.getElementById('cloak');
  if (!canvas.getContext) return;
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 400, 400);
  ctx.save();
  ctx.translate(200, 200);
  let timer = new Date();
  let sec = timer.getSeconds();
  let min = timer.getMinutes();
  let hour = timer.getHours();
  // 绘制秒针
  ctx.save();
  ctx.rotate(Math.PI * 2 * sec / 60);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -105);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "green";
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
  //绘制分针
  ctx.save();
  ctx.rotate(Math.PI * 2 * min / 60);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -80);
  ctx.strokeStyle = 'orange';
  ctx.lineWidth = 3;
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
  //绘制时针
  ctx.save();
  ctx.rotate(Math.PI * 2 * hour / 12);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -70);
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 5;
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
  //中心的原点
  ctx.beginPath();
  ctx.arc(0, 0, 2, 0, 2 * Math.PI);
  ctx.strokeStyle = "red";
  ctx.stroke();
  //绘制表盘
  for (let i = 1; i < 13; i++) {
      ctx.save();
      ctx.rotate(Math.PI * 2 * i / 12);
      ctx.beginPath();
      ctx.moveTo(0, 100);
      ctx.lineTo(0, 110);
      ctx.strokeStyle = 'blue';
      ctx.lineWidth = i % 3 ? 2 : 4;
      ctx.strokeStyle = i % 3 ? "blue" : "red";
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
  }
  ctx.restore();
  requestAnimFrame(draw);
};
requestAnimFrame(draw);