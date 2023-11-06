import React from 'react';
import style from './Todo.module.css'
import { FaTrashAlt, FaUndoAlt, FaCheck } from 'react-icons/fa'

export default function Todo({ todo, onUpdate, onDelete, isCompleted }) {
    const { title, text } = todo;
    const updateStatus = () => {
        //완료로 변경
        onUpdate({ ...todo, status: 'completed' });

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
                    {isCompleted ? (<button className={style.button} onClick={undoStatus}><FaUndoAlt /></button>) : (<button className={style.button} onClick={updateStatus}><FaCheck /></button>)}
                    < button className={style.button} onClick={deleteTodo}><FaTrashAlt /></button>
                </div>
            </li >
        </>
    );
}

