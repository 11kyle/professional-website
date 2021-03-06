import React, { useState, useEffect } from 'react';
import Skills from './Components/Skills';
import FullstackCylce from './Components/FullstackCycle';
import AsideNav from './Components/AsideNav';
import Terminal from './Components/Terminal';
import ProfilePicture from './Images/man.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown, faDatabase, faDesktop, faServer } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
    return (
        <>
            <AsideNav />
            <main className='center-vertical py-6 color-secondary-background full-vh'>
                <div className='center-inline'>
                    <div>
                        <img className="rounded-circle" src={ProfilePicture} style={{ width: "180px" }} />
                    </div>
                    <div className='ml-4'>
                        <h1 className='display-1 m-0'>Kyle Johnson</h1>
                        <p className='lead m-0'>Full-Stack React Developer</p>
                        <div>
                            <a className='color-main mr-4 button-icon' href='#'><FontAwesomeIcon icon={faGithub} size="lg" /></a>
                            <a className='color-main' href='#'><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
                            <button>Resume</button>
                        </div>
                    </div>
                </div>
            </main>
            <div className='text-center down-chevron'>
                <FontAwesomeIcon className='color-main' icon={faChevronDown} size="3x" />
            </div> 
            {/*<Skills />*/}
            <FullstackCylce />
        </>
    );
}

export default App;