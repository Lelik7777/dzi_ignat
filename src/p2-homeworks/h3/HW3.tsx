import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from 'uuid';
import {AlternativeGreeting} from './alternativeGreeting/AlternativeGreeting';
import o from './Greeting.module.css';
// types
export type UserType = {
    _id: string; // need to fix any do
    name: string; // need to fix any do
    date?: string;
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix do
    const addUserCallback = (name: string) => { // need to fix any do
        setUsers([...users, {name, _id: v1()}]) // need to fix do
    }
    const addAlternativeUsers = (name: string) => {
        setUsers([...users, {_id: v1(), name, date: new Date().toLocaleString()}])
    }
    return (
        <div className={o.hw3}>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer
                users={users}
                addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            Alternative variant HW3
            <AlternativeGreeting
                users={users}
                addAlternativeUsers={addAlternativeUsers}/>
            <hr/>
        </div>
    )
}

export default HW3