import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';

import moment from "moment";

const getVariant = (input) => {
    if (input)
        return "danger"
    else
        return "primary"
}

const QuestionnaireList = ({ questionnaires, handleClick, changeQuestionnaireState }) => {

    return <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Added on</th>
                <th>Updated on</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {questionnaires.map(({ questionnaire, created_at, updated_at, currently_active, id, questionnaire_id }, index) => (
                <tr className="cursor-pointer" key={index} onClick={() => handleClick(id, questionnaire_id)} >
                    <td>{index + 1}</td>
                    <td>{questionnaire}</td>
                    <td>{moment(created_at).format('MMMM Do YYYY')}</td>
                    <td>{moment(updated_at).format('MMMM Do YYYY')}</td>
                    <td>
                        <Button
                            variant={getVariant(currently_active)}
                            onClick={(e) => changeQuestionnaireState(e, id, currently_active)}>
                            {currently_active ? "Disable" : "Enable"}
                        </Button>
                    </td>
                </tr>
            ))}
        </tbody>
    </Table>
}

export default QuestionnaireList
