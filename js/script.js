(() => {
  'use strict';


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
})();

let botonAnteriorModal = null;

function abrirModalReserva() {
  console.log("hola");
  const modal = document.querySelector('[data-modal-backdrop]');
  if (!modal) return;

  botonAnteriorModal = document.activeElement;

  modal.hidden = false;
  modal.classList.add('is-open');
  document.body.classList.add('modal-is-open');

  modal.querySelector('button')?.focus();
}

function cerrarModalReserva() {
  const modal = document.querySelector('[data-modal-backdrop]');
  if (!modal) return;

  modal.classList.remove('is-open');
  modal.hidden = true;
  document.body.classList.remove('modal-is-open');

  botonAnteriorModal?.focus();
}

function searchAvailibity(){
   window.location.href = 'booking-availability.html';
}

function search(){
   window.location.href = 'booking-search.html';
}