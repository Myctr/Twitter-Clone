/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer, {act} from 'react-test-renderer';

jest.useFakeTimers();

it('renders correctly', () => {
  let app;
  act(() => {
    app = renderer.create(<App />);
  });
  act(() => {
    app.unmount();
  });
});
