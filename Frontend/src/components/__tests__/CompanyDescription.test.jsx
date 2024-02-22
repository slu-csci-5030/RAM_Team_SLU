import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../../App.jsx';

test('form submission resets form fields', () => {
  render(<App />);


  const nameInput = screen.getByLabelText('Name:');
  const emailInput = screen.getByLabelText('Email:');
  const messageInput = screen.getByLabelText('Message:');
  const submitButton = screen.getByText('Submit');

  fireEvent.change(nameInput, { target: { value: 'john' } });
  fireEvent.change(emailInput, { target: { value: 'john@gmail.com' } });
  fireEvent.change(messageInput, { target: { value: 'Hello, I am John from Computer Science' } });

  fireEvent.click(submitButton);

  expect(nameInput.value).toBe('');
  expect(emailInput.value).toBe('');
  expect(messageInput.value).toBe('');
});