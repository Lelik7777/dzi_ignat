import React from 'react'
import {MessageDateType} from './HW1';
import s from './Message.module.css';


function Message(props: MessageDateType) {
    return (
        <div className={s.message}>
            <img src={props.avatar} alt="avatar"/>
            <div className={s.corner}></div>
            <div className={s.bodyMes}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
