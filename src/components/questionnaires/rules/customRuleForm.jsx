import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

const CustomRule = ({ customData, handleChange }) => {
    const { hour, day_of_week, day_of_month, month_of_year } = customData
    return (
        <Form>
            <Form.Group as={Row} controlId="hour">
                <Form.Label column sm="3" >
                    <p><small><strong>Hour(s)</strong></small></p>
                </Form.Label>
                <Col sm="8">
                    <Form.Control
                        size="sm"
                        value={hour}
                        onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                        Cron Hours to Run. Use "*" for "all". (Example: "8,20")
            </Form.Text>
                </Col>

            </Form.Group>

            <Form.Group as={Row} controlId="day_of_week">
                <Form.Label column sm="3">
                    <p><small><strong>Day(s) of week</strong></small></p>
                </Form.Label>
                <Col sm="8">
                    <Form.Control
                        size="sm"
                        value={day_of_week}
                        onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                        Cron Days Of The Week to Run. Use "*" for "all". (Example: "0,5")
                </Form.Text>
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="day_of_month">
                <Form.Label column sm="3">
                    <p><small><strong>Day(s) Of The Month:</strong></small></p>
                </Form.Label>
                <Col sm="8">
                    <Form.Control
                        size="sm"
                        value={day_of_month}
                        onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                        Cron Days Of The Month to Run. Use "*" for "all". (Example: "1,15")
                </Form.Text>
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="month_of_year">
                <Form.Label column sm="3">
                    <p><small><strong>Month(s) Of The Year:</strong></small></p>
                </Form.Label>
                <Col sm="8">
                    <Form.Control
                        size="sm"
                        value={month_of_year}
                        onChange={handleChange}
                    />
                    <Form.Text className="text-muted">
                        Cron Months Of The Year to Run. Use "*" for "all". (Example: "0,6")
                </Form.Text>
                </Col>
            </Form.Group>
        </Form>
    )
}

export default CustomRule
