document.addEventListener("DOMContentLoaded", () => {
  fetch("projects.json")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("projects-container");
      data.forEach(proj => {
        const card = document.createElement("div");
        card.className = "project-card";
        card.innerHTML = `
          <h3>${proj.title}</h3>
          <p>${proj.description}</p>
          <a href="${proj.link}" target="_blank">Projekt ansehen →</a>
        `;
        container.appendChild(card);
      });
    })
    .catch(err => console.error("Fehler beim Laden:", err));
});
