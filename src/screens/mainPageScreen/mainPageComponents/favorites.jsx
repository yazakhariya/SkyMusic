import s from './mainPart/mainPart.module.css';
import CenterblockContent from './mainPart/centerblock-content';
import CenterblockFilter from './mainPart/centerblock-filter/centerblock-filter';

import NavigationMenu from './mainPart/main-navigation';
import CenterBlockSearch from './mainPart/center-block-search';
import SideBar from './mainPart/main-sideBar';

function MainPartOfThePage({ userName, loggedIn, theme }) {
    
    
    return (
        <main className={s.main}>
            <NavigationMenu theme={theme} loggedIn={loggedIn} />
            <div className={s.main__centerblock}>
                <CenterBlockSearch theme={theme} />
                <div>
            <h2 className={s.centerblock__h2}>Мой плейлист</h2>
            <CenterblockFilter />
                <div className={s.centerblock__content}>
                    <CenterblockContent />
                    <div className={s.content__playlist}>
                        
                    </div>
                </div>
            </div>
            </div>
            <SideBar userName={userName} />
        </main>
    )
}

export default MainPartOfThePage;