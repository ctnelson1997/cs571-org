import { Col, Container, Row } from 'react-bootstrap';
import F23About from './components/F23About';
import F23Schedule from './components/FS23Schedule';

function F23Home() {
  return (
    <div className="pad">
      <Container>
        <Row>
          <h1>Welcome to CS571 Fall 2023!</h1>
        </Row>
        <Row>
          <Col xs={12} lg={6}>
            <F23About />
          </Col>
          <Col xs={12} lg={6}>
            <F23Schedule />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default F23Home;
