import React from 'react'
import {MessageDateType} from './HW1';
import s from './Message.module.css';


function Message(props:MessageDateType) {
    return (
        <div className={s.message}>
            <img src={props.avatar} alt="avatar"/>
            <div className={s.bodyMes}>sadf</div>
        </div>
    )
}

export default Message
