import CarouselScroller from '@/components/CarouselScroller';

import { anchorLinks, page, toggleThemeButton } from '@/utils/constants.js';


const bikesCarousel = new CarouselScroller({
  containerSelector: '.roads__pics-list',
  itemsSelector: '.roads__pics-item',
  activeItemClass: 'roads__pics-item_active',
  nextScrollerSelector: '.roads__button_dir_right',
  prevScrollerSelector: '.roads__button_dir_left',
  textItemsSelectors: [
    { selector: '.roads__title', attributeName: 'title' },
    { selector: '.roads__text', attributeName: 'text' },
  ]
});
bikesCarousel.init();

anchorLinks.forEach(link => {
  link.addEventListener('click', () => {
    const sectionId = link.dataset.href;
    document
      .querySelector(sectionId)
      .scrollIntoView({
        behavior: 'smooth'
      });
  });
});

toggleThemeButton.addEventListener('click', () => {
  page.classList.toggle('page_dark');
  toggleThemeButton
    .querySelector('.footer__switch-toggle')
    .classList
    .toggle('footer__switch-toggle_dark');
});

document.querySelectorAll('.bikes__button').forEach(button => {
  button.addEventListener('click', () => {
    document
      .querySelector('.bikes__type_active')
      .classList
      .remove('bikes__type_active');
    document
      .querySelector('.bikes__button_active')
      .classList
      .remove('bikes__button_active');
    document
      .querySelector(`#bikes-type-${button.dataset.type}`)
      .classList
      .add('bikes__type_active');
    button
      .classList
      .add('bikes__button_active');
  });
});

document.querySelector('.header__burger').addEventListener('click', () => {
  document.querySelector('.header__links').classList.toggle('header__links_opened')
  document.querySelector('.header__burger').classList.toggle('hamburger_active')
})
