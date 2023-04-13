import React, { useState } from 'react';
import s from './authors.module.css';
import DropdownSelectForm from './centerblock-filter-form';

function AuthorList(props) {
    const [dropdownState, setDropdownState] = useState(false);

    // const [selected, setSelected] = useState([0])
    
    const handleDropdownClick = () => setDropdownState(!dropdownState);

    const { items } = props;
    
    return (
        <div>
            <DropdownSelectForm label="исполнителю" onClick={handleDropdownClick} />
            {dropdownState && (
                <div className={s.dropdown}>
                    <ul className={s.dropdownMenu}>
                    {items.map((item) => (
                            <li className={s.item} key={item.id}>{item.author}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div> 
    )
}

export default AuthorList;