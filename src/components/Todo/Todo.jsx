import React from 'react';

export default function Todo({ todo }) {
    const { key, title, text } = todo;

    return (
        <li key={key}>
            <h3>{title}</h3>
            <p>{text}</p>
        </li>
    );
}

