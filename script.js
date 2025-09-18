
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



<audio autoplay loop style="display:none;">
  <source src="1.mp3" type="audio/mpeg">
</audio>
