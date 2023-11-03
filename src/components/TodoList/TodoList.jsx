import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

export default function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, title: '공부하기', text: '리액트 이론 공부', status: 'active' },
        { id: 2, title: '운동하기', text: '하체 운동', status: 'active' }
    ]);
    const handleAdd = (todo) => {
        setTodos([...todos, todo]);
    }
    return (
        <>
            <AddTodo onAdd={handleAdd} />
            <ul>
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} />
                ))}
            </ul>

        </>
    );
}

