import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Main from './Components/Main';
import Skills from './Components/Skills';
import Blog from './Components/Blog';
import Navigation from './Components/Navigation';

import { Container, Row, Col, Badge, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
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
