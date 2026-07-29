const answers = document.querySelectorAll('.answer-toggle');
answers.forEach((button) => {
  button.addEventListener('click', () => {
    const target = document.getElementById(button.getAttribute('aria-controls'));
    const open = target.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
    button.textContent = open ? 'Ocultar resolução' : 'Ver resolução';
  });
});

document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

const menu = document.querySelector('[data-menu]');
if (menu) {
  menu.addEventListener('click', () => document.body.classList.toggle('menu-open'));
}
