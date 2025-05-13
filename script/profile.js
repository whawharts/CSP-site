
  const toggleBtn = document.getElementById('menuToggle');
  const navbar = document.getElementById('floatingNavbar');

  toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('hidden');
  });

  // Optional: Hide menu on outside click
  document.addEventListener('click', (e) => {
    if (!toggleBtn.contains(e.target) && !navbar.contains(e.target)) {
      navbar.classList.add('hidden');
    }
  });

