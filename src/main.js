import makeFilter from '../src/make-filter.js';
import getRandomInt from '../src/get-random-integer.js';
import getTaskData from '../src/get-task-data.js';
import GetTask from '../src/task.js';
import GetTaskEdit from '../src/task-edit.js';

const mainFilter = document.querySelector(`.main__filter`);

mainFilter.appendChild(makeFilter(`filter__all`, `ALL`, `15`, true));
mainFilter.appendChild(makeFilter(`filter__overdue`, `OVERDUE`, `0`));
mainFilter.appendChild(makeFilter(`filter__today`, `TODAY`, `0`));
mainFilter.appendChild(makeFilter(`filter__favorites`, `FAVORITES`, `7`));
mainFilter.appendChild(makeFilter(`filter__repeating`, `Repeating`, `2`));
mainFilter.appendChild(makeFilter(`filter__tags`, `Tags`, `6`));
mainFilter.appendChild(makeFilter(`filter__archive`, `ARCHIVE`, `115`));

const createTasks = (count) => {
  const allTask = [];
  for (let i = 0; i < count; i++) {
    allTask.push(getTaskData());
  }

  return allTask;
};

const createAllTasksMarkdown = (tasks) => {
  const fragment = document.createDocumentFragment();

  for (const task of tasks) {
    const taskComponent = new GetTask(task);
    const editTaskComponent = new GetTaskEdit(task);

    taskComponent.onEdit = () => {
      editTaskComponent.render();
      board.replaceChild(editTaskComponent.element, taskComponent.element);
      taskComponent.unrender();
    };
    editTaskComponent.onSubmit = () => {
      taskComponent.render();
      board.replaceChild(taskComponent.element, editTaskComponent.element);
      editTaskComponent.unrender();
    };

    fragment.appendChild(taskComponent.render());
  }

  return fragment;
};

const board = document.querySelector(`.board__tasks`);
board.appendChild(createAllTasksMarkdown(createTasks(7)));

const filterItems = document.querySelectorAll(`.filter__label`);
filterItems.forEach((el) => {
  el.addEventListener(`click`, function () {
    board.innerHTML = ``;
    board.appendChild(createAllTasksMarkdown(createTasks(getRandomInt(3, 10))));
  });
});
