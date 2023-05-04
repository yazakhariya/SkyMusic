import React from 'react';
import { ReactSVG } from "react-svg";

const PlayerControls = ({ className, src, alt, onClick }) => {

    return (
        <ReactSVG onClick={onClick} src={src} className={className} alt={alt} />
    )
}

export default PlayerControls;