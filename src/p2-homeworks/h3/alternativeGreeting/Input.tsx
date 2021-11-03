import React, {ChangeEvent, KeyboardEvent} from 'react';

type PropsType = {
    type: string;
    callBack: (e: ChangeEvent<HTMLInputElement>) => void;
    callBack3: (e: KeyboardEvent<HTMLInputElement>) => void;
    value: string;
    placeholder:string;
}
export const Input = ({type, callBack, callBack3, value,placeholder}: PropsType) => {

    return (
        <input
            value={value}
            type={type}
            onChange={callBack}
            onKeyPress={callBack3}
            placeholder={placeholder}
        />
    )
}