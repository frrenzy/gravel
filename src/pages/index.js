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

Array.from(anchorLinks).forEach(link => {
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
