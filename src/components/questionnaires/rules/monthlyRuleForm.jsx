import React from 'react';
import { Form } from 'react-bootstrap';

const WeeklyRule = ({ monthlyData, handleChange }) => {
    const { hour, day_of_month } = monthlyData
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
        <Form.Label>Day of month</Form.Label>
        <Form.Control
            as="select"
            id="day_of_month"
            className="my-1 mr-sm-2"
            value={day_of_month}
            onChange={handleChange}
            custom>
            {[...Array(31).keys()].map((value, index) => (
                <option key={value + 1}>{value + 1}</option>
            ))}
        </Form.Control>
    </Form>
}

export default WeeklyRule
