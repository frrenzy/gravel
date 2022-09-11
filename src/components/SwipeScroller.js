export default class SwipeScroller {
  constructor({ containerSelector, itemsSelector }) {
    this._containerSelector = containerSelector;
    this._itemsSelector = itemsSelector;
  }

  _resetPage() {
    window.scrollTo(0, 0);
  }

  setElements() {
    this._container = document.querySelector(this._containerSelector);
    this._items = Array.from(this._container.querySelectorAll(this._itemsSelector));
    this._currentIdx = 1;
    this._length = this._items.length;
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
    this._items[this._currentIdx].scrollIntoView({
      inline: 'start',
      block: 'nearest',
      behavior
    });
    this._callback(this._currentIdx - 1);
  }

  _startTouch = evt => {
    this._initialX = evt.touches[0].clientX;
    this._initialY = evt.touches[0].clientY;
  }

  _moveTouch = evt => {
    if (this._initialX === null) {
      return;
    }

    if (this._initialY === null) {
      return;
    }

    const currentX = evt.changedTouches[0].clientX;
    const currentY = evt.changedTouches[0].clientY;

    const diffX = this._initialX - currentX;
    const diffY = this._initialY - currentY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      this._checkScrollBorder(diffX > 0 ? 'next' : 'prev');
      this._scrollToCurrentItem();
    }

    this._initialX = null;
    this._initialY = null;

    evt.preventDefault();
  }

  _setEventListeners = () => {
    this._initialX = null;
    this._initialY = null;

    this._container.addEventListener("touchstart", this._startTouch, false);
    this._container.addEventListener("touchmove", this._moveTouch, false);
  }

  _removeEventListeners() {
    this._container.removeEventListener("touchstart", this._startTouch, false);
    this._container.removeEventListener("touchmove", this._moveTouch, false);
  }

  resetItems() {
    this._currentIdx = 1;
    this._removeScrollPlaceholders();
    this._removeEventListeners();
    this.setElements();
    this._addScrollPlaceholders();
    this._setEventListeners();
    this._scrollToCurrentItem();
    this._callback(this._currentIdx - 1)
  }

  init(callback) {
    this._currentIdx = 1
    this._callback = callback;
    this.setElements();
    this._addScrollPlaceholders();
    this._setEventListeners();
    this._scrollToCurrentItem('auto');
    this._resetPage()
  }
}
