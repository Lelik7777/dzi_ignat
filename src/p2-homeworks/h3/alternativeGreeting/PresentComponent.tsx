import React, {ChangeEvent, KeyboardEvent} from 'react';
import {Input} from './Input';
import {Button} from './Button';
import {UserType} from '../HW3';
import {MappedList} from './MappedList';
import o from './AlternativeGreeting.module.css';

type PropsType = {
    data: UserType[];
    callBack1: () => void;
    callBack2: (e: ChangeEvent<HTMLInputElement>) => void;
    callBack3: (e: KeyboardEvent<HTMLInputElement>) => void;
    value: string;
    error: boolean;
}
export const PresentComponent = ({data, callBack1, callBack2, callBack3, value, error}: PropsType) => {
    return (
        <div className={o.present}>
            <div>
                <Input type={'text'}
                       callBack={callBack2}
                       value={value}
                       callBack3={callBack3}
                       placeholder={'enter name'}
                />
                <Button callBack={callBack1} title={'add'}/>
            </div>
            {error &&
            <span className={o.error_message}>You must typed name more then 2 character</span>
            }
            {value.length >= 10 &&
            <span className={o.error_message}>Name must be less then 10 character</span>
            }
            <MappedList data={data}/>
        </div>
    );
}
