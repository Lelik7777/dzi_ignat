import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string; // need to fix any do
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void; // need to fix any do
    addUser: any // need to fix any
    error: any // need to fix any
    totalUsers: any // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass =error? s.error:'' // need to fix with (?:) do

    return (
        <div>
            <div style={{display:'flex'}}>
                <input value={name} onChange={setNameCallback} className={inputClass}/>
                <button onClick={addUser}>add</button>
                <span className={s.total}>{totalUsers}</span>
            </div>
            <div><span className={s.errorS}>{error}</span></div>
        </div>
    )
}

export default Greeting
