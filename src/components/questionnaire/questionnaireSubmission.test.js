import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route } from 'react-router-dom';
import renderer from 'react-test-renderer';
import QuestionnaireSubmission from './questionnaireSubmission';
import store from '../../redux/index';

const RenderWithRouter = ({ children }) => (
  <MemoryRouter>
    <Route path="activity/:questionnaireResponseId">{children}</Route>
  </MemoryRouter>
);

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <RenderWithRouter>
          <QuestionnaireSubmission />
        </RenderWithRouter>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
