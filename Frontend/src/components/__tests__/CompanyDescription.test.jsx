import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../../App.jsx';

test('form submission resets form fields', () => {
  render(<App />);

  // Get form fields
  const nameInput = screen.getByLabelText('Name:');
  const emailInput = screen.getByLabelText('Email:');
  const messageInput = screen.getByLabelText('Message:');
  const submitButton = screen.getByText('Submit');


  // Fill in form fields
  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
  fireEvent.change(messageInput, { target: { value: 'Test message' } });

  // Submit form
  fireEvent.click(submitButton);

  // Check if form fields are reset
  expect(nameInput.value).toBe('');
  expect(emailInput.value).toBe('');
  expect(messageInput.value).toBe('');
});
