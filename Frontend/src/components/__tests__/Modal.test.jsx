import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../../App.jsx';
test('displays login popup when login button is clicked', async () => {
  render(<App />);
  // Find the login button and click it
  const loginButton = screen.getByRole('button', { name: /login/i });
  fireEvent.click(loginButton);
  // Wait for the modal to appear

  await waitFor(() => {
    const modal = screen.getByPlaceholderText('modal') || screen.getByRole('dialog');
    expect(modal).toBeTruthy();
  });
});


test('displays signup popup when signup button is clicked', async () => {
  render(<App />);
  // Find the signup button and click it
  const signupButton = screen.getByRole('button', { name: /sign up/i });
  fireEvent.click(signupButton);
  // Wait for the modal to appear
  
  await waitFor(() => {
    const modal = screen.getByPlaceholderText('signup_modal') || screen.getByRole('dialog');
    expect(modal).toBeTruthy();
  });
});
 