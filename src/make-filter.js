export default (id, name, count = 0, isChecked = false) => {
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

  element.innerHTML = template;

  return element.content;
};
