import React from 'react'
import s from './mainPageScreen.module.css';
import Bar from './mainPageComponents/bar/bar';
import MainPartOfThePage from './mainPageComponents/mainPart/mainPart';


const MainPageScreen = ({ loggedIn, userName }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <MainPartOfThePage loggedIn={loggedIn} userName={userName} />
        <Bar />
        <footer className={s.footer}></footer>
      </div>
    </div>
  )
}

export default MainPageScreen;