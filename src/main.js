'use strict';

const renderFilterItem = function (id, name, count = 0, isChecked = false) {
  const element = document.createElement(`template`);

  let isDisabled = ``;
  if (count === `0`) {
    isDisabled = `disabled`;
  }

  const template = `<input
    type="radio"
    id="${id}"
    class="filter__input visually-hidden"
    name="filter"
    ${isChecked ? `checked` : ``} ${isDisabled}
  >
  <label for="${id}" class="filter__label">
    ${name} <span class="filter__overdue-count">${count}</span>
  </label>`;

  const mainFilter = document.querySelector(`.main__filter`);

  element.innerHTML = template;
  mainFilter.appendChild(element.content);
};

renderFilterItem(`filter__all`, `ALL`, `15`, true);
renderFilterItem(`filter__overdue`, `OVERDUE`, `0`);
renderFilterItem(`filter__today`, `TODAY`, `0`);
renderFilterItem(`filter__favorites`, `FAVORITES`, `7`);
renderFilterItem(`filter__repeating`, `Repeating`, `2`);
renderFilterItem(`filter__tags`, `Tags`, `6`);
renderFilterItem(`filter__archive`, `ARCHIVE`, `115`);

const cardTemplate = `<form class="card__form" method="get">
  <div class="card__inner">
    <div class="card__control">
      <button type="button" class="card__btn card__btn--edit">
      edit
      </button>
      <button type="button" class="card__btn card__btn--archive">
      archive
      </button>
      <button
      type="button"
      class="card__btn card__btn--favorites card__btn--disabled"
      >
      favorites
      </button>
    </div>

    <div class="card__color-bar">
      <svg width="100%" height="10">
        <use xlink:href="#wave"></use>
      </svg>
    </div>

    <div class="card__textarea-wrap">
      <label>
        <textarea class="card__text" placeholder="Start typing your text here..."
        name="text">
        This is example of new task, you can add picture, set date and time, add tags.</textarea>
      </label>
    </div>

  <div class="card__settings">
    <div class="card__details">
      <div class="card__dates">
        <button class="card__date-deadline-toggle" type="button">
        date: <span class="card__date-status">no</span>
        </button>

        <fieldset class="card__date-deadline" disabled>
          <label class="card__input-deadline-wrap">
            <input
            class="card__date"
            type="text"
            placeholder="23 September"
            name="date"
            />
          </label>
          <label class="card__input-deadline-wrap">
            <input
            class="card__time"
            type="text"
            placeholder="11:15 PM"
            name="time"
            />
          </label>
        </fieldset>

        <button class="card__repeat-toggle" type="button">
        repeat:<span class="card__repeat-status">no</span>
        </button>

        <fieldset class="card__repeat-days" disabled>
          <div class="card__repeat-days-inner">
            <input
            class="visually-hidden card__repeat-day-input"
            type="checkbox"
            id="repeat-mo-1"
            name="repeat"
            value="mo"
            />
            <label class="card__repeat-day" for="repeat-mo-1"
            >mo</label>
            <input
            class="visually-hidden card__repeat-day-input"
            type="checkbox"
            id="repeat-tu-1"
            name="repeat"
            value="tu"
            checked
            />
            <label class="card__repeat-day" for="repeat-tu-1"
            >tu</label>
            <input
            class="visually-hidden card__repeat-day-input"
            type="checkbox"
            id="repeat-we-1"
            name="repeat"
            value="we"
            />
            <label class="card__repeat-day" for="repeat-we-1"
            >we</label>
            <input
            class="visually-hidden card__repeat-day-input"
            type="checkbox"
            id="repeat-th-1"
            name="repeat"
            value="th"
            />
            <label class="card__repeat-day" for="repeat-th-1"
            >th</label>
            <input
            class="visually-hidden card__repeat-day-input"
            type="checkbox"
            id="repeat-fr-1"
            name="repeat"
            value="fr"
            checked
            />
            <label class="card__repeat-day" for="repeat-fr-1"
            >fr</label>
            <input
            class="visually-hidden card__repeat-day-input"
            type="checkbox"
            name="repeat"
            value="sa"
            id="repeat-sa-1"
            />
            <label class="card__repeat-day" for="repeat-sa-1"
            >sa</label>
            <input
            class="visually-hidden card__repeat-day-input"
            type="checkbox"
            id="repeat-su-1"
            name="repeat"
            value="su"
            checked
            />
            <label class="card__repeat-day" for="repeat-su-1"
            >su</label>
          </div>
        </fieldset>
      </div>

      <div class="card__hashtag">
        <div class="card__hashtag-list"></div>
          <label>
            <input
            type="text"
            class="card__hashtag-input"
            name="hashtag-input"
            placeholder="Type new hashtag here"
            />
          </label>
        </div>
      </div>

      <label class="card__img-wrap card__img-wrap--empty">
        <input
        type="file"
        class="card__img-input visually-hidden"
        name="img"
        />
        <img
        src="img/add-photo.svg"
        alt="task picture"
        class="card__img"
        />
      </label>

      <div class="card__colors-inner">
        <h3 class="card__colors-title">Color</h3>
        <div class="card__colors-wrap">
          <input
          type="radio"
          id="color-black-1"
          class="card__color-input card__color-input--black visually-hidden"
          name="color"
          value="black"
          checked
          />
          <label
          for="color-black-1"
          class="card__color card__color--black"
          >black</label>
          <input
          type="radio"
          id="color-yellow-1"
          class="card__color-input card__color-input--yellow visually-hidden"
          name="color"
          value="yellow"
          />
          <label
          for="color-yellow-1"
          class="card__color card__color--yellow"
          >yellow</label>
          <input
          type="radio"
          id="color-blue-1"
          class="card__color-input card__color-input--blue visually-hidden"
          name="color"
          value="blue"
          />
          <label
          for="color-blue-1"
          class="card__color card__color--blue"
          >blue</label>
          <input
          type="radio"
          id="color-green-1"
          class="card__color-input card__color-input--green visually-hidden"
          name="color"
          value="green"
          />
          <label
          for="color-green-1"
          class="card__color card__color--green"
          >green</label>
          <input
          type="radio"
          id="color-pink-1"
          class="card__color-input card__color-input--pink visually-hidden"
          name="color"
          value="pink"
          />
          <label
          for="color-pink-1"
          class="card__color card__color--pink"
          >pink</label>
        </div>
      </div>
    </div>
    <div class="card__status-btns">
      <button class="card__save" type="submit">save</button>
      <button class="card__delete" type="button">delete</button>
    </div>
  </div>
</form>`;

const getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

const customClasses = [`card--edit`, `card--repeat`, `card--deadline`, `card--edit`];
const colors = [`black`, `pink`, `yellow`, `blue`];
const board = document.querySelector(`.board__tasks`);

const renderCard = function (count) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const element = document.createElement(`article`);
    element.classList.add(`card`);

    const customClass = customClasses[getRandomInt(0, customClasses.length)];
    const color = colors[getRandomInt(0, colors.length)];

    element.classList.add(`card--${color}`);
    element.classList.add(customClass);
    element.innerHTML = cardTemplate;

    fragment.appendChild(element);
  }

  board.appendChild(fragment);
};

renderCard(7);

const filterItems = document.querySelectorAll(`.filter__label`);
filterItems.forEach(function (el) {
  el.addEventListener(`click`, function () {
    board.innerHTML = ``;
    renderCard(getRandomInt(3, 10));
  });
});

