import React, { useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import cronstrue from "cronstrue"
import { clearDeleteRuleRedux, deleteQuestionnaireRule, getQuestionnaireRuleList } from '../../redux/actions/questionnaireRuleActions';
import { jsonToCronFormat } from '../../utlis';
import { Button } from 'react-bootstrap';
import Loader from '../loader';


const QuestionnaireRuleList = ({ setLoading }) => {

    const dispatch = useDispatch()

    const { companyId, questionnaireId } = useParams()

    const { isLoading: isLoadingList, questionnaireRuleList } = useSelector(state => state.questionnaireRuleList)

    const { isLoading: isLoadingDelete, data } = useSelector(state => state.deleteRule)

    useEffect(() => {
        if (isLoadingList || isLoadingDelete)
            setLoading(true)
        else
            setLoading(false)
    }, [isLoadingList, isLoadingDelete])

    useEffect(() => {
        dispatch(getQuestionnaireRuleList(companyId, questionnaireId))
    }, [data])

    useEffect(() => {
        return () => dispatch(clearDeleteRuleRedux())
    })

    const handleDelete = (ruleId) => {
        dispatch(deleteQuestionnaireRule(companyId, questionnaireId, ruleId))
    }

    return <Container className="mt-3">
        <h4>Currently applied rules</h4>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {questionnaireRuleList.map((rule, index) => {
                    return <tr className="cursor-pointer" key={index}>
                        <td>{index + 1}</td>
                        <td>{cronstrue.toString(jsonToCronFormat(rule.crontab))}</td>
                        <td><Button variant="danger" onClick={() => handleDelete(rule.id)}>Delete</Button></td>
                    </tr>
                })}
            </tbody>
        </Table>
    </Container>
}

export default Loader(QuestionnaireRuleList);
