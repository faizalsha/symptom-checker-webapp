import React, { useEffect } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getHomeData } from '../../redux/actions/homeActions';
import { displayErrors } from '../../utlis';
import Loader from '../loader';

const Home = ({ setLoading }) => {
  const dispatch = useDispatch();
  const { error, isLoading, users, companies, questionnaires } = useSelector(
    (state) => state.home
  );

  useEffect(() => {
    dispatch(getHomeData());
  }, []);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  if (error) displayErrors(error);

  return (
    <Container>
      <h1 className="text-center">Welcome to Symtom Checker</h1>
      <br />
      <p className="text-center">
        Welcome to the platform which make sure users are in good health state,
        and <br />
        Help them improving there health.
      </p>
      <br />
      <br />
      <Row>
        <Col>
          <Card className="text-center">
            <Card.Body>
              <Card.Text>
                <h1>{users}</h1>
              </Card.Text>
            </Card.Body>
            <Card.Footer>Users</Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className="text-center">
            <Card.Body>
              <Card.Text>
                <h1>{companies}</h1>
              </Card.Text>
            </Card.Body>
            <Card.Footer>Companies</Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className="text-center">
            <Card.Body>
              <Card.Text>
                <h1>{questionnaires}</h1>
              </Card.Text>
            </Card.Body>
            <Card.Footer>Questionnaires</Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Loader(Home);
