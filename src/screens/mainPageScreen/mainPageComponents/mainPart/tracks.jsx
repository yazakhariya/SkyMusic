import { useState } from 'react';
import CenterblockContent from './centerblock-content';
import CenterblockFilter from './centerblock-filter/centerblock-filter';
import s from './mainPart.module.css';
import Playlist from './playlist/playlist-form';

export default function Tracks({ search, data, isLoading, setIsPlaying, setActive }) {

    const [genre, setGenre] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');

    const FilteredList = data.filter((item) => {
        
        if(genre) {
            return item.genre === genre;
        }
        if(author) {
            return item.author === author;
        }
        if(year=== 'Более новые') {
            
            const newSongs = new Date(item.release_date).valueOf()
           
            return newSongs >= 1052697600000 ;

        } else if(year=== 'Более старые') {
            const old = new Date(item.release_date).valueOf()
           
            return old < 1052697600000 ;
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
            <CenterblockFilter setYear={setYear}  selectAuthor={selectAuthor} selectGenres={selectGenres} />
                <div className={s.centerblock__content}>
                    <CenterblockContent />
                    <div className={s.content__playlist}>
                        <Playlist setActive={setActive} setIsPlaying={setIsPlaying} isLoading={isLoading} data={FilteredList} search={search} />
                    </div>
                </div>
        </div>
    )
}