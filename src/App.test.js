import { render } from '@testing-library/react';
import React from 'react';

import App from './App';

test('render React App text', () => {
  const { getByText } = render(<App />);
  const test = getByText(/React App/i);
  expect(test).toBeInTheDocument();
});
