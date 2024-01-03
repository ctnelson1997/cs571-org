import { Alert, Col, Container, Row } from 'react-bootstrap';
import S24About from './components/S24About';
import S24Schedule from './components/S24Schedule';

function S24Home() {
  return (
    <div className="pad">
      <Container>
        <Alert variant='warning'><strong>Welcome to CS571: Building User Interfaces!</strong> Please note that all content below is <em>tentative</em>. We are still making final decisions for the Spring 2024 semester. We look forward to having you in the class! :)</Alert>

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
