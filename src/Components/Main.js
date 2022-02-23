import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import ProfilePicture from '../Images/man.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Main() {
    return (
        <section>
            <MDBRow style={{ height: "100vh" }} className="text-center align-items-center" id="home">
                <MDBCol >
                    <img className="rounded-circle" src={ProfilePicture} style={{ width: "200px" }} />
                    <h1 className='display-1'>Kyle Johnson</h1>
                    <p className='lead'>Full-stack react developer.</p>
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </MDBCol>
            </MDBRow>
        </section>
    );
}

export default Main;