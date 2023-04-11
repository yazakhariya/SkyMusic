import React from 'react';
import { ReactComponent as Search } from '../../../img/icon/search.svg';
import InputForm from '../../../registrationForm/inputForm';

function CenterBlockSearch() {
    return (
        <div className="centerblock__search search">
            <Search />
            <InputForm className="search__text" type="search" placeholder="Поиск" name="search" />
        </div>
    )
}

export default CenterBlockSearch;