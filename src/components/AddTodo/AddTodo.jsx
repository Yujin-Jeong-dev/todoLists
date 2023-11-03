import React, { useState } from 'react';
import style from './AddTodo.module.css'
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo({ onAdd }) {
    const [form, setForm] = useState({ title: '', text: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.title.trim() === '' || form.text.trim() === '') return;
        //공백이 아닐 경우, 리스트의 id와 text, content 추가
        onAdd({ id: uuidv4(), title: form.title, text: form.text, status: 'active' });
        setForm({ title: '', text: '' });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }
    return (
        <section className={style.header}>
            <h1>To do list</h1>
            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.input}>
                    <input type='text' name='title' value={form.title} placeholder='제목' onChange={handleChange} />
                    <input type='text' name='text' value={form.text} placeholder='내용' onChange={handleChange} />
                </div>
                <button className={style.button}>Add</button>
            </form>
        </section>
    );
}

