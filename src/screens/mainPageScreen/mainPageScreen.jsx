import React from 'react'
import './mainPageScreen.css';
import Bar from './mainPageComponents/bar';
import MainPartOfThePage from './mainPageComponents/mainPart';


const MainPageScreen = () => {
  return (
    <div className='wrapper'>
      <div className="container">
        <MainPartOfThePage />
        <Bar />
        <footer className="footer"></footer>
      </div>
    </div>
  )
}

export default MainPageScreen;