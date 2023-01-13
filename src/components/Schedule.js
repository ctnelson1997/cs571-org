import { Table } from "react-bootstrap";

export default function Schedule() {
    return <>
        <h2>Schedule</h2>
        <p>All course content is available <a href="https://github.com/CS571-F22">via GitHub Classroom!</a> Course grading details <b>are provied below the schedule.</b></p>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Topics</th>
                    <th>Homework</th>
                    <th>Quiz</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Sept 13<br/></td>
                    <td><a href="https://github.com/CS571-F22/lectures/blob/main/Week01/Week01-JavaScript/week01-programming.pdf">JavaScript 1</a> & <a href="https://github.com/CS571-F22/lectures/blob/main/Week01/Week01-DesignThinking/week01-design.pdf">Design Thinking</a><br/></td>
                    <td><a href="https://github.com/CS571-F22/hw1">Assign HW1</a></td>
                    <td>Quiz A</td>
                </tr>
                <tr>
                    <td>Sept 20<br/></td>
                    <td><a href="https://github.com/CS571-F22/lectures/blob/main/Week02/Week02-JavaScript2/week02-javascript2.pdf">JavaScript 2</a> & <a href="https://github.com/CS571-F22/lectures/blob/main/Week02/Week02-Prototyping/week02-prototyping.pdf">Prototyping</a><br/></td>
                    <td><a href="https://github.com/CS571-F22/hw2">Assign HW2</a><br/></td>
                    <td>Quiz B</td>
                </tr>
                <tr>
                    <td>Sept 27<br/></td>
                    <td><a href="https://github.com/CS571-F22/lectures/blob/main/Week03/Week03-React/week03-react.pdf">React 1</a> & <a href="https://github.com/CS571-F22/lectures/blob/main/Week03/Week03-VisualDesign/week03-visualdesign.pdf">Visual Design</a><br/></td>
                    <td><a href="https://github.com/CS571-F22/hw3">Assign HW3</a><br/></td>
                    <td>Quiz C</td>
                </tr>
                <tr>
                    <td>Oct 4<br/></td>
                    <td><a href="https://github.com/CS571-F22/lectures/blob/main/Week04/Week04-React/week04-react2.pdf">React 2</a> & <a href="https://github.com/CS571-F22/lectures/blob/main/Week04/Week04-WebDesign/week04-webdesign.pdf">Web Design</a><br/></td>
                    <td><a href="https://github.com/CS571-F22/hw4">Assign HW4</a></td>
                    <td>Quiz D</td>
                </tr>
                <tr>
                    <td>Oct 11<br/></td>
                    <td><a href="https://github.com/CS571-F22/lectures/blob/main/Week05/Week05-React/week05-react3.pdf">React 3</a> & <a href="https://github.com/CS571-F22/lectures/blob/main/Week05/Week05-InteractionDesign/week05-interactiondesign.pdf">Interaction Design</a><br/></td>
                    <td><a href="https://github.com/CS571-F22/hw5">Assign HW5</a></td>
                    <td>Quiz E</td>
                </tr>
                <tr>
                    <td>Oct 18<br/></td>
                    <td><a href="https://github.com/CS571-F22/lectures/blob/main/Week06/Week06-React/week06-react4.pdf">React 4</a> & <a href="https://github.com/CS571-F22/lectures/blob/main/Week06/Week06-ExpertEvaluation/week06-expertevaluation.pdf">Expert Evaluation</a><br/></td>
                    <td>No HW</td>
                    <td>Quiz F</td>
                </tr>
                <tr>
                    <td>Oct 25<br/></td>
                    <td>Midterm<br/></td>
                    <td>No HW</td>
                    <td>No Quiz</td>
                </tr>
                <tr>
                    <td>Nov 1<br/></td>
                    <td><a href="https://github.com/CS571-F22/lectures/blob/main/Week08/Week08-ReactNative1/week08-reactnative1.pdf">React Native 1</a> & <a href="https://github.com/CS571-F22/lectures/blob/main/Week08/Week08-MobileDesign/week08-mobiledesign.pdf">Mobile Design</a><br/></td>
                    <td><a href="https://github.com/CS571-F22/hw6">Assign HW6</a></td>
                    <td>Quiz G</td>
                </tr>
                <tr>
                    <td>Nov 8<br/></td>
                    <td><a href="https://github.com/CS571-F22/lectures/blob/main/Week09/Week09-ReactNative2/week09-reactnative2.pdf">React Native 2</a> & <a href="https://github.com/CS571-F22/lectures/blob/main/Week09/Week09-DesignPatterns/week09-designpatterns.pdf">Design Patterns</a><br/></td>
                    <td><a href="https://github.com/CS571-F22/hw7">Assign HW7</a></td>
                    <td>Quiz H</td>
                </tr>
                <tr>
                    <td>Nov 15<br/></td>
                    <td>React Native 3 & Accessibility<br/></td>
                    <td>Assign HW8</td>
                    <td>Quiz I</td>
                </tr>
                <tr>
                    <td>Nov 22<br/></td>
                    <td>Experience Prototyping & VUI Design<br/></td>
                    <td>Assign HW9</td>
                    <td>Quiz J</td>
                </tr>
                <tr>
                    <td>Nov 29<br/></td>
                    <td>Building Voice Agents w/ Dialogflow<br/></td>
                    <td>Assign HW10</td>
                    <td>Quiz K</td>
                </tr>
                <tr>
                    <td>Dec 6<br/></td>
                    <td>Usability Evaluation & Designing Agents<br/></td>
                    <td>No HW</td>
                    <td>Quiz L</td>
                </tr>
                <tr>
                    <td>Dec 13<br/></td>
                    <td>Final Exam<br/></td>
                    <td>No HW</td>
                    <td>No Quiz</td>
                </tr>
            </tbody>
        </Table>

        <h2>Grading</h2>
        <p>This is primarily <b>a project-based course.</b></p>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Weight</th>
                    <th>Notes</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Weekly Assignments</td>
                    <td>50</td>
                    <td>5 pts each</td>
                </tr>
                <tr>
                    <td>Midterm Exam</td>
                    <td>15</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Final Exam</td>
                    <td>20</td>
                    <td>Cumulative</td>
                </tr>
                <tr>
                    <td>Weekly Quizzes</td>
                    <td>12</td>
                    <td>1 pt each</td>
                </tr>
                <tr>
                    <td>External Library</td>
                    <td>3</td>
                    <td>Use of an NPM package</td>
                </tr>
            </tbody>
        </Table>

        <p>There is no rounding of grades.</p>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Score</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>[93, 100]</td>
                    <td>A</td>
                </tr>
                <tr>
                    <td>[88, 93)</td>
                    <td>AB</td>
                </tr>
                <tr>
                    <td>[80, 88)</td>
                    <td>B</td>
                </tr>
                <tr>
                    <td>[75, 80)</td>
                    <td>BC</td>
                </tr>
                <tr>
                    <td>[70, 75)</td>
                    <td>C</td>
                </tr>
                <tr>
                    <td>[60, 70)</td>
                    <td>D</td>
                </tr>
                <tr>
                    <td>[0, 60)</td>
                    <td>F</td>
                </tr>
            </tbody>
        </Table>
    </>
}