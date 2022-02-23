import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faDesktop, faServer, faRightLeft } from '@fortawesome/free-solid-svg-icons';

function FullstackCylce() {
    return (
        <>
            <section className='text-center'>
                <h1 className='display-6'>FULL-STACK DEVELOPMENT</h1>
                <div className='flex-offset mt-10'>
                    <div className='card rounded-circle center-vertical' style={{ width: "200px", height: "200px", order: "1" }}>
                        <p>FRONT-END</p>
                        <FontAwesomeIcon icon={faDesktop} size="3x" />
                    </div>
                    <div className='card rounded-circle center-vertical offset' style={{ width: "200px", height: "200px", order: "2" }}>
                        <p>BACK-END</p>
                        <FontAwesomeIcon icon={faServer} size="3x" />
                    </div>
                    <div className='card rounded-circle center-vertical' style={{ width: "200px", height: "200px", order: "3" }}>
                        <p>DATABASE</p>
                        <FontAwesomeIcon icon={faDatabase} size="3x" />
                    </div>
                </div>
            </section>
            <div className='text-center arrow'>
                <FontAwesomeIcon className='color-main' icon={faRightLeft} size="3x" />
            </div> 
        </>
    );
}

export default FullstackCylce;