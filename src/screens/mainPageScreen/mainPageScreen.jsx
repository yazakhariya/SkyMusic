import React from 'react'
import s from './mainPageScreen.module.css';
import Bar from './mainPageComponents/bar/bar';
import MainPartOfThePage from './mainPageComponents/mainPart/mainPart';


const MainPageScreen = ({ loggedIn, userName, setLoggedIn, setUserName }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <MainPartOfThePage loggedIn={loggedIn} setUserName={setUserName} setLoggedIn={setLoggedIn} userName={userName} />
        <Bar />
        <footer className={s.footer}></footer>
      </div>
    </div>
  )
}

export default MainPageScreen;