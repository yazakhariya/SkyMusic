import React, { useState } from 'react';
import s from './authors.module.css';
import DropdownSelectForm from './centerblock-filter-form';

function GenreList({selectGenres}) {
    const [dropdownState, setDropdownState] = useState(false);

    function chooseGenre(e) {
        selectGenres(e.target.value);
    }

    const handleDropdownClick = () => setDropdownState(!dropdownState);

    const genres= [
        'Рок музыка',
        'Электронная музыка',
        'Джаз',
        'Рэп',
        'Классическая музыка',
    ]
    
    return (
        <div>
            <DropdownSelectForm label="жанру" onClick={handleDropdownClick} />
            {dropdownState && (
                <div className={s.dropdown_3}>
                    <ul onClick={chooseGenre} className={s.dropdownMenu}>
                    {genres.map((genre) => (
                            <option className={s.item} key={genre}>{genre}</option>
                        ))}
                    </ul>
                </div>
            )}
        </div> 
    )
}

export default GenreList;