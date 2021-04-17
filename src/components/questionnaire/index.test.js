import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Questionnaire from './index';
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
          <Questionnaire />
        </RenderWithRouter>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
