export default class CarouselScroller {
  constructor({
    containerSelector,
    itemsSelector,
    nextScroller,
    prevScroller,
    activeItemClass = null,
    textItemsSelectors = []
  }) {
    this._containerSelector = containerSelector;
    this._itemsSelector = itemsSelector;
    this._activeItemClass = activeItemClass;
    this._textItemsSelectors = textItemsSelectors;
    this._nextScrollerSelector = nextScroller;
    this._prevScrollerSelector = prevScroller;
    this._nextScroller = document.querySelector(this._nextScrollerSelector);
    this._prevScroller = document.querySelector(this._prevScrollerSelector);
  }

  _resetPage() {
    window.scrollTo(0, 0);
  }

  _getTextElements() {
    this._textElements = this._textItemsSelectors.map(item => {
      return {
        element: document.querySelector(item.selector),
        source: item.attributeName
      }
    });
  }

  _addScrollPlaceholders() {
    const endElement = this._items[this._length - 1].cloneNode(true);
    const startElement = this._items[0].cloneNode(true);

    this._container.append(startElement);
    this._container.prepend(endElement);
    this._items = [endElement, ...this._items, startElement];
  }

  _removeScrollPlaceholders() {
    this._items[0].remove();
    this._items[this._length + 1].remove();
  }

  _checkScrollBorder = (dir) => {
    const border = dir === 'next' ? this._length : 1;
    const placeholder = dir === 'next' ? 0 : this._length + 1;
    if (this._activeItemClass) {
      this._items[this._currentIdx].classList.remove(this._activeItemClass);
    }
    if (this._currentIdx === border) {
      this._items[placeholder].scrollIntoView({
        inline: 'start',
        block: 'nearest',
        behavior: 'auto'
      });
      this._currentIdx = placeholder;
    }
    this._currentIdx = dir === 'next'
      ? this._currentIdx + 1
      : this._currentIdx - 1;
  }

  _scrollToCurrentItem = (behavior = 'smooth') => {
    if (this._activeItemClass) {
      this._items[this._currentIdx].classList.add(this._activeItemClass);
    }
    this._items[this._currentIdx].scrollIntoView({
      inline: 'start',
      block: 'nearest',
      behavior
    });
    this._textElements.forEach(({ element, source }) => {
      element.textContent = this._items[this._currentIdx].dataset[source];
    });
  }

  _nextEventHandler = () => {
    this._checkScrollBorder('next');
    this._scrollToCurrentItem();
  }

  _prevEventHandler = () => {
    this._checkScrollBorder('prev');
    this._scrollToCurrentItem();
  }

  _setEventListeners() {
    this._nextScroller.addEventListener('click', this._nextEventHandler);
    this._prevScroller.addEventListener('click', this._prevEventHandler);
  }

  _removeEventListeners() {
    this._nextScroller.removeEventListener('click', this._nextEventHandler);
    this._prevScroller.removeEventListener('click', this._prevEventHandler);
  }

  _getElements() {
    this._container = document.querySelector(this._containerSelector);
    this._items = Array.from(this._container.querySelectorAll(this._itemsSelector));
    this._currentIdx = 1;
    this._length = this._items.length;
  }

  resetItems() {
    this._removeEventListeners();
    this._removeScrollPlaceholders();
    this._getElements();
    this._getTextElements();
    this._addScrollPlaceholders();
    this._setEventListeners();
    this._scrollToCurrentItem('auto');
  }

  init() {
    this._getElements();
    this._getTextElements();
    this._addScrollPlaceholders();
    this._setEventListeners();
    this._scrollToCurrentItem('auto');
    this._resetPage()
  }
}
