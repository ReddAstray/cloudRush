const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const groundHeight = 100; // hoogte van de grond vanaf de onderkant



document.getElementById("minimizeBtn").addEventListener("click", () => {
  window.electronAPI.minimize();
});

document.getElementById("closeBtn").addEventListener("click", () => {
  window.electronAPI.close();
});

// Vogel eigenschappen
let birdY = 200;       // verticale positie
let birdX = 100;       // horizontale positie
let velocity = 0;      // snelheid in Y-richting
let gravity = 0.1;     // zwaartekracht

function gameLoop() {
  // snelheid toepassen
  velocity += gravity;
  birdY += velocity;

  // achtergrond tekenen
  ctx.fillStyle = "#BEE5FF";
  ctx.fillRect(0, 0, canvas.width, canvas.height - groundHeight);

  // grond tekenen
  ctx.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight);

  // vogel tekenen
  ctx.fillStyle = "yellow";
  ctx.fillRect(birdX, birdY, 30, 30);

   // botsing met de onderkant (grond)
  if (birdY + 30 > canvas.height) {
    birdY = canvas.height - 30;
    velocity = 0;
    // hier kun je game-over logica toevoegen
  }

  // botsing met de bovenkant
  if (birdY < 0) {
    birdY = 0;
    velocity = 0;
  }

  requestAnimationFrame(gameLoop);
}



// Vogel omhoog laten springen
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    velocity = -5; // negatieve snelheid = omhoog
  }
});

// Optioneel: ook klikken voor mobiel/muis
canvas.addEventListener("click", () => {
  velocity = -5;
});

gameLoop();
