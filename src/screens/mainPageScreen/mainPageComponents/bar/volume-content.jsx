import React from 'react';
import { ReactSVG } from "react-svg";
import volume from '../../../img/icon/volume.svg';
import InputForm from '../../../registrationForm/inputForm';
import s from './volume-content.module.css';

function VolumeContent() {

    return (
        <div className={s.volume__content}>
            <ReactSVG src={volume} className={s.volume__image} alt="volume" />
            <div className={`${s.volume__progress} ${s._btn}`}>
                <InputForm className={`${s.volume__progress_line} ${s._btn}`} type="range" name="range" />
            </div>
        </div>  
    )
}

export default VolumeContent;