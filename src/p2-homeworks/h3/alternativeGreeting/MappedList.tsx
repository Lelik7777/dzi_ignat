import React from 'react';
import {UserType} from '../HW3';
import o from './AlternativeGreeting.module.css';

type PropsType = {
    data: UserType[];
}
export const MappedList = ({data}: PropsType) => {
    return (
        <ul>
            {data.map(x => {
                return <li key={x._id}>
                    <span className={o.span_name}>
                        <span className={o.text}>name:</span>
                        {x.name}</span>
                    <span className={o.span_date}>
                        <span className={o.text}>date:</span>
                        {x.date}
                    </span>
                </li>
            })}
        </ul>
    )
}