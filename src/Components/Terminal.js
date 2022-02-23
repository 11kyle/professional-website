import React, { useState, useEffect } from 'react';
import bootstrap from 'bootstrap';

const superpowers = ['cd \\Projects\\my-website && npm start', 'npm start'];

const useTypedSuperpower = (superpower) => {
    const [typedSuperpower, setTypedSuperpower] = useState('');

    useEffect(() => {

        const timeout = setTimeout(() => {
            setTypedSuperpower(superpower.slice(0, typedSuperpower.length + 1))
        }, 150)

        return () => clearTimeout(timeout);

    }, [typedSuperpower]);

    return typedSuperpower;
}

const Terminal = () => {
    const superpower = useTypedSuperpower(superpowers[0]);


    return (
        <main>
            <kbd className='blinking-cursur'>{superpower}</kbd>
            <br />
        </main>
    );
}

export default Terminal;