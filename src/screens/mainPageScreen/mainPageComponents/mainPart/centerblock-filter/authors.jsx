import React, { useState } from 'react';
import s from './authors.module.css';
import DropdownSelectForm from './centerblock-filter-form';

function AuthorList({ items, selectAuthor }) {
    const [dropdownState, setDropdownState] = useState(false);

    function chooseAuthor(e) {
        selectAuthor(e.target.value);
    }
    
    const handleDropdownClick = () => setDropdownState(!dropdownState);
    
    return (
        <div>
            <DropdownSelectForm label="исполнителю" onClick={handleDropdownClick} />
            {dropdownState && (
                <div className={s.dropdown}>
                    <ul onClick={chooseAuthor} className={s.dropdownMenu}>
                    {items.map((item) => (
                            <option className={s.item} key={item.id}>{item.author}</option>
                        ))}
                    </ul>
                </div>
            )}
        </div> 
    )
}

export default AuthorList;