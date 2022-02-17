import { Row, Col, Image } from 'react-bootstrap';
import ProfilePicture from '../Images/man.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Main() {
    return (
        <section>
            <Row style={{ height: "100vh" }} className="text-center align-items-center">
                <Col >
                    <Image roundedCircle src={ProfilePicture} style={{ width: "200px" }} />
                    <h1 className='display-1'>Kyle Johnson</h1>
                    <p className='lead'>Full-stack react developer.</p>
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </Col>
            </Row>
        </section>
    );
}

export default Main;