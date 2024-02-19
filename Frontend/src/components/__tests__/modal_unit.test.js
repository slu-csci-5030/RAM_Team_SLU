/**
 * @prettier
 */

import Header from '../Header.jsx';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Tests that the Sign Up and Login modals appear correctly.', () => {
  beforeEach(() => {
    render(<Header />);
  });
  afterEach(() => {
    cleanup();
  });

  test('makes Sign Up modal appear', () => {
    const signUpButton = screen.getByTestId('sign-up-button');
    fireEvent.click(signUpButton);

    const signUpModal = screen.getByTestId('sign-up-modal');
    expect(signUpModal).toBeInTheDocument();
  });

  test('makes Login modal appear', () => {
    const loginButton = screen.getByTestId('login-button');
    fireEvent.click(loginButton);

    const loginModal = screen.getByTestId('login-modal');
    expect(loginModal).toBeInTheDocument();
  });
});
