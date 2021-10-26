import React from 'react';
import o from './ListBook.module.css';

type BookType = {
    title: string;
    remove: (id: number) => void;
    id: number;
    img: string;
}

export function Book(props: BookType) {
    const remove0 = () => {
        props.remove(props.id);
    }
    return (
        <div className={o.book}>
            <span>{props.title}</span>
            <img src={props.img} alt={props.title}/>
            <button onClick={remove0}>del</button>
        </div>
    )
}