import React from 'react';
import '../../globalStyles/variables.scss'
import './Home.scss';
import Navbar from '../Navbar/Navbar';

export default function Home() {
    return (
        < >
            <Navbar isHome={true}/>
            <main className="home">
                {/* <img class="bg-image" src="scribbles-scribbles-32.svg" alt="Scribble Background Image"/> */}
                <div className="wrapper">
                    <div className="content">
                        <h1>Hi! Welcome to yet another phone catalogue</h1>
                        <p>Here you will find a catalog of all smartphones with detailed technical characteristics and specifications. This site is created with a single purpose - to help you in choosing a new smartphone. </p>
                        <a className="btn" href="/phones">Check the phones</a>
                    </div>
                    <div className="image">
                        <img src="illustration.png" alt="Illustration"/>
                    </div>
                </div>
            </main>

        </>
    )
}
