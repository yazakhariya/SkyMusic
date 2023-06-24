import SideBar from './main-sideBar';
import NavigationMenu from './main-navigation';
import CenterBlockSearch from './center-block-search';
import s from './mainPart.module.css';
import Tracks from './tracks';
import { useState } from 'react';


function MainPartOfThePage({ loggedIn, theme, data, isLoading, setIsPlaying }) {
    const [search, setSearch] = useState('');
    
    return (
        <main className={s.main}>
            <NavigationMenu theme={theme} loggedIn={loggedIn} />
            <div className={s.main__centerblock}>
                <CenterBlockSearch onChange={(e) => setSearch(e.target.value)} theme={theme} />
                <Tracks setIsPlaying={setIsPlaying} isLoading={isLoading} data={data} search={search} />
            </div>
            <SideBar />
        </main>
    )
}

export default MainPartOfThePage;