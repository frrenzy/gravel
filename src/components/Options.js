export default class Options {
  constructor({
    baseSelector,
    selectSelector,
    buttonSelector,
    dotsSelector,
    selectCallback,
    activeButtonClass,
    activeDotClass,
    activeContentClass,
    buttonCallback = () => {}
  }) {
    this._base = document.querySelector(baseSelector);
    this._select = document.querySelector(selectSelector); // ))0)
    this._buttons = Array.from(document.querySelectorAll(buttonSelector))
    this._dots = Array.from(document.querySelectorAll(dotsSelector));
    this._selectCallback = selectCallback;
    this._buttonCallback = buttonCallback;
    this._activeButtonClass = activeButtonClass;
    this._activeDotClass = activeDotClass;
    this._activeContentClass = activeContentClass;
  }

  _setActiveBikes = type => {
    this._base
      .querySelector(`.${this._activeContentClass}`)
      .classList
      .remove(this._activeContentClass);
    this._base
      .querySelector(`#bikes-type-${type}`)
      .classList
      .add(this._activeContentClass);
  }

  _toggleActiveButton(button) {
    this._base
      .querySelector(`.${this._activeButtonClass}`)
      .classList
      .remove(this._activeButtonClass);
    button
      .classList
      .add(this._activeButtonClass);
  }

  setEventListeners() {
    this._select.addEventListener('change', () => {
      this._setActiveBikes(this._select.value);
      this._selectCallback();
      this._select.blur();
    });

    this._buttons.forEach(button => {
      button.addEventListener('click', () => {
        this._setActiveBikes(button.dataset.type);
        this._toggleActiveButton(button);
        this._buttonCallback();
      });
    });
  }

  setActiveDot = idx => {
    this._dots
      .find(dot => {
        return dot.classList.contains(this._activeDotClass)
      })
      .classList
      .remove(this._activeDotClass);

    this._dots[idx]
      .classList
      .add(this._activeDotClass);
  }
}
