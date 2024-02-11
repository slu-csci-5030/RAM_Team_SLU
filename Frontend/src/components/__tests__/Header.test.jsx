import React from 'react';
import { render } from '@testing-library/react';
import App from '../../App.jsx';


test('renders header with correct title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText('Research Asset Tracking');
  expect(titleElement).toBeDefined();
});
