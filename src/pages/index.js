import { anchorLinks, page, toggleButton } from '@/utils/constants.js';

console.log(anchorLinks);

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

toggleButton.addEventListener('click', () => {
  page.classList.toggle('page_dark');
  toggleButton
    .querySelector('.footer__switch-toggle')
    .classList
    .toggle('footer__switch-toggle_dark');
});
