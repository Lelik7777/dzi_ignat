import React from 'react';
import o from './ListBook.module.css'
import {FilterBooks} from '../HW2';

type ButtonType = {
    title: FilterBooks | 'all';
    filer: (f: FilterBooks | 'all') => void;
}

export function Button(props: ButtonType) {
    const filterList = () => {
        props.filer(props.title);
    }
    return (
        <button
            className={o.button}
            onClick={filterList}
        >
            {props.title}
        </button>
    )
}