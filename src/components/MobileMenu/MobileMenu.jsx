import React from "react";
import "./mobilemenu.js";
import "./mobilemenu.scss";

const MobileMenu = ({ list }) => {
    return (
            <div className="mobile-menu">
                <div className="mobile-menu-inner">
                    <ul>
                        {list.map((li, index) => (
                            <li key={index}>
                                <a href={`#${li.src}`}>
                                   {li.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="mobile-menu__close" />
                </div>
            </div>
    );
};

export default MobileMenu;
