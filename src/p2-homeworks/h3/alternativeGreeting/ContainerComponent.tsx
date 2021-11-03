import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {PresentComponent} from './PresentComponent';
import {UserType} from '../HW3';

type PropsType = {
    addAlternativeUsers: (n: string) => void;
    data: UserType[];
}
export const ContainerComponent = ({addAlternativeUsers, data}: PropsType) => {
    const [value, setValue] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const valueTrim = value.trim();
    const callBack1 = () => {
        valueTrim && valueTrim.length > 2 && valueTrim.length < 10
        && addAlternativeUsers(value);
        valueTrim && setValue('');
        !valueTrim && setError(true);
        valueTrim.length <= 2 && setError(true);
    }
    const callBack2 = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
        setError(false);
    }
    const callBack3 = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && valueTrim && valueTrim.length > 2 &&
        valueTrim.length < 10 && addAlternativeUsers(value);
        e.key === 'Enter' && setValue('');
        !valueTrim && setError(true);
        valueTrim.length <= 2 && setError(true);
    }
    return (
        <div>
            <PresentComponent
                data={data}
                callBack1={callBack1}
                callBack2={callBack2}
                value={value}
                error={error}
                callBack3={callBack3}
            />
        </div>
    );
}

