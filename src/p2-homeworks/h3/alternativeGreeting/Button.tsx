import React from 'react';

type PropsType = {
    callBack: () => void;
    title: string
}
export const Button = ({callBack, title}: PropsType) => {
    return (
        <button onClick={callBack}>{title}</button>
    )
}