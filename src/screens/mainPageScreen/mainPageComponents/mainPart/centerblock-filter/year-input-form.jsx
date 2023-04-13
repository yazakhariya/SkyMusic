import React from 'react';
import s from './authors.module.css';

function YearForm(props) {
    const { value } = props;
    return (
        <div className={s.dropdown_2_item}>
            <input type='radio'></input>
            <span>{value}</span>    
        </div>
    )
}

export default YearForm;