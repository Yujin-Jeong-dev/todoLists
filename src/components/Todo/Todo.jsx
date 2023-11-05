import React from 'react';
import style from './Todo.module.css'
import { FaTrashAlt, FaUndoAlt } from 'react-icons/fa'

export default function Todo({ todo, onUpdate, onDelete, isCompleted }) {
    const { title, text, status } = todo;
    const handleChange = (e) => {
        //체크가 되면 completed, 그렇지 않으면 active
        const status = e.target.checked ? 'completed' : 'active';
        onUpdate({ ...todo, status: status });

    }
    const deleteTodo = () => onDelete(todo);
    const undoStatus = () => {
        //완료된 할일을 다시 미완료로 변경
        onUpdate({ ...todo, status: 'active' });
    }

    return (
        <>
            <li className={style.todo} >
                <h4 className={style.title}>{title}</h4>
                <div className={style.text}>
                    <p>{text}</p>
                    {/* 미완료된 할일은 체크버튼, 그렇지 않으면 취소 버튼 */}
                    {isCompleted ? (<button className={style.button} onClick={undoStatus}><FaUndoAlt /></button>) : (<input className={style.checkbox} type='checkbox' checked={status === 'completed'} onChange={handleChange} />)}
                    <button className={style.button} onClick={deleteTodo}><FaTrashAlt /></button>
                </div>
            </li>
        </>
    );
}

