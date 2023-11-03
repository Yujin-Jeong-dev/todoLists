import React from 'react';
import style from './Todo.module.css'
import { FaTrashAlt } from 'react-icons/fa'

export default function Todo({ todo }) {
    const { key, title, text } = todo;

    return (
        <>
            <li className={style.todo} key={key}>
                <h4 className={style.title}>{title}</h4>
                <div className={style.text}>
                    <p>{text}</p>
                    <input className={style.input} type='checkbox' />
                    <button className={style.button}><FaTrashAlt /></button>
                </div>
            </li>
            <div className={style.divider}></div>
        </>
    );
}

