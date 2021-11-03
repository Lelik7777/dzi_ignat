import React from 'react';
import o from './AlternativeGreeting.module.css';
import {ContainerComponent} from './ContainerComponent';
import {UserType} from '../HW3';

type PropsType = {
    users: UserType[];
    addAlternativeUsers: (n: string) => void;
}
export const AlternativeGreeting = ({addAlternativeUsers, users}: PropsType) => {
    return (
        <div className={o.alternativeGreeting}>
            <ContainerComponent
                addAlternativeUsers={addAlternativeUsers}
                data={users}/>
        </div>
    );
}

