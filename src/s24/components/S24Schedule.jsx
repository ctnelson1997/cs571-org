import { Table } from "react-bootstrap";

export default function S24Schedule() {
    return <>
        <h2>Schedule</h2>
        <p>All course content is available <a href="https://github.com/CS571-S24">via GitHub Classroom!</a> You may download the syllabus TBD. Course grading details <b>are provided below the schedule.</b> (N) links to notes and (R) links to recording of the lecture.</p>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Week Of</th>
                    <th>Topics</th>
                    <th>Homework</th>
                    <th>ICA</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Jan 22<br/></td>
                    <td>Intro to CS571 & Design Thinking</td>
                    <td><a href="https://github.com/CS571-S24/hw0">HW0</a> (1 pt)</td>
                    <td>ICA A</td>
                </tr>
                <tr>
                    <td>Jan 29<br/></td>
                    <td>Web Dev 1 & Web Dev 2</td>
                    <td><a href="https://github.com/CS571-S24/hw1">HW1</a></td>
                    <td>No ICA</td>
                </tr>
                <tr>
                    <td>Feb 5<br/></td>
                    <td>Web Dev 3 & Visual Design</td>
                    <td><a href="https://github.com/CS571-S24/hw2">HW2</a></td>
                    <td>ICA B</td>
                </tr>
                <tr>
                    <td>Feb 12<br/></td>
                    <td>Modern Web Dev 1 & Web Design</td>
                    <td><a href="https://github.com/CS571-S24/hw3">HW3</a></td>
                    <td>ICA C</td>
                </tr>
                <tr>
                    <td>Feb 19<br/></td>
                    <td>Modern Web Dev 2 & Interaction Design</td>
                    <td><a href="https://github.com/CS571-S24/hw4">HW4</a></td>
                    <td>ICA D</td>
                </tr>
                <tr>
                    <td>Feb 26<br/></td>
                    <td>Modern Web Dev 3 & Expert Evaluation</td>
                    <td><a href="https://github.com/CS571-S24/hw5">HW5</a></td>
                    <td>ICA E</td>
                </tr>
                <tr>
                    <td>Mar 4<br/></td>
                    <td>Modern Web Dev 4 & Accessibility</td>
                    <td><a href="https://github.com/CS571-S24/hw6">HW6</a></td>
                    <td>ICA F</td>
                </tr>
                <tr>
                    <td>Mar 11<br/></td>
                    <td>Modern Web Dev 5 & <strong>Midterm Exam</strong></td>
                    <td>No HW</td>
                    <td>No ICA</td>
                </tr>
                <tr>
                    <td>Mar 18<br/></td>
                    <td>Prototyping & Mobile Dev 1</td>
                    <td><a href="https://github.com/CS571-S24/hw7">HW7</a> (2 pts)</td>
                    <td>ICA G</td>
                </tr>
                <tr>
                    <td>Mar 25<br/></td>
                    <td><strong>Spring Break!</strong></td>
                    <td>No HW</td>
                    <td>No ICA</td>
                </tr>
                <tr>
                    <td>Apr 1<br/></td>
                    <td>Mobile Dev 2 & Mobile Design</td>
                    <td><a href="https://github.com/CS571-S24/hw8">HW8</a></td>
                    <td>ICA H</td>
                </tr>
                <tr>
                    <td>Apr 8<br/></td>
                    <td>Mobile Dev 3 & VUI Design/Exp Prototyping</td>
                    <td><a href="https://github.com/CS571-S24/hw9">HW9</a></td>
                    <td>ICA I</td>
                </tr>
                <tr>
                    <td>Apr 22<br/></td>
                    <td>Voice Dev 1 & Designing Agents</td>
                    <td><a href="https://github.com/CS571-S24/hw10">HW10</a></td>
                    <td>ICA J</td>
                </tr>
                <tr>
                    <td>Apr 29<br/></td>
                    <td>Voice Dev 2 & User Evaluation</td>
                    <td><a href="https://github.com/CS571-S24/hw11">HW11</a></td>
                    <td>ICA K</td>
                </tr>
                <tr>
                    <td>Apr 29<br/></td>
                    <td>Fullstack Dev & Professor's Choice</td>
                    <td><a href="https://github.com/CS571-S24/hw11">HW12</a> (1 pt)</td>
                    <td>ICA L</td>
                </tr>
                <tr>
                    <td>TBD<br/></td>
                    <td><strong>Final Exam</strong></td>
                    <td>No HW</td>
                    <td>No ICA</td>
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
                    <td>44</td>
                    <td>10 HWs (4 pts) & 3 HWs (1-2 pts each)</td>
                </tr>
                <tr>
                    <td>In Class Activities (ICAs)</td>
                    <td>11</td>
                    <td>12 ICAs (1 pt), lowest dropped</td>
                </tr>
                <tr>
                    <td>Midterm Exam</td>
                    <td>20</td>
                    <td>Single-sided notesheet</td>
                </tr>
                <tr>
                    <td>Final Exam</td>
                    <td>25</td>
                    <td>Double-sided notesheet</td>
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