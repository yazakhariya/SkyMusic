import React from 'react';
import s from './authors.module.css';

function DropdownSelectForm({ label, onClick }) {
    
    return (
        <div className={s.searchDiv} onClick={onClick}>
            <div className={`${s.filter__button} ${s._btn_text}`}>{label}</div>     
        </div>
    )
}

export default DropdownSelectForm;