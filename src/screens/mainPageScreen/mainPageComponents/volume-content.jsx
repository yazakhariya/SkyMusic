import React from 'react';
import { ReactSVG } from "react-svg";
import volume from '../../img/icon/volume.svg';
import InputForm from '../../registrationForm/inputForm';

function VolumeContent() {

    return (
        <div className="volume__content">
            <ReactSVG src={volume} className="volume__image" alt="volume" />
            <div className="volume__progress _btn">
                <InputForm className="volume__progress-line _btn" type="range" name="range" />
            </div>
        </div>  
    )
}

export default VolumeContent;