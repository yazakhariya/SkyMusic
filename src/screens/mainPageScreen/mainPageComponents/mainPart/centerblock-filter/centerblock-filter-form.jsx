import React from 'react';
import './authors.css';

function DropdownSelectForm(props) {
    const { label, onClick } = props;
    
    return (
        <div className='searchDiv' onClick={onClick}>
            <div className='filter__button _btn-text'>{label}</div>     
        </div>
    )
}

export default DropdownSelectForm;