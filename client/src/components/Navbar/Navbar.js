import React from 'react';
import '../../globalStyles/variables.scss'
import './Navbar.scss';

export default function Navbar(props) {
    return (
        // If im home render different styles
        <nav className={!props.isHome && "fixed"}>
            <div className="logo">
                <a href="/"><img src="/logo.png" alt="PhoneGuide"></img></a>
            </div>
            {!props.isHome && (
                <ul className="menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/phones">Phones</a></li>
                </ul>
            )}
        </nav>
    )
}
