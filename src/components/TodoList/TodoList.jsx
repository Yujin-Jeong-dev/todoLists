import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import style from './TodoList.module.css';

export default function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, title: '공부하기', text: '리액트 이론 공부', status: 'active' },
        { id: 2, title: '운동하기', text: '하체 운동', status: 'active' }
    ]);
    const handleAdd = (todo) => {
        setTodos([...todos, todo]);
    }

    const handleUpdate = (update) => {
        //기존 투두에서 해당 투두와 일치한 투두만 status를 변경해줌.
        setTodos(todos.map((list) => list.id === update.id ? update : list));

    }

    const handleDelete = (deleted) => {
        setTodos(todos.filter((list) => list.id !== deleted.id))
    }

    return (
        <section className={style.container}>
            <AddTodo onAdd={handleAdd} />
            <ul className={style.lists}>
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} onUpdate={handleUpdate} onDelete={handleDelete} />
                ))}
            </ul>

        </section>
    );
}

