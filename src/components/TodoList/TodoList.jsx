import React, { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import style from './TodoList.module.css';

export default function TodoList() {
    //로컬스토리지에서 투두 가져오기 
    const [todos, setTodos] = useState(() => getTodos());

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    const incompletedTodos = filterTodos(todos, 'active');
    const completedTodos = filterTodos(todos, 'completed');


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
            <h3> Working 🔥</h3>
            <ul className={style.lists}>
                {incompletedTodos.map((todo) => (
                    <Todo key={todo.id} todo={todo} onUpdate={handleUpdate} onDelete={handleDelete} isCompleted={false} />
                ))}
            </ul>
            <h3>Complete! ☑️</h3>
            <ul className={style.lists}>
                {completedTodos.map((todo) => (
                    <Todo key={todo.id} todo={todo} onUpdate={handleUpdate} onDelete={handleDelete} isCompleted />
                ))}
            </ul>

        </section>
    );
}

function getTodos() {
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
}

function filterTodos(todos, status) {
    return todos.filter(todo => todo.status === status)
}

