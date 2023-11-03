import React from 'react';
import style from './Todo.module.css'
import { FaTrashAlt } from 'react-icons/fa'

export default function Todo({ todo, onUpdate, onDelete }) {
    const { title, text, status } = todo;
    const handleChange = (e) => {
        //체크가 되어있으면 해당 투두의 status를 업데이트
        if (e.target.checked) onUpdate({ ...todo, status: 'completed' });
    }
    const deleteTodo = () => onDelete(todo);

    return (
        <>
            <li className={style.todo} >
                <h4 className={style.title}>{title}</h4>
                <div className={style.text}>
                    <p>{text}</p>
                    <input className={style.checkbox} type='checkbox' checked={status === 'completed'} onChange={handleChange} />
                    <button className={style.button} onClick={deleteTodo}><FaTrashAlt /></button>
                </div>
            </li>
            <div className={style.divider}></div>
        </>
    );
}

