// scripts.js — theme toggle (persistent)
(function(){
  const THEME_KEY = 'jp_theme';
  const btn = document.getElementById('theme-toggle');

  function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme === 'light' ? 'light' : 'dark');
    if (btn) btn.textContent = theme === 'light' ? '🌙' : '☀️';
    localStorage.setItem(THEME_KEY, theme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || getPreferredTheme();
    applyTheme(current === 'light' ? 'dark' : 'light');
  }

  document.addEventListener('DOMContentLoaded', function(){
    applyTheme(getPreferredTheme());
    if (btn) btn.addEventListener('click', toggleTheme);
    document.addEventListener('keydown', (e) => {
      if (e.key === 't' || e.key === 'T') toggleTheme();
    });
  });
})();
