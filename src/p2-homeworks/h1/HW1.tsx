import React from 'react'
import MessageHW1 from './Message';
import s from './Message.module.css';
import logo1 from './img/avatar_1634804341103.png';
import logo2 from './img/avatar_1634803710085.png';
import logo3 from './img/avatar_1634803732159.png';
import logo4 from './img/avatar_1634803761499.png';

function getName() {
    const names = ['Bob', 'Tom', 'Alex', 'Nick'];
    return names[Math.trunc(Math.random() * names.length)];
}
function getAvatar() {
    const ava=[`${logo1}`,`${logo2}`,`${logo3}`,`${logo4}`];
    return ava[Math.trunc(Math.random()*ava.length)];
}
export type MessageDateType = {
    avatar: string;
    name: string;
    message: string;
    time: string;
}

const messageData = {
   /* avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',*/
    avatar:`${getAvatar()}`,
    name: `${getName()}`,
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem deserunt dolores et facilis fuga ipsam laudantium ',
    time: `${new Date().getHours()}:${new Date().getMinutes()}`
}

function HW1() {
    return (
        <div className={s.hw1}>
            <hr/>
            homeworks 1

            <MessageHW1
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
