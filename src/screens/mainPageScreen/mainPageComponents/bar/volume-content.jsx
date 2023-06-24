import { ReactSVG } from "react-svg";
import volume from '../../../img/icon/volume.svg';
import InputForm from '../../../registrationForm/inputForm';
import s from './volume-content.module.css';

function VolumeContent({ controls }) {

    const volumeChange = (e) => {
        const range = e.target;
        const rangeValue = Number(range.value) / 100;
        controls.volume(rangeValue);
    }

    return (
        <div className={s.volume__content}>
            <ReactSVG src={volume} className={s.volume__image} alt="volume" />
            <div className={`${s.volume__progress} ${s._btn}`}>
                <InputForm min="0" max="100" step="any" onChange={volumeChange} className={`${s.volume__progress_line} ${s._btn}`} type="range" name="range" />
            </div>
        </div>  
    )
}

export default VolumeContent;