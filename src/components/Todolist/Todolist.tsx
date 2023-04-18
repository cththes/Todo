import React from "react";
import "./Todolist.scss"

type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: Array<TaskType>;
};

function Todolist(props: PropsType) {
  const { title, tasks } = props;

  return (
    <div className="todo">
      <div className="todo__body">
        <h3 className="todo__title">{title}</h3>
        <div className="menu">
          <input className="menu__search-form" />
          <button className="menu__btn">+</button>
          <button className="menu__btn">-</button>
        </div>
        {tasks.map((task) => (
          <ul className="list">
            <li className="list__item">
              <input type="checkbox" checked={task.isDone} />
              <span className="list__title">{task.title}</span>
            </li>
          </ul>
        ))}
        <div className="sorting-btns">
          <button className="sorting-btns__item">All</button>
          <button className="sorting-btns__item">Active</button>
          <button className="sorting-btns__item">Completed</button>
        </div>
      </div>
    </div>
  );
}

export default Todolist;
