// Dark mode toggle
(function() {
  const toggle = document.getElementById('theme-toggle');
  const sun = document.getElementById('icon-sun');
  const moon = document.getElementById('icon-moon');

  function setTheme(dark) {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    sun.style.display = dark ? 'block' : 'none';
    moon.style.display = dark ? 'none' : 'block';
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }

  // Load saved preference, fallback to system preference
  const saved = localStorage.getItem('theme');
  if (saved) {
    setTheme(saved === 'dark');
  } else {
    setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }

  toggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    setTheme(!isDark);
  });
})();

// Hamburger menu toggle
(function() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });
})();

function handleSubmit(e) {
  e.preventDefault();
  const status = document.getElementById('form-status');
  const form = e.target;

  // Replace this with your own form endpoint (Formspree, Netlify Forms, etc.)
  status.style.display = 'block';
  status.textContent = 'Thanks! Your message has been sent.';
  form.reset();

  setTimeout(() => { status.style.display = 'none'; }, 4000);
}
