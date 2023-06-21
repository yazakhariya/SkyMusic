import React from 'react';
import AuthorList from './authors';
import GenreList from './genres';
import { useState, useEffect } from "react";
import Year from './year';
import s from './centerblock-filter.module.css';

const CenterblockFilter = ({selectGenres, selectAuthor}) => {

    const [data, setData] = useState({
        author: null,
    });

    useEffect(() => {
        fetch(`https://painassasin.online/catalog/track/all/`)
        .then((response) => response.json())
         .then((author) => 
         setData({author: author}));
       }, [setData]);

    return (
        <div className={s.centerblock__filter}>
            <div className={s.filter__title}>Искать по:</div>
            <AuthorList selectAuthor={selectAuthor} items={data.author} />
            <Year />
            <GenreList selectGenres={selectGenres} />
        </div>
    )
}

export default CenterblockFilter;