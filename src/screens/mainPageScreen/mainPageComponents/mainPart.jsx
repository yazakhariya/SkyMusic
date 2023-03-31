import CenterblockFilter from './centerblock-filter';
import CenterblockContent from './centerblock-content';
import PlaylistItem from './playlist-item-form';
import SideBar from './main-sideBar';
import NavigationMenu from './main-navigation';
import CenterBlockSearch from './center-block-search';

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
                        <PlaylistItem />
                    </div>
                </div>
            </div>
            <SideBar />
        </main>
    )
}

export default MainPartOfThePage;