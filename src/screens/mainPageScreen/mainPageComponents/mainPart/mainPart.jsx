import SideBar from './main-sideBar';
import NavigationMenu from './main-navigation';
import CenterBlockSearch from './center-block-search';
import s from './mainPart.module.css';
import Tracks from './tracks';
import { useState } from 'react';


function MainPartOfThePage({ loggedIn, theme, data, isLoading, setIsPlaying, setActive, setNavActive, navActive }) {
    const [search, setSearch] = useState('');
    
    return (
        <main className={s.main}>
            <NavigationMenu navActive={navActive} setNavActive={setNavActive} theme={theme} loggedIn={loggedIn} />
            <div className={s.main__centerblock}>
                <CenterBlockSearch onChange={(e) => setSearch(e.target.value)} theme={theme} />
                <Tracks setActive={setActive} setIsPlaying={setIsPlaying} isLoading={isLoading} data={data} search={search} />
            </div>
            <SideBar loggedIn={loggedIn} />
        </main>
    )
}

export default MainPartOfThePage;