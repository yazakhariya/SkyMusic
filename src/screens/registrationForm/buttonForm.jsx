import React from 'react';

function Button (props) {
    const { href, type, value, className, onClick } = props;

    return (
        <button href={href} className={className} type={type} value={value} onClick={onClick}>{value}</button>
    )
}

export default Button;