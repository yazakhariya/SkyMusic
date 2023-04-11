import CenterblockContent from './centerblock-content';
import Playlist from './playlist/playlist-form';
import SideBar from './main-sideBar';
import NavigationMenu from './main-navigation';
import CenterBlockSearch from './center-block-search';
import CenterblockFilter from './centerblock-filter/centerblock-filter';

function MainPartOfThePage() {
    return (
        <main className="main">
            <NavigationMenu />
            <div className="main__centerblock centerblock">
                <CenterBlockSearch />
                <h2 className="centerblock__h2">Треки</h2>
                <CenterblockFilter />
                <div className="centerblock__content">
                    <CenterblockContent />
                    <div className="content__playlist playlist">
                        <Playlist />
                    </div>
                </div>
            </div>
            <SideBar />
        </main>
    )
}

export default MainPartOfThePage;