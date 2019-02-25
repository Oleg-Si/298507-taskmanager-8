import makeFilter from '../src/make-filter.js';
import getRandomInt from '../src/get-random-integer.js';
import makeTask from '../src/make-task.js';

const mainFilter = document.querySelector(`.main__filter`);

mainFilter.appendChild(makeFilter(`filter__all`, `ALL`, `15`, true));
mainFilter.appendChild(makeFilter(`filter__overdue`, `OVERDUE`, `0`));
mainFilter.appendChild(makeFilter(`filter__today`, `TODAY`, `0`));
mainFilter.appendChild(makeFilter(`filter__favorites`, `FAVORITES`, `7`));
mainFilter.appendChild(makeFilter(`filter__repeating`, `Repeating`, `2`));
mainFilter.appendChild(makeFilter(`filter__tags`, `Tags`, `6`));
mainFilter.appendChild(makeFilter(`filter__archive`, `ARCHIVE`, `115`));

const board = document.querySelector(`.board__tasks`);

board.appendChild(makeTask(7));

const filterItems = document.querySelectorAll(`.filter__label`);
filterItems.forEach((el) => {
  el.addEventListener(`click`, function () {
    board.innerHTML = ``;
    board.appendChild(makeTask(getRandomInt(3, 10)));
  });
});
