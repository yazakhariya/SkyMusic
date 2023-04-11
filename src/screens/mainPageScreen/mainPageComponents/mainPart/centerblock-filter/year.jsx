import React, { useState } from 'react';
import './authors.css';
import DropdownSelectForm from './centerblock-filter-form';
import YearForm from './year-input-form';

function Year() {
    const [dropdownState, setDropdownState] = useState({ open: false });
    const handleDropdownClick = () => setDropdownState({ open: !dropdownState.open });
    return (
        <div>
            <DropdownSelectForm label="году выпуска" onClick={handleDropdownClick} />
            {dropdownState.open && (
                <div className='dropdown-2'>
                    <YearForm value='Более новые' />
                    <YearForm value='Более старые' />
                </div>
            )}
        </div>
    )
}

export default Year;