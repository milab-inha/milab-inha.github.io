const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
function closeMenu() {
  menu?.setAttribute('aria-expanded', 'false');
  if (menu) menu.textContent = 'Menu';
  nav?.classList.remove('open');
}
menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  menu.textContent = open ? 'Close' : 'Menu';
  nav.classList.toggle('open', open);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') {
    closeMenu(); menu.focus();
  }
});
matchMedia('(min-width: 821px)').addEventListener('change', closeMenu);
const archive = document.querySelector('#news-archive');
const collapse = archive?.querySelector('.news-collapse');
if (collapse) {
  collapse.hidden = false;
  collapse.addEventListener('click', () => {
    archive.open = false;
    archive.querySelector('summary').focus({preventScroll:true});
    document.querySelector('#news').scrollIntoView({block:'start',behavior:'instant'});
  });
}
const search = document.querySelector('#pub-search');
if (search) {
  const year = document.querySelector('#pub-year');
  const type = document.querySelector('#pub-type');
  const pubs = [...document.querySelectorAll('.pub')];
  const empty = document.querySelector('#no-results');
  empty.setAttribute('role', 'status');
  const update = () => {
    const query = search.value.trim().toLowerCase();
    for (const pub of pubs) {
      pub.hidden = !(pub.dataset.search.includes(query) && (!year.value || pub.dataset.year === year.value) && (!type.value || pub.dataset.type === type.value));
    }
    document.querySelectorAll('.pub-year, .pub-group').forEach(section => {
      section.hidden = ![...section.querySelectorAll('.pub')].some(p => !p.hidden);
    });
    empty.hidden = pubs.some(p => !p.hidden);
  };
  search.addEventListener('input', update);
  year.addEventListener('change', update);
  type.addEventListener('change', update);
  document.querySelector('#clear-filters').addEventListener('click', () => {
    search.value = ''; year.value = ''; type.value = ''; update(); search.focus();
  });
  update();
}
document.querySelectorAll('.status').forEach(status => {
  status.dataset.current = String(status.textContent.trim() === 'Current');
});
