// Theme toggle with localStorage
document.getElementById('theme-toggle')?.addEventListener('click', () => {
  document.documentElement.classList.toggle('light');
  localStorage.setItem('theme', document.documentElement.classList.contains('light') ? 'light' : 'dark');
});
if (localStorage.getItem('theme') === 'light') {
  document.documentElement.classList.add('light');
}
// Parallax
const parallax = document.querySelector('.hero-parallax');
if (parallax) {
  window.addEventListener('scroll', () => {
    parallax.style.transform = `translateY(${window.scrollY * 0.15}px)`;
  });
}
// Animate skill bars on view
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.bar > span').forEach(el => {
        const w = el.style.getPropertyValue('--w') || '0%';
        el.style.width = w;
      });
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.skills').forEach(el => io.observe(el));
// Count-up stats
const statObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = parseInt(el.dataset.count || '0', 10);
    let c = 0;
    const step = Math.max(1, Math.floor(target / 60));
    const tick = () => {
      c = Math.min(target, c + step);
      el.textContent = c.toString();
      if (c < target) requestAnimationFrame(tick);
    };
    tick();
    statObserver.unobserve(el);
  });
}, { threshold: 0.6 });
document.querySelectorAll('.stat-num').forEach(el => statObserver.observe(el));
// Load projects + filters
const grid = document.getElementById('projects-grid');
let allProjects = [];
function render(filter = 'all') {
  grid.innerHTML = '';
  const data = allProjects.filter(p => filter === 'all' ? true : p.tags?.includes(filter));
  data.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <a href="${p.link}" target="_blank" rel="noopener">Repository →</a>
    `;
    grid.appendChild(card);
  });
  const toggle = document.getElementById("themeToggle");
    toggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    toggle.textContent = document.documentElement.classList.contains("dark") ? "☀️" : "🌙";
});
}
fetch('projects.json')
  .then(r => r.json())
  .then(list => { allProjects = list; render('all'); })
  .catch(() => { grid.innerHTML = '<p>Projekte konnten nicht geladen werden.</p>'; });
document.querySelectorAll('.chip').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    render(btn.dataset.filter);
  });
});
