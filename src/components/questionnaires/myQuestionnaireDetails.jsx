import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import DetailedQuestionnaire from './detailedQuestionnaire';
import QuestionnaireRuleList from './questionnaireRuleList';

const MyQuestionnaireDetails = () => {

    const history = useHistory()

    const { companyId, questionnaireId, companyQuestionnaireId } = useParams()

    const handleClick = () => {
        history.push(`/companies/my/${companyId}/questionnaire/${questionnaireId}/companyQuestionnaire/${companyQuestionnaireId}/rules`)
    }

    return <Container>
        <DetailedQuestionnaire showAddButton={false} />
        <Row className="justify-content-center mt-2">
            <Button className="text-center" onClick={handleClick}>Add rules</Button>
        </Row>
        <QuestionnaireRuleList />
    </Container>
}

export default MyQuestionnaireDetails
