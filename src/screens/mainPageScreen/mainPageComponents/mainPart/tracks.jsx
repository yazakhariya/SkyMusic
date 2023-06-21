import { useState } from 'react';
import CenterblockContent from './centerblock-content';
import CenterblockFilter from './centerblock-filter/centerblock-filter';
import s from './mainPart.module.css';
import Playlist from './playlist/playlist-form';

export default function Tracks({search, data, isLoading, setIsPlaying}) {
    
    const [genre, setGenre] = useState('');
    const [author, setAuthor] = useState('');

    const FilteredList = data.filter((item) => {
        if(genre) {
        return item.genre === genre;
        }
        if(author) {
            return item.author === author;
        } 
        return item;
    })
    
    function selectGenres(genreValue) {
        setGenre(genreValue);
    }

    function selectAuthor(authorName) {
        setAuthor(authorName);
    }

    return (
        <div>
            <h2 className={s.centerblock__h2}>Треки</h2>
            <CenterblockFilter selectAuthor={selectAuthor} selectGenres={selectGenres} />
                <div className={s.centerblock__content}>
                    <CenterblockContent />
                    <div className={s.content__playlist}>
                        <Playlist setIsPlaying={setIsPlaying} isLoading={isLoading} data={FilteredList} search={search} />
                    </div>
                </div>
        </div>
    )
}