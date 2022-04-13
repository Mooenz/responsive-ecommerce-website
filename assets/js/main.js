/*===== MENU SHOW =====*/
const toggle = document.getElementById('nav-toggle'),
  nav = document.getElementById('nav-menu');

const showMenu = () => {
  nav.classList.toggle('show');
};

toggle.addEventListener('click', showMenu, false);

/*===== REMOVE MENU MOBILE =====*/
const navLinkNode = document.querySelectorAll('.nav__link');
const navLink = [...navLinkNode];

navLink.map((item) => {
  const linkAction = () => {
    navLink.map((item2) => {
      item2.classList.remove('active');
    });

    // Add avtice
    item.classList.add('active');

    // Remove menu mobile
    nav.classList.remove("show")
  };

  item.addEventListener('click', linkAction, false);
});
