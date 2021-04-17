import React from 'react';
import { Table } from 'react-bootstrap';

const AvailableQuestionnaireList = ({ questionnaires, handleClick }) => {

    return <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>No. of questions</th>
            </tr>
        </thead>
        <tbody>
            {questionnaires.map(({ title, question_counts, id }, index) => (
                <tr className="cursor-pointer" key={index} onClick={() => handleClick(id)} >
                    <td>{index + 1}</td>
                    <td>{title}</td>
                    <td>{question_counts}</td>
                </tr>
            ))}
        </tbody>
    </Table>
}

export default AvailableQuestionnaireList
