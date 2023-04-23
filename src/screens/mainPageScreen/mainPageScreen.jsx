import React from 'react'
import s from './mainPageScreen.module.css';
import Bar from './mainPageComponents/bar/bar';
import MainPartOfThePage from './mainPageComponents/mainPart/mainPart';


const MainPageScreen = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <MainPartOfThePage />
        <Bar />
        <footer className={s.footer}></footer>
      </div>
    </div>
  )
}

export default MainPageScreen;