import React from 'react';

function YearForm(props) {
    const { value } = props;
    return (
        <div className='dropdown-2-item'>
            <input type='radio'></input>
            <span>{value}</span>    
        </div>
    )
}

export default YearForm;