import { Col, Container, Row } from 'react-bootstrap';

function SU25Home() {
  return (
    <div className="pad">
      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <h1>Welcome to CS571 Summer 2025!</h1>
        <p>Taught by <a target="_blank" href="https://coletnelson.us/">Cole Nelson</a></p>
      </div>
      <Container>
        <Row style={{ textAlign: "center" }}><br /><br /><hr /><br /><br /></Row>

        <Row>
          <Col xs={12} md={6}>
            <h3>Description</h3>
            <p>Introduces software development of <strong>web</strong>, <strong>mobile</strong>, and <strong>voice</strong> user interfaces. This semester, the specific technologies we cover are...</p>
            <ul>
              <li><a target='_blank' href='https://developer.mozilla.org/en-US/'>HTML/CSS/JS</a></li>
              <li><a target='_blank' href='https://getbootstrap.com/'>Bootstrap</a></li>
              <li><a target='_blank' href='https://react.dev/'>React</a></li>
              <li><a target='_blank' href='https://reactnative.dev/'>React Native</a></li>
              <li><a target='_blank' href='https://wit.ai/'>WitAI</a></li>
            </ul>
            <p>While we use modern libraries and frameworks, our goal is to understand the development of these UIs more broadly.</p>

          </Col>
          <Col xs={12} md={6}>
            <h3>Course Information</h3>
            <p>The summer term is an accelerated term available <em>only to enrolled UW-Madison students.</em> Interested in enrolling? Visit <a target='_blank' href='https://enroll.wisc.edu/search'>enroll.wisc.edu</a>.</p>
            <p>Not a UW-Madison student? Spring 2025 is freely available to <em>everyone</em> at <a target='_blank' href='https://cs571.org/'>cs571.org</a>. Fall 2025 will also be made freely available in September.</p>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default SU25Home;
