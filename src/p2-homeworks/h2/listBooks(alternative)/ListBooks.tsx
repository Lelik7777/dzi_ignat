import React from 'react';
import o from './ListBook.module.css';
import {FilterBooks, ListBookType} from '../HW2';
import {Book} from './Book';
import {Button} from './Button';


type ListBooksType = {
    data: ListBookType[];
    typesButtons: (FilterBooks | 'all')[];
    remove: (id: number) => void;
    filterB: (f: FilterBooks | 'all') => void;
}

export function ListBooks(props: ListBooksType) {
    const mappedBook = props.data.map(x => {
        //debugger;
        return (
            <Book title={x.title} remove={props.remove} id={x.id} img={x.img}/>
        )
    })
    const mappedButtons = props.typesButtons.map(x => {
        return <Button title={x} filer={props.filterB}/>
    })
    return (
        <div className={o.listBook}>
            {mappedBook}
            {mappedButtons}
        </div>
    )
}
