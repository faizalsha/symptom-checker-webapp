import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../redux/index';

import Activity from './index';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Activity />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
