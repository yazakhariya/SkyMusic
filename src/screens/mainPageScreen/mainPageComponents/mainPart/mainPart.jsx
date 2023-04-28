import CenterblockContent from './centerblock-content';
import Playlist from './playlist/playlist-form';
import SideBar from './main-sideBar';
import NavigationMenu from './main-navigation';
import CenterBlockSearch from './center-block-search';
import CenterblockFilter from './centerblock-filter/centerblock-filter';
import s from './mainPart.module.css';

function MainPartOfThePage({ userName, loggedIn }) {
    return (
        <main className={s.main}>
            <NavigationMenu loggedIn={loggedIn} />
            <div className={s.main__centerblock}>
                <CenterBlockSearch />
                <h2 className={s.centerblock__h2}>Треки</h2>
                <CenterblockFilter />
                <div className={s.centerblock__content}>
                    <CenterblockContent />
                    <div className={s.content__playlist}>
                        <Playlist />
                    </div>
                </div>
            </div>
            <SideBar userName={userName} />
        </main>
    )
}

export default MainPartOfThePage;