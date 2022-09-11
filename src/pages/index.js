import CarouselScroller from '@/components/CarouselScroller';
import Options from '@/components/Options';
import SwipeScroller from '@/components/SwipeScroller';

import {
  anchorLinks,
  burger,
  navbar,
  page,
  toggleThemeButtons,
  form,
  formInput
} from '@/utils/constants.js';
import { toggleHeader } from '@/utils/utils';


const roadsCarousel = new CarouselScroller({
  containerSelector: '.roads__pics-list',
  itemsSelector: '.roads__pics-item',
  activeItemClass: 'roads__pics-item_active',
  nextScroller: '.roads__button_dir_right',
  prevScroller: '.roads__button_dir_left',
  textItemsSelectors: [
    { selector: '.roads__title', attributeName: 'title' },
    { selector: '.roads__text', attributeName: 'text' },
  ]
});
roadsCarousel.init();

const bikesCarousel = new SwipeScroller({
  containerSelector: '.bikes__type_active > .bikes__bikes',
  itemsSelector: '.bikes__li'
});

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

toggleThemeButtons.forEach(button => {
  button.addEventListener('click', () => {
    page.classList.toggle('page_dark');
    button
      .querySelector('.theme-toggler__switch-toggle')
      .classList
      .toggle('theme-toggler__switch-toggle_dark');
  });
});

burger.addEventListener('click', toggleHeader);

navbar.addEventListener('click', evt => {
  if (evt.target.classList.contains('header__link')) {
    toggleHeader();
  }
})

const bikesOptions = new Options({
  baseSelector: '.bikes',
  selectSelector: '.bikes__select',
  buttonSelector: '.bikes__button',
  dotsSelector: '.bikes__current-option',
  selectCallback: () => bikesCarousel.resetItems(),
  activeButtonClass: 'bikes__button_active',
  activeContentClass: 'bikes__type_active',
  activeDotClass: 'bikes__current-option_active'
});
bikesOptions.setEventListeners();

bikesCarousel.init(bikesOptions.setActiveDot);

form.addEventListener('submit', evt => {
  evt.preventDefault();

  formInput.value = 'Круто!';
  formInput.blur();
  setTimeout(() => formInput.value = '', 1000)
});
