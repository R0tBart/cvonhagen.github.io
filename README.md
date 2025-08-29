# Christoph von Hagen – Profi-Portfolio

Moderne Portfolio-Seite mit Darkmode, Parallax, animierten Skills, Projektfiltern, Kontaktbereich und CI/CD für GitHub Pages.

## Features
- Responsives, schnelles Layout (HTML/CSS/JS, ohne Framework)
- Darkmode + Theme-Toggle
- Parallax-Header, Typing-Effekt
- Skills mit animierten Fortschrittsbalken
- Projekte aus `projects.json` geladen, mit Filtern (Azure/Web/Tooling)
- Kontaktformular via `mailto:` plus Social-Links
- Barrierearme Grundstruktur (Skip-Link, Labels, Kontraste)
- GitHub Pages Deployment via Actions

## Nutzung
1. Dateien in ein GitHub-Repo pushen.
2. In **Settings → Pages**: Source **GitHub Actions** wählen.
3. Workflow läuft automatisch bei Push auf `main`.

## Lokal testen
Öffne `index.html` im Browser oder nutze einen lokalen Server:
```bash
python3 -m http.server 8080
```

© 2025 Christoph von Hagen
