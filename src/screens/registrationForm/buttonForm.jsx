import React from 'react';

function Button ({ href, type, value, className, onClick, disabled }) {
    return (
        <button disabled={disabled} href={href} className={className} type={type} value={value} onClick={onClick}>{value}</button>
    )
}

export default Button;