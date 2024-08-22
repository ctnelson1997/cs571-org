import { Alert, Col, Container, Row } from 'react-bootstrap';
import F24About from './components/F24About';
import F24Schedule from './components/F24Schedule';

function F24Home() {
  return (
    <div className="pad">
      <Container>
        <Row>
          <h1>Welcome to CS571 Fall 2024!</h1>
        </Row>
        <Row>
          <Col xs={12} lg={6}>
            <F24About />
          </Col>
          <Col xs={12} lg={6}>
            <F24Schedule />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default F24Home;
