import React from "react";

function NavBurger(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className="nav__burger burger">
            <span className="burger__line"></span>
            <span className="burger__line"></span>
            <span className="burger__line"></span>
        </div>    
    )
}

export default NavBurger;