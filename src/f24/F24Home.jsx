import { Alert, Button, Card, Col, Container, Modal, Row, Table } from 'react-bootstrap';
import F24LectureCard from './components/F24LectureCard';
import { useState } from 'react';
import F24LectureFocus from './components/F24LectureFocus';
import CS571Configurator from '../config/configurator';
import lectures from './F24Lectures';

function F24Home() {

  const [allLectures, setAllLectures] = useState(lectures);
  const [selectedLecture, setSelectedLecture] = useState(allLectures[0]);

  const scrollTo = (to) => {
    const scheduleElement = document.getElementById(to);
    if (scheduleElement) {
      scheduleElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const showLecture = (lec) => {
    setSelectedLecture(lec);
    scrollTo("lecture-focus")
  }


  return (
    <div className="pad">
      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <h1>Welcome to CS571 Fall 2024!</h1>
        <p>Co-taught by <a target="_blank" href="https://coletnelson.us/">Cole Nelson</a> and <a target="_blank" href="https://www.yuhangz.com/">Yuhang Zhao</a></p>
        {!CS571Configurator.IS_ON_PREM && <Button onClick={() => scrollTo("lecture-focus")}>Let's get started!</Button>}
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
            <h3>Course Syllabus</h3>
            <p>You can <a target='_blank' href='https://raw.githubusercontent.com/CS571-F24/lectures/main/CS571%20F24%20Syllabus.pdf'>download the course syllabus here</a>.</p>
            <h3>Getting Started</h3>
            <p>The semester begins on <strong>Thursday, September 5th, 2024</strong>. Lecture slides and recordings will be posted every Tuesday and Thursday.</p>
            <p>A Badger ID (a unique ID representing <em>you</em>) is needed to complete the homework assignments; you can get one by visiting <a target="_blank" href={CS571Configurator.BADGERAUTH_UI_CENTER}>the BadgerAuth Center</a>.</p>
            {!CS571Configurator.IS_ON_PREM && <p>When making API requests, simply replace <code>cs571api.cs.wisc.edu</code> with <code>cs571.org</code></p>}
          </Col>
        </Row>

      </Container>

      <div style={{marginBottom: "4rem"}} id="lecture-focus"></div>

      {!CS571Configurator.IS_ON_PREM && <Container style={{ textAlign: "center" }} fluid>
        <Row style={{ textAlign: "center", marginTop: "2rem" }}>
          <h2 style={{ fontSize: "2.5rem" }}>Lectures</h2>
          <p>Lectures cover both <strong style={{ color: "firebrick" }}><em>implementation</em></strong> and <strong style={{ color: "slateblue" }}><em>design</em></strong> topics.</p>
          <hr /><br /><br />
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <Container>
              <Row style={{ maxHeight: "80vh", alignItems: "center", display: "inline-grid", overflowY: "auto" }}>
                {
                  allLectures.map(t => <Col key={t.title} xs={12}>
                    <F24LectureCard {...t} showLecture={showLecture} />
                  </Col>)
                }
              </Row>
            </Container>
          </Col>
          <Col xs={12} md={8}>
            <div><F24LectureFocus {...selectedLecture} /></div>
          </Col>
        </Row>
      </Container>}
    </div>
  );
}

export default F24Home;
