import React, { useEffect, useState } from 'react';

import { Button, Container, Form, Tabs, Tab } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import cronstrue from 'cronstrue';

import { clearRuleRedux, setRule } from '../../redux/actions/questionnaireRuleActions';
import { displayErrors, jsonToCronFormat } from '../../utlis';
import DailyRule from './rules/dailyRuleForm';
import MonthlyRule from './rules/monthlyRuleForm';
import WeeklyRule from './rules/weeklyRuleForm';
import Loader from '../loader';
import CustomRule from './rules/customRuleForm';
import { clearError } from '../../redux/actions/errorActions';

const QuestionnaireRule = ({ setLoading }) => {

    const history = useHistory()

    const dispatch = useDispatch()

    const { companyId, questionnaireId, companyQuestionnaireId } = useParams()

    const [key, setKey] = useState('daily');



    const [dailyData, setDailyData] = useState({
        hour: 0
    })
    const [weeklyData, setWeeklyData] = useState({
        hour: 0,
        day_of_week: 0
    })

    const [monthlyData, setMonthlyData] = useState({
        hour: 0,
        day_of_month: 1
    })

    const [customData, setCustomData] = useState({
        minute: 0,
        hour: '*',
        day_of_month: '*',
        month_of_year: '*',
        day_of_week: '*'
    })

    const [cron, setCron] = useState(jsonToCronFormat(dailyData))

    const { isLoading, data } = useSelector(state => state.createQuestionnaireRule)

    useEffect(() => {
        setLoading(isLoading)
    }, [isLoading])

    useEffect(() => {
        if (key === 'daily') setCron(jsonToCronFormat(dailyData))
        if (key === 'weekly') setCron(jsonToCronFormat(weeklyData))
        if (key === 'monthly') setCron(jsonToCronFormat(monthlyData))
    }, [key, dailyData, monthlyData, weeklyData])

    const errorsSelector = useSelector((state) => state.errors);

    const { allErrors } = errorsSelector;

    useEffect(() => {
        if (data) {
            history.replace(`/companies/my/${companyId}/questionnaire/${questionnaireId}/companyQuestionnaire/${companyQuestionnaireId}`)
        }

        return () => {
            dispatch(clearRuleRedux())
        }
    }, [data])

    useEffect(() => {
        displayErrors(allErrors);
        return () => dispatch(clearError())
    }, [allErrors]);

    const handleDailyDataChange = (e) => {
        setDailyData({
            ...dailyData,
            [e.target.id]: e.target.value
        })
    }
    const handleWeeklyDataChange = (e) => {
        setWeeklyData({
            ...weeklyData,
            [e.target.id]: e.target.value
        })
    }
    const handleMonthlyDataChange = (e) => {
        setMonthlyData({
            ...monthlyData,
            [e.target.id]: e.target.value
        })
        console.log(e.target.id)
    }

    const handleCustomDataChange = (e) => {
        setCustomData({
            ...customData,
            [e.target.id]: e.target.value
        })
    }


    const handleSubmit = () => {
        let data;
        if (key === 'daily') {
            data = dailyData
        } else if (key === 'weekly') {
            data = weeklyData
        } else if (key === 'monthly') {
            data = monthlyData
        } else if (key === 'custom') {
            data = customData
        } else {
            return
        }
        dispatch(setRule(data, companyId, questionnaireId))
    }


    return <Container className="w-50">
        <h4>Setup questionnaire rule</h4>
        <Tabs
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-2">
            <Tab eventKey="daily" title="Daily">
                <DailyRule dailyData={dailyData} handleChange={handleDailyDataChange} />
            </Tab>
            <Tab eventKey="weekly" title="Weekly">
                <WeeklyRule weeklyData={weeklyData} handleChange={handleWeeklyDataChange} />
            </Tab>
            <Tab eventKey="monthly" title="Monthly">
                <MonthlyRule monthlyData={monthlyData} handleChange={handleMonthlyDataChange} />
            </Tab>
            <Tab eventKey="custom" title="Custom">
                <CustomRule customData={customData} handleChange={handleCustomDataChange} />
            </Tab>
        </Tabs>
        {key !== 'custom' && <h4 className="">{cronstrue.toString(cron)}</h4>}
        <Button onClick={handleSubmit}>Save</Button>
    </Container>
}

export default Loader(QuestionnaireRule)
