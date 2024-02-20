import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../../App.jsx";

test("displays login popup when login button is clicked", async () => {
  render(<App />);
  // Find the login button and click it
  const loginButton = screen.getByRole("button", { name: /Login/i });
  fireEvent.click(loginButton);
  // Wait for the modal to appear
  await waitFor(() => {
    const modal =
      screen.getByPlaceholderText("login_modal") || screen.getByRole("dialog");
    expect(modal).toBeTruthy();
  });
});

test("displays signUp when signUp button is clicked", async () => {
  render(<App />);
  // Find the signUp button and click it
  const signUpButton = screen.getByRole("button", { name: /Sign Up/i });
  fireEvent.click(signUpButton);
  // Wait for the modal to appear
  await waitFor(() => {
    const modal =
      screen.getByPlaceholderText("signUp_modal") || screen.getByRole("dialog");
    expect(modal).toBeTruthy();
  });
});
