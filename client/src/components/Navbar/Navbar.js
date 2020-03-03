import React from 'react';
import '../../globalStyles/variables.scss'
import './Navbar.scss';

export default function Navbar() {
    return (
        // If im home render different styles
        <nav>
            <div className="logo">
                <a href="/"><img src="/logo.svg"></img></a>
            </div>
        </nav>
    )
}
