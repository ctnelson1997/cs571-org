import { Alert, Col, Container, Row } from 'react-bootstrap';
import S24About from './components/S24About';
import S24Schedule from './components/S24Schedule';

function S24Home() {
  return (
    <div className="pad">
      <Alert variant='danger'><strong>The Spring 2024 APIs will sunset on January 12th, 2025.</strong> Please use the Fall 2024 APIs.</Alert>
      <Alert variant='warning'><code>CS571.getBadgerId()</code> is no longer available for S24. Please <em>hardcode</em> your Badger ID.</Alert>
      <Container>
        <Row>
          <h1>Welcome to CS571 Spring 2024!</h1>
        </Row>
        <Row>
          <Col xs={12} lg={6}>
            <S24About />
          </Col>
          <Col xs={12} lg={6}>
            <S24Schedule />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default S24Home;
