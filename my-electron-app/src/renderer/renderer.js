const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

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
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // vogel tekenen (gewoon een vierkantje voor nu)
  ctx.fillStyle = "yellow";
  ctx.fillRect(birdX, birdY, 30, 30);

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
