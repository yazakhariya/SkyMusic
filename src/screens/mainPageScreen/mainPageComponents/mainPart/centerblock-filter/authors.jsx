import React, { useState } from 'react';
import './authors.css';
import DropdownSelectForm from './centerblock-filter-form';

function AuthorList(props) {
    const [dropdownState, setDropdownState] = useState({ open: false });

    const [selectedOptions, setSelectedOptions] = useState([]);
 
    const handleMultiSelectChange = (selectedOptions) => {
        setSelectedOptions(selectedOptions);
        console.log(selectedOptions)
    };
    
    const handleDropdownClick = () => setDropdownState({ open: !dropdownState.open });

    const { items } = props;
    
    return (
        <div centerblock__filter filter>
            <DropdownSelectForm label="исполнителю" onClick={handleDropdownClick} />
            {dropdownState.open && (
                <div className='dropdown' onClick={handleMultiSelectChange}>
                    <ul className='dropdownMenu'>
                    {items.map((item) => (
                            <li className='item' key={item.id}>{item.author}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div> 
    )
}

export default AuthorList;