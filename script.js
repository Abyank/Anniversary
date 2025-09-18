
function createFloatingHearts() {
  setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerText = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 20 + 15 + 'px';
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }, 800);
}


createFloatingHearts();


if (window.location.pathname.includes("ending.html")) {
  document.body.addEventListener("click", function (e) {
    if (e.target.classList.contains("floating-heart")) {
      const note = document.createElement("div");
      note.className = "love-note";
      const messages = [
        "I’ll love you forever 💕",
        "You’re my everything ❤️",
        "Forever yours, Abyan 💖",
        "Mathu + Abyan = Always 💞",
        "You make my world brighter ✨"
      ];
      note.innerText = messages[Math.floor(Math.random() * messages.length)];
      note.style.left = e.pageX + "px";
      note.style.top = e.pageY + "px";
      document.body.appendChild(note);

      setTimeout(() => note.remove(), 2000);
    }
  });
}




const bgAudio = new Audio("1.mp3");
bgAudio.loop = true;
bgAudio.volume = 0.5;


bgAudio.play().catch(() => {
  console.warn("Autoplay blocked. Waiting for user interaction...");
 
  const button = document.createElement("button");
  button.innerText = "▶ Play Music";
  button.style.position = "fixed";
  button.style.top = "50%";
  button.style.left = "50%";
  button.style.transform = "translate(-50%, -50%)";
  button.style.padding = "15px 25px";
  button.style.fontSize = "1.2em";
  button.style.border = "none";
  button.style.borderRadius = "10px";
  button.style.background = "#ff6699";
  button.style.color = "white";
  button.style.cursor = "pointer";
  document.body.appendChild(button);

  button.addEventListener("click", () => {
    bgAudio.play();
    button.remove();
  });
});


