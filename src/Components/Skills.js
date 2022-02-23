// Front End Web Development
//   Debuggin CSS with Chrome DevTools
//    Bootstrap
//    Web Accessibility Compliance
// Full Stack JavaScript
//    Node.js
//    REST APIs
//    SQL
// React
//    Components
//    Hooks
//    Using Create React App
//    React Router
// Web Design
//    Mobile-First Approach
//    Responsive Layouts
//    Sass

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJsSquare, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

function Skills() {
    return (
        <>
        <section className='center-vertical'>
            <div className='center-inline text-center'>
                <div className='card'>
                    <FontAwesomeIcon icon={faReact} size="5x" className="mt-2" />
                    <p>React</p>
                </div>
                <div className='card'>
                    <FontAwesomeIcon icon={faJsSquare} size="5x" className="mt-2" />
                    <p>JavaScript</p>
                </div>
                <div className='card'>
                    <FontAwesomeIcon icon={faHtml5} size="5x" className="mt-2" />
                    <p>HTML &amp; CSS</p>
                </div>
                <div className='card'>
                    <FontAwesomeIcon icon={faCss3Alt} size="5x" className="mt-2" />
                    <p>HTML &amp; CSS</p>
                </div>
            </div>
        </section>

        {/*
        <section style={{ height: "100vh"}} id="skills">
            <MDBRow className="justify-content-center">
                <h1 className="display-6" style={{ marginTop: "75px"}}>Skills</h1>
                <MDBCard 
                    style={{ width: '18rem' }}
                    className="m-2"
                >
                    <FontAwesomeIcon icon={faReact} size="5x" className="mt-2" />
                    <MDBCardBody>
                        <MDBCardTitle>React</MDBCardTitle>
                        <MDBCardText>
                        React allows me to build an app in an easy to understand way. Combining components 
                         to create powerful, fast web apps.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard 
                    style={{ width: '18rem' }}
                    className="m-2"
                >
                    <FontAwesomeIcon icon={faJsSquare} size="5x" className="mt-2" />
                    <MDBCardBody>
                        <MDBCardTitle>JavaScript</MDBCardTitle>
                        <MDBCardText>
                        JavaScript is used to turn static pages into interactive apps. Needed to execute API 
                        calls, update the DOM and add additional animations.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard 
                    style={{ width: '18rem' }}
                    className="m-2"
                >
                    <FontAwesomeIcon icon={faCode} size="5x" className="mt-2" />
                    <MDBCardBody>
                        <MDBCardTitle>Front-End Development</MDBCardTitle>
                        <MDBCardText>
                        Using a mobile-first approach to produce responsive layouts.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBRow>
        </section>
        */}
        </>
    );
}

export default Skills;