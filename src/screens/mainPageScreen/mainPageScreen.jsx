import React, { useState } from 'react'
import s from './mainPageScreen.module.css';
import Bar from './mainPageComponents/bar/bar';
import MainPartOfThePage from './mainPageComponents/mainPart/mainPart';
import ThemeContext from './mainPageComponents/theme-context';

const MainPageScreen = ({ loggedIn, userName }) => {

  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div className={s.wrapper} theme-data={theme}>
        <div className={s.container} theme-data={theme}>
          <MainPartOfThePage loggedIn={loggedIn} userName={userName} />
          <Bar />
          <footer className={s.footer}></footer>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default MainPageScreen;