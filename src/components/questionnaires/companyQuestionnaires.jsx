import React, { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { COMPANIES_RESOURCE } from '../../constants/apiConstants';
import { AVAILABLE_QUESTIONNAIRE_ROUTE } from '../../constants/routesPath';
import getCompanyQuestionnaire from '../../redux/actions/companyQuestionnaireActions';
import { clearError } from '../../redux/actions/errorActions';
import { displayErrors } from '../../utlis';
import Loader from '../loader';
import QuestionnaireList from './questionnaireList';
import { updateQuestionnaireState, clearQuestionnaireStateRedux } from "../../redux/actions/questionnaireDetailsActions"

const CompanyQuestionnaires = ({ setLoading }) => {
    const dispatch = useDispatch()

    const history = useHistory()

    const { companyId } = useParams()

    const errorsSelector = useSelector((state) => state.errors);
    const { allErrors } = errorsSelector;

    const { isLoading, questionnaires } = useSelector(state => state.companyQuestionnaire)

    const { data } = useSelector(state => state.companyQuestionnaireState)

    useEffect(() => {
        dispatch(getCompanyQuestionnaire(companyId))
        return () => {
            dispatch(clearQuestionnaireStateRedux())
        }
    }, [data])

    useEffect(() => {
        setLoading(isLoading)
    }, [isLoading])

    useEffect(() => {
        displayErrors(allErrors);
        return () => dispatch(clearError())
    }, [allErrors]);

    const handleClick = () => {
        history.push(`/companies/my/${companyId}/questionnaire/available-questionnaire`)
    }

    const handleQuestionnaireClick = (questionnaireId, companyQuestionnaireId) => {
        history.push(`/companies/my/${companyId}/questionnaire/${questionnaireId}/companyQuestionnaire/${companyQuestionnaireId}`)
    }

    const changeQuestionnaireState = (e, questionnaireId, currently_active) => {
        e.stopPropagation();
        dispatch(updateQuestionnaireState(companyId, questionnaireId, !currently_active))
    }

    return <Container>
        <h2 className="text-center  ">Company Questionnaires</h2>
        <Button className="mb-2" onClick={handleClick}>Add More Questionnaire</Button>
        <QuestionnaireList
            questionnaires={questionnaires}
            handleClick={handleQuestionnaireClick}
            changeQuestionnaireState={changeQuestionnaireState}
        />
    </Container>
}

export default Loader(CompanyQuestionnaires)
