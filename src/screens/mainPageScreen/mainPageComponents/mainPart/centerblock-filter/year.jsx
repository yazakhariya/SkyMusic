import React, { useState } from 'react';
import s from './authors.module.css';
import DropdownSelectForm from './centerblock-filter-form';
import YearForm from './year-input-form';

function Year({setYear}) {

    const [dropdownState, setDropdownState] = useState(false);
    const handleDropdownClick = () => setDropdownState(!dropdownState);
    
    return (
        <div>
            <DropdownSelectForm label="году выпуска" onClick={handleDropdownClick} />
            {dropdownState && (
                <div onClick={(e) => setYear(e.target.value)} className={s.dropdown_2}>
                    <YearForm />
                </div>
            )}
        </div>
    )
}

export default Year;