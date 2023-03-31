import React from 'react';
import { ReactSVG } from "react-svg";

const PlayerControls = (props) => {
    const { className, src, alt } = props;

    return (
        <ReactSVG src={src} className={className} alt={alt} />
    )
}

export default PlayerControls;