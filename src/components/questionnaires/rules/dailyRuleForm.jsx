import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';

const DailyRule = ({ dailyData, handleChange }) => {

    return <Form inline>
        <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
            Hour of day (24 hour format)
    </Form.Label>
        <Form.Control
            as="select"
            id="hour"
            className="my-1 mr-sm-2"
            value={dailyData.hour}
            onChange={handleChange}
            custom>
            {[...Array(24).keys()].map((value, index) => (
                <option key={index}>{value}</option>
            ))}
        </Form.Control>
    </Form>
}

export default DailyRule
