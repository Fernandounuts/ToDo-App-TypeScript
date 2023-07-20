import style from "./TaskList.module.css";

import { ITask } from "../interfaces/Task";

type Props = {
  taskList: ITask[];
  handleDelete(id: number): void;
  handleEdit(task: ITask): void;
};

const TaskList = ({ taskList, handleDelete, handleEdit }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={style.task}>
            <div className={style.details}>
              <h1>{task.title}</h1>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={style.actions}>
              <i className="bi bi-pencil" onClick={() => handleEdit(task)}></i>
              <i
                className="bi bi-trash"
                onClick={() => handleDelete(task.id)}
              ></i>
            </div>
          </div>
        ))
      ) : (
        <p>Nao ha tarefas cadastradas</p>
      )}
    </>
  );
};

export default TaskList;
