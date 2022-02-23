import React, { useState } from 'react';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
} from 'mdb-react-ui-kit';

export default function Navigation() {
    const [basicActive, setBasicActive] = useState('home');

    const handleBasicClick = (value) => {
        switch (value) {
            case 'home':
                document.getElementById('home').scrollIntoView();
                break;
            case 'skills':
                document.getElementById('skills').scrollIntoView();
                break;
            case 'blog':
                document.getElementById('blog').scrollIntoView();
                break;
            default:
                break;
        }
        
        setBasicActive(value);
    };

    return (
        <>
            <MDBTabs pills className="justify-content-center fixed-top bg-dark">
                <MDBTabsItem>
                    <MDBTabsLink className="text-light" onClick={() => handleBasicClick('home')} active={basicActive === 'tab1'} >
                        Home
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink className="text-light" onClick={() => handleBasicClick('skills')} active={basicActive === 'tab2'}>
                        Skills
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink className="text-light" onClick={() => handleBasicClick('blog')} active={basicActive === 'tab3'}>
                        Blog
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>
        </>
    );
}

