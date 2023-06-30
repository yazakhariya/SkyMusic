import React from 'react';

function Button ({ href, type, value, className, onClick, disabled, dataTestId}) {
    return (
        <button disabled={disabled} href={href} className={className} type={type} value={value} onClick={onClick} data-testid={dataTestId}>{value}</button>
    )
}

export default Button;