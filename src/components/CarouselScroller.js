export default class CarouselScroller {
  #container
  #items
  #activeItemClass
  #textItemsSelectors
  #nextScroller
  #prevScroller
  #currentIdx
  #length
  #textElements

  constructor({
    containerSelector,
    itemsSelector,
    nextScrollerSelector,
    prevScrollerSelector,
    activeItemClass,
    textItemsSelectors
  }) {
    this.#container = document.querySelector(containerSelector);
    this.#items = Array.from(document.querySelectorAll(itemsSelector));
    this.#activeItemClass = activeItemClass;
    this.#textItemsSelectors = textItemsSelectors;
    this.#nextScroller = document.querySelector(nextScrollerSelector);
    this.#prevScroller = document.querySelector(prevScrollerSelector);
  }

  #setTextElements() {
    this.#textElements = this.#textItemsSelectors.map(item => {
      return {
        element: document.querySelector(item.selector),
        source: item.attributeName
      }
    });
  }

  #addScrollPlaceholders() {
    const endElement = this.#items[this.#length - 1].cloneNode(true);
    const startElement = this.#items[0].cloneNode(true);

    this.#container.append(startElement);
    this.#container.prepend(endElement);
    this.#items = [endElement, ...this.#items, startElement];
  }

  #checkScrollBorder = (dir) => {
    const border = dir === 'next' ? this.#length : 0;
    const placeholder = dir === 'next' ? 0 : this.#length;
    this.#items[this.#currentIdx].classList.remove(this.#activeItemClass);
    if (this.#currentIdx === border) {
      this.#items[placeholder].scrollIntoView({
        inline: 'start',
        block: 'nearest',
        behavior: 'auto'
      });
      this.#currentIdx = placeholder;
    }
    this.#currentIdx = dir === 'next'
      ? this.#currentIdx + 1
      : this.#currentIdx - 1;
  }

  #scrollToCurrentItem = (behavior = 'smooth') => {
    this.#items[this.#currentIdx].classList.add(this.#activeItemClass);
    this.#items[this.#currentIdx].scrollIntoView({
      inline: 'start',
      block: 'nearest',
      behavior
    });
    this.#textElements.forEach(({ element, source }) => {
      element.textContent = this.#items[this.#currentIdx].dataset[source];
    });
  }

  #setEventListeners() {
    this.#nextScroller.addEventListener('click', () => {
      this.#checkScrollBorder('next');
      this.#scrollToCurrentItem();
    });
    this.#prevScroller.addEventListener('click', () => {
      this.#checkScrollBorder('prev');
      this.#scrollToCurrentItem();
    });
  }

  init() {
    this.#currentIdx = 1;
    this.#length = this.#items.length;
    this.#setTextElements()
    this.#addScrollPlaceholders();
    this.#setEventListeners();
    this.#scrollToCurrentItem('auto');
  }
}
