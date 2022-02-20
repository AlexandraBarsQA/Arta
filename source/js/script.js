  var navMain = document.querySelector('.header-nav', '.header-nav--inner');
  var navToggle = document.querySelector('.header-nav__toggle', '.header-nav__toggle--inner');

  navMain.classList.remove('header-nav--no-js');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('header-nav--closed')) {
      navMain.classList.remove('header-nav--closed');
      navMain.classList.add('header-nav--opened');
    } else {
      navMain.classList.add('header-nav--closed');
      navMain.classList.remove('header-nav--opened');
    }
  });
