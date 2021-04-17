import React from 'react';
import { Form } from 'react-bootstrap';
import { DAYS_OF_WEEK } from '../../../constants/commonConstants';

const WeeklyRule = ({ weeklyData, handleChange }) => {
    const { hour, day_of_week } = weeklyData
    return <Form>
        <Form.Group>
            <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
                Hour of day (24 hour format)
            </Form.Label>
            <Form.Control
                as="select"
                id="hour"
                className="my-1 mr-sm-2"
                value={hour}
                onChange={handleChange}
                custom>
                {[...Array(24).keys()].map((value, index) => (
                    <option key={index}>{value}</option>
                ))}
            </Form.Control>
        </Form.Group>
        <Form.Label>Day of week</Form.Label>
        <Form.Control
            as="select"
            id="day_of_week"
            className="my-1 mr-sm-2"
            value={day_of_week}
            onChange={handleChange}
            custom>
            {DAYS_OF_WEEK.map((value, index) => (
                <option key={index} value={index}>{value}</option>
            ))}
        </Form.Control>
    </Form>
}

export default WeeklyRule
