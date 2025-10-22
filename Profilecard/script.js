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
// CONTACT FORM VALIDATION
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    const successMsg = document.getElementById('success');

    let valid = true;

    // reset previous messages
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    if (!name.value.trim()) {
      document.getElementById('error-name').textContent = 'Full name is required.';
      valid = false;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email.value)) {
      document.getElementById('error-email').textContent = 'Enter a valid email address.';
      valid = false;
    }

    if (message.value.trim().length < 10) {
      document.getElementById('error-message').textContent = 'Message must be at least 10 characters.';
      valid = false;
    }

    if (valid) {
      successMsg.textContent = '✅ Message sent successfully!';
      contactForm.reset();
    }
  });
}
