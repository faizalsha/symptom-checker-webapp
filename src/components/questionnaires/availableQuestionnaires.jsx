import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { AVAILABLE_QUESTIONNAIRE_ROUTE, QUESTIONNAIRE_DETAILS_ROUTE } from '../../constants/routesPath';
import { getAvailableQuestionnaires } from '../../redux/actions/availableQuestionnaireActions';
import { clearError } from '../../redux/actions/errorActions';
import { displayErrors } from '../../utlis';
import Loader from '../loader';
import AvailableQuestionnaireList from './availableQuestionnaireList';

const AvailableQuestionnaire = ({ setLoading }) => {

    const dispatch = useDispatch()

    const history = useHistory()

    const { companyId } = useParams()

    const errorsSelector = useSelector((state) => state.errors);
    const { allErrors } = errorsSelector;

    const { isLoading, questionnaires } = useSelector(state => state.availableQuestionnaire)

    useEffect(() => {
        displayErrors(allErrors)
        return () => dispatch(clearError())
    }, [allErrors])

    useEffect(() => {
        setLoading(isLoading)
    }, [isLoading])

    useEffect(() => {
        dispatch(getAvailableQuestionnaires(companyId))
    }, [])

    const handleClick = (questionnaireId) => {
        console.log('World', questionnaireId)
        history.push(`/companies/my/${companyId}/questionnaire/available-questionnaire/${questionnaireId}`)
    }
    return <Container>
        <h2 className="text-center">Available Questionnaires</h2>
        <AvailableQuestionnaireList questionnaires={questionnaires} handleClick={handleClick} />
    </Container>
}

export default Loader(AvailableQuestionnaire)
