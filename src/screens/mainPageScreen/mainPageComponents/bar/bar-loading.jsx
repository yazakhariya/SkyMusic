import React from 'react';
import img from '../../../img/sceleton/Group 11.png';
import name from '../../../img/sceleton/Rectangle 13.png';
import song from '../../../img/sceleton/Rectangle 12.png';



function BarLoading() {
    return (
        <div className="track-play__contain">
            <img src={img} className="track-play__image" alt="music" />
            <div>
                <img src={name} alt="music" /><br/>
                <img src={song} alt="music" />
            </div>
        </div>
    );
    
}
export default BarLoading;