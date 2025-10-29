const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

body.classList.add('dark');
toggleBtn.textContent = '☀️';

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  toggleBtn.textContent = isDark ? '☀️' : '🌙';
});
