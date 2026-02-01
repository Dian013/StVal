
  const button = document.getElementById("btn-no");

  const escapeRadius = 160;   // zone de déclenchement
  const speed = 300;          // vitesse de fuite

  document.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();

    const btnX = rect.left + rect.width / 2;
    const btnY = rect.top + rect.height / 2;

    const dx = btnX - e.clientX;
    const dy = btnY - e.clientY;

    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < escapeRadius) {
      // Normalisation du vecteur
      const normX = dx / distance;
      const normY = dy / distance;

      let newLeft = rect.left + normX * speed;
      let newTop = rect.top + normY * speed;

      // Empêcher le bouton de sortir de l'écran
      const maxX = window.innerWidth - rect.width;
      const maxY = window.innerHeight - rect.height;

      newLeft = Math.max(0, Math.min(maxX, newLeft));
      newTop = Math.max(0, Math.min(maxY, newTop));

      button.style.left = `${newLeft}px`;
      button.style.top = `${newTop}px`;
      button.style.transform = "translate(0, 0)";
    }
  });

const popup = document.getElementById("popup");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

document.addEventListener("click", (e) => {
  if (e.target === button) {
    popup.classList.remove("hidden");

    // position initiale du bouton oui
    const rect = yesBtn.getBoundingClientRect();
    yesBtn.style.position = "absolute";
    yesBtn.style.left = `${rect.left}px`;
    yesBtn.style.top = `${rect.top}px`;
  }
});

yesBtn.addEventListener("mouseenter", () => {
  const btnRect = yesBtn.getBoundingClientRect();

  const maxX = window.innerWidth - btnRect.width;
  const maxY = window.innerHeight - btnRect.height;

  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  yesBtn.style.left = `${newX}px`;
  yesBtn.style.top = `${newY}px`;
});

noBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
});
