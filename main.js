document.addEventListener('DOMContentLoaded', () => {
  // Navigation Menu Selectors
  const menuToggle = document.getElementById('menuToggle');
  const closeMenu = document.getElementById('closeMenu');
  const sideNav = document.getElementById('sideNav');
  const navOverlay = document.getElementById('navOverlay');
  const navLinks = document.querySelectorAll('.nav-link-item');

  // Open Side Nav
  const openNavigation = () => {
    sideNav.classList.add('active');
    navOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  // Close Side Nav
  const closeNavigation = () => {
    sideNav.classList.remove('active');
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  menuToggle.addEventListener('click', openNavigation);
  closeMenu.addEventListener('click', closeNavigation);
  navOverlay.addEventListener('click', closeNavigation);
  navLinks.forEach(link => link.addEventListener('click', closeNavigation));

  // Login Modal Selectors
  const loginBtn = document.getElementById('loginBtn');
  const loginModal = document.getElementById('loginModal');
  const modalClose = document.getElementById('modalClose');

  const openModal = () => {
    loginModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    loginModal.classList.remove('active');
    if (!sideNav.classList.contains('active')) {
      document.body.style.overflow = '';
    }
  };

  loginBtn.addEventListener('click', openModal);
  modalClose.addEventListener('click', closeModal);
  loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) {
      closeModal();
    }
  });

  // Esc key closure for modal & menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeNavigation();
      closeModal();
    }
  });

  // Premium mouse shine effect on cards
  const cards = document.querySelectorAll('.vehicle-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    });
  });
});
