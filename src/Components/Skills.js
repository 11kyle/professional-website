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

import { Row, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

function Skills() {
    return (
        <section style={{ height: "100vh"}} id="skills">
            <Row className='justify-content-center'>
                <h1 className="display-6" style={{ marginTop: "100px"}}>Skills</h1>
                <Card style={{ width: '18rem' }}>
                    <FontAwesomeIcon icon={faReact} size="5x" style={{ color: "#000" }} />
                    <Card.Body>
                        <Card.Title>React</Card.Title>
                        <Card.Text>
                        React allows me to build an app in an easy to understand way. Combining components 
                         to create powerful, fast web apps.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <FontAwesomeIcon icon={faJsSquare} size="5x" />
                    <Card.Body>
                        <Card.Title>JavaScript</Card.Title>
                        <Card.Text>
                        JavaScript is used to turn static pages into interactive apps. Needed to execute API 
                        calls, update the DOM and add additional animations.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <FontAwesomeIcon icon={faCode} size="5x" />
                    <Card.Body>
                        <Card.Title>Front-End Development</Card.Title>
                        <Card.Text>
                        Using a mobile-first approach to produce responsive layouts.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </section>
    );
}

export default Skills;