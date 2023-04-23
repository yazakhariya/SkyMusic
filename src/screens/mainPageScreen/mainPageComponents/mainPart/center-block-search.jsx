import React from 'react';
import { ReactComponent as Search } from '../../../img/icon/search.svg';
import InputForm from '../../../registrationForm/inputForm';
import s from './center-block-search.module.css';

function CenterBlockSearch() {
    return (
        <div className={s.centerblock__search}>
            <Search />
            <InputForm className={s.search__text} type="search" placeholder="Поиск" name="search" />
        </div>
    )
}

export default CenterBlockSearch;