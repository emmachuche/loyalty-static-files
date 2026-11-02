(() => {
  'use strict';

  // Product routes are intentionally left for the developer to connect.
  document.querySelectorAll('[data-route]').forEach(link => {
    link.addEventListener('click', event => event.preventDefault());
  });

  const menuToggle = document.querySelector('[data-menu-toggle]');
  const nav = document.getElementById('portal-nav');
  function closeMenu() {
    nav?.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }
  menuToggle?.addEventListener('click', () => {
    const open = nav?.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(Boolean(open)));
  });

  const backdrop = document.querySelector('[data-modal-backdrop]');
  const closeModal = document.querySelector('[data-close-modal]');
  const main = document.querySelector('main');
  const header = document.querySelector('.portal-header');
  const footer = document.querySelector('.portal-footer');
  const background = [main, header, footer].filter(Boolean);
  const dialog = document.querySelector('[data-reservation-modal]');
  let previousFocus;

  function hideModal() {
    if (!backdrop) return;
    backdrop.hidden = true;
    background.forEach(element => { element.inert = false; });
    document.body.classList.remove('modal-is-open');
    previousFocus?.focus();
  }
  if (backdrop) {
    previousFocus = document.querySelector('[data-action="view-reservation"]');
    background.forEach(element => { element.inert = true; });
    document.body.classList.add('modal-is-open');
    closeModal?.focus({ preventScroll: true });
    closeModal?.addEventListener('click', hideModal);
    backdrop.addEventListener('click', event => {
      if (event.target === backdrop) hideModal();
    });
  }

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeMenu();
      hideModal();
    }
    if (event.key === 'Tab' && backdrop && !backdrop.hidden) {
      const controls = [...dialog.querySelectorAll('button, a[href], input, select, textarea, [tabindex="0"]')];
      if (controls.length) {
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }
  });
})();
