import React, { useState } from 'react';
import s from './authors.module.css';
import DropdownSelectForm from './centerblock-filter-form';
import YearForm from './year-input-form';

function Year() {
    const [dropdownState, setDropdownState] = useState(false);
    const handleDropdownClick = () => setDropdownState(!dropdownState);
    return (
        <div>
            <DropdownSelectForm label="году выпуска" onClick={handleDropdownClick} />
            {dropdownState && (
                <div className={s.dropdown_2}>
                    <YearForm value='Более новые' />
                    <YearForm value='Более старые' />
                </div>
            )}
        </div>
    )
}

export default Year;