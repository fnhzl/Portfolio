function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Select the toggle button
const themeToggle = document.getElementById('theme-toggle');

// Check for saved theme in localStorage
const currentTheme = localStorage.getItem('theme');

// Apply the saved theme
if (currentTheme) {
  document.body.classList.add(currentTheme);
  updateToggleText(currentTheme);
} else {
  // Default to light mode
  document.body.classList.add('light-mode');
}

// Listen for toggle button clicks
themeToggle.addEventListener('click', () => {
  const isDarkMode = document.body.classList.contains('dark-mode');

  // Toggle between light and dark modes
  if (isDarkMode) {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    localStorage.setItem('theme', 'light-mode');
    updateToggleText('light-mode');
  } else {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark-mode');
    updateToggleText('dark-mode');
  }
});

// Update button text/icon based on the theme
function updateToggleText(theme) {
  themeToggle.textContent = theme === 'dark-mode' ? '☀️' : '🌙';
}