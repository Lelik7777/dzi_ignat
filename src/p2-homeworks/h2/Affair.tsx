import React from 'react'
import {AffairType} from './HW2';
import o from './Affairs.module.css';
type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType// need to fix any
    deleteAffairCallback: (id:number)=>void; // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div className={o.affair}>
          {/*  // show some text*/}
            {props.affair.name}
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
