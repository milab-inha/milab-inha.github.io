const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menu && nav) {
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    menu.textContent = open ? 'Close' : 'Menu';
    nav.classList.toggle('open', open);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
      menu.setAttribute('aria-expanded', 'false');
      menu.textContent = 'Menu';
      nav.classList.remove('open');
      menu.focus();
    }
  });
}
const newsArchive = document.querySelector('#news-archive');
const newsCollapse = newsArchive?.querySelector('.news-collapse');
if (newsCollapse) {
  newsCollapse.hidden = false;
  newsCollapse.addEventListener('click', () => {
    newsArchive.open = false;
    newsArchive.querySelector('summary').focus({ preventScroll: true });
    document.querySelector('#news').scrollIntoView({ block: 'start', behavior: 'instant' });
  });
}

const search = document.querySelector('#pub-search');
if (search) {
  const year = document.querySelector('#pub-year');
  const type = document.querySelector('#pub-type');
  const pubs = Array.from(document.querySelectorAll('.pub'));
  const update = () => {
    const query = search.value.trim().toLowerCase();
    let visible = 0;
    for (const pub of pubs) {
      const match = pub.dataset.search.includes(query) && (!year.value || pub.dataset.year === year.value) && (!type.value || pub.dataset.type === type.value);
      pub.hidden = !match;
      if (match) visible++;
    }
    for (const section of document.querySelectorAll('.pub-year, .pub-group')) {
      section.hidden = !Array.from(section.querySelectorAll('.pub')).some(p => !p.hidden);
    }
    document.querySelector('#no-results').hidden = visible !== 0;
  };
  search.addEventListener('input', update);
  year.addEventListener('change', update);
  type.addEventListener('change', update);
  document.querySelector('#clear-filters').addEventListener('click', () => {
    search.value = ''; year.value = ''; type.value = ''; update(); search.focus();
  });
  update();
}
