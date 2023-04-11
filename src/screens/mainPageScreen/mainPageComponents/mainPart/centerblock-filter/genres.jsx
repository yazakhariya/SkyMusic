import React, { useState } from 'react';
import './authors.css';
import DropdownSelectForm from './centerblock-filter-form';

function GenreList() {
    const [dropdownState, setDropdownState] = useState({ open: false });


    const handleDropdownClick = () => setDropdownState({ open: !dropdownState.open });

    const genres= [
        'Рок',
        'Хип-Хоп',
        'Джаз',
        'Альтернатива',
        'Рэп',
        'Классическая',
    ]
    
    return (
        <div centerblock__filter filter>
            <DropdownSelectForm label="жанру" onClick={handleDropdownClick} />
            {dropdownState.open && (
                <div className='dropdown-3'>
                    <ul className='dropdownMenu'>
                    {genres.map((genre) => (
                            <li className='item' key={genre}>{genre}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div> 
    )
}

export default GenreList;