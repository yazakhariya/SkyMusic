import React, { useState } from 'react';
import s from './authors.module.css';
import DropdownSelectForm from './centerblock-filter-form';

function GenreList() {
    const [dropdownState, setDropdownState] = useState(false);


    const handleDropdownClick = () => setDropdownState(!dropdownState);

    const genres= [
        'Рок',
        'Хип-Хоп',
        'Джаз',
        'Альтернатива',
        'Рэп',
        'Классическая',
    ]
    
    return (
        <div>
            <DropdownSelectForm label="жанру" onClick={handleDropdownClick} />
            {dropdownState && (
                <div className={s.dropdown_3}>
                    <ul className={s.dropdownMenu}>
                    {genres.map((genre) => (
                            <li className={s.item} key={genre}>{genre}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div> 
    )
}

export default GenreList;