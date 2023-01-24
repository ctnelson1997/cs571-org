import logo from './logo.svg';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import Schedule from './components/Schedule';
import About from './components/About';

function App() {
  return (
    <div className='pad'>
      <Container>
        <Row>
          <h1>Welcome to CS571 S23!</h1>
        </Row>
        <Row>
          <Col xs={12} lg={6}>
            <About />
          </Col>
          <Col xs={12} lg={6}>
            <Schedule />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
