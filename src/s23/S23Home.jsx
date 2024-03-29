import { Alert, Col, Container, Row } from 'react-bootstrap';
import S23About from './components/S23About';
import S23Schedule from './components/S23Schedule';

function S23Home() {
  return (
    <div class="pad">
      <Container>
        <Alert variant='danger'><strong>The Spring 2023 APIs have been retired.</strong> Please see a newer semester of the course.</Alert>
        <Row>
          <h1>Welcome to CS571 S23!</h1>
        </Row>
        <Row>
          <Col xs={12} lg={6}>
            <S23About />
          </Col>
          <Col xs={12} lg={6}>
            <S23Schedule />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default S23Home;
