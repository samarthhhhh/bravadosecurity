const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');
if (toggle && navigation) {
  document.documentElement.classList.add('js');
  toggle.hidden = false;
  const closeMenu = () => { toggle.setAttribute('aria-expanded', 'false'); navigation.classList.remove('is-open'); };
  toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('is-open', open); });
  navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); } });
  document.addEventListener('click', event => { if (!event.target.closest('.nav')) closeMenu(); });
  window.matchMedia('(min-width: 901px)').addEventListener('change', closeMenu);
}
document.querySelectorAll('[data-year]').forEach(element => { element.textContent = new Date().getFullYear(); });
