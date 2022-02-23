import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';

function SideNav() {
    return (
        <>
            <aside className='side-nav'>
                <nav className='nav'>
                    <ul className='nav-list'>
                        <li><a className='nav-link' href='#'><FontAwesomeIcon icon={faHome} size="lg" /></a></li>
                        <li><a className='nav-link' href='#'><FontAwesomeIcon icon={faUser} size="lg" /></a></li>
                        <li><a className='nav-link' href='#'><FontAwesomeIcon icon={faPhoneFlip} size="lg" /></a></li>
                    </ul>
                </nav>
            </aside>
        </>
    );
}

export default SideNav;