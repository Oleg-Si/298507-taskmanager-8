import makeFilter from '../src/make-filter.js';
import getRandomInt from '../src/get-random-integer.js';
import getTaskData from '../src/get-task-data.js';
import getTask from '../src/get-task.js';

const mainFilter = document.querySelector(`.main__filter`);

mainFilter.appendChild(makeFilter(`filter__all`, `ALL`, `15`, true));
mainFilter.appendChild(makeFilter(`filter__overdue`, `OVERDUE`, `0`));
mainFilter.appendChild(makeFilter(`filter__today`, `TODAY`, `0`));
mainFilter.appendChild(makeFilter(`filter__favorites`, `FAVORITES`, `7`));
mainFilter.appendChild(makeFilter(`filter__repeating`, `Repeating`, `2`));
mainFilter.appendChild(makeFilter(`filter__tags`, `Tags`, `6`));
mainFilter.appendChild(makeFilter(`filter__archive`, `ARCHIVE`, `115`));

const board = document.querySelector(`.board__tasks`);

const createTask = (count) => {
  const allTask = [];
  for (let i = 0; i < count; i++) {
    allTask.push(getTask(getTaskData()));
  }

  return allTask;
};

const renderCards = (taskArr) => {
  const fragment = document.createDocumentFragment();
  taskArr.forEach((el) => {
    const element = document.createElement(`template`);
    element.innerHTML = el;
    fragment.appendChild(element.content);
  });

  return fragment;
};


board.appendChild(renderCards(createTask(7)));

const filterItems = document.querySelectorAll(`.filter__label`);
filterItems.forEach((el) => {
  el.addEventListener(`click`, function () {
    board.innerHTML = ``;
    board.appendChild(renderCards(createTask(getRandomInt(3, 10))));
  });
});
