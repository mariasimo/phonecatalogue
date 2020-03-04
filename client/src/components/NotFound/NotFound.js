import React from 'react';
import '../../globalStyles/variables.scss'
import './NotFound.scss'
import Navbar from '../Navbar/Navbar';

const NotFound = () => {
    return (
        < >
           <Navbar isHome={true}/>
            <main className="not-found">
                <div className="wrapper">
                    <div className="content">
                        <h1>Ouch! This page doesn't exist</h1>
                        <p>Sorry, I can't seem to find what you're looking for. Let's pretend this never happened and go back home.</p>
                        <a className="btn" href="/">Go back home</a>
                    </div>
                    {/* <div className="image">
                        <img src="illustration.png" alt="Illustration"/>
                    </div> */}
                </div>
            </main>
        </>
    )
}
export default NotFound;