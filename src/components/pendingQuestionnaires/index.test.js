import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import PendingQuestionnaire from './index';
import store from '../../redux/index';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <PendingQuestionnaire />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
