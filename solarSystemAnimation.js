const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const sun = new Image()
const moon = new Image()
const earth = new Image()

function init() {
  sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png'
  moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png'
  earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png'
  window.requestAnimationFrame(draw)
}

function draw() {
  ctx.globalCompositeOperation = 'destination-over'
  ctx.clearRect(0, 0, 300, 300)

  ctx.fillStyle = 'rgba(0, 0, 0, 0.4)'
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)'
  ctx.save()
  ctx.translate(150, 150)

  // Earth
  var time = new Date()
  ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds())
  ctx.translate(105, 0)
  ctx.fillRect(0, -12, 40, 24)
  ctx.drawImage(earth, -12, -12)

  // Moon
  ctx.save()
  ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds())
  ctx.translate(0, 28.5)
  ctx.drawImage(moon, -3.5, -3.5)
  ctx.restore()

  ctx.restore()

  ctx.beginPath()
  ctx.arc(150, 150, 105, 0, Math.PI * 2, false)
  ctx.stroke()

  ctx.drawImage(sun, 0, 0, 300, 300)

  window.requestAnimationFrame(draw)
}

init()
