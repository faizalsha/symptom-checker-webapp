import React, { useEffect } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { addQuestionnaire, clearAddQuestionnaire } from '../../redux/actions/availableQuestionnaireActions';
import { clearError } from '../../redux/actions/errorActions';
import { getQuestionnaireDetails } from '../../redux/actions/questionnaireDetailsActions';
import { displayErrors } from '../../utlis';

const QuestionnaireDetails = () => {

    const dispatch = useDispatch()

    const history = useHistory()

    const { companyId, questionnaireId } = useParams()

    const { questionnaire } = useSelector(state => state.questionnaireDetails)

    const { data } = useSelector(state => state.addQuestionnaire)


    const errorsSelector = useSelector((state) => state.errors);
    const { allErrors } = errorsSelector;

    useEffect(() => {
        displayErrors(allErrors);
        return () => dispatch(clearError())
    }, [allErrors]);

    useEffect(() => {
        dispatch(getQuestionnaireDetails(questionnaireId))
    }, [])

    useEffect(() => {
        if (data) {
            history.push(`/companies/my/${companyId}/questionnaire`)
            dispatch(clearAddQuestionnaire())
        }
    }, [data])

    const handleAddQuestionnaire = () => {
        dispatch(addQuestionnaire(companyId, questionnaireId))
    }

    return <Container className="w-50">
        <Card>
            <Card.Header as="h5">Questionnaire Brief</Card.Header>
            {questionnaire && <Card.Body>
                {questionnaire.title && <Card.Title>{questionnaire.title}</Card.Title>}
                {questionnaire.description && <Card.Text>{questionnaire.description}</Card.Text>}
                {questionnaire.question_counts && <Card.Text>Total Number of questions: {questionnaire.question_counts}</Card.Text>}
                <Row>
                    <Button as={Col} variant="primary mx-2" onClick={handleAddQuestionnaire}>
                        Add to company
                    </Button>
                    <Button as={Col} variant="primary mx-2">View Details</Button>
                </Row>
            </Card.Body>}
        </Card>
    </Container>
}

export default QuestionnaireDetails
