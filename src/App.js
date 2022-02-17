import TreehouseVisual from './Components/TreehouseVisual';
import Main from './Components/Main';
import Skills from './Components/Skills';
import Blog from './Components/Blog';
import Navigation from './Components/Navigation';

import { Container, Row, Col, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    return (
        <Container>
            <Navigation />

            <Main />

            <Skills />

            <Blog />

        </Container>
    );
}

export default App;
