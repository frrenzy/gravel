import { anchorLinks } from '@/utils/constants.js';

console.log(anchorLinks);

Array.from(anchorLinks).forEach(link => {
  link.addEventListener('click', evt => {
    const sectionId = link.dataset.href;
    document
      .querySelector(sectionId)
      .scrollIntoView({
        behavior: 'smooth'
      })
  });
});
