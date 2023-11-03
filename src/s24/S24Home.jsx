import { Col, Container, Row } from 'react-bootstrap';
import S24About from './components/S24About';
import S24Schedule from './components/S24Schedule';

function S24Home() {
  return (
    <div className="pad">
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
