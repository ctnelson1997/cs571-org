import { Col, Container, Row } from 'react-bootstrap';
import CS571Configurator from '../config/configurator';

function F25Home() {
  return (
    <div className="pad">
      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <h1>Welcome to CS571 Spring 2026!</h1>
        <p>Taught by <a target="_blank" href="https://coletnelson.us/">Cole Nelson</a> and Kathryn Jensen</p>
      </div>
      <Container>
        <Row style={{ textAlign: "center" }}><br /><br /><hr /><br /><br /></Row>

        <Row>
          <Col xs={12} md={6}>
            <h3>Description</h3>
            <p>Introduces software development of <strong>web</strong>, <strong>mobile</strong>, and <strong>agent-based</strong> user interfaces. This semester, the specific technologies we cover are...</p>
            <ul>
              <li><a target='_blank' href='https://developer.mozilla.org/en-US/'>HTML/CSS/JS</a></li>
              <li><a target='_blank' href='https://getbootstrap.com/'>Bootstrap</a></li>
              <li><a target='_blank' href='https://react.dev/'>React</a></li>
              <li><a target='_blank' href='https://reactnative.dev/'>React Native</a></li>
              <li><a target='_blank' href='http://openai.com/api/'>OpenAI</a></li>
            </ul>
            <p>While we use modern libraries and frameworks, our goal is to understand the development of these UIs more broadly.</p>

          </Col>
          <Col xs={12} md={6}>
            <h3>Course Syllabus</h3>
            <p>You can download the course syllabus via Canvas.</p>
            <h3>Getting Started</h3>
            <p>The semester begins on <strong>Tuesday, January 20th, 2026</strong>. Lecture slides and recordings will be posted every Tuesday and Thursday.</p>
            <p>A Badger ID (a unique ID representing <em>you</em>) is needed to complete the homework assignments; you can get one by visiting <a target="_blank" href={CS571Configurator.BADGERAUTH_UI_CENTER}>the BadgerAuth Center</a>.</p>
            {!CS571Configurator.IS_ON_PREM && <p>When making API requests, simply replace <code>cs571api.cs.wisc.edu</code> with <code>cs571.org</code></p>}
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default S26Home;
