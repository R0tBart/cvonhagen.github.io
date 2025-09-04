// Erweiterte Tech Icon Mapping
function getTechIcon(tech) {
  const icons = {
    html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    javascript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    react:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    python:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    docker:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    azure:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    aws: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    terraform:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
    kubernetes:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    linux:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    powershell:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg",
    bash: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    nginx:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
    apache:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
    mysql:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    postgresql:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    mongodb:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    redis:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    grafana:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
    prometheus:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
    jenkins:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    ansible:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
    vim: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
    vscode:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    go: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    vite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
    nodejs:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  };
  return (
    icons[tech.toLowerCase()] ||
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg"
  );
}

// Fallende Tech-Logos Animation
function createFallingTechLogos() {
  const techStack = [
    "docker",
    "kubernetes",
    "azure",
    "aws",
    "terraform",
    "linux",
    "python",
    "javascript",
    "git",
    "nginx",
    "mysql",
    "redis",
    "grafana",
    "prometheus",
    "jenkins",
    "ansible",
    "powershell",
    "bash",
    "html",
    "css",
    "go",
    "vite",
    "nodejs",
  ];

  function createFallingLogo() {
    const logo = document.createElement("div");
    logo.className = "falling-tech-logo";

    const img = document.createElement("img");
    const randomTech = techStack[Math.floor(Math.random() * techStack.length)];
    img.src = getTechIcon(randomTech);
    img.alt = randomTech;

    logo.appendChild(img);

    // Random Position und Eigenschaften
    const startX = Math.random() * window.innerWidth;
    const size = Math.random() * 30 + 20; // 20-50px
    const duration = Math.random() * 10 + 8; // 8-18s
    const rotation = Math.random() * 360;
    const opacity = Math.random() * 0.3 + 0.1; // 0.1-0.4

    logo.style.cssText = `
      position: fixed;
      left: ${startX}px;
      top: -60px;
      width: ${size}px;
      height: ${size}px;
      opacity: ${opacity};
      z-index: -1;
      pointer-events: none;
      transform: rotate(${rotation}deg);
      animation: fallDown ${duration}s linear forwards;
    `;

    document.body.appendChild(logo);

    // Logo nach Animation entfernen
    setTimeout(() => {
      if (logo.parentNode) {
        logo.parentNode.removeChild(logo);
      }
    }, duration * 1000);
  }

  // Regelmäßig neue Logos erstellen
  setInterval(createFallingLogo, 2000); // Alle 2 Sekunden

  // Initial ein paar Logos erstellen
  for (let i = 0; i < 3; i++) {
    setTimeout(createFallingLogo, i * 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Projects laden
  fetch("projects.json")
    .then((res) => res.json())
    .then((data) => {
      const container = document.getElementById("projects-container");
      data.forEach((proj, index) => {
        const card = document.createElement("div");
        card.className = "project-card";
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
          <div class="project-header">
            <h3>${proj.title}</h3>
            <div class="project-tech-logos">
              ${
                proj.technologies
                  ? proj.technologies
                      .map(
                        (tech) => `
                <div class="project-tech-logo">
                  <img src="${getTechIcon(
                    tech
                  )}" alt="${tech}" title="${tech}" />
                </div>
              `
                      )
                      .join("")
                  : ""
              }
            </div>
          </div>
          <p>${proj.description}</p>
          <a href="${proj.link}" target="_blank">Projekt ansehen →</a>
        `;
        container.appendChild(card);
      });
    })
    .catch((err) => console.error("Fehler beim Laden:", err));

  // Smooth Scrolling für Navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Parallax Effekt für Hero Section
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector(".hero");
    const heroContent = document.querySelector(".hero-content");

    // Parallax für Hero Background (verbessert)
    if (hero) {
      const parallaxSpeed = Math.min(scrolled * 0.4, window.innerHeight * 0.8);
      hero.style.transform = `translateY(${parallaxSpeed}px)`;

      // Zusätzlicher Overlay-Effekt beim Scrollen
      const overlay = hero.querySelector(".hero-overlay");
      if (overlay) {
        const overlayOpacity = Math.min(0.7, scrolled / 400);
        overlay.style.opacity = overlayOpacity;
      }
    }

    // Hero Content nach hinten verschwinden lassen (optimiert)
    if (heroContent) {
      const opacity = Math.max(0, 1 - scrolled / 600);
      const scale = Math.max(0.85, 1 - scrolled / 2000);
      const translateY = scrolled * 0.15;
      // Blur-Effekt: Math.min(MAX_BLUR, scrolled / SCROLL_DISTANCE)
      const blur = Math.min(5, scrolled / 5);

      heroContent.style.opacity = opacity;
      heroContent.style.transform = `translateY(${translateY}px) scale(${scale})`;
      heroContent.style.filter = `blur(${blur}px)`;
      heroContent.style.transition = "filter 0.1s ease-out";
    }
  });

  // Scroll-basierte Animationen für About Section
  const aboutSection = document.querySelector("#about");
  if (aboutSection) {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset;
      const aboutTop = aboutSection.offsetTop;
      const windowHeight = window.innerHeight;

      // About Section fade-in beim Scrollen
      if (scrolled + windowHeight > aboutTop + 100) {
        const progress = Math.min(
          1,
          (scrolled + windowHeight - aboutTop) / 300
        );
        aboutSection.style.opacity = progress;
        aboutSection.style.transform = `translateY(${(1 - progress) * 30}px)`;
      }
    });
  }

  // Intersection Observer für andere Animationen
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  // Alle Sections beobachten
  document.querySelectorAll(".section").forEach((section) => {
    observer.observe(section);
  });

  // Typing Effekt für den Namen
  const nameSpan = document.querySelector(".hero-content span");
  if (nameSpan) {
    const originalText = nameSpan.textContent;
    nameSpan.textContent = "";

    let i = 0;
    const typeWriter = () => {
      if (i < originalText.length) {
        nameSpan.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };

    setTimeout(typeWriter, 1000);
  }

  // Fallende Tech-Logos starten
  createFallingTechLogos();
});
