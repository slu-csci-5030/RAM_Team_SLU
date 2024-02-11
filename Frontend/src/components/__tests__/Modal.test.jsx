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
    const modal = screen.getByPlaceholderText('login_modal') || screen.getByRole('dialog');
    expect(modal).toBeTruthy();
  });
});
test('displays Sign up page when Sign up button on home screen is clicked', async () => {
  render(<App />);
  // Find the Sign up button
  const signupbutton = screen.getByRole('button', { name: /sign up/i });
  fireEvent.click(signupbutton);
  // Wait for the pop up screen to appear
  await waitFor(() => {
    const modal = screen.getByPlaceholderText('signup_modal') || screen.getByRole('dialog');
    expect(modal).toBeTruthy();
  });
});
test('renders Research Asset Tracking text', () => {
  render(<App />);
  const researchAssetTrackingText = screen.getAllByTestId('project_name');
  expect(researchAssetTrackingText).toBeTruthy();
});

