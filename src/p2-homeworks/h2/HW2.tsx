import React, {useState} from 'react'
import Affairs from './Affairs'
import {ListBooks} from './listBooks(alternative)/ListBooks';
import imgB from './listBooks(alternative)/img/bun.jpeg';
import img2H from './listBooks(alternative)/img/html&css.jpeg';
import imgJ from './listBooks(alternative)/img/js.jpeg';

// types
export type AffairPriorityType = 'low' | 'middle' | 'high';// need to fix any
export type AffairType = {
    _id: number;
    name: string;
    priority: string;
};// need to fix any
export type FilterType = 'all' | AffairPriorityType;

// constants
const defaultAffairs: AffairType[] = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => { // need to fix any
    if (filter === 'all') return affairs;
    else if (filter === 'high') return affairs.filter(x => x.priority === filter);
    else if (filter === 'middle') return affairs.filter(x => x.priority === filter);
    else return affairs.filter(x => x.priority === filter);
    /* switch (filter) {
         case 'high':
             return affairs.filter(x => x.priority == filter);
         case 'middle':
             return affairs.filter(x => x.priority == filter);
         case 'low':
             return affairs.filter(x => x.priority == filter);
         case 'all':
             return affairs.filter(x => x.priority == filter);
     }*/

    // need to fix yes
}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => { // need to fix any
    return affairs.filter(x => x._id !== _id);// need to fix
}
//for alternative component ListBooks
//_________________________________________________________________
export type ListBookType = {
    id: number;
    title: string;
    read: FilterBooks;
    img: string;
}
export type FilterBooks = 'first for read' | 'second for read' | 'read in any time';
const removeElemetInArray = (array: ListBookType[], id: number) => {
    return array.filter(x => x.id !== id);
}
const filterArray = (array: ListBookType[], filter: FilterBooks | 'all') => {
    switch (filter) {
        case 'first for read':
            return array.filter(x => x.read === 'first for read');
        case 'second for read':
            return array.filter(x => x.read === 'second for read');
        case 'read in any time':
            return array.filter(x => x.read === 'read in any time');
        default:
            return array;
    }
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any
// for alternative component ListBook
    //_______________________________________________________________________________________
    const [listBooks, setListBooks] = useState<ListBookType[]>([
        {id: 1, title: '\'The Bun\'', read: 'read in any time', img: imgB},
        {id: 2, title: '\'Head-First-HTML-master\'', read: 'first for read', img: img2H},
        {id: 3, title: '\'JS for kids\'', read: 'second for read', img: imgJ},
    ]);
    const [filterBooks, setFilterBooks] = useState<FilterBooks | 'all'>('all');
    let typesButtons: (FilterBooks | 'all')[] = ['all', 'first for read', 'second for read', 'read in any time']

    const removeBook = (id: number) => {
        setListBooks(removeElemetInArray(listBooks, id));
    }
    const listBooksFiltered = filterArray(listBooks, filterBooks);

    const filterB = (filter: FilterBooks | 'all') => {
        setFilterBooks(filter);
    }
    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}

            />

            <hr/>
            alternative component hw2
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <ListBooks
                data={listBooksFiltered}
                remove={removeBook}
                filterB={filterB}
                typesButtons={typesButtons}
            />
            <hr/>
        </div>
    )
}

export default HW2
