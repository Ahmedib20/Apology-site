const heartsCanvas = document.getElementById('heartsCanvas');
const ctx = heartsCanvas.getContext('2d');
let hearts = [];
let typingInterval;

function resizeCanvas() {
  heartsCanvas.width = window.innerWidth;
  heartsCanvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function drawHeart(x, y, size) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(x, y - size / 2, x - size, y - size / 2, x - size, y);
  ctx.bezierCurveTo(x - size, y + size, x, y + size * 1.5, x, y + size * 2);
  ctx.bezierCurveTo(x, y + size * 1.5, x + size, y + size, x + size, y);
  ctx.bezierCurveTo(x + size, y - size / 2, x, y - size / 2, x, y);
  ctx.fillStyle = '#ff4d6d';
  ctx.fill();
}

function createHeart() {
  hearts.push({
    x: Math.random() * heartsCanvas.width,
    y: -20,
    size: 10 + Math.random() * 10,
    speed: 1 + Math.random() * 2
  });
}

function animateHearts() {
  ctx.clearRect(0, 0, heartsCanvas.width, heartsCanvas.height);
  for (let i = 0; i < hearts.length; i++) {
    const h = hearts[i];
    drawHeart(h.x, h.y, h.size);
    h.y += h.speed;
  }
  hearts = hearts.filter(h => h.y < heartsCanvas.height);
  requestAnimationFrame(animateHearts);
}
animateHearts();

function startHeartRain() {
  const interval = setInterval(createHeart, 100);
  setTimeout(() => clearInterval(interval), 3000);
}

// Floating messages
const floatingMessagesContainer = document.getElementById('floating-messages');
function showFloatingMessage(text) {
  const el = document.createElement('div');
  el.className = 'floating';
  el.textContent = text;
  el.style.left = Math.random() * 80 + 'vw';
  el.style.top = '80vh';
  floatingMessagesContainer.appendChild(el);
  setTimeout(() => el.remove(), 4000);
}

// Typing detection
const typingMessages = [
  "موافق قبل تكملي يا ست الناس ❤️",
  "شروطك على راسي يا حياتي",
  "أنا راضي قبل ما أسمع",
  "تسلمي لي يا ملاكي"
];
document.getElementById('conditions').addEventListener('input', () => {
  if (!typingInterval) {
    typingInterval = setInterval(() => {
      const msg = typingMessages[Math.floor(Math.random() * typingMessages.length)];
      showFloatingMessage(msg);
    }, 1500);
  }
});

// Conditions button
document.getElementById('seeConditions').addEventListener('click', () => {
  startHeartRain();
  document.getElementById('modal').style.display = 'flex';
});
document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('modal').style.display = 'none';
});

// Forgive button
document.getElementById('forgiveBtn').addEventListener('click', () => {
  startHeartRain();
  showFloatingMessage("Yaaaaayyyy 🎉");
});

// Not forgive button
const notForgiveMessages = [
  "النبي سامحيني، توبة يا حبوبة ❤️",
  "أنا غلطان، والله آخر مرة",
  "من غيرك حياتي ما ليها طعم",
  "سامحيني وابتدي صفحة جديدة",
  "بحبك مهما حصل"
];
document.getElementById('notForgiveBtn').addEventListener('click', () => {
  notForgiveMessages.forEach((msg, i) => {
    setTimeout(() => showFloatingMessage(msg), i * 1000);
  });
});