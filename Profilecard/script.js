document.addEventListener('DOMContentLoaded', function () {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  const toggleBtn = document.getElementById('theme-toggle');

  // Live time update
  function updateTime() {
    timeElement.textContent = `Current time: ${Date.now()} ms`;
  }
  updateTime();
  setInterval(updateTime, 1000);

  // Theme toggle
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleBtn.textContent = '🌙';
  }

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    toggleBtn.textContent = isDark ? '🌙' : '🌞';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Accessibility: keyboard activate social links
  document.querySelectorAll('.social-link').forEach((link) => {
    link.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        link.click();
      }
    });
  });

  console.log('Profile Card by Blessing loaded at:', Date.now());
});