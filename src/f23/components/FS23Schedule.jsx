import { Table } from "react-bootstrap";

export default function F23Schedule() {
    return <>
        <h2>Schedule</h2>
        <p>All course content is available <a href="https://github.com/CS571-F23">via GitHub Classroom!</a> You may download <a target="_blank">the syllabus TBD.</a> Course grading details <b>are provided below the schedule.</b> (N) links to notes and (R) links to recording of the lecture.</p>
        <p>The course schedule is still being decided.</p>
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
                    <td>52</td>
                    <td>12 HWs, 5 pts each, HWs 1 & 7 only 1 pt</td>
                </tr>
                <tr>
                    <td>Weekly Quizzes</td>
                    <td>11</td>
                    <td>12 quizzes, 1 pt each, lowest dropped</td>
                </tr>
                <tr>
                    <td>Library Usage</td>
                    <td>2</td>
                    <td>Use of an NPM package</td>
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