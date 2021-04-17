import React, { useEffect, useState } from 'react';
import { Button, Container, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import PropTypes from "prop-types";

import { addQuestionnaireClear } from '../../redux/actionCreators/availableQuestionnaire';
import { addQuestionnaire } from '../../redux/actions/availableQuestionnaireActions';
import { clearError } from '../../redux/actions/errorActions';
import { clearQuestionnaireWithQuestions, getQuestionnaireWithQuestions } from '../../redux/actions/questionnaireAction';
import { displayErrors } from '../../utlis';
import Question from '../questionnaire/question';
import Loader from '../loader';

const DetailedQuestionnaire = (props) => {

    const { showAddButton, setLoading } = props

    const dispatch = useDispatch();

    const history = useHistory();

    const { questionnaireId, companyId, companyQuestionnaireId } = useParams();

    const { token } = useSelector((state) => state.auth);

    const { isLoading, error, questionnaire } = useSelector(
        (state) => state.questionnaire
    );

    const { data } = useSelector(state => state.addQuestionnaire)

    const errorsSelector = useSelector((state) => state.errors);
    const { allErrors } = errorsSelector;

    const [questionnaireDetails, setQuestionnaireDetails] = useState({})
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        if (data) {
            history.push(`/companies/my/${companyId}/questionnaire`)
            dispatch(addQuestionnaireClear())
        }
    }, [data])

    useEffect(() => {
        setLoading(isLoading)
    }, [isLoading])

    useEffect(() => {
        if (questionnaire) {
            const { questionnaire: questionnaireBrief, questions } = questionnaire
            setQuestionnaireDetails(questionnaireBrief)
            setQuestions(questions)
        }
    }, [questionnaire])

    useEffect(() => {
        dispatch(getQuestionnaireWithQuestions(companyQuestionnaireId, token));
        return dispatch(clearQuestionnaireWithQuestions())
    }, []);

    useEffect(() => {
        displayErrors(allErrors);
        return () => dispatch(clearError())
    }, [allErrors]);

    const handleAddQuestionnaire = () => {
        dispatch(addQuestionnaire(companyId, companyQuestionnaireId))
    }

    return <Container className="w-50">
        <h3>{questionnaireDetails.title}</h3>
        <h6>{questionnaireDetails.description}</h6>
        <ListGroup>
            {questions.map((question, index) => (
                <Question key={index} pos={index + 1} question={question} onChangeHandler={() => { }} disabled={true} />
            ))}
            {showAddButton && <Button className="mt-2" onClick={handleAddQuestionnaire}>
                Add to company
            </Button>}
        </ListGroup>
    </Container>
}


DetailedQuestionnaire.propType = {
    showAddButton: PropTypes.bool
}

DetailedQuestionnaire.defaultProps = {
    showAddButton: true
}

export default Loader(DetailedQuestionnaire)
