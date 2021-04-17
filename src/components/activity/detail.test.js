import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Detail from './detail';

const RenderWithRouter = ({ children }) => (
  <MemoryRouter>
    <Route path="activity/:questionnaireResponseId">{children}</Route>
  </MemoryRouter>
);

it('renders correctly', () => {
  const tree = renderer
    .create(
      <RenderWithRouter>
        <Detail />
      </RenderWithRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
