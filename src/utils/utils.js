import { burger, navbar } from '@/utils/constants';

export const toggleHeader = () => {
  navbar.classList.toggle('header__nav_opened');
  burger.classList.toggle('hamburger_active');
}
