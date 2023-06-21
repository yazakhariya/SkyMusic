import React from 'react';
import { ReactComponent as Search } from '../../../img/icon/search.svg';
import { ReactComponent as BlackSearch } from '../../../img/icon/search-).svg';
import InputForm from '../../../registrationForm/inputForm';
import s from './center-block-search.module.css';

function CenterBlockSearch({ theme, onChange }) {
    return (
        <div onChange={onChange} className={s.centerblock__search}>
            {
            theme === 'dark' ?
            <Search /> : <BlackSearch />
            }
            <InputForm className={s.search__text} type="search" placeholder="Поиск" name="search" />
        </div>
    )
}

export default CenterBlockSearch;