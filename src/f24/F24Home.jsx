import { Alert, Button, Card, Col, Container, Modal, Row, Table } from 'react-bootstrap';
import F24LectureCard from './components/F24LectureCard';
import { useState } from 'react';
import F24LectureFocus from './components/F24LectureFocus';
import CS571Configurator from '../config/configurator';

function F24Home() {

  const [selectedLecture, setSelectedLecture] = useState();

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
        <Button onClick={() => scrollTo("lectures")}>Let's get started!</Button>
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
          </Col>
        </Row>
        <Row id="lectures" style={{ textAlign: "center", marginTop: "2rem" }}>
          <h2 style={{ fontSize: "2.5rem" }}>Lectures</h2>
          <p>Lectures cover both <strong style={{color: "firebrick"}}><em>implementation</em></strong> and <strong style={{color: "slateblue"}}><em>design</em></strong> topics.</p>
          <hr /><br /><br /></Row>
      </Container>


      <Container style={{ textAlign: "center" }} fluid>
        <Row>
          <Col xs={12} md={4}>
            <Container>
              <Row style={{maxHeight: "80vh", alignItems: "center", display: "inline-grid", overflowY: "auto"}}>
                {
                  [{
                    title: "Intro to CS571",
                    desc: "Introduces CS571 & JSON.",
                    dt: "Thursday, Sept 5th",
                    available: false,
                    // vid: "https://www.kaltura.com/p/1660902/embedPlaykitJs/uiconf_id/55063162?iframeembed=true&playlist_id=1_jti46iju&config[provider]={'widgetId':'1_ctewrozc'}"
                  },
                  {
                    title: "Web Dev Basics 1",
                    desc: "HTML, CSS, and JS Basics",
                    dt: "Tuesday, Sept 10th",
                    lectureType: "implementation",
                    available: false,
                  },
                  {
                    title: "Design Thinking",
                    desc: "The Design Thinking Process",
                    dt: "Tuesday, Sept 12th",
                    lectureType: "design",
                    available: false,
                  },
                  {
                    title: "Web Dev Basics 2",
                    desc: "DOM Manipulation and API Requests",
                    dt: "Tuesday, September 17th",
                    lectureType: "implementation",
                    available: false,
                  },
                  {
                    title: "Web Dev Basics 3",
                    desc: "Various Topics including Declarative Programming, Syntactic Sugar, and CSS Libraries",
                    dt: "Thursday, September 19th",
                    lectureType: "implementation",
                    available: false,
                  },
                  {
                    title: "Web Dev 1",
                    desc: "React Basics",
                    dt: "Tuesday, September 24th",
                    lectureType: "implementation",
                    available: false,
                  },
                  {
                    title: "Visual Design",
                    desc: "Aesthetics & Pyschology of Design",
                    dt: "Tuesday, September 24th",
                    lectureType: "design",
                    available: false,
                  },
                  {
                    title: "More...",
                    desc: "To be continued...",
                    dt: "TBD",
                    available: false,
                  },
                  ].map(t => <Col key={t.title} xs={12}>
                    <F24LectureCard {...t} showLecture={showLecture} />
                  </Col>)
                }
              </Row>
            </Container>
          </Col>
          <Col xs={12} md={8}>
            <div id="lecture-focus"><F24LectureFocus {...selectedLecture} /></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default F24Home;
