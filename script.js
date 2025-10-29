const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Immer Darkmode aktivieren beim Laden
body.classList.add('dark');
toggleBtn.textContent = '☀️';

// Optional: Umschalten erlauben
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  toggleBtn.textContent = isDark ? '☀️' : '🌙';
});
