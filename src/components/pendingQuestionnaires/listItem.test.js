import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ListItem from './listItem';

const RenderWithRouter = ({ children }) => (
  <MemoryRouter>
    <Route path="activity/:questionnaireResponseId">{children}</Route>
  </MemoryRouter>
);

it('renders correctly', () => {
  const tree = renderer
    .create(
      <RenderWithRouter>
        <ListItem
          companyId={1}
          company={'company'}
          questionnaireTitle={'questionnaire'}
          questionnaireId={2}
        />
      </RenderWithRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
