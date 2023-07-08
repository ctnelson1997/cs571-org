import { Table } from "react-bootstrap";

export default function F23Schedule() {
    return <>
        <h2>Schedule</h2>
        <p>All course content is available <a href="https://github.com/CS571-F23">via GitHub Classroom!</a> You may download <a target="_blank">the syllabus TBD.</a> Course grading details <b>are provided below the schedule.</b> (N) links to notes and (R) links to recording of the lecture.</p>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Week Of</th>
                    <th>Topics</th>
                    <th>Homework</th>
                    <th>Quiz</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Sept 4<br/></td>
                    <td>Intro to CS571</td>
                    <td><a href="https://github.com/CS571-F23/hw0">HW0</a> (1pt)</td>
                    <td>No Quiz</td>
                </tr>
                <tr>
                    <td>Sept 11<br/></td>
                    <td>JavaScript 1 & JavaScript 2</td>
                    <td><a href="https://github.com/CS571-F23/hw1">HW1</a></td>
                    <td>Quiz A</td>
                </tr>
                <tr>
                    <td>Sept 18<br/></td>
                    <td>JavaScript 3 & Design Thinking</td>
                    <td><a href="https://github.com/CS571-F23/hw2">HW2</a></td>
                    <td>Quiz B</td>
                </tr>
                <tr>
                    <td>Sept 25<br/></td>
                    <td>React 1 & Visual Design</td>
                    <td><a href="https://github.com/CS571-F23/hw3">HW3</a></td>
                    <td>Quiz C</td>
                </tr>
                <tr>
                    <td>Oct 2<br/></td>
                    <td>React 2 & Web/Interaction Design</td>
                    <td><a href="https://github.com/CS571-F23/hw4">HW4</a></td>
                    <td>Quiz D</td>
                </tr>
                <tr>
                    <td>Oct 9<br/></td>
                    <td>React 3 & Design Patterns</td>
                    <td><a href="https://github.com/CS571-F23/hw5">HW5</a></td>
                    <td>Quiz E</td>
                </tr>
                <tr>
                    <td>Oct 16<br/></td>
                    <td>React 4 & Accessibility</td>
                    <td><a href="https://github.com/CS571-F23/hw6">HW6</a></td>
                    <td>Quiz F</td>
                </tr>
                <tr>
                    <td>Oct 23<br/></td>
                    <td>React 5 & <strong>Midterm Exam</strong></td>
                    <td>No HW</td>
                    <td>No Quiz</td>
                </tr>
                <tr>
                    <td>Oct 30<br/></td>
                    <td>React Native 1 & Prototyping</td>
                    <td><a href="https://github.com/CS571-F23/hw7">HW7</a> (1pt)</td>
                    <td>Quiz G</td>
                </tr>
                <tr>
                    <td>Nov 6<br/></td>
                    <td>React Native 2 & Mobile Design</td>
                    <td><a href="https://github.com/CS571-F23/hw8">HW8</a></td>
                    <td>Quiz H</td>
                </tr>
                <tr>
                    <td>Nov 13<br/></td>
                    <td>React Native 3 & VUI Design/Exp Prototyping</td>
                    <td><a href="https://github.com/CS571-F23/hw9">HW9</a></td>
                    <td>Quiz I</td>
                </tr>
                <tr>
                    <td>Nov 20<br/></td>
                    <td>DialogFlow 1 & <strong>Thanksgiving</strong></td>
                    <td><a href="https://github.com/CS571-F23/hw10">HW10</a></td>
                    <td>Quiz J</td>
                </tr>
                <tr>
                    <td>Nov 27<br/></td>
                    <td>DialogFlow 2 & User Evaluation/Agency</td>
                    <td><a href="https://github.com/CS571-F23/hw11">HW11</a></td>
                    <td>Quiz K</td>
                </tr>
                <tr>
                    <td>Dec 4<br/></td>
                    <td>FullStack Development & Expert Evaluation</td>
                    <td><a href="https://github.com/CS571-F23/hw12">HW12</a> (1pt)</td>
                    <td>Quiz L</td>
                </tr>
                <tr>
                    <td>Dec 11<br/></td>
                    <td>Professor's Choice & <strong>Study Day</strong></td>
                    <td>No HW</td>
                    <td>Bonus Quiz</td>
                </tr>
                <tr>
                    <td>Dec 18<br/></td>
                    <td><strong>Final Exam</strong></td>
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
                    <td>53</td>
                    <td>10 HWs (5 pts) & 3 HWs (1 pt)</td>
                </tr>
                <tr>
                    <td>Weekly Quizzes</td>
                    <td>11</td>
                    <td>12 quizzes, 1 pt each, lowest dropped</td>
                </tr>
                <tr>
                    <td>Midterm Exam</td>
                    <td>15</td>
                    <td>Single-sided notesheet</td>
                </tr>
                <tr>
                    <td>Final Exam</td>
                    <td>20</td>
                    <td>Double-sided notesheet</td>
                </tr>
                <tr>
                    <td>Personal Project</td>
                    <td>1</td>
                    <td>A small personal project</td>
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